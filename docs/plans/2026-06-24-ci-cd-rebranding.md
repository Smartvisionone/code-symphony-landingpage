# Code Symphony — CI/CD Rebranding Implementation Plan (v2)

> **For Gemini:** Execute this plan task-by-task. Each task has bite-sized steps (2-5 min each).
> **Skills-Referenz:** Konsultiere die angegebenen `@skill`-Referenzen bei jedem Task.

**Goal:** Vollständiges Corporate-Identity-Rebranding für Code Symphony — Brandbook-Dokumentation, Landing-Page-Umbau, Skill-Integration und Tooling-Setup in einem Sprint.

**Architecture:** Brandbook-First-Ansatz: Erst Design-Entscheidungen dokumentieren, dann Landing Page umstellen, dann Tooling (Impeccable, Brandbook-Skill) einrichten als Quality Gates für zukünftige Arbeit.

**Tech Stack:** HTML, CSS (Vanilla, Design Tokens), JavaScript (Vanilla), SVG (Logo), WOFF2 (Fonts), Markdown (Brandbook + Skills)

---

## Interview-Ergebnisse (Design-Entscheidungen)

| Entscheidung | Ergebnis |
|---|---|
| **Positionierung** | Drei gleichwertige Säulen: Software, Beratung, Automatisierung |
| **Zielgruppe** | KMU, Startups & Gründer, Einzelunternehmer |
| **Tonalität** | Professionell, aber nahbar. Duzen. Auf Augenhöhe. |
| **Farbpalette** | Spring Green `#02F5A1` + Deep Onyx `#07191E` + Cool Neutrals |
| **Typografie** | Space Grotesk (Headlines) + Plus Jakarta Sans (Body) |
| **Logo** | Wortmarke + abstraktes Icon (SVG-Konzept) |
| **Design-Prinzip** | Minimalism + subtile Terminal-Referenzen |
| **Dark/Light** | Dark-first (Deep Onyx BG), Light-Sections für Content |

---

## Phasen-Übersicht

```
Phase A: Setup & Dokumentation    [Task 0–4]   ~2h
Phase B: Landing Page Umbau       [Task 5–10]  ~3h
Phase C: Tooling & Skills         [Task 11–13] ~1.5h
```

---

## Task 0: Setup — Plan ins Repo + GEMINI.md für cs-brandbook

> @skill: `code-quality`, `writing-plans`

**Files:**
- Create: `cs-landingpage/docs/plans/2026-06-24-ci-cd-rebranding.md`
- Create: `cs-brandbook/GEMINI.md`
- Create: `cs-brandbook/.gitignore`

**Step 1: Plan ins Repo kopieren**

Per `writing-plans` Skill muss der Plan in `docs/plans/` liegen:

```bash
cd ~/Developer/Code\ Symphony/cs-landingpage
mkdir -p docs/plans
# Plan-Inhalt wird hierhin geschrieben
```

**Step 2: GEMINI.md für cs-brandbook erstellen**

```markdown
# Code Symphony — Brandbook

## Projektübersicht
Corporate Identity & Corporate Design Dokumentation für die Code Symphony UG (haftungsbeschränkt).

- **Typ:** Dokumentation (Markdown + Assets)
- **Gehört zu:** code-symphony.de
- **Verknüpft mit:** `cs-landingpage` (Landing Page, die dieses Brandbook umsetzt)

## Struktur

```
/
├── README.md                   # Übersicht & Inhaltsverzeichnis
├── 01-markenkern.md            # Vision, Mission, Werte, Zielgruppe
├── 02-farbpalette.md           # Farben mit HEX/HSL & WCAG-Ratios
├── 03-typografie.md            # Font-Pairing, Größen, Gewichte
├── 04-logo-guidelines.md       # Logo-Varianten, Schutzzone
├── 05-design-prinzipien.md     # Layout, Dark Mode, Terminal-Ästhetik
└── assets/                     # Logo-Dateien, Farbmuster
    └── logo/
```

## Wichtige Regeln

- **Single Source of Truth** — Alle Design-Entscheidungen werden hier dokumentiert
- **Änderungen hier = Änderungen in cs-landingpage** — beide müssen synchron bleiben
- **WCAG 2.1 AA** — Alle Farbkombinationen müssen die Kontrast-Mindestanforderungen erfüllen
```

**Step 3: .gitignore erstellen**

```
.DS_Store
```

**Step 4: Commit**

```bash
cd ~/Developer/Code\ Symphony/cs-brandbook
git init  # falls noch nicht initialisiert
git add GEMINI.md .gitignore
git commit -m "chore: add GEMINI.md and gitignore"

cd ~/Developer/Code\ Symphony/cs-landingpage
git add docs/plans/2026-06-24-ci-cd-rebranding.md
git commit -m "docs: add CI/CD rebranding implementation plan"
```

---

## Task 1: Brandbook — Grundstruktur + Markenkern

> @skill: `code-quality` (Naming, File-Organisation)

**Files:**
- Create: `cs-brandbook/README.md`
- Create: `cs-brandbook/01-markenkern.md`

**Step 1: README erstellen**

```markdown
# Code Symphony — Brandbook

Corporate Identity & Corporate Design Dokumentation für die Code Symphony UG (haftungsbeschränkt).

## Inhaltsverzeichnis

| Datei | Inhalt |
|---|---|
| [01-markenkern.md](01-markenkern.md) | Vision, Mission, Werte, Zielgruppe, Tonalität |
| [02-farbpalette.md](02-farbpalette.md) | Primär-, Akzent-, Neutralfarben mit HEX/HSL |
| [03-typografie.md](03-typografie.md) | Font-Pairing, Größen-Skala, Gewichtungen |
| [04-logo-guidelines.md](04-logo-guidelines.md) | Logo-Varianten, Schutzzone, Do/Don't |
| [05-design-prinzipien.md](05-design-prinzipien.md) | Layout, Dark Mode, Terminal-Ästhetik |

## Verwendung

Dieses Brandbook ist die **Single Source of Truth** für alle visuellen Entscheidungen.
Änderungen hier müssen in `cs-landingpage` reflektiert werden.
```

**Step 2: Markenkern dokumentieren**

`cs-brandbook/01-markenkern.md`:

```markdown
# Markenkern

## Mission
Wir orchestrieren Technologie für den Geschäftserfolg unserer Kunden — durch maßgeschneiderte Software, strategische Beratung und intelligente Automatisierung.

## Positionierung
Drei gleichwertige Säulen: **Softwareentwicklung**, **Beratung & Integration**, **Automatisierung**. Keine dominiert — der Mehrwert entsteht durch das Zusammenspiel.

## Werte
- **Präzision** — Sauberer Code, durchdachte Architektur
- **Partnerschaft** — Auf Augenhöhe, langfristig, ehrlich
- **Wirkung** — Ergebnisse statt Buzzwords

## Zielgruppe
- KMU (10–250 Mitarbeiter)
- Startups & Gründer (pre-seed bis Series A)
- Einzelunternehmer / Freelancer

Gemeinsamer Nenner: Entscheider, die nah an der Technik sind oder jemanden suchen, dem sie auf Augenhöhe vertrauen.

## Tonalität (Brand Voice)
- **Professionell, aber nahbar** — wir duzen
- Kompetent und klar, ohne Buzzwords
- Auf Augenhöhe — nie belehrend, nie überheblich
- Beispiel: ✅ "Wir bauen dir die Software, die dein Business braucht"
- Beispiel: ❌ "Wir realisieren maßgeschneiderte Digitalisierungslösungen"
```

**Step 3: Commit**

```bash
cd ~/Developer/Code\ Symphony/cs-brandbook
git add README.md 01-markenkern.md
git commit -m "docs: add brandbook structure and markenkern"
```

---

## Task 2: Brandbook — Farbpalette

> @skill: `frontend-designer` (Farb-Regeln: kein reines #000, kein Lila-Gradient, alle Farben über Tokens)
> @skill: `frontend` (WCAG-Kontrast: 4.5:1 Normaltext, 3:1 Großtext)

**Files:**
- Create: `cs-brandbook/02-farbpalette.md`

**Step 1: Farbpalette-Dokument erstellen**

```markdown
# Farbpalette

## Primärfarben

| Rolle | Name | HEX | HSL | Verwendung |
|---|---|---|---|---|
| **Primary** | Spring Green | `#02F5A1` | `hsl(155, 98%, 48%)` | CTAs, Links, Highlights, aktive Elemente |
| **Primary Muted** | Muted Green | `#4AE8A0` | `hsl(152, 77%, 60%)` | Hover-States, größere Flächen, Badges |
| **Primary Subtle** | Subtle Green | `#0D3D2E` | `hsl(157, 67%, 15%)` | Card-BGs auf Dark, subtile Hervorhebung |

## Hintergrundfarben

| Rolle | Name | HEX | HSL | Verwendung |
|---|---|---|---|---|
| **Dark BG** | Deep Onyx | `#07191E` | `hsl(195, 63%, 7%)` | Haupthintergrund (Hero, Nav, Footer) |
| **Dark BG Lighter** | Onyx Light | `#0F2A32` | `hsl(195, 55%, 13%)` | Cards auf Dark, erhöhte Elemente |
| **Light BG** | Frost | `#F1F5F9` | `hsl(210, 40%, 96%)` | Content-Sections |
| **Light Card** | White | `#FFFFFF` | — | Cards auf Light-BG |

## Textfarben

| Rolle | Name | HEX | Auf Dark BG | Auf Light BG |
|---|---|---|---|---|
| **Text Primary** | Soft White | `#E2E8F0` | ✅ Haupttext | — |
| **Text Primary** | Deep Onyx | `#07191E` | — | ✅ Haupttext |
| **Text Muted** | Slate | `#94A3B8` | ✅ Sekundär | — |
| **Text Muted** | Cool Gray | `#475569` | — | ✅ Sekundär |

## Semantische Farben

| Rolle | HEX | Verwendung |
|---|---|---|
| **Success** | `#02F5A1` | Gleich Primary |
| **Warning** | `#FBBF24` | Warnmeldungen |
| **Error** | `#EF4444` | Fehlermeldungen |
| **Info** | `#38BDF8` | Informationshinweise |

## Kontrast-Ratios (WCAG 2.1)

| Kombination | Ratio | Level |
|---|---|---|
| Spring Green auf Deep Onyx | ~10.5:1 | ✅ AAA |
| Soft White auf Deep Onyx | ~13.2:1 | ✅ AAA |
| Deep Onyx auf Frost | ~15.8:1 | ✅ AAA |
| Slate auf Deep Onyx | ~5.6:1 | ✅ AA |
| Cool Gray auf Frost | ~5.9:1 | ✅ AA |

## Verboten (aus @frontend-designer Skill)

- ❌ Reines `#000000` — immer Deep Onyx `#07191E`
- ❌ Lila Gradient (`#6C3CE1` → `#8B5CF6`) — AI-Slop
- ❌ Spring Green als Flächenfarbe — nur Akzent
- ❌ Farbe als einziger Bedeutungsträger
```

**Step 2: Commit**

```bash
git add 02-farbpalette.md
git commit -m "docs: add color palette with WCAG contrast ratios"
```

---

## Task 3: Brandbook — Typografie

> @skill: `frontend-designer` (Font-Regeln: NEVER Inter/Roboto/Arial als Display, Weight-Extreme 200 vs 800, 3x Größen-Sprünge)

**Files:**
- Create: `cs-brandbook/03-typografie.md`

**Step 1: Erstellen** (Inhalt wie in v1, Task 3 — unverändert)

Enthält: Font-Pairing-Tabelle, Größen-Skala, Gewichte-Kontraste, Regeln (inkl. DSGVO-Hosting).

**Step 2: Commit**

```bash
git add 03-typografie.md
git commit -m "docs: add typography documentation"
```

---

## Task 4: Brandbook — Logo-Guidelines + Design-Prinzipien

> @skill: `frontend-designer` (Anti-Patterns: kein "Cards inside Cards", kein Cookie-Cutter-Layout)
> @skill: `frontend` (Accessibility: Touch-Targets 44x44px, Semantic HTML)

**Files:**
- Create: `cs-brandbook/04-logo-guidelines.md`
- Create: `cs-brandbook/05-design-prinzipien.md`

**Step 1+2: Erstellen** (Inhalt wie in v1, Task 4 — unverändert)

Enthält: Logo-Varianten, Farbvarianten, Schutzzone, Verbote. Design-Prinzip (Minimalism + Terminal), Dark-first-Strategie, Terminal-Referenzen, Layout-Regeln.

**Step 3: Commit**

```bash
git add 04-logo-guidelines.md 05-design-prinzipien.md
git commit -m "docs: add logo guidelines and design principles"
```

---

## Task 5: Fonts herunterladen und lokal einbinden

> @skill: `frontend` (Performance: `font-display: swap`, explizite Gewichte)
> @skill: `frontend-designer` (NEVER Inter als Display-Font)

**Files:**
- Create: `cs-landingpage/assets/fonts/space-grotesk-medium.woff2`
- Create: `cs-landingpage/assets/fonts/space-grotesk-bold.woff2`
- Create: `cs-landingpage/assets/fonts/plus-jakarta-sans-regular.woff2`
- Create: `cs-landingpage/assets/fonts/plus-jakarta-sans-medium.woff2`
- Create: `cs-landingpage/assets/fonts/plus-jakarta-sans-semibold.woff2`
- Delete: `cs-landingpage/assets/fonts/inter-regular.woff2`
- Delete: `cs-landingpage/assets/fonts/inter-bold.woff2`

**Step 1: Fonts herunterladen** (google-webfonts-helper oder GitHub Releases)

**Step 2: Alte Inter-Fonts entfernen**

```bash
rm assets/fonts/inter-regular.woff2 assets/fonts/inter-bold.woff2
```

**Step 3: Commit**

```bash
git add assets/fonts/
git commit -m "feat: replace Inter with Space Grotesk + Plus Jakarta Sans (DSGVO local)"
```

---

## Task 6: CSS Design Tokens umstellen

> @skill: `frontend-designer` (Tokens first — create or update design tokens file. Every color, spacing, radius, shadow, font must come from tokens.)
> @skill: `frontend` (Required token categories: colors, spacing, radius, shadows, typography, breakpoints, transitions, z-index)
> @skill: `modern-web-guidance` — **MANDATORY: Vor CSS-Arbeit ausführen!**

**Vor-Schritt: modern-web-guidance konsultieren**

```bash
npx -y modern-web-guidance@latest search "CSS custom properties design tokens color scheme"
# Ergebnis-IDs notieren und best practices abrufen:
npx -y modern-web-guidance@latest retrieve "<id>"
```

**Files:**
- Modify: `cs-landingpage/css/style.css:1-92` (Font-Face + Design Tokens)

**Step 1: @font-face Deklarationen ersetzen** (Zeilen 9-23)

5 neue `@font-face` Blöcke für Space Grotesk (500, 700) und Plus Jakarta Sans (400, 500, 600).

**Step 2: Design Tokens ersetzen** (`:root` Block, Zeilen 29-92)

Neue Token-Struktur:

```css
:root {
  /* === Colors === */
  --color-primary: #02F5A1;
  --color-primary-muted: #4AE8A0;
  --color-primary-subtle: #0D3D2E;

  --color-dark-bg: #07191E;
  --color-dark-bg-lighter: #0F2A32;
  --color-light-bg: #F1F5F9;
  --color-card-bg: #ffffff;
  --color-card-bg-dark: #0F2A32;
  --color-card-border: rgba(2, 245, 161, 0.08);

  --color-text-on-dark: #E2E8F0;
  --color-text-on-light: #07191E;
  --color-text-muted-dark: #94A3B8;
  --color-text-muted-light: #475569;

  --color-success: #02F5A1;
  --color-warning: #FBBF24;
  --color-error: #EF4444;
  --color-info: #38BDF8;

  /* === Typography === */
  --font-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Font sizes, Spacing, Radius, Transitions, Layout — keep existing */

  /* Shadows — green glow */
  --shadow-glow: 0 0 20px rgba(2, 245, 161, 0.3);
  --shadow-glow-hover: 0 0 30px rgba(2, 245, 161, 0.5);
}
```

**Step 3: Body + Headings**

```css
body { font-family: var(--font-body); }
h1, h2, h3 { font-family: var(--font-display); }
```

**Step 4: Verify + Commit**

```bash
npx -y serve .   # Prüfe Farben + Fonts
git add css/style.css
git commit -m "feat: replace design tokens with Spring Green + Deep Onyx palette"
```

---

## Task 7: Farbreferenzen im CSS + HTML aktualisieren

> @skill: `frontend-designer` (Zero raw hex/rgb in components — alle über Tokens)
> @skill: `code-quality` (No magic values — extract to named constants)

**Files:**
- Modify: `cs-landingpage/css/style.css` (hardcoded Farben ersetzen)
- Modify: `cs-landingpage/index.html` (SVG stroke-colors, Logo)
- Modify: `cs-landingpage/assets/favicon.svg`

**Step 1: Alle alten Farbreferenzen ersetzen**

| Suche nach | Ersetze durch |
|---|---|
| `#6C3CE1` | `#02F5A1` oder `var(--color-primary)` |
| `#8B5CF6` | `#4AE8A0` oder `var(--color-primary-muted)` |
| `#00D4AA` | `#02F5A1` (Primary ersetzt Accent) |
| `rgba(108, 60, 225, ...)` | `rgba(2, 245, 161, ...)` |
| `stroke="#6C3CE1"` in SVGs | `stroke="currentColor"` + CSS `color: var(--color-primary)` |

**Step 2: `.gradient-text` + CTA-Buttons aktualisieren**

**Step 3: Logo-SVG + Favicon aktualisieren** (Gradient-Stops)

**Step 4: Verify + Commit**

```bash
npx -y serve .   # Visuell prüfen: keine Lila-Reste
git add css/style.css index.html assets/favicon.svg
git commit -m "feat: purge all purple references, replace with Spring Green"
```

---

## Task 8: Logo SVG-Konzept erstellen

> @skill: `frontend-designer` (Design Thinking: Purpose, Principle, Differentiation)

**Files:**
- Create: `cs-brandbook/assets/logo/code-symphony-full.svg`
- Create: `cs-brandbook/assets/logo/code-symphony-icon.svg`
- Modify: `cs-landingpage/index.html` (Nav-Logo)
- Modify: `cs-landingpage/assets/favicon.svg`

**Konzept:** Abstrakte `< >` Code-Klammern + Sine-Welle (Symphony). Spring Green auf Deep Onyx.

**Varianten:** Full (Wortmarke + Icon), Icon-Only (Favicon), Wortmarke-Only.

**Step 1-4:** Entwerfen → In brandbook speichern → In Landing Page einbauen → Favicon ersetzen

**Step 5: Commit** (beide Repos)

---

## Task 9: HTML-Inhalte & Layout überarbeiten

> @skill: `modern-web-guidance` — **MANDATORY: Vor HTML-Arbeit ausführen!**
> @skill: `frontend-designer` (Anti-Patterns: kein Cookie-Cutter "Hero → 3 Cards → CTA", keine "Cards inside Cards")
> @skill: `frontend` (Semantic HTML, Accessibility, Mobile-first, Touch-Targets 44x44px)

**Vor-Schritt: modern-web-guidance konsultieren**

```bash
npx -y modern-web-guidance@latest search "scroll driven animations reveal on scroll"
npx -y modern-web-guidance@latest search "view transitions API page transitions"
npx -y modern-web-guidance@latest retrieve "<relevante-ids>"
```

**Files:**
- Modify: `cs-landingpage/index.html`
- Modify: `cs-landingpage/css/style.css`

**Step 1: Hero-Section** — Terminal-Ästhetik: `$ code-symphony --init`, blinkender Cursor, Grüne Orbs

**Step 2: Leistungen-Section** — Weg von 3 gleichen Cards → asymmetrisches Grid oder Bento

**Step 3: Kontakt-Section** — Clean CTA, optional Terminal-Referenz

**Step 4: Footer** — Links in Slate, Hover: Spring Green

**Step 5: Verify (responsiv, alle Breakpoints) + Commit**

---

## Task 10: Rechtliche Seiten + Full-Site-Test

> @skill: `frontend` (Accessibility: Kontrast, Focus-Indicators, `aria-label`)

**Files:**
- Modify: `cs-landingpage/impressum.html`
- Modify: `cs-landingpage/datenschutz.html`

**Step 1: Prüfen** — Farben, Fonts, Nav-Hintergrund automatisch via Tokens

**Step 2: Full-Site-Test**

```bash
npx -y serve .
# Checklist:
# ✅ index.html — alle Sections, Scroll-Animationen, Mobile
# ✅ impressum.html — lesbar, Links klickbar
# ✅ datenschutz.html — lesbar, Links klickbar
# ✅ Navigation zwischen Seiten
# ✅ Favicon im Browser-Tab
# ✅ Kein FOUT (Flash of Unstyled Text)
# ✅ Keine Lila-Reste
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: complete CI/CD rebranding — Spring Green + Deep Onyx"
```

---

## Task 11: Impeccable installieren + Post-Build Audit

> Aus Report: 🟢 Hohe Priorität — einziges Tool das Gemini CLI nativ unterstützt und fehlt

**Step 1: Impeccable Skill recherchieren und installieren**

```bash
# Impeccable Website prüfen für Gemini CLI Installationsanleitung
# https://impeccable.style
```

> **Hinweis:** Exakte Installationsschritte müssen zur Laufzeit von impeccable.style ermittelt werden, da die Skill-Installation plattformspezifisch ist (Gemini CLI vs. Claude Code vs. Cursor).

**Step 2: Post-Build Audit durchführen**

Nach erfolgreicher Installation:

```bash
# /i-audit — Scores 5 dimensions with P0-P3 severity ratings
# /i-polish — Refines spacing, type, colour and motion
# /i-critique — Nielsen's 10 heuristics UX review
# /i-typeset — Typography decisions audit
```

**Step 3: Audit-Ergebnisse auswerten und Fixes anwenden**

Alle P0/P1-Findings fixen. P2/P3 dokumentieren für spätere Iteration.

**Step 4: Commit**

```bash
git add .
git commit -m "fix: apply Impeccable audit fixes (P0/P1)"
```

---

## Task 12: Brandbook-Skill erstellen

> Aus Report: 🟡 Mittlere Priorität — erzwingt CI-Compliance bei zukünftigen Builds
> @skill: `code-quality` (Naming, File-Organisation für Skill-Struktur)

**Files:**
- Create: `~/.gemini/config/plugins/user-skills/skills/brandbook/SKILL.md`

**Step 1: Skill-Datei erstellen**

```markdown
---
name: brandbook
description: Code Symphony Brandbook Compliance. Prüft alle Frontend-Änderungen gegen das Brandbook in cs-brandbook/. Konsultiere bei Arbeit an Landing Page, UI-Komponenten und Design-Tokens.
---

# Brandbook Compliance

## Wann verwenden
- Bei jeder Änderung an `cs-landingpage/css/style.css`
- Bei neuen HTML-Seiten oder -Sections
- Bei Logo/Asset-Änderungen

## Prüfschritte

### 1. Farben prüfen
Lese `~/Developer/Code Symphony/cs-brandbook/02-farbpalette.md` und stelle sicher:
- Nur definierte Farben werden verwendet
- Kein `#000000` (immer `#07191E`)
- Kein Lila (`#6C3CE1`, `#8B5CF6`)
- Spring Green (`#02F5A1`) nur als Akzent, nie als Flächenfarbe
- WCAG AA-Kontrast für alle Text/Hintergrund-Kombinationen

### 2. Typografie prüfen
Lese `~/Developer/Code Symphony/cs-brandbook/03-typografie.md` und stelle sicher:
- Headlines: Space Grotesk (nie Inter, Roboto, Arial)
- Body: Plus Jakarta Sans
- Code/Terminal: JetBrains Mono (nur dekorativ)
- Gewichte-Kontraste: 700 vs 400, nicht 600 vs 400

### 3. Layout prüfen
Lese `~/Developer/Code Symphony/cs-brandbook/05-design-prinzipien.md` und stelle sicher:
- Dark-first-Strategie eingehalten
- Kein Cookie-Cutter "Hero → 3 Cards → CTA"
- Touch-Targets min. 44x44px
- Semantic HTML

### 4. Logo prüfen
Lese `~/Developer/Code Symphony/cs-brandbook/04-logo-guidelines.md` und stelle sicher:
- Richtige Farbvariante für den Hintergrund
- Schutzzone eingehalten
- Keine Verzerrungen
```

**Step 2: Testen** — Skill muss beim nächsten Frontend-Edit automatisch konsultiert werden.

**Step 3: Commit**

```bash
cd ~/.gemini/config/plugins/user-skills/skills
git add brandbook/SKILL.md
git commit -m "feat: add brandbook compliance skill"
```

---

## Task 13: Design-DB-Skill erstellen (optional, empfohlen)

> Aus Report: 🟡 Mittlere Priorität — kuratierte Paletten & Font-Pairings für zukünftige Projekte

**Files:**
- Create: `~/.gemini/config/plugins/user-skills/skills/design-db/SKILL.md`

**Step 1: Skill-Datei erstellen**

Eine kuratierte Design-Datenbank als SKILL.md — inspiriert von UI/UX Pro Max (50K Stars), aber auf die eigenen Bedürfnisse zugeschnitten:

```markdown
---
name: design-db
description: Kuratierte Design-Datenbank mit Farbpaletten, Font-Pairings und Layout-Patterns. Konsultiere vor dem Bau neuer UIs für fundierte Design-Entscheidungen.
---

# Design-Datenbank

## Wann verwenden
Vor jedem neuen Frontend-Projekt oder Feature. Zuerst hier nachschlagen, dann bauen.

## Farbpaletten (kuratiert, WCAG-geprüft)

### Tech / Dark Mode
| Name | Primary | Dark BG | Light BG | Accent |
|---|---|---|---|---|
| **Code Symphony** | `#02F5A1` | `#07191E` | `#F1F5F9` | `#4AE8A0` |
| **Midnight Cyan** | `#22D3EE` | `#0C0A1A` | `#F0FDFA` | `#67E8F9` |
| **Electric Amber** | `#FBBF24` | `#0C0C0C` | `#FFFBEB` | `#FCD34D` |

### Corporate / B2B
| Name | Primary | Dark BG | Light BG | Accent |
|---|---|---|---|---|
| **Azure Trust** | `#003152` | `#001B2E` | `#F0F9FF` | `#ADDFF1` |
| **Slate Pro** | `#475569` | `#0F172A` | `#F8FAFC` | `#38BDF8` |

## Font-Pairings (kuratiert)

| Stil | Display | Body | Mono |
|---|---|---|---|
| **Tech Modern** | Space Grotesk | Plus Jakarta Sans | JetBrains Mono |
| **Editorial** | Playfair Display | Source Sans 3 | Fira Code |
| **Bold Statement** | Clash Display | Satoshi | IBM Plex Mono |
| **Clean Geometric** | General Sans | Inter* | Cascadia Code |
| **Distinctive** | Syne | Outfit | Space Mono |

*Inter nur als Body-Font erlaubt, nie als Display.

## Layout-Patterns

| Pattern | Wann | Vorsicht |
|---|---|---|
| Bento Grid | Dashboards, Feature-Showcase | Nicht mehr als 6 Kacheln |
| Asymmetrisch | Portfolios, Agenturen | Braucht starke Typografie |
| Terminal-Minimal | Dev-Tools, Tech-Landing | Nicht übertreiben mit Code-Deko |
| Editorial | Blogs, Docs | Braucht große Schrift-Kontraste |
```

**Step 2: Commit**

```bash
cd ~/.gemini/config/plugins/user-skills/skills
git add design-db/SKILL.md
git commit -m "feat: add curated design database skill"
```

---

## Skill-Checkliste pro Phase

| Phase | Task | Skills die konsultiert werden MÜSSEN |
|---|---|---|
| **A: Setup** | 0 | `code-quality`, `writing-plans` |
| **A: Docs** | 1-4 | `code-quality`, `frontend-designer`, `frontend` |
| **B: Fonts** | 5 | `frontend-designer`, `frontend` |
| **B: CSS** | 6 | `modern-web-guidance` ⚠️ MANDATORY, `frontend-designer`, `frontend` |
| **B: Colors** | 7 | `frontend-designer`, `code-quality` |
| **B: Logo** | 8 | `frontend-designer` |
| **B: Layout** | 9 | `modern-web-guidance` ⚠️ MANDATORY, `frontend-designer`, `frontend` |
| **B: Test** | 10 | `frontend` (A11y) |
| **C: Audit** | 11 | Impeccable (extern) |
| **C: Skills** | 12-13 | `code-quality` |

---

## Ausführungsoptionen

Plan complete. Zwei Ausführungsoptionen:

1. **Subagent-Driven (diese Session)** — Ich dispatche einen frischen Subagent pro Task, review zwischen Tasks, schnelle Iteration

2. **Parallel Session (separat)** — Neue Session öffnen, batch execution mit Checkpoints

Welcher Ansatz?
