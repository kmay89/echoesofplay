// The i18n doctor for Echoes of Play — the same gate the Möbius engine's
// siblings run, adapted to a single-file app whose dictionaries ride
// inline (the @dicts block in index.html).
//
//   node tools/i18n_doctor.mjs            → report, exit 1 on any failure
//
// What it holds the door on:
//   · the @dicts block parses as strict JSON (one object per language);
//   · Spanish (es) is the golden pack: every other language must carry
//     exactly its key set;
//   · every value keeps its key's {placeholders} and HTML tags — in every
//     plural variant;
//   · every literal T('…') key in the script exists in the golden pack,
//     so a new UI string cannot ship untranslated in silence.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = readFileSync(join(root, 'index.html'), 'utf8');

const PLURAL_CATS = new Set(['zero', 'one', 'two', 'few', 'many', 'other']);
const placeholders = s => (String(s).match(/\{[a-zA-Z]+\}/g) || []).sort();
const tags = s => (String(s).match(/<\/?[a-z][a-z0-9]*\b/g) || []).map(t => t.toLowerCase()).sort();

export function readDicts(){
  const m = html.match(/\/\/ @dicts-start\nvar EOP_DICTS=\{\n([\s\S]*?)\n\};\n\/\/ @dicts-end/);
  if (!m) throw new Error('the @dicts block was not found');
  return JSON.parse('{' + m[1] + '}');
}

export function tKeys(){
  // every literal T('…') / T("…") key in the script
  const keys = new Set();
  const re = /\bT\(\s*(['"])((?:\\.|(?!\1)[^\\])*)\1/g;
  let mm;
  while ((mm = re.exec(html))) keys.add(new Function('return ' + mm[1] + mm[2] + mm[1])());
  return keys;
}

export function runDoctor(){
  const errs = [];
  let dicts;
  try { dicts = readDicts(); }
  catch (e){ return { errs: ['@dicts: ' + e.message], codes: [], keyCount: 0 }; }
  const codes = Object.keys(dicts);
  const golden = dicts.es;
  if (!golden){ return { errs: ['the golden pack (es) is missing from @dicts'], codes, keyCount: 0 }; }
  const goldenKeys = Object.keys(golden).filter(k => k[0] !== '@');

  for (const code of codes){
    const pack = dicts[code];
    const err = m => errs.push(code + ': ' + m);
    const meta = pack['@meta'];
    if (!meta || meta.code !== code) err('@meta.code must be "' + code + '"');
    if (!meta || !meta.name || !meta.en) err('@meta needs name (endonym) and en (English name)');
    if (meta && meta.dir && meta.dir !== 'ltr' && meta.dir !== 'rtl') err('@meta.dir must be ltr or rtl');

    const packKeys = new Set(Object.keys(pack).filter(k => k[0] !== '@'));
    if (code !== 'es'){
      for (const k of goldenKeys) if (!packKeys.has(k)) err('missing key: ' + JSON.stringify(k.slice(0, 70)));
      for (const k of packKeys) if (!(k in golden)) err('unknown key (not in the golden set): ' + JSON.stringify(k.slice(0, 70)));
    }
    for (const k of packKeys){
      const v = pack[k];
      if (v == null) continue;
      const variants = typeof v === 'object' ? Object.entries(v) : [[null, v]];
      if (typeof v === 'object'){
        if (!v.other) err('plural object without "other": ' + JSON.stringify(k.slice(0, 60)));
        for (const [cat] of variants) if (!PLURAL_CATS.has(cat)) err('bad plural category "' + cat + '" on ' + JSON.stringify(k.slice(0, 60)));
      }
      const wantPh = placeholders(k), wantTags = tags(k);
      for (const [cat, s] of variants){
        if (typeof s !== 'string'){ err('non-string value on ' + JSON.stringify(k.slice(0, 60))); continue; }
        const where = JSON.stringify(k.slice(0, 60)) + (cat ? ' [' + cat + ']' : '');
        const havePh = placeholders(s);
        for (const ph of wantPh) if (!havePh.includes(ph)) err('lost placeholder ' + ph + ' in ' + where);
        for (const ph of havePh) if (!wantPh.includes(ph)) err('invented placeholder ' + ph + ' in ' + where);
        if (tags(s).join(',') !== wantTags.join(',')) err('HTML tags differ in ' + where);
      }
    }
  }

  // drift guard: a T() key the golden pack does not know is a string that
  // would ship untranslated in every language
  for (const k of tKeys()){
    if (!(k in golden)) errs.push('es: T() key not in the golden pack: ' + JSON.stringify(k.slice(0, 70)));
  }

  return { errs, codes, keyCount: goldenKeys.length };
}

if (process.argv[1] === fileURLToPath(import.meta.url)){
  const { errs, codes, keyCount } = runDoctor();
  console.log('i18n doctor — ' + codes.length + ' pack(s) [' + codes.join(', ') + '], ' + keyCount + ' keys in the golden set');
  if (errs.length){
    for (const e of errs.slice(0, 60)) console.error('  ✗ ' + e);
    if (errs.length > 60) console.error('  … and ' + (errs.length - 60) + ' more');
    process.exit(1);
  }
  console.log('  ✓ every pack complete, placeholders and tags intact, no untranslated T() keys');
}
