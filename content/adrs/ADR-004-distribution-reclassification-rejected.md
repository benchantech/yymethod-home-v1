# ADR-004: Distribution Reclassification — Considered and Rejected
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided — Rejected
**Date:** March 29, 2026
**Depends On:** ADR-002, ADR-003
**Freshness Boundary:** Permanent record. This decision cannot be revisited after March 31. No expiration — the window is closed.

---

## Capture

~$30k was taken as S corp distributions in Q1 2026 (January–March). These were characterized as distributions at the time — not wages. Distributions are not subject to FICA and cannot serve as the basis for 401(k) contributions.

The question arose: could these distributions be reclassified as wages retroactively, run through payroll, and used to increase the 401(k) contribution basis before March 31?

The answer: technically possible in principle. Decided against in practice.

---

## Why the Reclassification Was Considered

At a 29% combined marginal rate (24% federal + 5% State — see ADR-007) with Medicare-only FICA on incremental wages (employer W-2 will exceed SS wage base), the 401(k) shelter value of reclassifying ~$30k of distributions as wages was significant:

| | Distribution (as-is) | Salary + 401(k) |
|---|---|---|
| FICA saved | ~$870 Medicare avoided | — |
| 401(k) shelter at 29% combined | None | ~$8,700 combined tax saved |
| Net | +$870 | +$8,700 |

The theoretical net benefit of reclassification was approximately **$7,500**.

Note: Revised to 29% combined upon confirming MFJ + State rate. Decision outcome unchanged — rejected either way.

---

## Why It Was Rejected

**Execution risk under time pressure.**
Reclassification requires the bookkeeper to formally correct the books — changing distribution journal entries to compensation, running payroll on the reclassified amount, and depositing Medicare taxes on the S corp EIN. All of this must be completed correctly before March 31.

Confidence in bookkeeper's ability to execute cleanly under a 48-hour deadline: **low**.

**Risk of the rushed fix exceeds the benefit.**
A reclassification with errors — wrong journal entries, missed tax deposits, inconsistent payroll records — creates a liability that survives the entity termination. IRS scrutiny of a last-minute distribution-to-wages reclassification immediately before S corp termination is a non-trivial risk. The paper trail must be clean. Under time pressure with a bookkeeper of uncertain reliability, clean execution is not guaranteed.

**The $870 Medicare savings on the distributions is real.**
Not ideal, not optimal — but a legitimate outcome. The distributions were taken legally. The characterization was not wrong at the time, only suboptimal in hindsight given the marginal rate.

---

## Why-Not (the inverse — why not proceed with reclassification)

**Why not just do it anyway?**
The asymmetry is unfavorable: ~$7,500 upside versus potential IRS scrutiny, bookkeeper error risk, and a messy final S corp record. In a different scenario — more time, higher confidence in execution, larger amount — the calculus might flip. Here it does not.

**Why not find a better bookkeeper quickly?**
Two days is insufficient time to onboard, brief, and trust a new bookkeeper with a material correction to S corp records immediately before entity termination.

---

## The Lesson Encoded

In high-income years where employer W-2 independently exceeds the SS wage base, S corp distributions lose most of their FICA advantage (only Medicare remains) while forfeiting 401(k) contribution basis. In those years, the optimal strategy is to maximize W-2 salary — not distributions — to maximize tax-advantaged shelter at the marginal rate.

This insight applies to any future S corp year where the operator also has significant W-2 income from another source.

---

## Assumptions This Decision Depends On

- Bookkeeper cannot execute the reclassification cleanly in the available time — this assumption drove the decision
- If this assumption is wrong (bookkeeper turns out to be capable and fast), the decision outcome was suboptimal but not catastrophic

---

## Tribal Context

**Operator supplied:** The reclassification consideration itself, the risk assessment, the bookkeeper confidence judgment, and the final rejection decision. Also supplied the insight that distributions were suboptimal in hindsight given the SS wage base would be exceeded — a structural tax insight the model confirmed but did not originate.

**Model supplied:** The quantified cost of the decision (~$7,500 foregone at corrected combined rate), the specific mechanics of what a correct reclassification would require (journal entries, payroll tax deposits, timing), and the IRS scrutiny risk framing.

The judgment call was the operator's. The model provided the cost calculation and compliance mechanics to support it.

---

## Commit

**Decision:** Leave Q1 distributions as characterized. No reclassification. Accept the ~$7,500 suboptimal outcome as the cost of execution risk mitigation. Final record: ~$30k distributions remain as distributions.
