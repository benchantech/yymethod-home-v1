# C4-009: Build a Command System with Progressive Promotion — Repeated Actions Earn Their Shortcut
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** System Architecture
**Depends On:** C4-005, C4-008
**Freshness Boundary:** Active. Reverify if the command taxonomy becomes brittle or if mobile ergonomics change substantially.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

The operator needs both flexibility and speed. The full range of possible commands cannot be predetermined — the work evolves, new operations arise, and the correct response to emerging conditions cannot always be anticipated.

At the same time, repetition should not remain expensive forever. A command issued dozens of times should become cheaper over time, not stay at the same raw-access cost indefinitely.

---

## Why

A layered command system preserves generality while allowing repetition to become ergonomic.

**Layer 1 — Raw access:** Full flexibility. Any command can be issued. No predefined structure required. This is the base layer from which everything else grows.

**Layer 2 — Named commands:** Reusable, documented operations that have been issued enough times to merit a stable name. Faster to invoke than raw shell, more transparent than opaque shortcuts.

**Layer 3 — Shortcuts and macros:** The most frequently repeated operations, promoted to one-tap or minimal-input invocation. These are earned, not assumed — they exist because repetition proved them necessary.

The direction of travel is always from raw access toward shortcut, never the reverse. Shortcuts are promoted from the command layer; they do not replace it. The base flexibility remains intact even after the shortcut exists.

---

## Why-Not

**Why not rely only on shortcuts?**
The future command set is unknown and emergent. Shortcuts cover the known-frequent; they cannot cover the unknown-future. A system with only shortcuts cannot respond to new conditions — the operator would need to reconfigure the shortcut surface every time a new operation arises. Raw access must remain the foundation.

**Why not rely only on raw shell access?**
Repetition should not remain expensive forever. A command that is issued every day has earned the right to be faster to invoke. Raw-only interaction accumulates friction as the work matures and patterns emerge. The command layer rewards discipline with reduced friction over time.

---

## Assumptions

- The command library can evolve safely as new operations are added and existing ones are promoted.
- Shortcut promotion remains subordinate to the command layer — a shortcut is a fast path into the command layer, not a replacement for it.

---

## Commit

**Decision:** Adopt a three-layer interaction model: raw command access for full flexibility, reusable named commands for structured operations, shortcuts and macros for the most-repeated actions. Promotion flows from raw to shortcut as repetition proves necessity. The base layer is never removed.

**Confidence:** High.

---

## Timestamp

2026-04-05
