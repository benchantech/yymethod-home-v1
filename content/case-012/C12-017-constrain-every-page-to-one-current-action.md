# C12-017: Constrain Every Page to One Current Action
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-07-17
**Domain:** Daily Ritual and Page Architecture
**Depends On:** C12-016
**Freshness Boundary:** Active. Revisit if launch evidence, teacher feedback, user behavior, corpus quality, or safety review materially changes this decision.
**Source:** Public-safe synthesis from Violin Stand Partner drafting brief. Private evidence registry retained separately.

---

## Capture

Studio’s engine struggled with parallel branches and different action stages.

Each open page may contain extensive history but only one current action per day.

## Why

> Many pages may remain open. Each page receives only one active next move today.

This is one of the strongest architecture decisions because it emerged directly from platform behavior.

---

## Why-Not

- branches merged;
- actions leaked;
- stale context returned;
- one page affected another;
- the model produced several actions when only one was intended.

- exact state representation;
- branch keys;
- Studio-specific constraints;
- failure recovery logic.

## Commit

**Decision:** Each open page may contain extensive history but only one current action per day.

> Many pages may remain open. Each page receives only one active next move today.

**Public boundary:** This ADR publishes the judgment and product boundary while withholding exact prompts, routes, thresholds, schemas, tests, and other reproducible implementation details where applicable.

**Confidence:** Medium-high for public architecture; implementation details remain private and subject to launch evidence.

## Timestamp

2026-07-17
