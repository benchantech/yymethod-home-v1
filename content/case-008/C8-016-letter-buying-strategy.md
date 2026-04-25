# C8-016: Letter Buying — Only When Unlocking High-EV Multiplier Alignment
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-25
**Domain:** Execution
**Depends On:** C8-012
**Freshness Boundary:** Active. Revisit if the cost of letter buying changes or if the scoring structure changes significantly.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

Players may buy additional letters at $5 each during the round. A purchased letter can be any letter — the buyer specifies which letter they want. This is a real strategic option, not a rare emergency measure.

The decision: when is buying a letter worth $5?

The naive heuristic is: buy when you need a tile to complete a word. This is too permissive — it approves $5 purchases for minor scoring completions where the incremental value of the word is $5 or less.

The correct heuristic: buy only when the purchase unlocks a specific high-EV multiplier alignment.

**High-EV multiplier alignment** means: the purchased tile will land on a Double Letter or Triple Letter bonus square as part of a 9x or higher-multiplier word. The incremental expected value of a tile landing on a DL square inside a 9x word is: (tile face value) × 2 × 9 = (tile face value) × 18 at the marginal contribution of just that tile. For a Z (face value 10): 10 × 18 = 180 marginal points. For $5, that is a 36:1 return.

This is the buy threshold: will the purchased tile land on a bonus square inside a premium-lane word?

---

## Why

The expected-value calculation for letter buying is straightforward when the buy is targeted:

**Strong buy case (Z for SQUEEZING on 9x lane with Z on DL):**
- SQUEEZING without Z: S(1)+Q(10)+U(1)+E(1)+E(1)+I(1)+N(1)+G(2) = 18 points face, before routing
- SQUEEZING with Z on DL inside 9x: approximately 342 points
- Delta: ~324 points from having Z vs. not having Z
- Cost: $5
- Expected value: extremely high

**Weak buy case (buying a vowel to complete a generic word with no premium alignment):**
- The generic word might produce 20–40 points total.
- The vowel contributes 1–3 face-value points to that total.
- Delta: 5–15 points from having the vowel vs. not
- Cost: $5
- Expected value: below break-even

The buying decision must be made against a specific identified play, not as general inventory replenishment. The question before buying is: "I know exactly which word I am building, I know exactly where this tile will land on the board, and I know that position is a premium square in a premium lane." If all three are true, buy. If any is uncertain, do not buy.

**Best buy targets:** Z (10), Q (10), X (8), J (8). These produce the highest delta between "have the tile in a premium alignment" and "don't have the tile."

---

## Why-Not

**Why not buy preemptively at round start to increase the tile pool?**
Preemptive buying without a specific identified play is speculative. The tile might turn out to be unusable in any high-EV position. Spending $5 on speculative tile pool expansion is low expected value compared to targeted buying when a specific play is in sight.

**Why not buy any tile that completes a potential 9x play?**
The tile must not only complete the word — it must land in a premium-square position within the word. A Z that completes a 9x word but lands in a low-value position (not on a bonus square) contributes 10 × 9 = 90 marginal points above a one-point tile's 9 marginal points — a 81-point premium for $5. Still good, but the DL-inside-9x case is far stronger. The threshold for buying should be higher than "completes the word" and include "lands in a bonus position."

**Why not set a fixed maximum spend per round on letter buying?**
A fixed maximum prevents the scenario where three highly valuable buys are available but the cap is exhausted after two. The correct constraint is the individual-play expected value calculation, not a round-level spend cap. If three Z purchases each produce 300 marginal points, spending $15 is correct. If the first Z produces 300 and the second would complete a marginal word, buying only the first is correct. Evaluate each purchase independently.

---

## Commit

**Decision:** Letter buying is approved only when the purchase unlocks a specific identified high-EV multiplier alignment — a tile that will land on a bonus square inside a premium-lane word. Best targets are Z, Q, X, J in that order. The decision is made against a specific play, not as general inventory management. Speculative buying is rejected.

**Confidence:** High. The expected-value framework is clear and the decision rule is specific.

---

## Timestamp

2026-04-25
