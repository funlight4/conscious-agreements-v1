# Black's Law Dictionary 4th Edition - Complete Extraction

## Overview

This is a complete extraction of **Black's Law Dictionary, 4th Edition** into markdown format, optimized for LLM reference and lookup.

**Total Terms: 22,763**

## File Structure

```
├── INDEX.md                    # Master index of all terms (start here!)
├── CROSS-REFERENCES.md         # All "See X" cross-references
├── blacks-law-4th-a.md         # Letter A definitions (2,057 terms)
├── blacks-law-4th-b.md         # Letter B definitions (881 terms)
├── blacks-law-4th-c.md         # Letter C definitions (2,449 terms)
├── blacks-law-4th-d.md         # Letter D definitions (1,557 terms)
├── blacks-law-4th-e.md         # Letter E definitions (1,223 terms)
├── blacks-law-4th-f.md         # Letter F definitions (1,386 terms)
├── blacks-law-4th-g.md         # Letter G definitions (520 terms)
├── blacks-law-4th-h.md         # Letter H definitions (704 terms)
├── blacks-law-4th-i.md         # Letter I definitions (1,190 terms)
├── blacks-law-4th-j.md         # Letter J definitions (500 terms)
├── blacks-law-4th-k.md         # Letter K definitions (126 terms)
├── blacks-law-4th-l.md         # Letter L definitions (1,126 terms)
├── blacks-law-4th-m.md         # Letter M definitions (1,194 terms)
├── blacks-law-4th-n.md         # Letter N definitions (737 terms)
├── blacks-law-4th-o.md         # Letter O definitions (465 terms)
├── blacks-law-4th-p.md         # Letter P definitions (1,747 terms)
├── blacks-law-4th-q.md         # Letter Q definitions (306 terms)
├── blacks-law-4th-r.md         # Letter R definitions (990 terms)
├── blacks-law-4th-s.md         # Letter S definitions (1,588 terms)
├── blacks-law-4th-t.md         # Letter T definitions (782 terms)
├── blacks-law-4th-u.md         # Letter U definitions (335 terms)
├── blacks-law-4th-v.md         # Letter V definitions (435 terms)
├── blacks-law-4th-w.md         # Letter W definitions (417 terms)
├── blacks-law-4th-x.md         # Letter X definitions (3 terms)
├── blacks-law-4th-y.md         # Letter Y definitions (29 terms)
├── blacks-law-4th-z.md         # Letter Z definitions (16 terms)
├── blacks-law-4th-*-QC.md      # Quality control reports (26 files)
├── extract_blacks_law.py       # Extraction script
└── README.md                   # This file
```

## How to Use for LLM Reference

### Efficient Lookup Process

1. **Start with INDEX.md** - Load this file first to find terms quickly
2. **Load only the needed letter file** - Once you find the term, load only that letter's file
3. **Use CROSS-REFERENCES.md** - For terms that redirect to other terms

### Example Workflow

```
User: "What is habeas corpus?"

1. Check INDEX.md → Find "HABEAS CORPUS" → blacks-law-4th-h.md
2. Load blacks-law-4th-h.md
3. Find ## HABEAS CORPUS section
4. Return definition
```

## Entry Format

Each term follows this structure:

```markdown
## TERM NAME

Definition text here, which may span
multiple lines and include citations
like Bla.Com. 306 or case references.

## NEXT TERM
```

## Quality Control

QC reports (`*-QC.md` files) flag entries that may need review:
- **SHORT_HEADWORD** - Very short terms (may be abbreviations)
- **CITATION_START** - Entries beginning with "See..."
- **MINIMAL_CONTENT** - Very brief definitions

These are typically valid entries, just flagged for verification.

## Technical Notes

- **Source**: Black's Law Dictionary, 4th Edition PDF
- **Extraction Method**: Smart column detection with header/footer removal
- **Total Pages Processed**: 1,792 (pages 77-1868)
- **Format**: Standard Markdown with `## ` headings for terms

## Re-extraction

To re-extract from the PDF, use the included script:

```bash
# Single letter
python3 extract_blacks_law.py A

# Multiple letters
python3 extract_blacks_law.py A B C

# All letters
python3 extract_blacks_law.py ALL
```

---

*Extracted for LLM reference use. Original content © West Publishing Company.*
