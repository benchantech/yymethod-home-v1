# C12-002: Define the Missing Interval as “Between Lessons”
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-07-17
**Domain:** Product Origin and Identity
**Depends On:** C12-001
**Freshness Boundary:** Permanent. Revisit if launch evidence, teacher feedback, user behavior, corpus quality, or safety review materially changes this decision.
**Source:** Public-safe synthesis from Violin Stand Partner drafting brief. Private evidence registry retained separately.

---

## Capture

Ben’s experience as a teacher showed that progress is frequently lost outside the lesson:

- students forget what the teacher meant;
- parents do not know what to reinforce;
- observations disappear;
- practice questions accumulate;
- the next lesson begins with reconstruction;
- small confusions become repeated habits.

The app could have focused on:

- technique instruction;
- repertoire coaching;
- practice tracking;
- motivation;
- video analysis;
- lesson replacement;
- teacher dashboards.

The product’s primary problem space is the interval between moments of human instruction.

## Why

It aligned with a real repeated teaching problem rather than a generic technology opportunity.

It also created a natural authority boundary:

- the teacher remains the teacher;
- the app supports continuity;
- the app can help preserve questions and evidence;
- the app can prepare the user for better human interaction.

## Why-Not

The rejected path would make define the Missing Interval as “Between Lessons” too easy to treat as an implementation detail instead of a public boundary. The ADR preserves the tradeoff explicitly so later product work cannot silently widen authority.

## Commit

**Decision:** The product’s primary problem space is the interval between moments of human instruction.

- teacher integration becomes essential;
- memory architecture becomes important;
- the daily ritual must be small enough to sustain;
- the app’s value can exist even when it does not solve the full problem.

Technique instruction and media still belong in the product, but as routed support rather than the central identity.

---

**Confidence:** Medium-high for public architecture; implementation details remain private and subject to launch evidence.

## Timestamp

2026-07-17
