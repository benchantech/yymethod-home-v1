# C6-002: Signal Before Elegance — Ship Canonical Signals on Current Infrastructure
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Domain:** Strategy
**Depends On:** None — governing principle
**Freshness Boundary:** Permanent. The principle does not expire. Infrastructure changes; signal quality does not require infrastructure to change.
**Source:** Operator oral decompression. 2026-04-05.

---

## Capture

The default instinct when beginning an identity consolidation project is to wait. Wait until all properties are on the same stack. Wait until the hub has been migrated to a modern framework. Wait until everything is architecturally clean before signaling. This is the trap.

Signal Before Elegance is the governing principle that breaks the trap. The signal is the work. The infrastructure is delivery. A correct Person schema on a Jekyll static site is identical in machine-readable value to the same schema on a Next.js application. The HTML output is what matters; the framework that generates it does not appear in the output.

This principle was formalized after a direction reversal in the project. An early proposal to migrate the hub to Next.js before implementing the identity signal was reversed when the question was put plainly: does the migration change the signal quality? The answer was no.

---

## Why

The identity signal — Person schema, canonical @id, sameAs array, hub landing copy — exists independently of the stack that serves it. The schema.org vocabulary does not have a preferred rendering framework. Google and LLMs that process structured data are reading HTML, not reading which framework generated it.

Waiting for the right stack means deferring the compounding benefit of a correct signal for months or years. If the migration timeline is six months, every day of deferral is a lost day of entity graph consolidation. If the migration slips — which migrations do — the deferral compounds. If the migration never happens, the signal was never shipped.

The signal is also relatively cheap to ship on current infrastructure. The schema lives in an `<include>` file. The hub landing redesign is a day of work. The migration, if it ever happens, can proceed independently on its own schedule. There is no sequencing dependency between signal quality and stack quality.

---

## Why-Not

**Why not migrate first, then signal?**
Migration timelines slip. Signaling benefits start on day one. There is no functional dependency between stack and signal — the dependency is imagined. Shipping signal on current infrastructure is not a temporary workaround; it is the final answer for as long as the stack holds.

**Why not signal imperfectly now and correct later?**
A correct signal on current infrastructure is not imperfect. The concern is aesthetic, not functional. Functional correctness is independent of aesthetic preference for a particular stack. If the schema is right, the signal is right.

**Why not defer to avoid rework if migration is imminent?**
Even a six-month migration timeline represents a non-trivial compounding window. The sunk cost of shipping the schema on Jekyll is negligible — the schema is portable. A migration does not require the schema to be rewritten; it requires the schema to be included in the new layout.

---

## Commit

**Decision:** Ship the correct signal on whatever infrastructure exists today. Do not gate on stack. Do not gate on migration plans. Signal first; elegance is a separate and subordinate concern.

**Confidence:** High. Verified against a concrete direction reversal in this project. The principle is durable.

---

## Timestamp

2026-04-05
