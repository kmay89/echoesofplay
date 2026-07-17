# Echoes of Play

**Radically honest. Radically free. Radically private.**

A playground for human reflection. One thought, three mirrors. Breathing at your own pace. Memory postcards for sitting with people you love, kept in a vault that never leaves your device.

Zero network connections. Zero cookies. Zero tracking. Zero AI. One HTML file.

## What it is

- **Arrive** — One tap to say how you're arriving (light, heavy, quiet, restless). The room retunes its colors, particles, and breathing pace to meet you. Asked once a day, always skippable.
- **Today** — A one-tap daily ritual with no menu decisions: breathe three cycles, bring one thought, see it through three mirrors. About five minutes. No streaks, no counters, no guilt.
- **Play a Round** — Bring one thing on your mind (past, present, or future). The game deals 3 of 6 mirror cards (Witness, Echo, Inside, Outside, Angle, Kintsugi). You write what each lens shows you, then see all three together.
- **Breathe** — Gentle, box, or 4-7-8 pacing under a living canvas bloom that breathes with you (mood-tinted petals, particle halo, phase ring). Plus two short guided practices — grounding (5-4-3-2-1) and a body scan — written by hand, claiming nothing. Invitation, not instruction. Stop anytime.
- **The prompt orb** — Stuck on a blank page? Tap the orb and it draws one gentle beginning at a time from nearly 300 hand-written prompts — curated lines plus sentence templates whose every combination was written to make sense (no AI, no word salad; verify in the source). Three offerings per sitting, with a breath between draws: endless shuffling isn't reflection, so after three the orb rests and hands the pen back. No repeats until the deck runs dry.
- **Pass it on** — One button shares the app via your device's own share sheet; another copies a finished round as plain text to hand to a friend, a counselor, or your journal. The app itself still transmits nothing.
- **Rhythm seeds** — Each day you practice adds one seed to a small golden spiral on the home screen. There is no streak to break: rest never subtracts, showing up only adds. Consistency without guilt.
- **Lives on your Home Screen** — The info panel teaches Add-to-Home-Screen on iOS and Android (with a one-tap Install button where the browser offers it). When a new version ships, the app quietly notices and offers a one-tap refresh — your words live in browser storage, not app files, so updates never touch them.
- **Memory Postcards** — Nonlinear story prompts (who/where/when/what/how/why) for capturing a memory — yours, or one a loved one shares. Seal it into a postcard.
- **Memory Vault** — Your sealed postcards and past rounds on an isometric shelf. Pick one up, turn it over, sit with it.
- **Group** — A fragment in the center of the table. Read it aloud, share what it brings up. Face to face.
- **Past Rounds** — Re-read what you wrote. Let go of it gracefully when you're done.
- **Music box (optional)** — Sparse, gentle notes generated procedurally on your device, tuned to your mood. No recordings, no streaming, off by default.
- **Comfort** — Text follows your phone's own text-size setting by default; an Aa button steps it larger (two sizes up) without breaking the layout. For tired eyes, care facilities, and shared tablets. Pinch-zoom is never blocked.

## Why it's made

Because slowing down with a thought, breathing on purpose, and telling the story of a memory are old, ordinary, human practices — and every digital version of them seems to come with an account, a subscription, a data pipeline, and a promise it can't keep. This one comes with none of those. That's the whole idea.

## What we think it's good for

A few quiet minutes. A second angle on a stuck thought. A slower breath. A memory written down in someone's own words while they can still tell it. Nothing more is claimed — see [LEGAL.md](LEGAL.md) for exactly what we do and don't claim.

## What it isn't

- Not therapy. Not counseling. Not a diagnostic tool. Not a medical device.
- Not AI. Every word is hand-written; selection is simple randomness. Nothing reads what you write.
- Not connected. The network tab is empty. Verify yourself.

## Privacy

There is no privacy policy because there is no privacy problem. There is no server. There is no database. There is no data collection mechanism. Your thoughts and memories stay on your device.

The [full privacy policy](PRIVACY.md) exists to say exactly that, in detail.

## Technical

- Single HTML file, inline CSS/JS
- ES5 only (no build step, maximum compatibility)
- PWA-enabled (install as app, works offline)
- localStorage for user data (export/delete anytime)
- Accessibility: ARIA, keyboard nav, screen reader support, reduced motion respect

## Deploy

Designed for Netlify + Cloudflare DNS:

1. Fork this repo
2. Connect to Netlify (no build command needed)
3. Point your domain's DNS to Netlify via Cloudflare (DNS-only mode)
4. Done

See [netlify.toml](netlify.toml) for full configuration including security headers.

## Security

Follows the [SCQCS](https://github.com/kmay89/scqcs) security framework:

> "The safest capabilities are the ones that don't exist."

See [CLAUDE.md](CLAUDE.md) for the complete security model and immutable constraints.

## Fork it

Apache 2.0. Fork it. Make it yours. Make it better.

If you add network connections, update the policies. If you add AI, say so. If you add tracking, write your own privacy policy. The commitments in this repo are true because of how the software is built. If you change the architecture, you change the truth.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire application |
| `sw.js` | Service worker (offline support) |
| `manifest.json` | PWA manifest (install as app) |
| `CLAUDE.md` | AI working instructions + security model |
| `PRIVACY.md` | Privacy policy |
| `LEGAL.md` | Terms of use |
| `COOKIES.md` | Cookie policy (there are none) |
| `netlify.toml` | Deployment configuration |

## Credits

Karl Meves / [ERRERlabs](https://errerlabs.com)

*These are people's thoughts and memories. We cherish them.*
