# C8-010: Correction — Letter Count Discipline and the 15-Letter Word Error
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided — Correction
**Date:** 2026-04-25
**Domain:** Analysis
**Depends On:** None — independent correction record
**Freshness Boundary:** Permanent scar record. The correction stands regardless of future preparation. Mandatory letter-counting is a discipline that does not expire.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

During preparation for the tournament, the operator identified a set of candidate words for triple-lane plays — words intended to span two or more premium squares for high multipliers. The candidate set required 15-letter words that could fill an entire row or column on a standard board.

The following words were entered into the candidate set under the assumption of 15 letters:

- PREQUALIFICATIONS — assumed 15 letters. **Actual count: 16.** Disqualified.
- INSTITUTIONALIZING — assumed 15 letters. **Actual count: 18.** Disqualified.
- DECRIMINALIZATION — assumed 15 letters. **Actual count: 16.** Disqualified.

This error recurred across multiple words and multiple preparation sessions. The words were mentally categorized as "long enough for a triple lane" without being explicitly counted.

Words that were counted and confirmed at 15 letters:
- OXYPHENBUTAZONE — 15 letters, verified.
- PSYCHOANALYZING — 15 letters, verified.
- REVOLUTIONIZING — 15 letters, verified.

---

## Why

The error is significant enough to warrant a dedicated ADR because it recurred. A single miscounting incident is a one-time slip. A systematic pattern of assuming word lengths without verification is a bias — specifically, a tendency to overestimate the length of long words by pattern-matching on "feels like 15" rather than counting.

The consequences of this error in practice: a word carried through preparation and into a game situation that turns out to be 16 letters does not fit the 15-tile board row. The play fails at execution. Time is lost. The fallback position may not be ready because the failed play was the primary plan. Under time pressure, this kind of execution failure is costly.

The correction is simple: mandatory counting. Every word in the candidate set for premium-lane strategy must have its letters counted explicitly and verified before entry into the set. This is a discipline rule, not a suggestion.

---

## Why-Not

**Why not just verify at game time rather than in preparation?**
Game time is the worst moment to count letters. You are under time pressure, mid-board, tracking multiple decisions simultaneously. The counting should happen in the quiet of preparation when there is no cost to getting it right slowly. Deferring verification to game time produces the same error under worse conditions.

**Why not just use a dictionary or word-checking tool during preparation?**
Using a tool is appropriate and is what the corrected process should do. The point is that the process that was used — mental classification without explicit verification — is the one that produced the repeated error. The corrected process is: use the tool, count the letters, mark them as verified before they enter the candidate set. The tool prevents the bias from expressing.

**Why not just memorize fewer words and focus on counting accuracy for a smaller set?**
Smaller set with accurate counting is better than a larger set with unverified entries. The correction is not primarily about set size — it is about the verification step. The set can be as large as preparation time allows, provided each entry is verified.

---

## Commit

**Decision:** Mandatory letter-counting is established as a preparation discipline. No word enters the premium-lane candidate set without explicit letter verification (counted, or dictionary-confirmed). PREQUALIFICATIONS, INSTITUTIONALIZING, and DECRIMINALIZATION are removed from all candidate lists. OXYPHENBUTAZONE, PSYCHOANALYZING, and REVOLUTIONIZING are confirmed at 15 letters. This ADR is preserved as a scar record: the error recurred, which means the tendency is systematic, which means the correction must be explicit.

**Confidence:** High. The discipline is simple and the error is well-characterized.

---

## Timestamp

2026-04-25
