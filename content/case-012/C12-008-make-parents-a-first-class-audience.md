# C12-008: Make Parents a First-Class Audience
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-07-17
**Domain:** Audience Evolution
**Depends On:** C12-007
**Freshness Boundary:** Active. Revisit if launch evidence, teacher feedback, user behavior, corpus quality, or safety review materially changes this decision.
**Source:** Public-safe synthesis from Violin Stand Partner drafting brief. Private evidence registry retained separately.

---

## Capture

Parents are routinely asked to help with:

- tuning;
- setup;
- reminders;
- instrument care;
- practice emotion;
- teacher instructions;
- scheduling;
- rehearsal preparation.

They often care deeply but lack violin-specific knowledge.

Parents helping children are not secondary users. Their needs shape the architecture.

## Why

A parent may:

- not know how to hold the violin;
- not know what normal looks like;
- be stressed;
- be under time pressure;
- be reacting to a distressed child;
- unintentionally create damage by trying to help.

## Why-Not

The rejected path would make make Parents a First-Class Audience too easy to treat as an implementation detail instead of a public boundary. The ADR preserves the tradeoff explicitly so later product work cannot silently widen authority.

## Commit

**Decision:** Parents helping children are not secondary users. Their needs shape the architecture.

- scene stabilization matters;
- protected point of view matters;
- exact “do not touch” boundaries matter;
- teacher communication matters;
- the product must assume low domain familiarity.

---

**Confidence:** Medium-high for public architecture; implementation details remain private and subject to launch evidence.

## Timestamp

2026-07-17
