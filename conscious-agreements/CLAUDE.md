# Conscious Agreements Framework - Claude Code Guide

## Purpose & Philosophy

This is not merely a "law reference site." It's a **Conscious Agreements Framework** — helping people recognize, understand, and navigate the agreements they've entered (often unconsciously) and find pathways to conscious choice.

### Core Reframe

The legal system presents itself as "law" — immutable rules imposed from above. In reality, nearly everything in the legal domain is **agreement-based**. Statutes, regulations, contracts, citizenship, jurisdiction — all require some form of consent (explicit or implied, conscious or unconscious).

The problem: Most people have "agreed" to things they don't understand, using terms they assume they know but which have precise legal definitions that differ significantly from common usage.

### Key Principles

1. **Everything is Agreement** — What appears as "law" is often contract. What appears as obligation is often consent-based.

2. **Conscious vs. Unconscious** — An agreement you consciously enter with full understanding is fundamentally different from one you stumbled into through assumptions or default behaviors.

3. **Energizing Agreements** — Agreements stay "alive" through your participation. Understanding *how* you energize an agreement reveals *how* you might stop.

4. **Definitions Matter** — Terms like "person," "resident," "citizen," "your," "understand" have precise legal meanings that differ from everyday usage. Black's Law Dictionary 4th Edition is the key reference.

5. **Consideration is Essential** — Without valid consideration (mutual exchange of value), a contract is void. This principle alone invalidates most unconscious "agreements."

---

## Repository Structure

```
conscious-agreements/
├── CLAUDE.md              ← You are here
├── README.md              ← Human overview
├── index.html             ← Landing page
│
├── assets/
│   ├── css/
│   │   ├── shared.css     ← Core styles (Parchment theme)
│   │   └── components.css ← Reusable component styles
│   └── js/
│       └── main.js        ← Navigation, interactions
│
├── foundation/            ← CORE CONCEPTS (read/build these first)
│   ├── index.html
│   ├── what-is-agreement.html
│   ├── conscious-unconscious.html
│   ├── how-you-energize.html
│   ├── covert-contracts.html
│   └── healthy-agreements.html
│
├── domains/               ← SPECIFIC AGREEMENT AREAS
│   ├── index.html
│   ├── governance/        ← Citizenship, jurisdiction, statutes
│   ├── commerce/          ← Contracts, UCC, transactions
│   ├── property/          ← Ownership, titles, trusts
│   └── identity/          ← Person, legal fiction, names
│
├── pathways/              ← PRACTICAL NAVIGATION
│   ├── index.html
│   ├── examining-agreement.html
│   ├── responding-to-claims.html
│   ├── asking-right-questions.html
│   └── common-situations/
│
├── reference/             ← LOOKUP MATERIALS
│   ├── index.html
│   ├── definitions/       ← Key Black's Law terms (HTML)
│   ├── blacks-law-4th.md  ← Full dictionary (Claude reference)
│   └── key-documents/
│
├── templates/             ← PRACTICAL TEMPLATES
│   ├── index.html
│   ├── response-letters/
│   └── notices/
│
├── claude-reference/      ← CLAUDE-OPTIMIZED SUMMARIES
│   ├── FRAMEWORK.md       ← The philosophical lens
│   ├── NAVIGATION.md      ← Site structure & content map
│   ├── foundation.md      ← Foundation concepts summary
│   ├── domains.md         ← Domain summaries
│   ├── pathways.md        ← Pathway summaries
│   └── key-definitions.md ← Critical Black's Law terms
│
└── _workspace/            ← NOT DEPLOYED - Working area
    ├── inbox/             ← Drop unorganized files here
    ├── processing/        ← Files being worked on
    ├── sources/           ← Original source documents
    └── research-notes/    ← Research and drafting
```

---

## Working with This Repository

### Content Flow

```
Foundation (the lens) → Domains (where agreements live) → Pathways (how to navigate) → Reference (lookup)
```

Always ensure Foundation content is solid before building Domain-specific content. The reframe must come first.

### When Adding New Content

1. **Check inbox**: Look in `_workspace/inbox/` for files to process
2. **Understand context**: Read relevant `/claude-reference/*.md` files first
3. **Process in workspace**: Work in `_workspace/processing/`
4. **Create HTML**: Build page in appropriate content folder
5. **Update references**: Update relevant `/claude-reference/*.md` summaries
6. **Update navigation**: Ensure index pages link to new content

### When Asked to Explain or Analyze

1. **Use the framework**: Apply the conscious/unconscious agreement lens
2. **Check definitions**: Verify term meanings against Black's Law 4th
3. **Identify the agreement**: What is actually being claimed/consented to?
4. **Consider energizing**: How is the person participating in this agreement?
5. **Explore options**: What pathways exist for conscious choice?

---

## Black's Law Dictionary Integration

The file `reference/blacks-law-4th.md` contains the complete Black's Law Dictionary 4th Edition. It's too large to load in context but essential for term lookup.

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

## HTML/CSS Conventions

### Visual Theme: "Grounded Clarity"

Adapted from Erlandia's Paradise Parchment style — scholarly, warm, authoritative without being cold.

- **Background**: Warm parchment with subtle sky gradient at top
- **Typography**: Cinzel (headers), Crimson Text (body), JetBrains Mono (definitions/technical)
- **Accent**: Gold (#d4a853, #b8860b) for emphasis and links
- **Ink**: Dark blue-gray (#2c3e50) for readability

### Page Structure

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
    <nav class="main-nav"><!-- Consistent navigation --></nav>
    
    <main class="content">
        <nav class="breadcrumb"><!-- Breadcrumb trail --></nav>
        <article>
            <!-- Page content -->
        </article>
        <nav class="page-nav"><!-- Prev/Next links --></nav>
    </main>
    
    <footer><!-- Consistent footer --></footer>
    <script src="/assets/js/main.js"></script>
</body>
</html>
```

### File Naming

- Use lowercase with hyphens: `contract-basics.html`
- No spaces in filenames
- Index pages: `index.html` in each folder
- Templates: `[purpose]-template.[ext]`

---

## Claude Reference Files

The `/claude-reference/` folder contains markdown summaries optimized for Claude consumption:

- **FRAMEWORK.md** — The philosophical lens (read this first for any new conversation)
- **NAVIGATION.md** — Complete site map with page summaries
- **[topic].md** — Synthesized summaries of each content section

These files should be:
- Concise (summaries, not full articles)
- Cross-referenced (link related concepts)
- Updated when HTML content changes

---

## Deployment

- **Platform**: Cloudflare Pages
- **Build**: None (static HTML)
- **Excluded**: `_workspace/` folder (not deployed)
- **Access**: Private URL shared with specific people

### What's NOT Deployed

The `_workspace/` folder stays in GitHub but is excluded from Cloudflare Pages deployment. This is the working area for processing new content.

To exclude, add to Cloudflare Pages settings or use `_headers` file:
```
/_workspace/*
  X-Robots-Tag: noindex
```

Or configure in Cloudflare dashboard under Build settings → Root directory.

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
- **Grounded**, not mystical (save that for Erlandia proper)
- **Practical**, with philosophical foundation

### Avoid

- Sovereign citizen rhetoric or "magic words" thinking
- Combative framing (us vs. them)
- Absolute claims about legal outcomes
- Advice (this is education, not legal counsel)

---

## Quick Reference Commands

```bash
# Start local server for preview
python -m http.server 8000

# Or with Node
npx serve .

# Check for broken links
npx linkinator . --recurse

# Format markdown files
npx prettier --write "**/*.md"
```

---

## Questions?

This repository serves a small group of people seeking to understand agreements consciously. The goal is education and awareness, not legal advice. When in doubt, prioritize clarity and empowerment over comprehensiveness.
