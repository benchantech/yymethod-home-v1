# C8-014: Mid-Round Pivot Rule — Preventing Decision Paralysis
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-25
**Domain:** Strategy
**Depends On:** C8-013
**Freshness Boundary:** Active. The rule applies whenever the round format has time pressure. Revisit only if the time limit changes substantially.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

The round has a fixed time window (approximately 20 minutes). The two-play structure in C8-013 identifies a primary and secondary play before board construction begins. During board construction, the primary play must be built toward.

The failure mode: the operator continues pursuing the primary play past the point where it can realistically be completed in the remaining time. The secondary play, which could have been executed with time remaining, is delayed or abandoned. The round ends with the primary play incomplete and the secondary play unexecuted — producing a low-scoring board built around an unrealized plan.

This failure mode is not a planning failure. It is an in-the-moment judgment failure driven by attachment to the primary plan. "I've already set up three tiles for this play — I can't abandon it now" is the mental model that produces the failure.

**The pivot rule:** If the primary optimized play is not within one or two moves of completion at the halfway point of the round, abandon it immediately and execute the secondary play.

---

## Why

Decision paralysis under time pressure costs more than executing a suboptimal play early. The math: a primary play that might produce 350 points but has a 30% chance of being completed in time has an expected value of 105 points. A secondary play that produces 250 points and has an 80% chance of completion has an expected value of 200 points. Even if the secondary play is objectively worse on raw point potential, it wins on expected value when time is the constraint.

The pivot rule makes this calculation pre-committed. Instead of solving it under time pressure at mid-round (when the sunk cost of the primary play's setup creates attachment bias), the operator decides the pivot threshold in advance and applies it mechanically. At the halfway mark, a binary check: am I within one or two moves? If yes, continue. If no, switch.

The word "immediately" matters. A pivot that becomes "let me think about this for a few more turns" is not a pivot — it is delayed capitulation after additional sunk cost. The pivot is a switch, not a gradual transition.

---

## Why-Not

**Why not assess the situation individually rather than applying a rigid rule?**
Individual assessment under time pressure is vulnerable to attachment bias. The operator who has invested five minutes building toward a primary play will consistently underestimate the probability of completing it in time. The rigid rule removes the assessment from conditions where the assessment is known to be biased. It is a pre-commitment device, not a substitute for judgment in general — it is a substitute for in-the-moment judgment specifically about this decision at this moment.

**Why not set the pivot threshold later — at 75% of time elapsed rather than 50%?**
A later threshold reduces the window for executing the secondary play. If the secondary play requires three to four moves to complete and only 25% of time remains, the secondary play may also fail. Setting the threshold at 50% preserves enough time to execute the secondary play cleanly. The correct threshold is the one that makes the secondary play reliably executable after the pivot.

**Why not run both the primary and secondary plays in parallel, hedging the board state?**
Parallel routing toward two different plays creates board conflicts — tiles committed to one routing may block the other. Attempting both simultaneously often produces neither cleanly. The two-play structure in C8-013 is sequential, not parallel: primary first, secondary after. The pivot rule maintains that sequencing discipline while providing the decision trigger for when to advance from primary to secondary.

---

## Commit

**Decision:** The mid-round pivot rule is: if the primary play is not within one or two moves of completion at the halfway mark, abandon it and execute the secondary play immediately. The rule is pre-committed and applied mechanically at the halfway mark without in-the-moment re-evaluation. "Immediately" means the next move begins constructing the secondary play, not "sometime soon."

**Confidence:** High. The pre-commitment structure addresses the known bias directly.

---

## Timestamp

2026-04-25
