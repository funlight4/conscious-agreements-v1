# Conscious Agreements Framework - Claude Code Guide

## Purpose & Philosophy

This is not merely a "law reference site." It's a **Conscious Agreements Framework** — helping people recognize, understand, and navigate the agreements they've entered (often unconsciously) and find pathways to conscious choice.

**Theme: Adventure & Choice Reclamation**

The site uses an adventure/journey metaphor. Users are on a quest to reclaim their power of choice. Key insight: People always have choice — they just forgot where they put it. The "law" isn't something imposed from above; it's a system of agreements that can be understood and navigated.

### Core Principles

1. **Everything is Agreement** — What appears as "law" is often contract. What appears as obligation is often consent-based.

2. **Conscious vs. Unconscious** — An agreement you consciously enter with full understanding is fundamentally different from one you stumbled into through assumptions or default behaviors.

3. **Energizing Agreements** — Agreements stay "alive" through your participation. Understanding *how* you energize an agreement reveals *how* you might stop.

4. **Definitions Matter** — Terms like "person," "resident," "citizen," "your," "understand" have precise legal meanings that differ from everyday usage. Black's Law Dictionary 4th Edition is the key reference.

5. **Consideration is Essential** — Without valid consideration (mutual exchange of value), a contract is void. This principle alone invalidates most unconscious "agreements."

6. **Self-Agreements Are Valid** — A man CAN make agreements with themselves (self-trust concept).

7. **Without Prejudice / Without Recourse** — Include these protective phrases where appropriate to preserve rights.

---

## Repository Structure

```
lawresearch/
├── CLAUDE.md                     ← You are here (Claude instructions)
├── conscious-agreements/         ← DEPLOYED WEBSITE
│   ├── README.md                 ← Human overview
│   ├── index.html                ← Landing page (adventure theme)
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   └── shared.css        ← Core styles (Adventure theme) - SINGLE SOURCE
│   │   └── js/
│   │       ├── components.js     ← Shared header/footer components (mega-menu nav)
│   │       └── main.js           ← Navigation, mobile menu, interactions
│   │
│   ├── foundation/               ← CORE CONCEPTS (read/build these first)
│   │   ├── index.html
│   │   ├── what-is-agreement.html
│   │   ├── conscious-unconscious.html
│   │   ├── how-you-energize.html
│   │   ├── covert-contracts.html
│   │   ├── healthy-agreements.html
│   │   └── money-creation/       ← How money is created through signatures
│   │       ├── index.html
│   │       ├── how-money-is-created.html
│   │       ├── promissory-notes.html
│   │       └── the-system.html
│   │
│   ├── domains/                  ← SPECIFIC AGREEMENT AREAS
│   │   ├── index.html
│   │   ├── governance/           ← Citizenship, jurisdiction, statutes (placeholder)
│   │   ├── commerce/             ← Contracts, UCC, negotiable instruments
│   │   │   ├── index.html        ← "The Trading Floor"
│   │   │   ├── negotiable-instruments.html
│   │   │   ├── consideration-in-commerce.html
│   │   │   ├── signatures-and-liability.html
│   │   │   └── holders-and-enforcement.html
│   │   ├── property/             ← Ownership, titles, trusts (placeholder)
│   │   └── identity/             ← Person, legal fiction, names
│   │       ├── index.html        ← "The Name Game"
│   │       ├── the-name.html
│   │       ├── person-and-individual.html
│   │       ├── private-public.html
│   │       └── citizenship.html
│   │
│   ├── pathways/                 ← PRACTICAL NAVIGATION
│   │   ├── index.html
│   │   ├── examining-agreement.html
│   │   ├── responding-to-claims.html
│   │   ├── asking-right-questions.html
│   │   └── common-situations/
│   │       ├── index.html
│   │       ├── mortgage-challenge.html
│   │       └── debt-collection.html
│   │
│   ├── reference/                ← LOOKUP MATERIALS
│   │   ├── index.html            ← "The Ancient Archives"
│   │   └── terminology.html      ← "Words Are Weapons"
│   │
│   ├── templates/                ← 7-PHASE DOCUMENT SYSTEM
│   │   ├── index.html            ← "Your Document Arsenal"
│   │   ├── phase-1/              ← Discovery (QWR, Debt Validation, FOIA, etc.)
│   │   ├── phase-2/              ← Challenge (Notices, Affidavits)
│   │   ├── phase-3/              ← Court Filings (Motion to Dismiss, Quiet Title)
│   │   ├── phase-4/              ← Complaints (FBI, DOJ, CFPB, SEC)
│   │   ├── phase-5/              ← Alternatives (Conditional Acceptance, Offset)
│   │   ├── phase-6/              ← Public Pressure (Press, Congressional, Class Action)
│   │   └── phase-7/              ← Settlement (Agreement, Deed in Lieu)
│   │
│   ├── claude-reference/         ← CLAUDE-OPTIMIZED REFERENCE MATERIALS
│   │   ├── FRAMEWORK.md          ← The philosophical lens
│   │   ├── NAVIGATION.md         ← Site structure & content map
│   │   ├── key-definitions.md    ← Critical Black's Law terms
│   │   ├── BlacksLaw-4th-ed/     ← Complete Black's Law Dictionary (A-Z .md files)
│   │   ├── UCC/                  ← Uniform Commercial Code reference
│   │   └── Brandon Joe Williams/ ← ContractKiller framework & analysis
│   │
│   └── _dev/                     ← Development experiments (not deployed)
│       └── style-experiments/    ← Theme variations
│
├── _workspace/                   ← NOT DEPLOYED - Working area
│   ├── inbox/                    ← Drop unorganized files here
│   ├── processing/               ← Files being worked on
│   └── README.md                 ← Workspace instructions
│
├── Claude Reference/             ← Additional Claude reference materials
├── Claude Skills/                ← Erlandia skills system
└── conscious-agreements-old-v1/  ← Backup of previous version
```

---

## Architecture: JavaScript Components

### How the Header/Footer Work

All 70+ HTML pages use a **JavaScript component system** for shared navigation:

```html
<!-- Every page has these placeholders -->
<body>
    <div id="site-header"></div>

    <main class="content">
        <!-- Page-specific content -->
    </main>

    <div id="site-footer"></div>

    <script src="/assets/js/components.js"></script>
    <script src="/assets/js/main.js"></script>
</body>
```

**components.js** contains:
- `renderNavigation()` — Returns the full mega-menu HTML
- `renderFooter()` — Returns the footer HTML
- `initComponents()` — Injects both into placeholder divs

**main.js** contains:
- `initComponents()` call on DOMContentLoaded
- `initMobileMenu()` — Hamburger menu for mobile
- `initNavigation()` — Active page highlighting
- `initSmoothScrolling()` — Anchor link behavior

### To Update Navigation Site-Wide

Edit **only** `/assets/js/components.js` — changes apply to all pages automatically.

### To Update Styles Site-Wide

Edit **only** `/assets/css/shared.css` — all pages reference this single file.

---

## Styling System

### Adventure Theme

The site uses an adventure/journey theme with these characteristics:

- **Color palette**: Warm golds, deep browns, parchment backgrounds
- **Typography**: Google Fonts loaded in shared.css (Fredericka the Great for headers, Nunito for body)
- **Tone**: Empowering, discovery-oriented, fun without being frivolous

### Standard Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Page Title] — Conscious Agreements</title>
    <link rel="stylesheet" href="/assets/css/shared.css">
</head>
<body>
    <div id="site-header"></div>

    <main class="content">
        <div class="container">
            <nav class="breadcrumb">
                <a href="/">Home</a>
                <span class="breadcrumb__separator">→</span>
                <a href="/section/">Section</a>
                <span class="breadcrumb__separator">→</span>
                <span>Page Title</span>
            </nav>

            <header class="hero">
                <div class="hero__badge">Section Badge</div>
                <h1 class="hero__title">Page Title</h1>
                <p class="hero__subtitle">Brief description of page content.</p>
            </header>

            <article>
                <section>
                    <!-- Content sections -->
                </section>
            </article>

            <nav class="page-nav">
                <a href="/prev-page.html" class="page-nav__link">
                    <span class="page-nav__label">Previous</span>
                    <span class="page-nav__title">← Previous Page</span>
                </a>
                <a href="/next-page.html" class="page-nav__link page-nav__link--next">
                    <span class="page-nav__label">Next</span>
                    <span class="page-nav__title">Next Page →</span>
                </a>
            </nav>
        </div>
    </main>

    <div id="site-footer"></div>

    <script src="/assets/js/components.js"></script>
    <script src="/assets/js/main.js"></script>
</body>
</html>
```

### CSS Component Classes

#### Layout
- `.content` — Main content wrapper
- `.container` — Max-width centered container
- `.grid`, `.grid--2`, `.grid--3` — Grid layouts

#### Cards & Boxes
- `.card`, `.card--highlight` — Content cards
- `.section-card` — Clickable section navigation cards with icons
- `.definition-box` — Black's Law definitions
- `.insight-box` — Key insights (gold border)
- `.important-box` — Warnings/important notes
- `.fun-fact` — Interesting tidbits

#### Hero Sections
- `.hero` — Page header section
- `.hero__badge` — Category/section label
- `.hero__title` — Main heading
- `.hero__subtitle` — Description text

#### Navigation
- `.main-nav` — Top navigation bar
- `.mega-menu` — Dropdown mega-menu
- `.breadcrumb` — Breadcrumb trail
- `.page-nav` — Previous/Next links
- `.path-indicator` — "You are here" guidance

#### Typography
- `.lead` — Larger intro paragraph
- `blockquote` — Styled quotes with citations
- `.card__title`, `.card__text`, `.card__label` — Card typography

---

## Black's Law Dictionary Integration

The `/claude-reference/BlacksLaw-4th-ed/` folder contains the complete Black's Law Dictionary 4th Edition split into A-Z markdown files.

### Most Critical Terms to Know

These terms have legal meanings that differ significantly from common usage:

- **Person** — Not necessarily a human being; often refers to legal entity/fiction
- **Citizen** — One who owes allegiance; implies duties and obligations
- **Resident** — One who resides; different from domicile; implies jurisdiction
- **Understand** — To "stand under"; implies agreement to authority
- **Your** — Possessive that may refer to legal fiction, not the human
- **Must** — Often means "may" in legal contexts
- **Includes** — Legal "includes" is limiting, not expansive
- **Consideration** — Something of value exchanged; essential for valid contract
- **Consent** — Agreement, often implied by action or silence
- **Jurisdiction** — Authority to act; requires consent or proper claim

When encountering legal documents or situations, always verify term definitions.

---

## Deployment

- **Platform**: Cloudflare Pages
- **Build Output Directory**: `conscious-agreements` (the folder, not root)
- **Build Command**: None (static HTML)
- **Excluded**: `_dev/` folder, `_workspace/` folder
- **Access**: Private URL

### Local Development

```bash
# Start local server (from conscious-agreements folder)
cd conscious-agreements
python3 -m http.server 8080

# Then open: http://localhost:8080
# In Codespaces: Use the Ports tab to open port 8080
```

---

## Content Quality Standards

### Every Page Should

1. **Orient the reader** — Where are they in the framework? What's the context?
2. **Provide the reframe** — How does this topic relate to agreements?
3. **Be actionable** — What can someone do with this understanding?
4. **Link forward** — Where should they go next?

### Tone

- **Empowering**, not conspiratorial
- **Clear**, not legalistic
- **Grounded**, not mystical
- **Practical**, with philosophical foundation
- **Fun and engaging** — adventure theme, not dry legal reference

### Avoid

- Sovereign citizen rhetoric or "magic words" thinking
- Combative framing (us vs. them)
- Absolute claims about legal outcomes
- Advice (this is education, not legal counsel)

---

## Questions?

This repository serves a small group of people seeking to understand agreements consciously. The goal is education and awareness, not legal advice. When in doubt, prioritize clarity and empowerment over comprehensiveness.
