# ADR-024: Build Session — yymethod-home-v1, March 30, 2026
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Permanent Record
**Date:** March 30, 2026
**Depends On:** ADR-013 (operator identity), ADR-016 (AI capability assessment), ADR-017 (case study framing)
**Freshness Boundary:** Permanent historical record. Documents how this site was built on the day it was completed.

---

## Capture

On March 30, 2026, a complete production web application was designed, built, debugged, corrected, deployed to Vercel, and DNS-routed to a custom domain — in a single session. The application is the public home for YY Method™ Home Edition: a structured ADR registry demonstrating the method applied to a real-world financial planning case study.

This ADR documents the full build arc: what was attempted, what broke, what was corrected, what was discovered, and what the session proves about the relationship between AI tooling and disciplined development practice.

This is not a victory lap. It is a record.

---

## What Was Built

**Stack:** Next.js 16 App Router · shadcn/ui new-york dark · Tailwind v4 · TypeScript strict · Vercel deployment · static generation (`generateStaticParams`)

**Structure:**
- `/` — Case study selector: YY Method brand, edition ownership notice, Case #001 card, Case #002 coming-soon placeholder, legal disclaimer
- `/case-001` — ADR registry for Case #001, grouped by domain
- `/case-001/[id]` — Individual ADR pages: structured header, dependency graph, markdown prose, sequential prev/next navigation
- `/framework` — Core formula and canonical principles
- `/agent` — Builder/Test/Review/Docs agent system reference

**Content:** 24 ADRs across 5 domains (Tax, Identity, Agent, Device, Methodology), each a self-contained knowledge artifact with freshness boundary, dependency graph, and prose body.

**Deployment:** GitHub → Vercel production · custom domain home.yymethod.com via CNAME in AWS Route 53

---

## The Arc

### Session 1 (prior): ADR-001 through ADR-018
The first session produced the initial ADR set — 18 artifacts across the S corp termination and 401(k) optimization case. The app was built and deployed. Errors were already present — specifically in ADR-005, which incorrectly stated the solo 401(k) would freeze after March 31 due to loss of W-2 income.

### Session 2 (March 30): ADR-019 through ADR-024
The second session opened with a domain knowledge challenge from the operator:

> "ADR-005 might be flawed — an LLC can have a solo 401(k) if it's just the owner and no employees, which is true even after March 31."

This was correct. ADR-005 had applied corporate plan logic (W-2 required) to a self-employment context (net SE income is the correct basis). The model supplied the wrong constraint. The operator caught it.

**ADR-023** was written as a formal correction — not a silent edit, not a deletion. The error was preserved and labeled. The scar is the truth.

The session then added a full backdoor Roth + 401(k) system (ADR-019 through ADR-022), rebuilt the home page as a case study selector, renamed the URL from `/adrs` to `/case-001`, audited the full system for discrepancies, fixed ADR-005's stale title/summary/status, renamed ADR-009's filename (tithing → charitable), added ADR-018 through ADR-023 to the index, and deployed each increment.

---

## What Broke and How It Was Fixed

**ADR-005 wrong claim — solo 401(k) freeze:**
Model stated the plan was frozen after March 31. Wrong — the LLC (disregarded entity) can sponsor the plan; contribution basis shifts from W-2 to net SE income. ADR-023 written as formal correction. ADR-005 status changed to "Decided — Partially Corrected." The wrong claim is preserved with context; the correction is linked. Version history is the evidence.

**HTTPS not working on home.yymethod.com:**
DNS was resolving to two IPs: one Vercel (`76.76.21.61`), one non-Vercel (`66.33.60.130`). Vercel cannot provision an SSL certificate for a domain it doesn't exclusively control. Diagnosed via `curl -v`. Fix: remove the conflicting record in Route 53. Cert provisioned automatically within minutes.

**URL rename /adrs → /case-001:**
The ADR registry URL was `/adrs`, which described the data structure, not the case. Renamed to `/case-001` — a case-oriented URL that scales as cases are added. Required: directory rename, 11 link updates across 3 files, build verification. Done cleanly in one commit.

**ADR-000-INDEX.md stale:**
The index was missing ADR-018 through ADR-023 entirely — both the hierarchy diagram and the registry table. Found during a full discrepancy audit. Fixed by reading every file, cross-referencing the file system against the index, and updating the hierarchy, registry, and cascade rules sections.

**ADR-009 filename:**
The file was named `ADR-009-daf-tithing-strategy.md` after a previous edit changed the title to "DAF Charitable Front-Load Strategy." The title was updated but the filename wasn't. Renamed to `ADR-009-daf-charitable-strategy.md`; ADR_FILE_MAP updated.

**adrCount drift:**
`cases.ts` tracks the total ADR count displayed on the home page. It required manual updates each time new ADRs were added. Updated from 22 → 23 when ADR-023 was registered.

---

## Why This Is Not Magic

Every fix in this session followed the same pattern:

1. **Read before writing.** No edit was made to a file that hadn't been read first.
2. **Build to verify.** Every change was followed by `npm run build` — 30 pages, 0 errors, before commit.
3. **Commit each increment.** Each logical unit of work was committed with a descriptive message and co-author attribution. Git history is the audit trail.
4. **File corrections as records, not silent edits.** ADR-023 exists because the error in ADR-005 is real and the correction process is part of the artifact. Deleting the wrong claim would have erased evidence.
5. **Audit for discrepancies.** After building, a full read-through was performed: every source file cross-referenced against every content file. This is not automated. It requires intention.
6. **Name things correctly.** `/adrs` → `/case-001`. `daf-tithing` → `daf-charitable`. Small renames that make the system coherent.

None of these are AI capabilities. They are software development practices applied with discipline. AI accelerates the mechanical work — writing, searching, editing, running commands. It does not supply the discipline. That comes from the operator.

The operator defines the invariants. The agent executes within them.

---

## Why-Not

**Why not ship the first draft and fix later?**
Because "later" often means never, and because the first draft contained a real error (ADR-005) that would have misled any reader who consulted it before the correction was filed. The YY Method treats the negative space — what was wrong, what was rejected — as load-bearing content. A silent fix destroys that structure.

**Why not let the AI drive the correction process?**
The AI did not identify the ADR-005 error. The operator did. The AI wrote the correction once the error was named. This is the correct division: operator identifies the constraint failure, agent executes the remediation. Inverting this — letting the agent audit its own prior output for correctness — produces false confidence.

**Why not use a CMS or database instead of markdown + static generation?**
Static generation means zero runtime dependencies. Every page is pre-rendered at build time. The content is version-controlled alongside the code. There is no database to go down, no API to fail, no secrets to manage for content. For a case study archive where content changes rarely and reads happen often, this is the correct architecture.

**Why not automate the adrCount in cases.ts?**
It could be derived from `adrs.length` at render time. It is not, because `cases.ts` tracks case-level metadata independently from the ADR registry — it will need to support multiple cases with different counts. The manual sync is a deliberate seam between the case catalog and the ADR data layer.

---

## What This Session Proves

**1. Corrections are first-class artifacts.**
The session produced one new correction ADR (ADR-023) and one new status type ("Decided — Partially Corrected") for an existing ADR (ADR-005). The correction is not a patch — it is a dated knowledge artifact with its own reasoning chain, scar documentation, and downstream impact analysis. This is the YY Method handling its own failure mode correctly.

**2. Discrepancy audits are necessary.**
After building, a full read-through found: a stale index, a misnamed file, a wrong status, a wrong summary, and missing entries in a registry. None of these were introduced maliciously. They accumulated through incremental work without a reconciliation pass. The audit found them. The audit was not automated — it was a deliberate act of reading.

**3. The URL is the claim.**
`/adrs` describes the implementation. `/case-001` describes the thing. The rename took 20 minutes. It made the system honest.

**4. DNS is not magic either.**
HTTPS failed because a conflicting A record existed alongside the Vercel CNAME. The cert provisioning system correctly refused to operate until it had exclusive control. Diagnosed with one `curl -v`. Fixed in Route 53. Working in minutes. There is no shortcut past understanding the stack.

**5. AI is a force multiplier for disciplined operators.**
An operator without discipline who uses AI produces confident, fluent errors at scale. An operator with discipline who uses AI produces a production application in a single session. The discipline is the variable. The AI is the multiplier.

---

## The Scar

ADR-005 was written with a wrong constraint: "solo 401(k) freezes after March 31 — no W-2 income." The operator caught it the next session. ADR-023 was the response. The error is preserved. The correction is dated. The reasoning chain from error to correction is complete and public.

This is not embarrassing. This is the method working.

---

## Commit

**Record:** This site was built in two sessions on March 29–30, 2026. It is a production application — deployed, DNS-routed, HTTPS-provisioned, version-controlled, and audited for internal consistency. It contains 24 ADRs, one correction record, one status type added mid-session to accommodate reality, and one renamed file.

The process that produced it is: read, build, verify, commit, correct, audit, rename, deploy. Repeat.

That is the method.

**Principle:** Human captures. AI reads. Discipline is the variable.
