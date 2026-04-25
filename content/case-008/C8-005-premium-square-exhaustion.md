# C8-005: Premium Square Exhaustion — The Core Scoring Invariant
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-25
**Domain:** Integrity
**Depends On:** C8-004
**Freshness Boundary:** Permanent. Standard Scrabble rules on premium square usage are stable and do not expire. This invariant governs all scoring calculations in this case.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

In standard Scrabble rules (and in this game format, which uses a standard Scrabble board with standard premium square placement), a premium square may only be used once. Specifically:

- **Double Letter (DL):** Doubles the face value of the tile placed on it — but only for the first word that places a tile there. Any subsequent word that passes through that square does not receive the multiplier.
- **Triple Letter (TL):** Same principle, letter multiplier.
- **Double Word (DW):** Doubles the whole-word value — but only for the first word to land on it.
- **Triple Word (TW):** Triples the whole-word value — but only for the first word to land on it.

The consequence: once a Triple Word square has been occupied by any letter (by any word, from any direction), that square is exhausted for scoring purposes. Any word that later extends through or crosses that square treats the tiles on it as face-value tiles only.

This applies within a single board construction as well as across turns in standard Scrabble. If you play the word REVOLUTION and later play REVOLUTIONIZING, the Triple Word squares that REVOLUTION landed on are already consumed. REVOLUTIONIZING cannot reapply them. A score that treats them as available for the second play is incorrect under the rules.

---

## Why

This invariant is the fulcrum of the entire plausibility analysis. Without it, any score can be constructed post hoc by selecting words and applying multipliers retroactively. With it, every claimed score must be consistent with a physical board layout where each premium square is used at most once.

The practical magnitude of the error is substantial. Consider a simple case:

- A word scores 300 points through a 27x multiplier.
- A second word later passes through one of those same Triple Word squares.
- If the second word incorrectly reapplies a 9x multiplier to a 180-point word, it adds 180 points to the total.
- The correct score for that second word, with the exhausted square at face value, might be 20 points.
- The error contributes 160 phantom points.

Scale this across multiple plays and the inflation can reach hundreds or thousands of points. Premium square exhaustion is not a technical edge case — it is the mechanism that constrains the scoring ceiling. Every plausibility calculation in this case begins here.

---

## Why-Not

**Why not accept that this rule might be applied differently in this game format?**
The format uses standard Scrabble rules except where explicitly modified (no bingo bonuses, modified tile availability via purchase). Premium square exhaustion is not a modified rule — it is a standard rule that the format inherits. If the format had modified this rule, it would be explicitly stated. Absent such modification, the standard rule applies. The question is not whether the rule exists; it is whether it is being tracked and applied correctly in an informal self-scored format.

**Why not treat premium square exhaustion as too esoteric for a community event?**
The rule is not esoteric — it is the basic mechanics of how Scrabble scoring works. It is not buried in an advanced rulebook; it is in the standard game rules. Labeling it esoteric implies that informal events are exempt from the rules of the game they are playing. They are not. The informality affects enforcement reliability, not rule applicability.

**Why not focus on other scoring factors instead?**
Other factors (tile face values, letter multipliers, word count) matter. They do not produce the magnitude of distortion that incorrect premium square application produces. A point or two here and there from other errors does not change a score by hundreds of points. Repeated Triple Word misapplication does. The invariant is emphasized because it is the highest-leverage scoring integrity point in this format.

---

## Commit

**Decision:** Premium square exhaustion is the core scoring invariant. Every score evaluation in this case — personal ceiling, plausibility analysis, opponent score assessment — applies this rule consistently. No word may claim a premium multiplier from a square already occupied by a prior word. The rule is stated before play begins (C8-021) and applied cleanly to the operator's own board (C8-026).

**Confidence:** High. The rule is unambiguous and foundational.

---

## Timestamp

2026-04-25
