# C13-015: Separate Asset Creation From Scene Direction

**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp

**Status:** Decided

**Date:** 2026-07-24

**Domain:** Production Workflow

**Depends On:** C13-014

**Freshness Boundary:** Active. Revisit if future systems reliably create and direct consistent assets in one generation without reducing diagnosability or reuse.

**Source:** Public-safe synthesis from iterative AI video production. Exact prompts, generated clips, reference libraries, and platform-specific production fixtures remain private.

---

## Capture

Early prompts attempted to create the character, establish the room, choose wardrobe, compose the frame, direct the camera, and animate performance in one pass.

When the result failed, the cause was unclear. Correcting the character changed the room. Correcting the room changed the pose. Correcting the pose changed the performance.

---

## Why

A single generation promised speed.

If it succeeded, the entire scene would be finished without intermediate asset work.

---

## Why-Not

Asset creation determines what exists. Scene direction determines what established elements do.

Combining them forced foundational and cinematic decisions to change together. This reduced attribution, continuity, and reuse.

The scar was learning that apparent workflow compression can multiply uncertainty.

---

## Commit

**Decision:** Create, approve, and preserve visual assets before directing them in motion whenever practical.

Use the asset stage to settle identity, wardrobe, prop design, environment, and base composition. Use the scene stage to control action, interaction, timing, and camera behavior.

This separation makes individual scenes easier to build. The next standard is whether the method can be repeated rather than whether one output happened to succeed.

---

## Timestamp

2026-07-24
