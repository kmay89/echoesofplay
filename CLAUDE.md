# CLAUDE.md — Echoes of Play

## What this is

A radically honest, radically free, radically private playground for human reflection.
Single HTML file. Zero dependencies. Zero network connections. Runs offline.
Built by ERRERlabs. Licensed Apache 2.0.

## Security model — SCQCS (github.com/kmay89/scqcs)

This project follows the SCQCS security axiom:

> **"The safest capabilities are the ones that don't exist."**

Security is achieved through *architectural absence*, not policy enforcement.
There is no server to hack because there is no server.
There is no data to breach because there is no database.
There is no API key to leak because there is no API.
There are no cookies to steal because there are no cookies.

### Immutable constraints

These are not guidelines. They are load-bearing walls. Removing any one collapses the entire trust architecture.

1. **ZERO NETWORK CONNECTIONS.** No fetch(). No XMLHttpRequest. No WebSocket. No EventSource. No navigator.sendBeacon. No dynamic script/image/link loading from external URLs. No CDN. No Google Fonts. No analytics. No telemetry. The network tab must be empty. Always. This is the foundational promise.

2. **ZERO COOKIES.** No document.cookie. No Set-Cookie headers. No tracking of any kind. The cookie policy exists to say there are no cookies.

3. **ZERO EXTERNAL DEPENDENCIES.** No npm. No node_modules. No build step. No bundler. No transpiler. The source IS the product. What you read is what runs.

4. **ES5 ONLY.** No template literals (`backticks`). No arrow functions (=>). No const/let (use var). No destructuring. No spread. No Promise. No async/await. No class. This ensures maximum device compatibility including older phones, tablets in care facilities, library computers, and assistive technology.

5. **SINGLE FILE ARCHITECTURE.** HTML, CSS, and JavaScript in one file. The service worker (sw.js) and manifest (manifest.json) are the only separate files, required by PWA spec. Everything else is inline.

6. **LOCAL STORAGE ONLY.** User data (reflections, memories) stored exclusively in localStorage. Never transmitted. Export produces a local JSON file via Blob URL. User can delete everything with one button.

7. **NO CRISIS DETECTION.** This tool cannot detect crisis. It will not pretend to. Crisis resources are visible in the info panel at all times. No regex pattern matching on sensitive words. No automated intervention. That is not our role and claiming it would be dishonest.

8. **NO AI.** No language model. No neural network. No API calls to any AI service. Responses are procedurally generated from hand-written fragment pools using seeded randomness and input signal analysis. The system is transparent and auditable.

9. **NO AUDIO CAPTURE.** The Web Speech API (webkitSpeechRecognition) sends audio to Google's servers. That is a network connection. It will not be included until browsers ship reliable local-only speech recognition. No shortcuts.

10. **PRIVACY BY ARCHITECTURE.** Privacy is not a policy bolted onto a system that wants your data. Privacy is the absence of any mechanism that could take your data. There is nothing to opt out of because there is nothing to opt into.

### If you are modifying this code

Before adding ANY feature, ask:

- Does this create a network connection? → **No. Stop.**
- Does this load an external resource? → **No. Stop.**
- Does this send data anywhere? → **No. Stop.**
- Does this require a build step? → **No. Stop.**
- Does this use ES6+ syntax? → **Rewrite in ES5.**
- Does this claim capabilities we don't have? → **No. Stop.**

### Verification

Users are told to verify. So should you.

```bash
# Verify zero network connections in the HTML
grep -c "fetch\|XMLHttpRequest\|\.ajax\|WebSocket\|EventSource\|sendBeacon" index.html
# Must return: 0

# Verify zero ES6
grep -c '`\|=>\|const \|let \|class ' index.html
# Must return: 0

# Verify zero cookies
grep -c "cookie" index.html
# Must return: 0 (or only in comments/policy links)

# Verify single file (no external script/link/img src)
grep -oP '(src|href)="https?://' index.html
# Must return: nothing (except errerlabs.com link)
```

## File structure

```
/
├── index.html          # The entire application (single file)
├── sw.js               # Service worker (offline caching only)
├── manifest.json       # PWA manifest (install as app)
├── favicon.ico         # Favicon
├── icon-192.png        # PWA icon 192x192
├── icon-512.png        # PWA icon 512x512
├── apple-touch-icon.png # iOS icon
├── CLAUDE.md           # This file (AI working instructions)
├── PRIVACY.md          # Privacy policy (human-readable)
├── LEGAL.md            # Terms of use
├── COOKIES.md          # Cookie policy (there are none)
├── LICENSE             # Apache 2.0
├── netlify.toml        # Netlify deployment config (includes security headers + redirects)
└── README.md           # Project README
```

## Deployment

- **Hosting:** Netlify (continuous deployment from GitHub)
- **DNS/CDN:** Cloudflare (DNS only mode recommended, Netlify handles SSL)
- **Domain:** echoesofplay.com
- **Build command:** None. There is no build step.
- **Publish directory:** `/` (root)

## Content guidelines

- Fragments are hand-written poetry. They should feel crafted, not generated.
- Nature metaphors reference real biology: mycelium, coral, whales, tides, seeds, fungi.
- Mirror perspectives map to optical physics: flat, double, concave, L-shaped, inside box, outside box.
- Breathing exercises reference real physiology: parasympathetic activation, vagus nerve, cortisol.
- Memory Garden prompts are designed for dignity. They never test recall. They invite sharing.
- Nothing flatters. Nothing diagnoses. Nothing overclaims.

## The commitment

Radically honest. Radically free. Radically private.
These are people's thoughts and memories. We cherish them.
