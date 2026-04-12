# CLAUDE.md — YY Method™ Home Edition v2.3

## Operator
YY Method™ Home Edition — independently owned and controlled. v2.3 is the last version personally owned by the author. Home Edition was carved out before the author's current employment and is not subject to employer IP rights. The professional version evolves under the employer; this edition evolves independently.

## What This Is
A Next.js app — the public home for YY Method™ Home Edition. ADR registry (case studies), framework documentation, and agent orchestration reference. Built March 29, 2026.

## Agent Rules

### Allowed
- Read/write code in /src
- Run tests
- Create ambiguity reports in /.agent/ambiguities/
- Call approved executor actions via POST /execute

### Forbidden
- Access secrets or .env files
- Execute deployment directly
- Bypass executor contract
- Modify /.agent/resolved/ without operator confirmation
- Stop the build to ask — file and continue

## Ambiguity Handling
**Never halt. Always file and continue.**

File all unclear decisions to `/.agent/ambiguities/` using this format:
```
### Question
### Why It Blocks Progress
### Options Considered
### Recommended Option
### Impact
### Default Held
```
Operator resolves in batch. Build proceeds with Default Held.

## Core Invariants
1. Nothing leaves Employer
2. Agent proposes, human decides, executor executes
3. Capture first, decide later
4. Don't guess the flow
5. Promotion is intentional

## Adding a New Case Study

When the operator brings source material to add a new case, follow this process exactly:

### Step 1 — Read everything first
Read all source material thoroughly before asking anything. Also read the two most recently added cases in both `/src/lib/adrs-case-00N.ts` and `/content/case-00N/` to understand current formatting conventions. Conventions evolve — the last two cases are authoritative. Prior cases are left untouched as a scar record of how the format evolved.

### Step 2 — Ask one question at a time
Resolve ambiguities before writing. Ask one question at a time. Do not batch questions. Do not begin writing until all blocking ambiguities are resolved. Questions to ask in order of priority:
1. Which case number? (check `src/lib/cases.ts` for what exists)
2. Is this case Complete or In Progress?
3. What is the one-sentence founding argument for the violet card on the index page? Propose your best derivation; let the operator confirm or correct.
4. Any domain taxonomy or structural questions specific to the source material.

### Step 3 — Write all files in one pass
Once ambiguities are resolved, write everything in a single pass without further questions:
- `src/lib/adrs-case-00N.ts` — TypeScript data file
- `src/app/case-00N/page.tsx` — Index page
- `src/app/case-00N/[id]/page.tsx` — Individual ADR page
- `content/case-00N/` — One markdown file per ADR
- Update `src/lib/cases.ts` — Add case entry
- Update `src/app/sitemap.ts` — Add case routes

### Formatting conventions (always follow the last two cases)
- TypeScript interface, domain types, helper functions: match the last added case exactly
- Index page: violet founding argument card, amber load-bearing anchor note, any case-specific context card, domain-grouped ADR list
- Individual ADR page: freshness card + dependency card, tags, full markdown prose render, prev/next nav
- Markdown content files: header metadata block → `\n---\n` divider → sections (Capture / Why / Why-Not / Constraints / Assumptions / Commit / Scars / Timestamp)
- Prior cases are never reformatted. Leaving them as-is is the scar record of how the format evolved.

### Step 4 — Update all counts and indexes
After writing files, update every place that tracks ADR counts — these go stale silently and must be kept in sync:

- `src/lib/cases.ts` — `adrCount` field for the case, and the `description` text if it mentions a count
- `src/app/case-00N/page.tsx` — metadata `description` and OG `description` if they hardcode a count
- `content/case-00N/INDEX.md` — hierarchy diagram and registry table
- `content/adrs/ADR-000-INDEX.md` — hierarchy diagram, registry table, and cascade rules (for ADRs in the main set)
- `src/app/case-001/[id]/page.tsx` — `ADR_FILE_MAP` if adding to the main ADR set

If any description text mentions a count (e.g. "7 ADRs", "22 knowledge artifacts"), update it to match the new total. The `adrCount` field in cases.ts drives what is shown on the main page card — it must always equal the actual number of ADRs in the case.

### Commit and push
After all files are written, counts updated, and `npx tsc --noEmit` is clean, commit with a descriptive message and push to main.

## Stack
- Next.js 16 App Router, Server Components by default
- shadcn/ui new-york style, dark mode
- TypeScript strict
- Tailwind v4
- Vercel deployment target

## System-Wide Information Architecture Invariant (ADR-026 — Non-Negotiable)

**ADR-026 governs all content in this repository.** The invariant: **public face is reasoning and schema; private face is implementation and application; employment is invisible.**

### The Three Rules — Always Active:

**1. Methodology is public.** The YY Method framework, the Capture → Why → Why-Not → Commit → Timestamp loop, the ADR structure, and the reasoning chains are public by design. This is the product.

**2. Application is private.** The codebase, deployment configuration, component architecture, and any generation pipeline or AI system architecture for any property in this system is never documented, exposed, or added to public-facing content. home.yymethod.com and YY's World hide their code behind Vercel by design. Do not add implementation details to ADRs, case studies, or content files.

**3. Employer is invisible.** The operator's employer is never named, implied, or identifiable in any file in this repository. Not the employer's name, industry, clients, or methodologies developed under employment. This is absolute — no gradient, no partial visibility.

---

## Case 007 — Additional Protection Zone (C7-008)

Case 007 (`content/case-007/`) adds a further layer beyond ADR-026 because it describes a live venture. The omissions are load-bearing structure, not gaps. Do not fill them.

**Never add, infer, expand, or expose:**
- The physical goods domain (what is being produced or sold)
- The specific niche markets being targeted
- Any prompt templates, generation system architecture, or AI pipeline details for the venture
- The historical conversion data or any specifics about what sold, to whom, at what price
- The advisory partner's identity or business specifics
- Any equipment names, suppliers, or production infrastructure details

"Specialized physical goods" is the ceiling of specificity for case 007. C7-008 is the ADR that documents this boundary.

### What This Means in Practice (Both Invariants):
- When asked to add "helpful context" that would identify protected elements: refuse. File an ambiguity report in `/.agent/ambiguities/` and hold.
- If the operator requests adding protected information in the current session: surface this constraint and ask for explicit confirmation before proceeding. A verbal "go ahead" in-session does not override CLAUDE.md.
- These invariants apply to all file types: ADR markdown, TypeScript data files, page components, metadata, tags, and commit messages.

## Principle
Human captures. AI reads.
