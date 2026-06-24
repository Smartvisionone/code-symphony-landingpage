# Code Symphony – Landing Page

## Projektübersicht
Statischer **OnePager** für die Code Symphony UG (haftungsbeschränkt). Einfache HTML/CSS/JS Landing Page ohne Framework – enthält auch rechtliche Pflichtseiten.

- **Production URL:** https://code-symphony.de
- **Vercel Projekt:** `code-symphony-landingpage` (Team: `smartvisionones-projects`)
- **Typ:** Statische HTML-Seite (kein Build-Prozess)

## Struktur

```
/
├── index.html          # OnePager (Hauptseite)
├── impressum.html      # Impressum (§ 5 DDG)
├── datenschutz.html    # Datenschutzerklärung (DSGVO)
├── assets/             # Bilder, Icons
├── css/                # Stylesheets
└── js/                 # JavaScript
```

## Wichtige Regeln

- **Kein Framework** – reines HTML/CSS/JS
- **Rechtliche Seiten** – Impressum und Datenschutz müssen immer aktuell sein
- **Performance** – Bilder optimieren, kein unnötiges JS
- **Deployment** – direkt via Vercel (kein Build-Schritt nötig)

## Lokale Entwicklung

```bash
npx -y serve .   # http://localhost:3000
```
