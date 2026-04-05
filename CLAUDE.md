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

### Commit and push
After all files are written and `npx tsc --noEmit` is clean, commit with a descriptive message and push to main.

## Stack
- Next.js 16 App Router, Server Components by default
- shadcn/ui new-york style, dark mode
- TypeScript strict
- Tailwind v4
- Vercel deployment target

## Principle
Human captures. AI reads.
