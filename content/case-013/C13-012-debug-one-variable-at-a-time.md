# C13-012: Debug One Variable at a Time

**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp

**Status:** Decided

**Date:** 2026-07-24

**Domain:** Experimental Method

**Depends On:** C13-011

**Freshness Boundary:** Active. Revisit if future systems provide deterministic failure diagnostics and reliable causal attribution across prompt revisions.

**Source:** Public-safe synthesis from iterative AI video production. Exact prompts, generated clips, reference libraries, and platform-specific production fixtures remain private.

---

## Capture

When a generation failed, several things were often changed at once: wording, camera, body orientation, reference image, pacing, and constraints.

A successful revision did not reveal which change mattered. A failed revision did not reveal which change made the result worse.

The outputs improved occasionally, but the method did not.

---

## Why

Changing several suspected problems together appeared efficient.

Each generation consumed time and credits, so combining fixes seemed likely to reach an acceptable clip faster.

---

## Why-Not

Simultaneous changes destroyed attribution.

The workflow accumulated examples rather than evidence. A good result became difficult to reproduce because its cause remained unknown.

The scar was discovering that trial and error can produce a clip while leaving the production system ignorant.

---

## Commit

**Decision:** Change one primary variable at a time whenever practical.

Isolate camera behavior, subject objective, geometry, reference frame, or prompt wording. Observe the result before introducing another change.

The goal of an iteration is not only to improve the clip. It is to learn one transferable fact.

Some failures still arrive without useful explanation because another system sits outside the generation model. That boundary must be treated differently.

---

## Timestamp

2026-07-24
