# ADR Index — Local Scrabble-like Charity Event — Scoring Integrity, Competitive Strategy, Rule Ambiguity, and Clean Execution Under Constraint
**Method:** YY Method™ Home Edition v2.3
**Captured:** 2026-04-25
**Author:** Case Study Operator
**Freshness Boundary:** C8-001 through C8-005, C8-007, C8-010, C8-011, C8-019, C8-023, C8-025, C8-026 are permanent records. C8-008, C8-009, C8-012 through C8-018, C8-020 through C8-022, C8-024, C8-027, C8-028 are active and reverify after each tournament iteration.

---

## What This Case Is

A structured knowledge artifact capturing the full reasoning chain behind a local Scrabble-variant tournament strategy overhaul. The operator has won three of four prior years of the same tournament. After finishing 2nd in the most recent year despite extensive preparation, the case documents: an analysis of why a very high-scoring result was functionally improbable under the game's own rules; the emotional processing required to separate competitive frustration from structural evidence; a systematic correction of the prior preparation strategy; and the social and operational posture for the next tournament.

The case traverses six decision layers:

1. **Framing** — Is this a judgment-under-constraint problem, and what does the prior result signal?
2. **Integrity** — Is a score above 2,500 consistent with proper premium square application, and what is the most charitable explanation for a score that is not?
3. **Analysis** — What does the personal benchmark reveal, and what preparation errors need correction?
4. **Strategy** — What is the practical scoring engine, and how should the round be structured?
5. **Execution** — How should tiles be managed, letters purchased, and themes interpreted?
6. **Posture** — What is the correct social and governance stance before, during, and after play?

The reasoning chain includes explicit reversals: the shift from 15-letter core strategy to 9x expected-value strategy; the shift from strict theme enforcement to defensible gray-zone interpretation; the correction of the letter-count error. These reversals are preserved as scar records, not smoothed away.

---

## The Founding Argument in One Sentence

Finishing 2nd to a score that cannot be explained by proper rule application licenses exactly one response: clarify rules before play begins, propose that boards be displayed, and win clean.

---

## ADR Hierarchy

```
C8-001  Framing — The Game as a Judgment-Under-Constraint Problem          [FOUNDATIONAL]
    └── C8-002  Prior 2nd Place as Signal, Not Grievance                   [depends on C8-001]
        └── C8-003  Emotional Calibration — Separate Frustration from Evidence  [depends on C8-001, C8-002]
            └── C8-024  The 2nd Place Medal as a Prompt to Speak Earlier   [depends on C8-002, C8-003]
    └── C8-017  Theme Interpretation — Strict Purity to Defensible Gray Zone  [depends on C8-001]
        └── C8-018  The One-Sentence Theme Justification Standard          [depends on C8-017]
        └── C8-019  Strict Theme Enforcement Rejected (SCAR)               [depends on C8-017]
        └── C8-027  Play the Actual Game Being Run                         [depends on C8-017, C8-021]
            └── C8-028  Final Operating Posture for the Next Tournament    [depends on C8-012, C8-027]

C8-004  Accidental Multiplier Reuse — The Charitable Hypothesis             [FOUNDATIONAL]
    └── C8-005  Premium Square Exhaustion — Core Scoring Invariant         [depends on C8-004]
        └── C8-006  27x Plays Are Geometry-Constrained                     [depends on C8-005]
            └── C8-007  Letter Buying Cannot Explain Premium Square Access [depends on C8-006]
                └── C8-008  Score Above 2,500 as Functionally Improbable   [depends on C8-006, C8-007]
                    └── C8-009  Personal 1,500-Point Score as Benchmark    [depends on C8-008]
        └── C8-020  Delayed Judging as a Structural Weakness               [depends on C8-005, C8-017]
            └── C8-021  Pre-Clarify Rules Before Play, Not After Results   [depends on C8-004, C8-020]
                └── C8-022  Winning Board Display as Celebration and Audit [depends on C8-021]
                └── C8-026  Clean Victory — Win Under Objective Constraints [depends on C8-005, C8-021]
                    └── C8-025  Clean Defeat — What a Legitimate Win Looks Like [depends on C8-023, C8-026]

C8-010  Correction — Letter Count Discipline (SCAR)                        [INDEPENDENT CORRECTION]
    └── C8-011  15-Letter Words Reframed as Opportunistic Upside (CORRECTED) [depends on C8-010]
        └── C8-012  9x + High-Value Letter as the Practical Scoring Engine [depends on C8-011]
            └── C8-013  Round Structure — One Optimized + One Semi-Optimized [depends on C8-012]
                └── C8-014  Mid-Round Pivot Rule                           [depends on C8-013]
                └── C8-015  Physical Letter Staging                        [depends on C8-013]
            └── C8-016  Letter Buying — High-EV Alignment Only            [depends on C8-012]
            └── C8-029  Letter Buying as a Charitable Multiplier           [depends on C8-016, C8-027]

C8-003  Emotional Calibration                                               [see Framing branch]
C8-023  Commit Not to Relitigate the Prior Year                             [depends on C8-003, C8-008]
            └── C8-030  Prior Anomaly Resolved — Rule Clarification Closes the Integrity Question  [depends on C8-004, C8-005, C8-023]

C8-009  Personal 1,500-Point Score as Calibrated Benchmark                  [see Analysis branch]
C8-012  9x + High-Value Letter as the Practical Scoring Engine              [see Strategy branch]
    └── C8-031  Solvability Finding — Near-Deterministic Dominance          [depends on C8-009, C8-012]
        └── C8-032  No Intentional Underperformance                         [depends on C8-031]
            └── C8-033  Full Optimization Disclosure Rejected               [depends on C8-031, C8-032]
                └── C8-034  Role Transition — Competitor to Coach           [depends on C8-032, C8-033]
                    └── C8-035  Public and Private Reasoning Layers         [depends on C8-034]
                        └── C8-036  Final Principle — Solvable Systems      [depends on C8-034, C8-035]
```

---

## ADR Registry

| ID | Title | Domain | Status | Freshness |
|---|---|---|---|---|
| C8-001 | Framing — The Game as a Judgment-Under-Constraint Problem | Framing | Decided | Permanent |
| C8-002 | Prior 2nd Place as Signal, Not Grievance | Framing | Decided | Permanent |
| C8-003 | Emotional Calibration — Separate Frustration from Evidence | Framing | Decided | Permanent |
| C8-004 | Accidental Multiplier Reuse — The Charitable Hypothesis | Integrity | Decided | Permanent |
| C8-005 | Premium Square Exhaustion — Core Scoring Invariant | Integrity | Decided | Permanent |
| C8-006 | 27x Plays Are Geometry-Constrained | Integrity | Decided | Permanent |
| C8-007 | Letter Buying Cannot Explain Premium Square Access | Integrity | Decided | Permanent |
| C8-008 | Score Above 2,500 as Functionally Improbable | Integrity | Decided | Active — reverify if format changes |
| C8-009 | Personal 1,500-Point Score as Calibrated Benchmark | Analysis | Decided | Active — update after next tournament |
| C8-010 | Correction — Letter Count Discipline (SCAR) | Analysis | Decided — Correction | Permanent scar record |
| C8-011 | 15-Letter Words Reframed as Opportunistic Upside | Strategy | Decided — Partially Corrected | Permanent reframe |
| C8-012 | 9x + High-Value Letter as the Practical Scoring Engine | Strategy | Decided | Active — reverify if format changes |
| C8-013 | Round Structure — One Optimized + One Semi-Optimized | Strategy | Decided | Active |
| C8-014 | Mid-Round Pivot Rule | Strategy | Decided | Active |
| C8-015 | Physical Letter Staging | Execution | Decided | Active |
| C8-016 | Letter Buying — High-EV Alignment Only | Execution | Decided | Active |
| C8-017 | Theme Interpretation — Strict Purity to Defensible Gray Zone | Execution | Decided — Partially Corrected | Permanent reframe |
| C8-018 | The One-Sentence Theme Justification Standard | Execution | Decided | Active |
| C8-019 | Strict Theme Enforcement Rejected (SCAR) | Execution | Decided — Rejected | Permanent scar record |
| C8-020 | Delayed Judging as a Structural Weakness | Integrity | Decided | Active — reverify if format changes |
| C8-021 | Pre-Clarify Rules Before Play, Not After Results | Posture | Decided | Active |
| C8-022 | Winning Board Display as Celebration and Soft Audit | Posture | Decided | Active |
| C8-023 | Commit Not to Relitigate the Prior Year | Posture | Decided | Permanent |
| C8-024 | The 2nd Place Medal as a Prompt to Speak Earlier | Posture | Decided | Active |
| C8-025 | Clean Defeat — What a Legitimate Win Looks Like | Posture | Decided | Permanent |
| C8-026 | Clean Victory — Win Under Objective Constraints | Posture | Decided | Permanent |
| C8-027 | Play the Actual Game Being Run, Not the Idealized Version | Posture | Decided | Active |
| C8-028 | Final Operating Posture for the Next Tournament | Posture | Decided | Active — update after each tournament |
| C8-029 | Letter Buying as a Charitable Multiplier — Competitive Inspiration Without Compulsion | Posture | Decided | Permanent |
| C8-030 | Prior Anomaly Resolved — Rule Clarification as Retroactive Structural Evidence | Integrity | Decided | Permanent |
| C8-031 | Solvability Finding — Near-Deterministic Dominance Under Full Optimization | Analysis | Decided | Permanent |
| C8-032 | No Intentional Underperformance — The Integrity Constraint Is Symmetric | Posture | Decided | Permanent |
| C8-033 | Full Optimization Disclosure Rejected — Preserving the Event's Accessibility | Posture | Decided | Permanent |
| C8-034 | Role Transition — From Direct Competitor to Coach | Posture | Decided | Active — revisit after next event |
| C8-035 | Public and Private Reasoning Layers — The Abstraction Architecture of This Case | Posture | Decided | Permanent |
| C8-036 | Final Principle — On Participation in Systems You Can Solve | Posture | Decided | Permanent |

---

## Cascade Rules

If the game format changes significantly (extended time limit, formal scoring referee, pre-registered word lists) → re-evaluate C8-008, C8-012, C8-013, C8-014, C8-020, C8-027, C8-028; the plausibility ceiling and strategy engine both depend on current format constraints  
If the premium square rule is explicitly modified in this format → C8-005 and all downstream analysis must be re-evaluated from scratch  
If the operator's score at the next tournament substantially exceeds 1,500 → update C8-009 benchmark; recalibrate the plausibility analysis in C8-008 upward  
If the operator wins the next tournament with a clean board → C8-028 is validated; update as needed for the following year  
If the board display proposal (C8-022) is adopted by the event → C8-020's structural weakness is partially mitigated; update the cascade rules accordingly  
If a future opponent produces a score above 2,500 with a board that verifiably matches under the confirmed rules → C8-008 functional improbability claim requires revision  
If the operator finishes 2nd again → re-examine which of the 28 ADRs failed in execution and file corrections; the method applies to the registry itself
