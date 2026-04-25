# C8-010: Correction — AI Miscounted the 15-Letter Words; Operator Challenge Caught It
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided — Correction
**Date:** 2026-04-25
**Domain:** Analysis
**Depends On:** None — independent correction record
**Freshness Boundary:** Permanent scar record. LLMs have a documented, persistent weakness with letter counting. The discipline of challenging AI counts does not expire.
**Source:** Operator reasoning session. 2026-04-25.

---

## Capture

During AI-assisted preparation, the operator asked an LLM to generate candidate 15-letter words for triple-lane play — words that could fill an entire row or column on a standard 15×15 board. The LLM returned the following words as 15-letter candidates:

- **PREQUALIFICATIONS** — stated as 15 letters by the AI. **Actual count: 16.** Disqualified.
- **INSTITUTIONALIZING** — stated as 15 letters by the AI. **Actual count: 18.** Disqualified.
- **DECRIMINALIZATION** — stated as 15 letters by the AI. **Actual count: 16.** Disqualified.

The operator challenged the AI's counts. The challenges caught the errors before they reached game execution. Without the challenge, these words would have entered the candidate set and failed at the board.

Words that were independently verified at exactly 15 letters:
- OXYPHENBUTAZONE — 15 letters, verified by count.
- PSYCHOANALYZING — 15 letters, verified by count.
- REVOLUTIONIZING — 15 letters, verified by count.

---

## Why This Is an AI Error, Not an Operator Error

The error class here is not "operator failed to count carefully." It is "AI returned confident, incorrect counts and the operator's challenge process is what caught it."

Large language models do not count letters by enumeration. They process text as tokens — chunks of characters that often correspond to subwords rather than individual letters. When asked "how many letters does PREQUALIFICATIONS have," an LLM does not spell the word out and count; it pattern-matches against training data and produces a number that feels associatively correct. The number is often wrong, and crucially, the model produces it with the same confidence as a factually grounded answer. There is no uncertainty signal that indicates "I'm guessing here."

This failure mode is well-documented and consistent. It is not a one-time hallucination on an unusual word — it recurs across multiple words, multiple prompts, and multiple sessions. An LLM that miscounts one long word will miscount others. The errors are not random; they cluster around words that are plausibly close to the target length (16 is close to 15; the model isn't off by 10, it's off by 1 or 2 in a way that looks credible).

**The implications for any AI-assisted preparation workflow:**
- AI-generated letter counts are unreliable by default.
- The unreliability does not announce itself — the AI sounds certain.
- The only reliable path is to treat every AI-stated letter count as unverified until independently confirmed.

---

## Why

The error recurred. A single miscounted word could be a fluke. Three miscounted words across the same preparation session confirms a systematic weakness, not an edge case. Any workflow that accepts AI letter counts without verification will be contaminated by this error repeatedly.

The consequences in game execution are severe. A 16-letter word that was prepared as a 15-letter candidate does not fit the board row. The play is impossible. Time is consumed discovering the failure. The fallback position may not exist because the preparation was built around the failed word. Under the 20-minute time pressure of the actual game, discovering mid-round that your primary play is one tile too long is a significant and avoidable loss.

The operator's challenge instinct — "let me verify that count" — was the correct behavior. This ADR exists to encode that instinct as a standing rule rather than an ad-hoc impulse, because the next time an LLM provides a word count, the correct behavior is the same: challenge it, verify it independently, never accept it as stated.

---

## Why-Not

**Why not just use AI for initial suggestions and manually verify everything before use?**
Yes — that is exactly the corrected process. The ADR does not reject AI assistance in preparation; it rejects accepting AI-stated letter counts without independent verification. AI is useful for generating candidate words across themes and tile combinations. It is unreliable for verifying that those words meet the 15-letter constraint. The workflow is: AI for generation, human (or dictionary) for verification.

**Why not prompt the AI more carefully to get accurate counts?**
Constraining the prompt reduces the error rate somewhat but does not eliminate it. An LLM asked "give me only words that are exactly 15 letters, and count each one carefully before responding" will still miscount on some fraction of words. The constraint helps; it does not make AI counting reliable. The only ground truth for letter count is manual enumeration or a deterministic tool. Prompt engineering is a supplement to verification, not a replacement for it.

**Why not accept a small error rate as tolerable since manual verification catches it anyway?**
The error rate is not small — it is systematic. And "manual verification catches it anyway" is only true if the discipline of always challenging is maintained. The failure mode this ADR guards against is the session where the operator skips the verification step because the AI sounded confident. That is exactly when the wrong word enters the candidate set. The discipline must be unconditional: challenge every AI-stated count, every time, regardless of how confident the AI appears.

---

## Commit

**Decision:** AI-stated letter counts are treated as unverified until independently confirmed by manual count or dictionary lookup. No word enters the premium-lane candidate set on the basis of an AI count alone. PREQUALIFICATIONS (16), INSTITUTIONALIZING (18), and DECRIMINALIZATION (16) are removed permanently. OXYPHENBUTAZONE (15), PSYCHOANALYZING (15), and REVOLUTIONIZING (15) are confirmed. The operator's challenge process caught the errors; the discipline is to make that challenge process mandatory and automatic rather than ad-hoc.

**Confidence:** High. The LLM counting failure is documented, systematic, and the mitigation is straightforward.

---

## Timestamp

2026-04-25
