# C8-020: Delayed Judging as a Structural Weakness in the Game Format
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-25
**Domain:** Integrity
**Depends On:** C8-005, C8-017
**Freshness Boundary:** Active. Applies to any iteration of this game format with end-of-round judging. Reverify if format changes to include real-time adjudication.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

In this game format, theme compliance is adjudicated at the end of the round — after all words are placed, all tiles are committed, and the full board is constructed. The judge's review happens once, after play is complete.

This is a structural feature of the format, not an oversight. Real-time adjudication would require a referee available throughout the entire round, interrupting play on each word placement, which would be operationally impractical for a community event with multiple simultaneous boards.

The end-of-round timing creates two specific structural weaknesses:

**1. Theme cascade risk:** If a judge rejects a word at the end of the round, that word is removed from scoring — and any words built downstream of it (using it as a connection point for subsequent plays) may also lose their scoring connection. A load-bearing word that anchors several downstream plays, if rejected, can collapse a significant portion of the board's point structure.

**2. Scoring error accumulation:** Without a live referee monitoring each scoring step, scoring errors — including premium square reuse — accumulate silently during the round. The judge reviews the board at the end but may not have the bandwidth or expertise to verify every scoring calculation against the physical board layout.

---

## Why

Both weaknesses have the same root cause: decisions made during play become commitments that cannot be reversed at adjudication time without cascading consequences.

**For theme compliance:** The player who places a borderline word early in the round builds subsequent words assuming that word's validity. When the judge rejects it at the end, the subsequent words may lose their board connection or their theme connection depending on the word's structural role. The player who uses the one-sentence test (C8-018) before placement mitigates this risk but cannot eliminate it if the judge applies a different standard than expected.

**For scoring integrity:** The player who keeps an accurate scorecard with explicit premium square tracking can verify their own score at the end. But in the format where scoring is self-managed and verification happens only at the end, another player's scorecard may contain errors that are not caught. End-of-round review by a judge who is not tracking the board construction sequence cannot easily reconstruct which premium squares were consumed when — particularly if the winning player's scorecard is the primary record.

The mitigation for both weaknesses is not to ask for live adjudication (which is impractical) but to reduce uncertainty through pre-play clarification (C8-021) and post-round transparency (C8-022).

---

## Why-Not

**Why not treat the delayed judging as a neutral feature with no correction needed?**
Delayed judging is operationally necessary. The weakness is real and its consequences are documented above. Acknowledging the weakness does not require changing the format — it requires adapting the strategy to account for the weakness. Pre-clarification before play and board display after play are the adaptations, not structural changes to how the event is run.

**Why not push for live adjudication to eliminate the weaknesses?**
Live adjudication would require a format change (a referee per board) that may not be feasible for a community event. The request would also likely be received as demanding special treatment. The structural adaptations available without changing the format are sufficient: ask about rules before play, apply the one-sentence test, speak in the moment if something seems wrong, and propose board display as a transparency mechanism.

**Why not just accept the risk and play without worrying about end-of-round rejection?**
Accepting the risk blindly is different from understanding the risk and managing it. Understanding that a rejected load-bearing word can cascade allows the player to minimize load-bearing dependence on borderline words — specifically, by building the board so that the structure does not depend on any word that fails the one-sentence test. The architecture of the board should be tolerant of a single-word rejection without cascading.

---

## Commit

**Decision:** Delayed judging is acknowledged as a structural weakness with two specific consequences: theme cascade risk and scoring error accumulation. The mitigations are C8-021 (pre-clarification), C8-022 (board display), C8-018 (one-sentence test before placement), and speaking in the moment if scoring appears inconsistent. The format is accepted as given; the adaptations are applied within it.

**Confidence:** High. The weakness is structural and the mitigations are proportionate.

---

## Timestamp

2026-04-25
