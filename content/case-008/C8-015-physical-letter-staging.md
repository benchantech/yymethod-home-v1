# C8-015: Physical Letter Staging — Externalizing Working Memory
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-25
**Domain:** Execution
**Depends On:** C8-013
**Freshness Boundary:** Active. The technique applies to any iteration of this game format.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

At round start, tiles are available for selection from a shared pool (or a team's allocation). Before board construction begins, the operator needs to survey the available tiles and identify which ones are relevant to the planned plays.

The naive approach: hold the full tile inventory in memory while simultaneously planning board routing, evaluating word candidates, and tracking theme constraints. Working memory cannot hold all of this simultaneously under time pressure without degradation.

The staging technique: physically move candidate tiles into separate piles based on category, without placing them in word order on the board.

**Rule on pre-placement:** Tiles must not be pre-placed on the board in word order before they are officially played. This rule distinguishes "staging" (categorizing tiles in an off-board pile) from "pre-placement" (arranging tiles on the board before committing the play).

Staging categories:
- **High-value letters** — Z, Q, X, J (face values 10, 10, 8, 8): pulled first, held visible.
- **Premium-alignment candidates** — tiles likely to land on bonus squares: K (5), Y (4), V (4), W (4).
- **Word-building tiles** — vowels and common consonants needed to complete identified words.
- **Standard scoring tiles** — remaining tiles for general board filling.

Tiles in a pile are categorized, not committed. Moving a Z into the high-value pile does not reserve it for any specific word. It makes it visible and separates it from the noise.

---

## Why

Externalizing working memory to physical piles reduces cognitive load and accelerates tile-selection decisions.

**The cognitive load problem under time pressure:**
- The operator knows the primary play requires, e.g., a Z, a Q, and vowels to complete SQUEEZING.
- The tile pool contains 50+ tiles.
- Scanning 50+ tiles mentally while also tracking board routing, theme compliance, and time remaining is cognitively expensive.
- Physical staging converts the scan into a physical action: move high-value letters to a separate pile first, then check which target words are constructible from the staged set.

**The decision speed problem:**
- Staged tiles are visible without rescanning.
- Decisions about which word to play can be made against the staged pile ("I have Z and Q — SQUEEZING is playable") rather than reconstructed from memory each time a word is considered.
- This speeds up the early round when play-selection decisions are most consequential.

**The separation-of-concerns benefit:**
- Staging is inventory management. Board routing is word placement. Theme evaluation is content judgment. Keeping these phases distinct — stage tiles, then route the board, then evaluate theme — prevents the three tasks from interfering with each other under time pressure.

---

## Why-Not

**Why not just trust working memory and skip the staging step?**
Working memory under time pressure is unreliable for inventory tasks. The staging step has a small upfront cost (30–60 seconds) and a compounding benefit throughout the round. Skipping it transfers that cost to every subsequent decision as mental rescanning. The net cost of staging is negative.

**Why not place tiles in word order on the board immediately, which is faster?**
Pre-placement is prohibited. Even if it were permitted, committing tiles to a specific word early forecloses options if that word turns out to be unplayable (wrong theme, wrong length, premium lane blocked). Staging preserves optionality. Staging is reversible; board placement is not.

**Why not just pull tiles as needed rather than staging upfront?**
As-needed pulling requires scanning the full tile pool each time a new tile is needed. Staging concentrates the scan into one upfront pass. The cost of upfront staging is lower than the cumulative cost of repeated scanning.

---

## Commit

**Decision:** Physical letter staging is adopted as standard execution procedure. At round start: pull high-value tiles (Z, Q, X, J) first, into a visible pile. Pull premium-alignment candidates second. Pull word-building tiles for the primary and secondary plays. The remainder goes to the general pool. Piles are categories, not words. The staging step happens before any tile is placed on the board.

**Confidence:** High. The technique has clear cognitive load reduction value with no downside.

---

## Timestamp

2026-04-25
