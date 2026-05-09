# Code Symphony Landing Page — Design Document

**Datum:** 2026-05-09
**Status:** Genehmigt

## Unternehmen

- **Firma:** Code Symphony UG (haftungsbeschränkt)
- **Brand:** Code Symphony
- **Geschäftsführer:** Rayk Lorz
- **Adresse:** Dorotheenstraße 33, 09113 Chemnitz
- **E-Mail:** hello@code-symphony.de
- **Registergericht:** Amtsgericht Chemnitz — HRB 38287
- **USt-IdNr.:** In Beantragung

## Gegenstand

Entwicklung und Vertrieb von Softwarelösungen, Beratung von Unternehmen bei der Softwareintegration und Optimierung von Geschäftsprozessen durch Automatisierungstechnologien sowie alle damit im Zusammenhang stehenden Dienstleistungen.

## Entscheidungen

| Thema | Entscheidung |
|-------|-------------|
| Tech-Stack | HTML + CSS + JavaScript (statisch, kein Build) |
| Design-Richtung | Hybrid: Dark Hero + Light Sections |
| Umfang | Minimalistisch: Hero, Leistungen, Kontakt, Legal |
| Legal-Seiten | Eigene HTML-Seiten (nicht Modals) |
| Kontakt | mailto-Link (kein Formular) |
| Fonts | Lokal gehostet (kein Google CDN) |
| Cookie-Banner | Nicht nötig (kein Tracking, keine Cookies) |

## Farbpalette

| Token | Hex | Verwendung |
|-------|-----|------------|
| Primary | `#6C3CE1` | Brand, CTAs, Akzente |
| Accent | `#00D4AA` | Highlights, Hover, Glow |
| Dark BG | `#0a0f1c` | Hero-Hintergrund |
| Light BG | `#f8f9fc` | Content-Sections |
| Text Dark | `#e2e8f0` | Text auf dunkel |
| Text Light | `#1a1a2e` | Text auf hell |

## Typografie

- **Headings:** Inter, 800 weight, uppercase, letter-spacing
- **Body:** Inter, 400 weight, antialiased
- **Brand:** Gradient-Text (Violet → Teal) für "Symphony"

## Seitenstruktur

### index.html
1. **Nav** — Fixed, transparent → solid on scroll
2. **Hero** (Dark) — Brand, Tagline, CTA
3. **Leistungen** (Light) — 3 Cards
4. **Kontakt** (Light) — E-Mail CTA
5. **Footer** — Copyright + Legal-Links

### impressum.html
- Alle Pflichtangaben gemäß § 5 DDG

### datenschutz.html
- DSGVO Art. 13/14 konforme Datenschutzerklärung

## Rechtliche Compliance

- § 5 DDG: Impressum ✓
- DSGVO Art. 13/14: Datenschutzerklärung ✓
- LG München I Urteil: Fonts lokal gehostet ✓
- Cookie-Banner: Nicht erforderlich (keine Cookies/Tracking) ✓
- Barrierefreiheit: Semantisches HTML, ARIA, Kontraste ✓
