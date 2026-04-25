# C8-004: Accidental Multiplier Reuse — The Charitable Hypothesis
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-25
**Domain:** Integrity
**Depends On:** C8-001
**Freshness Boundary:** Permanent. The hypothesis is the operative position absent evidence of intentional misreporting. The principle of leading with the charitable explanation is a durable methodological commitment.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

A score above 2,500 was produced in this game format. The analysis in C8-006 through C8-008 establishes that such a score is functionally improbable under event conditions with proper premium square application. The question is: if not proper application, what?

The candidates are:

1. **Accidental multiplier reuse** — Triple Word squares that had already been consumed by a prior word were applied again when a subsequent word passed through the same square. In an informal event with self-managed scorecards, this error is easy to make: you look at the square, see "Triple Word," and multiply. The rule that the square is exhausted after first use requires active tracking that is easy to miss under time pressure.

2. **Deliberate score inflation** — Numbers were reported or recorded in excess of what the board actually produced, with awareness that they were inflated.

3. **Extraordinary legitimate play** — The score was correct and produced by valid play. The probability analysis in C8-008 is wrong, or the conditions under which the play occurred differed from what was observed.

This ADR chooses Option 1 as the operative hypothesis. Not because Option 2 is impossible. Because it is less supported by available evidence and more damaging to assume.

---

## Why

Accidental multiplier reuse is the natural error mode of this specific game format. In standard Scrabble, board management is continuous — players alternate turns, the board develops slowly, and errors are caught in real time by opponents. In this format, one player or team manages the entire board construction in a single session, under time pressure, tracking multiple words, multiple tile values, and multiple premium squares simultaneously. The scoring happens at the end, often from memory or from a rough running total. The specific error of applying a Triple Word multiplier to a word that passes through a previously used Triple Word square requires knowing, at scoring time, which squares have been consumed and by which words. Under conditions of time pressure and informal self-management, this tracking can fail silently.

The framing matters for every downstream decision. If the operative hypothesis is deliberate fraud, the appropriate responses are formal challenge and accusation. If the operative hypothesis is accidental error, the appropriate responses are pre-clarification (C8-021), transparency mechanisms (C8-022), and in-the-moment speaking up (C8-024). The charitable hypothesis produces more proportionate and more socially viable responses to the actual situation.

---

## Why-Not

**Why not hold both hypotheses equally without committing?**
Holding both equally produces paralysis in the response. The response to accidental error is transparency and pre-clarification. The response to deliberate fraud is formal accusation. These responses are incompatible. The default must be one or the other. Absent evidence tipping toward deliberate inflation, accidental error is the proportionate default.

**Why not acknowledge that the analysis might be wrong and Option 3 is possible?**
Option 3 (extraordinary legitimate play) is documented as the alternative in C8-008. The functional improbability framing specifically avoids claiming mathematical impossibility. The position is "improbable given these conditions," not "provably impossible." Option 3 is preserved as possible. It is not treated as the operative hypothesis because the preparation and geometry analysis in C8-006 through C8-009 make it the least supported of the three.

**Why not make the charitable hypothesis unconditional — never raise the concern at all?**
The charitable hypothesis is the default interpretation of the cause, not a commitment to silence. The concern about scoring integrity is real and warrants the structural responses (rule pre-clarification, board display proposal, in-the-moment speaking up). The charitable hypothesis is the answer to "what probably happened," not the answer to "is this worth addressing." It is worth addressing. The address is proportionate rather than accusatory.

---

## Commit

**Decision:** The operative hypothesis for any score above 2,500 in this format is accidental multiplier reuse — not deliberate inflation, not confirmed impossible. This hypothesis governs the social posture and the language used when raising the concern. "Premium squares are easy to accidentally reuse in this format" is the sentence. It is accurate, charitable, and actionable.

**Confidence:** High. The hypothesis is proportionate and consistent with the available evidence.

---

## Timestamp

2026-04-25
