# C13-004: Separate Camera Direction From Subject Direction

**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp

**Status:** Decided

**Date:** 2026-07-24

**Domain:** Scene Construction

**Depends On:** C13-003

**Freshness Boundary:** Active. Revisit if future systems consistently infer cinematic blocking without explicit separation of camera and subject instructions.

**Source:** Public-safe synthesis from iterative AI video production. Exact prompts, generated clips, reference libraries, and platform-specific production fixtures remain private.

---

## Capture

Prompts often described a scene in one blended sentence: a parent leaves the house waving while the camera follows.

To a human director, this is ordinary shorthand. To the generator, it combined camera movement, body orientation, travel direction, gaze, destination, and timing.

The character sometimes walked correctly while facing incorrectly. The camera drifted away from the action. A wave intended for the house pointed toward the destination. The departure could read as a return.

---

## Why

Human filmmaking language assumes separate departments and shared physical understanding.

A director can state the desired impression and trust people to coordinate the camera and performance. Writing the prompt in the same style felt natural.

---

## Why-Not

The generator did not coordinate departments. It synthesized all requested motion at once.

When camera and subject movement occupied the same descriptive space, they influenced each other unpredictably. Additional adjectives did not solve the structural ambiguity.

The scar was learning that one coherent sentence for a human can represent several conflicting motion systems for a generator.

---

## Commit

**Decision:** Specify camera behavior and subject behavior as independent layers.

Define the camera's position, framing, and motion separately from each subject's location, orientation, destination, and objective. Add environmental motion only after those systems are clear.

Separating the layers exposes another weakness: even a correctly blocked subject can perform an abstract emotional instruction unpredictably.

---

## Timestamp

2026-07-24
