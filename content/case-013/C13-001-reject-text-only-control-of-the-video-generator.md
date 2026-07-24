# C13-001: Reject Text-Only Control of the Video Generator

**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp

**Status:** Decided

**Date:** 2026-07-24

**Domain:** Control Surface

**Depends On:** None

**Freshness Boundary:** Active. Revisit if text-only systems reliably preserve identity, geometry, blocking, and narrative continuity across repeated generations.

**Source:** Public-safe synthesis from iterative AI video production. Exact prompts, generated clips, reference libraries, and platform-specific production fixtures remain private.

---

## Capture

The first production attempts treated the prompt as the complete control surface.

A single block of prose attempted to establish the people, the location, the objects, the camera, the movement, the emotional tone, and the story. The description could be accurate and still produce a scene that was wrong in several unrelated ways.

A child changed appearance. A violin case became another object. A departure read as an arrival. A teacher performed the correct emotion while looking at the wrong subject. Fixing one detail often disturbed three others.

The prompt was carrying decisions that had not actually been made anywhere else.

---

## Why

Text appeared to be the native language of the system.

The apparent promise was straightforward: describe the intended video more precisely and the model will render it more precisely. When the output failed, the natural response was to add more description.

This preserved the belief that control was primarily a writing problem.

---

## Why-Not

Repeated generations showed that prose was not fixing the scene. It was asking the generator to invent the scene while also obeying it.

The model had to choose identities, proportions, orientation, spatial relationships, implied motion, and visual emphasis from a large field of plausible interpretations. Longer prompts did not remove those decisions. They often introduced more opportunities for collision.

The first scar was therefore not a bad clip. It was the discovery that a comprehensive prompt can remain structurally underdetermined.

---

## Commit

**Decision:** Do not use prose as the sole control surface for a multi-shot AI video sequence.

Move stable decisions out of the prompt whenever another artifact can hold them more reliably. Establish story structure before generation, visual identity through approved imagery, spatial direction through composition, and reusable knowledge through recorded decisions.

Use text to direct what remains unresolved rather than to reconstruct the entire world on every attempt.

This decision immediately creates the next question: if the generator should not invent the whole story, how much story can one short sequence carry clearly?

---

## Timestamp

2026-07-24
