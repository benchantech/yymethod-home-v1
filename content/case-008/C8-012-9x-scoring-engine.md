# C8-012: 9x + High-Value Letter Premium as the Practical Scoring Engine
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-25
**Domain:** Strategy
**Depends On:** C8-011
**Freshness Boundary:** Active. Reverify if game format changes — board size, tile distribution, or premium square placement — that materially alter the 9x yield calculation.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

The practical scoring engine for this game format is the 9x play: a word that crosses from one Triple Word square to another along a TW–TW lane, with at least one high-value tile aligned on a Double Letter square within that word.

**Scoring mechanics of a well-structured 9x play:**

The standard 9x lane runs from an outer Triple Word square to an inner Triple Word square (or equivalent positions on the board). A word crossing both receives: face value of all tiles × word multiplier from TW1 × word multiplier from TW2 = face value × 9.

Adding a high-value tile on a Double Letter square within the word: the tile contributes (face value × 2) to the word's base value before the 9x multiplier applies.

**Example — SQUEEZING on a 9x lane with Z on Double Letter (Q at face value):**
- S(1) + Q(10) + U(1) + E(1) + E(1) + Z(10×2=20) + I(1) + N(1) + G(2) = 38 base value
- 38 × 9 = hundreds of points from that single play
- If Q also lands on a Double Letter square, base rises to 48 × 9 = still hundreds of points, higher still

**Example — MARZIPANS on a 9x lane with Z on Double Letter:**
- M(3) + A(1) + R(1) + Z(10×2=20) + I(1) + P(3) + A(1) + N(1) + S(1) = 32 base value
- 32 × 9 = hundreds of points from that single play

Two such plays in a round: 400–700 points from primary plays alone, before standard board scoring accumulates. This is a realistic target, not a theoretical ceiling.

---

## Why

The 9x play has structural advantages in every dimension that matters for this format:

**Probability of execution:**
- Shorter words (8–12 letters typical) have a vastly larger candidate set.
- The routing requirement is less stringent: 8–12 letters through a TW–TW lane is achievable from most starting positions.
- Tile availability: a 9-letter word requires fewer specific tiles than a 15-letter word.
- Theme compatibility: shorter words are more likely to be theme-defensible.

**Expected value per play:**
- A Z on a Double Letter square inside a 9x word contributes 180 extra points over a baseline score. That is high expected value from a single strategic decision.
- The expected value calculation is: (incremental points from alignment) × (probability of executing the play). Even at 70% execution probability, the 9x Z play has higher EV than the 27x play at 10% execution probability with a higher potential ceiling.

**Portfolio construction:**
- Two 9x plays are achievable within the 20-minute window. The plays are shorter, the routing is faster, and the board builds up efficiently.
- The two-play structure leaves time for standard scoring plays between them.

---

## Why-Not

**Why not focus entirely on 9x plays and abandon any longer-word strategy?**
15-letter plays are maintained as opportunistic upside per C8-011. They are not abandoned — they are reclassified. If a 15-letter lane opens and the tiles and theme align, executing it is obviously correct. The 9x structure is the default, not the maximum.

**Why not optimize for maximum tile-value plays without focusing on premium lanes?**
A high-value word without premium lane alignment produces face-value × 2 or face-value × 3 at best (from a single TW). The same word inside a 9x lane produces face-value × 9. Premium lane alignment is the dominant scoring multiplier. A word with moderate tile value inside a 9x lane outscores a word with very high tile value outside it in almost all cases.

**Why not just play as many words as possible and maximize board coverage?**
Volume of plays does not maximize expected score if the plays are not positioned on premium lanes. A board dense with 20-point words produces 200–400 points. Two strategic 9x plays produce 400–700 points. The expected-value frame favors concentration on premium positioning over volume.

---

## Word Candidates by Theme (Non-Exhaustive)

### 9x Plays — Primary Engine

Shorter words (8–12 letters) with high-value tiles that align with bonus squares in a TW–TW lane. These are the default plays.

**Food:** SQUEEZING (Q + Z), MARZIPANS (Z — 4th letter), GLAZING (Z), EQUALIZING (Q, Z), ANALYZING (Z)

**Transportation:** MOBILIZING (Z), JUNCTIONS (J), MAXIMIZING (X, Z)

**Science / General knowledge:** ANALYZING (Z), PARALYZING (Z), EXERCISING (X)

**Summer / outdoors:** BLAZING (Z), GLAZING (Z), MAXIMIZING (X, Z)

**General high-value:** REALIZING (Z), SUBJECTS (J — alignment dependent), JOCKEYING (J)

MARZIPANS is particularly reliable: Z lands at the 4th letter position, creating consistent Double Letter alignment in most lane routing configurations. SQUEEZING carries both Q and Z, making it the highest-potential single 9x play when both premium tiles can be aligned.

### 15-Letter Candidates — Opportunistic 27x Upside Only

These are not the round plan. Per C8-011, they are the bonus track — execute only if the triple lane is clear, the tiles are available, and the theme is defensible before mid-round. Do not design the round around them.

**Letter counts independently verified by manual count.** AI-stated letter counts are unreliable (C8-010): the LLM proposed PREQUALIFICATIONS (17), INSTITUTIONALIZING (18), and DECRIMINALIZATION (17) as 15-letter candidates — all wrong. The three words below were challenged and confirmed.

- **OXYPHENBUTAZONE** — 15 letters ✓ · Key tiles: X, Z, Q · Theme: science / pharmacology
- **PSYCHOANALYZING** — 15 letters ✓ · Key tile: Z · Theme: science / psychology
- **REVOLUTIONIZING** — 15 letters ✓ · Key tile: Z · Theme: general; one-sentence connection to most themes is constructible

---

## Commit

**Decision:** The 9x + high-value-letter-premium play is the primary scoring engine for this format. Round preparation focuses on identifying the strongest 9x candidates per theme (list above), understanding where Z/Q/X/J fall within those words, and routing them through available TW lanes. Two strong 9x plays per round is the target. The 15-letter candidates are held in reserve as 27x upside; they enter the plan only if conditions align before mid-round.

**Confidence:** High. The expected-value calculation strongly favors this approach over 15-letter-first strategy.

---

## Timestamp

2026-04-25
