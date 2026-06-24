# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

## [2.3.0] — 2026-06-25

### Mehrsprachigkeit (i18n)

- 4 Sprachen: Deutsch, Englisch, Spanisch, Französisch
- URL-Struktur: `/de/`, `/en/`, `/es/`, `/fr/` mit Sprach-Präfix
- Root (`/`) leitet automatisch basierend auf Browser-Sprache weiter
- Language-Dropdown im Header (Desktop + Mobile) mit Flag-Emojis
- Sprachpräferenz wird in localStorage gespeichert
- 12 HTML-Seiten: index + impressum + datenschutz × 4 Sprachen
- hreflang SEO-Tags auf allen Seiten
- Rechtliche Seiten (EN/ES/FR) mit Hinweis: "Deutsche Fassung ist rechtlich maßgeblich"
- AGB bleibt nur Deutsch (nicht öffentlich)
- Vercel Rewrites + Content-Language Headers
- DSGVO-konform: Browser-Sprache statt IP-basierte Erkennung

## [2.2.0] — 2026-06-24

### DPA-Compliance & Hosting-Optimierung

- Alle 6 DPAs abgeschlossen: Vercel, Stripe, Supabase, Mailjet, Hostinger, Buchhaltungsbutler
- Vercel Functions auf Region Frankfurt (eu-central-1, fra1) umgestellt
- Datenschutzerklärung: Vercel-Sektion mit Frankfurt-Region und DPA-Vermerk aktualisiert
- Hostinger VPS (Frankfurt) als Anbieter in AVV, Verarbeitungsverzeichnis und TOM aufgenommen
- Alle Legal-Dokumente (AVV, Verarbeitungsverzeichnis, TOM) mit aktualisierten Standorten

## [2.1.0] — 2026-06-24

### AGB, Datenschutz-Upgrade & Rechtliche Dokumente

- Neue AGB-Seite (11 §§): B2B-only, SaaS-SLA mit Support-Reaktionszeiten, Stripe-Zahlung, Haftungsbegrenzung
- AGB als kryptische URL (nicht öffentlich verlinkt, für Angebote und Registrierung)
- Datenschutzerklärung erweitert: Stripe, Supabase, Mailjet, Vercel (mit Drittlandtransfer-Details)
- Betroffenenrechte um Account-Löschung und Datenexport erweitert
- AVV-Template (Art. 28 DSGVO) für Kunden erstellt
- Verarbeitungsverzeichnis (Art. 30 DSGVO) mit 8 Verarbeitungstätigkeiten
- TOM-Dokument (Art. 32 DSGVO) mit 6 Maßnahmenbereichen
- Alle Dokumente als PDF exportiert (Stand 24.06.2026)
- USt-ID DE462497704 im Impressum eingetragen

## [2.0.0] — 2026-06-24

### Komplett-Redesign: Corporate Identity Rebranding

- Neue Farbpalette: Spring Green (#02F5A1) + Deep Onyx (#07191E) ersetzt altes Lila/Teal
- Neue Typografie: Space Grotesk (Headlines) + Plus Jakarta Sans (Body) ersetzt Inter
- Neues Logo: Code-Klammern + Sine-Welle Icon ersetzt CS-Monogramm
- Terminal-Ästhetik: Blinkender Cursor und `$ code-symphony --init` im Hero
- Du-Ansprache: Alle Texte von Siezen auf Duzen umgestellt
- Dark-first Design: Deep Onyx als dominanter Hintergrund
- DSGVO: Alle Fonts lokal gehostet (keine Google-Fonts-Requests)
- Impressum + Datenschutz: Neues Logo und Farben übernommen
- Brandbook als Single Source of Truth dokumentiert (cs-brandbook/)

## [1.0.0] — 2026-05-28

### Initiale Version

- OnePager mit Hero, Leistungen, Kontakt, Footer
- Impressum und Datenschutzerklärung
- Responsive Design, Dark Mode Hero
- Scroll-Animationen, Cookie-freies Tracking
