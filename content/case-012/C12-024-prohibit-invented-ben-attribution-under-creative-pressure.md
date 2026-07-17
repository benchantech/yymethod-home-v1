# C12-024: Prohibit Invented Ben Attribution Under Creative Pressure
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-07-17
**Domain:** Coach and Conversational Authority
**Depends On:** C12-023
**Freshness Boundary:** Permanent. Revisit if launch evidence, teacher feedback, user behavior, corpus quality, or safety review materially changes this decision.
**Source:** Public-safe synthesis from Violin Stand Partner drafting brief. Private evidence registry retained separately.

---

## Capture

Testing showed that a model might resist unsupported factual quotation but still fabricate a Ben story when the user framed the request as creative.

The system may not invent Ben-specific stories, memories, quotes, motives, or positions even when explicitly asked to be creative.

## Why

Attribution failure is not solved by ordinary hallucination warnings.

The system must distinguish:

- fictional example;
- hypothetical teaching scenario;
- sourced Ben event;
- unsourced claim about Ben.

This ADR shows adversarial testing producing a new governing rule.

---

## Why-Not

- exact attack prompt;
- exact system fix;
- exact evaluation cases.

## Commit

**Decision:** The system may not invent Ben-specific stories, memories, quotes, motives, or positions even when explicitly asked to be creative.

The decision becomes a constraint on future product behavior and public positioning.

**Public boundary:** This ADR publishes the judgment and product boundary while withholding exact prompts, routes, thresholds, schemas, tests, and other reproducible implementation details where applicable.

**Confidence:** Medium-high for public architecture; implementation details remain private and subject to launch evidence.

## Timestamp

2026-07-17
