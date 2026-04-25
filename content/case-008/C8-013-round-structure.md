# C8-013: Round Structure — One Optimized + One Semi-Optimized Play
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-25
**Domain:** Strategy
**Depends On:** C8-012
**Freshness Boundary:** Active. Revisit if round time changes significantly or if game variant introduces different play constraints.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

Given the 9x scoring engine in C8-012, the question becomes: how do you structure the round to reliably capture expected value from two strong plays within the available time?

The round structure is: identify one primary optimized play and one secondary semi-optimized play before or early in board construction. Both should be 9x candidates. The primary play should target the best available premium lane with the best available tile combination. The secondary play is the next-best option.

**Primary optimized play:** Best available 9x lane + highest-value tile alignment. Ideal example: Z on Double Letter in a 9x word. Target to execute this first when possible, because executing it first leaves the premium lanes needed for the secondary play intact.

**Secondary semi-optimized play:** Next-best 9x lane + adequate tile alignment. May not have Z/Q/X/J alignment but still executes a 9x word with solid base-tile value. This play completes the scoring engine even if the primary play is excellent — or it becomes the primary play if the intended primary play cannot be executed.

Standard scoring plays fill the board after the two structured plays. These contribute cumulative points from lower-multiplier positions and do not require advance planning.

---

## Why

The two-play structure solves a specific problem: single-play optimization can produce high-expected-value rounds when the primary play lands, and catastrophically low-expected-value rounds when it does not. The round with no backup plan produces either a great result or a mediocre result depending entirely on whether the primary play materialized.

The two-play structure provides a floor. Even if the primary play fails to materialize or scores less than expected:

- The secondary play is already identified and ready to execute.
- The round does not depend on a single opportunity converging.
- Time is not wasted searching for a better play that may not exist.

The ceiling is higher with two structured plays than with one, because the primary play is attempted first (while the board is clean and premium lanes are open), and the secondary play follows on the next available lane.

The two-play structure also prevents over-complexity. More than two pre-planned plays creates a combinatorial explosion of routing dependencies — a word placed for play 3 might block the lane for play 2, which was supposed to connect to play 1. Two plays is the right planning horizon for a 20-minute format.

---

## Why-Not

**Why not plan three or four plays in advance?**
Three and four-play planning increases routing complexity beyond what can be reliably executed in real time. Each additional planned play creates more potential conflicts with the board state as it evolves. The expected value of a poorly executed four-play plan is often lower than a well-executed two-play plan. Two is the right depth.

**Why not rely on finding plays opportunistically rather than planning in advance?**
Opportunistic discovery in a 20-minute format produces lower expected value than advance identification because: (a) the best plays often require specific tile combinations that must be recognized before the board develops in ways that block them; (b) premium lanes close as words are placed, and recognizing the best lane early means acting on it before it narrows. Planning the primary play before it is foreclosed by normal board development is strategically superior to discovering it after.

**Why not always execute the secondary play regardless of how the primary play went?**
If the primary play succeeded and produced 300+ points, the secondary play should still be executed if the lane is still available. Both plays are always attempted. The secondary play is not contingent on primary play failure — it is the second element of a two-element scoring engine, both of which contribute.

---

## Commit

**Decision:** Every round begins with identification of a primary optimized play and a secondary semi-optimized play, both targeting 9x lanes. Primary play is executed first when possible (to protect the board state for the secondary). Secondary play is executed as the lane becomes available. Standard scoring fills the board after. This is the round structure.

**Confidence:** High. The structure is simple, reliable, and directly connected to the expected-value engine.

---

## Timestamp

2026-04-25
