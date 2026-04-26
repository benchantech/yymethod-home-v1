# C8-031: Solvability Finding — Near-Deterministic Dominance Under Full Optimization
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided — Correction
**Date:** 2026-04-26
**Domain:** Analysis
**Depends On:** C8-009, C8-012
**Freshness Boundary:** Permanent. The structural property of the system does not change unless the event format is substantially redesigned.
**Source:** Post-event reasoning session. 2026-04-26. Operator-corrected after AI smoothing error.

---

## Correction Notice

The first version of this ADR, written by the AI, stated: "The result was achieved without deploying all available optimization mechanisms — the highest-ceiling plays were not required to produce a decisive outcome. The 9x expected-value engine alone was sufficient."

This was wrong. The AI inferred the execution from the preparation strategy. Prior ADRs (C8-011, C8-013) framed 27x plays as "opportunistic upside, not core strategy" and "the bonus track, not the setlist." The AI read this as a description of what happened, not as preparation guidance about what to plan for. The two are different. The operator corrected the record.

---

## Capture

The operator won the event by a significant margin. Every board produced a 27x multiplier. The 9x plays were not the ceiling — they were the floor. The 27x plays were executed in every round.

This was not a theoretical scenario preserved from preparation for opportunistic use. It was the actual execution outcome. The 27x plays materialized, were completed within the time constraint, and contributed decisively to the margin.

---

## How 27x Was Achievable Under Time Pressure

The prior ADRs correctly identified that planning around 27x plays creates decision paralysis. A strategy that requires a 15-letter word to be available, the lane to be clear, the tiles to match, and the theme to be defensible — all simultaneously — is fragile as a plan. These ADRs were right.

What they did not predict is that the combination of Boggle technique and Scrabble technique makes the 27x executable in the moment even without having planned for a specific word in a specific configuration.

**Boggle technique:** Rapid scanning of the available tile set for word patterns under time pressure. No fixed target — adaptive discovery of what the tiles allow. The speed of pattern recognition across a scrambled letter set is the operative skill. This is the trained intuition that finds a long word in available tiles before the analytical mind would have finished constructing the search.

**Scrabble technique:** Once the Boggle scan surfaces a candidate word, Scrabble geometric knowledge routes it. Which premium lane does this word fit? Where does the highest-value tile land? How does the lane routing connect to the starting position? This is the strategic layer that converts a found word into maximum score.

The combination: Boggle scanning identified 15-letter word possibilities rapidly from the available tiles — possibilities that pure advance memorization would have missed if the tiles differed from the prepared lists. Scrabble geometry routed them onto the board for 27x. Neither skill alone was sufficient. Together they made the "opportunistic" 27x consistently executable.

This is the empirical reason the result was decisive by a large margin rather than merely competitive.

---

## Why This Is an AI Smoothing Error Worth Preserving

The AI's error in the first version of this ADR is a specific and instructive failure mode: **confusing preparation strategy with execution outcome**.

The prior ADRs said: do not plan around 27x as core strategy, because it creates fragile dependency on conditions that may not converge. That is correct preparation guidance. It does not say: 27x plays will not be executed. It says: do not structure the round plan around their necessity.

The AI read "27x is bonus track" from C8-011 and, when writing the post-event ADR, assumed that what was framed as a planning posture was also a description of what happened. It was not. The planning posture was correct; the actual execution exceeded the floor the planning posture set.

This error required the operator to rewrite C8-031 explicitly. The corrected record is preserved here because it illustrates the same principle as C8-010 (AI letter-count errors): AI will smooth based on prior context rather than capturing what actually happened, it sounds confident when doing so, and it takes operator challenge to surface the gap. The AI did not ask "what 27x plays were executed?" — it concluded from context that they were not. That conclusion was wrong.

**The discipline: challenge AI summaries of actual events the same way AI counts of letters are challenged. AI derives; the operator knows.**

---

## The Solvability Finding — Correctly Stated

The operator won by a significant margin. Every board produced a 27x multiplier, achieved through the combination of Boggle-speed tile scanning and Scrabble geometric routing. The 9x engine produced the baseline; the 27x plays produced the margin.

This reveals the true structural property of the event under full optimization: not merely "9x plays produce competitive scores" but "the combined Boggle/Scrabble technique makes 27x achievable in every round under this format's constraints." The ceiling of the optimized participant is higher than the preparation strategy framing suggested, because the preparation strategy was conservative by design.

The event is not designed to resist a participant who has both the rapid-scanning pattern recognition of a strong Boggle player and the scoring-geometry knowledge of a prepared Scrabble player simultaneously.

---

## Why-Not

**Why not conclude that the preparation strategy (27x as opportunistic) was wrong?**
The preparation strategy was correct as planning guidance. "Don't structure the round plan around 27x" is still the right posture. The execution result does not contradict this — it shows that a round plan not structured around 27x can still produce 27x plays when the Boggle/Scrabble skill combination is present. The strategy sets a floor; the skill combination raises the ceiling opportunistically in every round.

**Why not update the preparation strategy to plan around 27x now?**
The preparation strategy remains correct. Planning around 27x introduces fragile dependency; the correct posture is to treat 27x as always-available upside when conditions align, supported by Boggle scanning rather than memorized-word targeting. The correction here is to the description of what happened, not to the strategy itself.

---

## Commit

**Decision:** The correct post-event finding is: the operator won by a significant margin, with 27x multipliers executed on every board, through the combination of Boggle-speed tile pattern recognition and Scrabble scoring geometry. This is the empirical basis of the solvability finding. The prior AI-generated version, which omitted this and attributed the result solely to the 9x engine, was a smoothing error corrected by the operator.

**Confidence:** High. The corrected record reflects what actually happened.

---

## Timestamp

2026-04-26
