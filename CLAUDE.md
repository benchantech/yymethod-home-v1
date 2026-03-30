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

## Stack
- Next.js 16 App Router, Server Components by default
- shadcn/ui new-york style, dark mode
- TypeScript strict
- Tailwind v4
- Vercel deployment target

## Principle
Human captures. AI reads.
