# C8-007: Letter Buying Cannot Explain Repeated Premium Square Access
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-25
**Domain:** Integrity
**Depends On:** C8-006
**Freshness Boundary:** Permanent. The logical relationship between tile composition and premium square access is fixed by the rules.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

Players may purchase additional letters for $5 each beyond the standard tile distribution. This is a legitimate mechanic in this game format. Buying a letter allows a player to acquire a tile not currently in their available set — enabling words that would otherwise be unplayable.

One explanation offered for unexpectedly high scores is that a team purchased many additional letters, increasing both their tile pool and the probability of high-value tiles being available for premium alignment.

This explanation is evaluated here.

---

## Why

Letter buying and premium square access are independent dimensions of scoring. Their independence is structural, not incidental.

**What letter buying affects:**
- Tile pool depth — more letters available to construct words.
- Tile composition — ability to acquire specific high-face-value tiles (Z, Q, X, J) that may not be present in the standard distribution.
- Word availability — a larger tile pool enables longer or higher-value words that would not be constructible from the standard distribution alone.

**What letter buying does not affect:**
- Which premium squares exist on the board.
- Which premium squares have already been consumed by prior plays.
- Whether a given premium square is available to the next word that lands on it.

A player who purchases ten additional letters and places a Z on a Double Letter square inside a 9x word scores more points than a player without that Z. That is correct and expected. Letter buying explains this.

A player who applies a Triple Word multiplier to a word that passes through a square already occupied by a prior word scores points that do not exist under the rules. Letter buying does not explain this. No number of purchased letters creates access to an exhausted premium square. The exhaustion is a board-state property, not a tile-pool property.

These are orthogonal dimensions. Letter buying answers the question "which tiles were available." It does not answer the question "which premium squares were available."

---

## Why-Not

**Why not accept that letter buying might explain the full score, just as a logical possibility?**
Letter buying can explain a higher score ceiling than the standard tile distribution would allow — more high-value tiles, better alignment opportunities. It cannot explain a score that requires applying multipliers from squares already consumed. These two components of the scoring puzzle require separate explanations. Letter buying is a complete explanation for one; it is not a partial explanation for the other.

**Why not accept that a team who bought many letters might have also had unusually good premium square alignment by luck?**
Luck in premium square alignment is possible — a favorable starting word, tile draws that happened to complete long words through available lanes. This is preserved as a partial explanation for unusually good scores. But luck in tile composition (which buying addresses) and luck in premium square availability (which buying does not address) are independent. Both being unusually favorable simultaneously is a conjunction of independent low-probability events. The conjunction further reduces the probability of a very high score arising from legitimate play without errors.

**Why not simply say the letter buying is irrelevant?**
It is not irrelevant to the scoring picture — it is relevant to tile composition and potentially relevant to score magnitude. It is specifically irrelevant to the premium square exhaustion question. That distinction matters: not "buying letters is not part of this analysis" but "buying letters answers a different question than the one being asked."

---

## Commit

**Decision:** Letter buying is recognized as a real and legitimate lever that explains higher face-value tile access. It is ruled out as an explanation for premium square access beyond what proper board geometry allows. Any score analysis that attributes excess points to letter buying must verify that the excess comes from tile composition, not from premium square reapplication. These are different calculations.

**Confidence:** High. The logical separation is clean and rules-based.

---

## Timestamp

2026-04-25
