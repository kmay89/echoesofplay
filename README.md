# Echoes of Play

**Radically honest. Radically free. Radically private.**

A playground for human reflection. Past, present, future. Six mirrors. Breathing exercises. A Memory Garden for sitting with people you love.

Zero network connections. Zero cookies. Zero tracking. Zero AI. One HTML file.

## What it is

- **Past** — Reflection through six mirror perspectives (Witness, Echo, Inside, Outside, Angle, Kintsugi)
- **Present** — Box breathing, cloud meditation, grounding, metacognition
- **Future** — Dreams, fears, what you're building toward
- **Memory Garden** — Sit with someone you love. Capture what they share. Export it. Pass it on.
- **With Others** — Group play, face to face

## What it isn't

- Not therapy. Not counseling. Not a diagnostic tool.
- Not AI. Responses are hand-written fragments, procedurally selected.
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
