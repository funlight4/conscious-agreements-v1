# Uniform Commercial Code (UCC) - Complete Extraction

## Overview

This is a complete extraction of the **Uniform Commercial Code** into markdown format, optimized for LLM reference and study.

**Total: 11 Articles, 612 Sections**

## File Structure

```
├── UCC-INDEX.md           # Master index (start here!)
├── UCC-Article-1.md       # General Provisions (24 sections)
├── UCC-Article-2.md       # Sales (101 sections)
├── UCC-Article-2A.md      # Leases (79 sections)
├── UCC-Article-3.md       # Negotiable Instruments (68 sections)
├── UCC-Article-4.md       # Bank Deposits & Collections (41 sections)
├── UCC-Article-4A.md      # Funds Transfers (38 sections)
├── UCC-Article-5.md       # Letters of Credit (18 sections)
├── UCC-Article-6.md       # Bulk Sales (10 sections)
├── UCC-Article-7.md       # Documents of Title (45 sections)
├── UCC-Article-8.md       # Investment Securities (54 sections)
├── UCC-Article-9.md       # Secured Transactions (134 sections)
├── UCC-README.md          # This file
└── extract_ucc.py         # Extraction script
```

## Markdown Structure

Each article follows a consistent hierarchy:

```markdown
# ARTICLE X - NAME

## PART 1. TITLE

### § X-101. Section Title.

(a) Subsection content...
(b) More content...
    (1) Numbered items...
    (2) More items...

### § X-102. Next Section.
...
```

## How to Use for LLM Reference

### Efficient Lookup Process

1. **Start with UCC-INDEX.md** - Find which article contains your topic
2. **Load the specific article** - Each article is a self-contained file
3. **Search for section number** - Use `§ X-XXX` format (e.g., `§ 2-201`)

### Example Queries

| Query | Article | Section |
|-------|---------|---------|
| Statute of Frauds | 2 (Sales) | § 2-201 |
| Perfect security interest | 9 (Secured Trans.) | § 9-310 |
| Good faith definition | 1 (General) | § 1-201 |
| Negotiable instrument | 3 (Neg. Instruments) | § 3-104 |
| Letter of credit | 5 (Letters of Credit) | § 5-102 |

## Article Summary

| Article | Name | Sections | Size |
|---------|------|----------|------|
| 1 | General Provisions | 24 | 29K |
| 2 | Sales | 101 | 114K |
| 2A | Leases | 79 | 100K |
| 3 | Negotiable Instruments | 68 | 105K |
| 4 | Bank Deposits & Collections | 41 | 48K |
| 4A | Funds Transfers | 38 | 63K |
| 5 | Letters of Credit | 18 | 28K |
| 6 | Bulk Sales | 10 | 38K |
| 7 | Documents of Title | 45 | 51K |
| 8 | Investment Securities | 54 | 72K |
| 9 | Secured Transactions | 134 | 257K |

## Special Notes

### Article 6 - Bulk Sales
Article 6 contains two alternatives:
- **Alternative A**: Repealer (for states that want to repeal Article 6)
- **Alternative B**: Revised Bulk Sales provisions

### Bracketed Text
Text in brackets like `[the Uniform Commercial Code]` indicates optional or variable language that states may modify when adopting the UCC.

### Legislative Notes
Some sections include "Legislative Notes" providing guidance for state legislatures on adoption.

## Re-extraction

To re-extract from the PDF, use the included script:

```bash
python3 extract_ucc.py
```

---

*© Copyright 2005 by The American Law Institute and the National Conference of Commissioners on Uniform State Laws*
