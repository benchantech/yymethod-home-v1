# C12-006: Define the Product’s Governing Promise
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-07-17
**Domain:** Product Origin and Identity
**Depends On:** C12-005
**Freshness Boundary:** Permanent. Revisit if launch evidence, teacher feedback, user behavior, corpus quality, or safety review materially changes this decision.
**Source:** Public-safe synthesis from Violin Stand Partner drafting brief. Private evidence registry retained separately.

---

## Capture

The promise changed as the architecture changed.

Earlier possible promises were broader:

- practice better;
- get AI violin coaching;
- solve problems between lessons;
- receive personalized instruction.

These became less defensible as safety and authority boundaries matured.

The app’s promise is not mastery, instant diagnosis, or comprehensive instruction.

## Why

> Violin Stand Partner helps players and parents notice what matters, take one appropriate next step, preserve what was learned, and return better prepared to human judgment.

## Why-Not

The rejected path would make define the Product’s Governing Promise too easy to treat as an implementation detail instead of a public boundary. The ADR preserves the tradeoff explicitly so later product work cannot silently widen authority.

## Commit

**Decision:** The app’s promise is not mastery, instant diagnosis, or comprehensive instruction.

> Violin Stand Partner helps players and parents notice what matters, take one appropriate next step, preserve what was learned, and return better prepared to human judgment.

Every feature should be tested against the promise:

- Does it help notice?
- Does it improve the next step?
- Does it preserve useful evidence?
- Does it prepare human judgment?
- Does it avoid claiming authority it does not possess?

---

**Confidence:** Medium-high for public architecture; implementation details remain private and subject to launch evidence.

## Timestamp

2026-07-17
