# C12-027: Separate Observation From Interpretation
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-07-17
**Domain:** YY Method as Runtime Behavior
**Depends On:** C12-026
**Freshness Boundary:** Permanent. Revisit if launch evidence, teacher feedback, user behavior, corpus quality, or safety review materially changes this decision.
**Source:** Public-safe synthesis from Violin Stand Partner drafting brief. Private evidence registry retained separately.

---

## Capture

Observation:

- the bridge appears more tilted than yesterday;
- the string slips after tuning;
- the child reports pain near the thumb;
- the shift lands inconsistently.

Interpretation:

- the bridge is unsafe;
- the peg is defective;
- the child has poor technique;
- the shift problem is caused by tension.

The system must ask what happened before concluding what it means.

## Why

This decision matters because separate Observation From Interpretation constrains the product toward continuity, evidence, and human judgment rather than broad AI helpfulness.

## Why-Not

The rejected path would make separate Observation From Interpretation too easy to treat as an implementation detail instead of a public boundary. The ADR preserves the tradeoff explicitly so later product work cannot silently widen authority.

## Commit

**Decision:** The system must ask what happened before concluding what it means.

This improves safety, diagnosis quality, and teacher communication.

---

**Confidence:** Medium-high for public architecture; implementation details remain private and subject to launch evidence.

## Timestamp

2026-07-17
