# C11-012: yysworld Kernel Architecture for the New YY Method
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-06-06
**Domain:** Architecture
**Depends On:** C11-001, C11-004, C11-005, C11-006, C11-009, C11-010, C11-011 — real YY as viewpoint, progression, sandbox graduation, academy mission, domain boundary, golden seed, and adaptive proof
**Freshness Boundary:** Active. Revisit when `yymethod-home` stops being a static case registry and gains a runtime learner/account/progression system, when `yyworld` becomes public/account-based, or when yysworld's kernel patterns materially change.
**Source:** Operator direction plus code-structure review of `yysworld` and `yymethod-home` on 2026-06-06.

---

## Capture

The existing `yymethod-home` codebase is a case-study archive. It has:

- hand-authored Markdown ADRs under `content/case-*`
- typed case registries under `src/lib/adrs-case-*.ts`
- static Next.js routes that project Markdown into human-readable pages
- framework and agent reference pages that describe the method
- no runtime ledger, no package/control plane, no generated learner artifacts, no branch comparison layer, and no machine-readable data API beyond normal pages

That structure is sufficient for preserving past reasoning. It is not yet sufficient for the new Case 011 ambition: YY Method Home Edition as an adult-directed family learning system with quests, XP, badges, visible proof, sandbox graduation, AI-personalized paths, and real YY as first-class guide.

The existing `yysworld` codebase already contains the missing architectural spine. Its actual construction is not just a story site. It is a working kernel:

- `runs/root_YYYY_MM_DD/` is the durable world model: baseline, world seed, events, decisions, branches, snapshots, artifacts, comparisons, and inbox records.
- `schemas/` defines machine-checkable shapes for events, snapshots, artifacts, branches, decisions, model profiles, and packages.
- `pipeline/lib/types.ts` defines the runtime context: baseline, branch state, world seed, recent days, voice text, generated events, generated snapshots, generated artifacts, branch evaluations, and comparisons.
- `pipeline/lib/context.ts` loads only the active run, branches, recent history, world seed, voice rules, and author intent needed for the next operation.
- `pipeline/lib/files.ts` writes events, snapshots, artifacts, decisions, and branches with package references and model references.
- `pipeline/lib/generate.ts` separates generation tasks: snapshot/event generation, artifact generation, branch evaluation, comparison generation, and init suggestions.
- `lib/runs.ts` reads the file-backed truth layer at build time and derives static page params, active days, branch summaries, artifacts, and comparisons.
- `app/yy/[runDate]/...` projects the same truth into human day pages, branch switches, gated articles, and comparisons.
- `app/yy/data/[...path]/route.ts` exposes a parallel static JSON layer with manifests, baselines, world seeds, ledgers, snapshots, artifacts, and comparisons.

This is the pattern Case 011 should inherit. The new YY Method should not begin by adding more prose about family learning. It should begin by adopting yysworld's kernel: file-backed truth, versioned seeds, typed schemas, append-only events, generated artifacts with provenance, human pages as projections, machine data as first-class output, and comparison as a learning primitive.

The mental scaffolding in C11-001 through C11-011 gives the product its meaning. The yysworld kernel gives that meaning a construction path.

---

## Why

Case 011 is trying to hold several tensions at once:

- real YY must guide the surface without becoming a decorative mascot
- the product must be family-shareable without becoming child-directed
- quests and XP must motivate practice without rewarding shallow completion
- sandbox ideas must be allowed to graduate without exploiting or laundering private play
- client/advisory work may fund the academy without owning the doctrine
- fantasy must stay rooted in the operator's real childhood thinking modes
- social proof must look lived, inspectable, and specific rather than generated

Those tensions cannot be solved by tone. They need architecture.

yysworld has already paid for the scars that answer this problem:

- **Truth is file-backed and inspectable.** A generated page is not the source of truth. The source is the run record underneath it.
- **State changes are explicit.** Events, snapshots, decisions, and branch files make change legible.
- **AI roles are tracked.** Model references record whether AI acted as generator, summarizer, or evaluator.
- **Seeds are authored before runs.** World and voice inputs are not silently invented after the fact.
- **Branches make alternatives comparable.** "Same being, different path" becomes a product mechanic, not a slogan.
- **Projections are disposable.** Human pages and data APIs are renderings over truth, not the truth itself.
- **Machine-readable surfaces are deliberate.** AI agents do not have to infer the system from pages; they can traverse JSON manifests and ledgers.

For the new YY Method, the translation is direct:

- a **method seed** replaces or complements the world seed: family posture, YY voice, progression dimensions, privacy rules, graduation criteria, proof types, and allowed AI roles
- a **learner/family baseline** replaces character baseline: capability dimensions, preferred thinking modes, constraints, consent posture, and freshness boundaries
- a **quest event** replaces world event: the concrete learning challenge, source material, ambiguity, and expected cognitive move
- a **learning snapshot** replaces world snapshot: before/after state of understanding, artifact state, confidence, corrections, and open questions
- a **proof artifact** replaces narrative artifact: ADR, log, diagram, lesson, family victory, corrected prompt, or built object
- a **graduation decision** replaces branch decision: whether sandbox material enters the method, stays private, gets revised, or is rejected
- a **comparison** becomes the teaching primitive: same prompt with/without provenance, same family problem with/without AI, same learner before/after correction, same artifact before/after YY framing

This makes the new yymethod a system of evidence, not a content brand.

---

## Why-Not

**Why not keep `yymethod-home` as a static ADR archive only?**
The static archive is useful as a museum and proof base, but Case 011 asks for an academy, progression loop, family learning surface, and graduation field. Those require state, proof, and feedback. Static pages can project the work, but they cannot be the architecture of the work.

**Why not build a normal LMS with YY branding?**
A normal LMS would optimize for lessons, modules, completion, and accounts. That would import the wrong center of gravity. YY Method should optimize for reasoning events, artifacts, corrections, branches, freshness boundaries, and lived proof. Lessons may exist, but they should be projections over the evidence layer.

**Why not let AI generate personalized lessons directly from the ADRs?**
That is the slop path. The ADRs and cases are seed material, not an unrestricted prompt corpus. AI may adapt, summarize, compare, and propose next quests only inside explicit role boundaries, with provenance attached to outputs and human authority preserved.

**Why not merge yysworld and yymethod-home into one codebase immediately?**
The surfaces have different trust boundaries. yysworld is a character/world laboratory. yymethod-home is the adult-directed family learning and method surface. The correct inheritance is architectural: copy the kernel pattern, not necessarily the repo. Shared packages, schemas, or conventions may emerge later.

**Why not promote every `yyworld` sandbox idea into the method automatically?**
Automatic promotion violates C11-005 and Case 010. Sandbox material graduates only through an explicit decision record with approval, privacy classification, usefulness, provenance, and a reason the artifact belongs in the method.

**Why not hide the construction and ship a polished product surface?**
The construction is part of the proof. C11-011 depends on visible logs, scars, artifacts, and family victories. A polished surface with hidden provenance looks like generated learning content. The new yymethod should reveal enough of its kernel for trust to accumulate.

---

## Architecture Decision

The new YY Method Home Edition will adopt yysworld's structure as its early construction kernel.

The target architecture is:

```text
human seed
  -> method/learner baseline
  -> quest or reasoning event
  -> snapshot before/after
  -> proof artifact
  -> graduation/comparison decision
  -> human projection
  -> machine-readable data projection
  -> freshness/revision loop
```

The first implementation does not need every runtime feature. It should, however, preserve the direction of travel:

- keep Markdown ADRs as reasoning records and public explanations
- introduce machine-readable method seeds before generated lessons or quests
- define schemas before accepting runtime learner/progression data
- treat proof artifacts as generated or assisted outputs with provenance, not as free-floating content
- keep human-facing pages as projections over explicit records
- expose an AI-readable data layer when the system begins generating quests, lessons, or learner state
- model family learning through comparisons and visible artifacts, not completion counters alone

The product can start small. It should not start amorphous.

---

## Consequences

**Near-term changes:**

- Case 011 gains an architecture ADR before any large product implementation.
- Future Case 011 product work should reference this ADR when adding seeds, schemas, quest records, progression data, AI personalization, or `yyworld` graduation flows.
- The current `yymethod-home` registry remains valid as the public archive and projection layer.

**Future implementation shape:**

- Add a `method/` or `records/` layer for seeds, quest events, learning snapshots, proof artifacts, graduation decisions, and comparisons.
- Add schemas for method seed, quest event, learning snapshot, proof artifact, badge/progression event, learner/family baseline, and graduation decision.
- Add a pipeline or controlled executor that creates assisted artifacts with package/model/role provenance.
- Add a static data API parallel to human pages once records become machine-readable.
- Keep professional/advisory patterns outside the family-first surface unless reduced to anonymized, generalized, mission-aligned proof artifacts.

**Invariants:**

- Real YY remains the emotional source; yysworld remains a kernel and lineage source, not the canonical emotional authority.
- AI may assist, generate, summarize, compare, and propose. AI may not define doctrine, promote sandbox material, grant badges, or override family/privacy boundaries.
- Progression measures demonstrated cognitive moves and proof artifacts, not page views or passive completion.
- Corrections are new records, not silent edits.
- Family proof is specific, inspectable, and privacy-aware.

---

## Commit

**Decision:** YY Method Home Edition will use yysworld's actual code structure as its early architecture kernel: versioned seeds, typed schemas, append-only records, explicit AI roles, generated artifacts with provenance, branch/comparison mechanics, static human projections, and machine-readable data projections. The Case 011 mental scaffolding supplies the purpose; the yysworld kernel supplies the construction discipline.

**Confidence:** High.

---

## Timestamp

2026-06-06
