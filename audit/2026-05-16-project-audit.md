# Audit: Code Symphony Landingpage

**Zeitraum:** 2026-05-06 bis 2026-05-16
**Projekt:** Code Symphony UG (haftungsbeschränkt) — Landing Page
**Repository:** [Smartvisionone/code-symphony-landingpage](https://github.com/Smartvisionone/code-symphony-landingpage)

---

## Zusammenfassung

| Metrik | Wert |
|--------|------|
| Commits | 1 |
| Dateien erstellt | 11 |
| Insertions | 1.427 Zeilen |
| Branches | `main` (Production), `dev` (Entwicklung) |
| Deployment | Vercel (automatisch via GitHub) |
| Live-URLs | `code-symphony.de`, `www.code-symphony.de` |

---

## Commit-Historie

### `482664d` — 2026-05-09 12:13:48

**Message:** `feat: Code Symphony landing page — complete OnePager`

| Datei | Typ | Zeilen | Beschreibung |
|-------|-----|--------|-------------|
| [.gitignore](file:///Users/rayklorz/Developer/Code-Symphony%20Landingpage/.gitignore) | Neu | 5 | DS_Store, .agent, node_modules, logs |
| [README.md](file:///Users/rayklorz/Developer/Code-Symphony%20Landingpage/README.md) | Neu | 24 | Projektbeschreibung, lokale Dev-Anleitung, Rechtshinweise |
| [assets/favicon.svg](file:///Users/rayklorz/Developer/Code-Symphony%20Landingpage/assets/favicon.svg) | Neu | 10 | SVG-Favicon mit CS-Monogram (Violet→Teal Gradient) |
| `assets/fonts/inter-bold.woff2` | Neu | binär | Inter Bold (24 KB) — lokal gehostet |
| `assets/fonts/inter-regular.woff2` | Neu | binär | Inter Regular (23 KB) — lokal gehostet |
| [css/style.css](file:///Users/rayklorz/Developer/Code-Symphony%20Landingpage/css/style.css) | Neu | 786 | Komplettes Design System (Tokens, Layout, Animationen, Responsive) |
| [datenschutz.html](file:///Users/rayklorz/Developer/Code-Symphony%20Landingpage/datenschutz.html) | Neu | 144 | Datenschutzerklärung (DSGVO Art. 13/14) |
| [impressum.html](file:///Users/rayklorz/Developer/Code-Symphony%20Landingpage/impressum.html) | Neu | 84 | Impressum (§ 5 DDG) |
| [index.html](file:///Users/rayklorz/Developer/Code-Symphony%20Landingpage/index.html) | Neu | 181 | OnePager: Hero, Leistungen (3 Cards), Kontakt, Footer |
| [js/main.js](file:///Users/rayklorz/Developer/Code-Symphony%20Landingpage/js/main.js) | Neu | 123 | Scroll-Nav, Hamburger-Menu, Fade-in, Dynamic Year |
| [docs/plans/2026-05-09-landing-page-design.md](file:///Users/rayklorz/Developer/Code-Symphony%20Landingpage/docs/plans/2026-05-09-landing-page-design.md) | Neu | 70 | Design-Dokument mit allen Entscheidungen |

---

## Infrastruktur-Setup (2026-05-09)

### GitHub Repository
- **Erstellt:** 2026-05-09
- **URL:** https://github.com/Smartvisionone/code-symphony-landingpage
- **Visibility:** Public
- **Default Branch:** `main`

### Vercel Deployment
- **Projekt:** `code-symphony-landingpage`
- **Team:** `smartvisionones-projects`
- **Framework:** None (statisches Hosting)
- **Auto-Deploy:** Ja — jeder Push auf `main` deployed automatisch

### Custom Domain (DNS bei Netcup)

| Record | Typ | Wert | Status |
|--------|-----|------|--------|
| `code-symphony.de` | A | `216.150.1.1` | ✅ Aktiv |
| `www.code-symphony.de` | CNAME | `68771eabe913bbe2.vercel-dns-016.com.` | ✅ Aktiv |
| `code-symphony.de` | MX | `SMTP.GOOGLE.COM` (Prio 1) | ✅ Google Workspace Mail |
| `_dmarc.code-symphony.de` | TXT | `v=DMARC1; p=none;` | ✅ E-Mail-Auth |

### SSL-Zertifikat
- Automatisch von Vercel (Let's Encrypt)
- Aktiv für `code-symphony.de` und `www.code-symphony.de`

---

## Branching-Strategie

| Branch | Zweck | Vercel-Deployment |
|--------|-------|-------------------|
| `main` | Production — nur über PR/Merge | 🟢 Production (code-symphony.de) |
| `dev` | Entwicklung — aktive Arbeit | 🟡 Preview (eigene Preview-URL) |

**Aktueller Stand:** `dev` und `main` sind synchron (beide auf Commit `482664d`).

---

## Rechtliche Compliance

| Anforderung | Status | Details |
|-------------|--------|---------|
| § 5 DDG Impressum | ✅ | Eigene Seite, alle Pflichtangaben, von jeder Seite verlinkt |
| DSGVO Art. 13/14 | ✅ | Eigene Seite, Verantwortlicher, Rechtsgrundlagen, Betroffenenrechte |
| LG München I (Fonts) | ✅ | Inter lokal gehostet, kein Google CDN |
| Cookie-Banner | ✅ n/a | Keine Cookies, kein Tracking, keine externen Dienste |
| EU-OS Plattform | ✅ | Link im Impressum |
| § 36 VSBG | ✅ | Hinweis im Impressum |
| SSL/HTTPS | ✅ | Vercel Let's Encrypt |
| `lang="de"` | ✅ | Auf allen Seiten |
| Barrierefreiheit | ✅ | Semantisches HTML5, ARIA-Labels |

---

## Offene Punkte

- [ ] USt-IdNr. nachtragen sobald erteilt (aktuell: "In Beantragung")
- [ ] TTL bei Netcup auf 300 reduzieren (aktuell 86400)
- [ ] Google Workspace MX-Records prüfen (`SMTP.GOOGLE.COM` statt Standard-Google-MX)
