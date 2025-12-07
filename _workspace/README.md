# Workspace Directory

This folder is for processing content and is **NOT deployed** to Cloudflare Pages.

## Folders

### `/inbox`
Drop unorganized files here for Claude Code to process. This is the entry point for new material.

### `/processing`
Files currently being worked on. Claude Code moves items here during active development.

### `/sources`
Original source documents (PDFs, research papers, etc.) for reference. Keep originals here while creating processed content.

### `/research-notes`
Research notes, drafts, and working documents. Useful for complex topics being developed over time.

## Workflow

1. Drop raw materials in `/inbox`
2. Claude Code processes and moves to `/processing`
3. Completed content moves to the appropriate public folder (`/foundation`, `/domains`, etc.)
4. Source materials remain in `/sources` for reference
5. Notes accumulate in `/research-notes`

## Deployment Exclusion

This folder is excluded from Cloudflare Pages deployment. To ensure this:

**Option 1**: Configure in Cloudflare Pages dashboard → Build settings
- Set build output directory to exclude `_workspace`

**Option 2**: Create a `_headers` or `_redirects` file (if needed)

The important thing is that this content stays in GitHub (for Claude Code access) but doesn't appear on the public site.
