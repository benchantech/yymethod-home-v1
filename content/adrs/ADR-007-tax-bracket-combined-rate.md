# ADR-007: Tax Bracket Reality — Federal + State Combined Rate
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** March 29, 2026
**Depends On:** ADR-002, ADR-003
**Freshness Boundary:** Expires if filing status changes, state tax rates change, 2026 federal brackets are revised, or income composition changes materially.

---

## Capture

The optimization analysis was initially framed around a 35% federal marginal rate. Mid-conversation, the filing status was confirmed as MFJ — which places 2026 taxable income in the **24% federal bracket**.

State income tax at **5%** applies on top of federal. The combined marginal rate is **29%**. This rate is the correct figure for all optimization calculations.

---

## 2026 Income Composition

| Source | Amount |
|---|---|
| S corp W-2 (salary + bonus) | ~$60k |
| Employer W-2 | exceeds SS wage base (not stated) |
| S corp distributions (non-wage) | ~$25k |
| LLC SE income | ~$10k |

Combined income places this illustrative case in the 24% federal bracket.

---

## 2026 MFJ Federal Bracket Thresholds (Estimated)

| Bracket | MFJ Threshold |
|---|---|
| 22% | Up to ~$206,700 |
| 24% | $206,700 — ~$394,600 |
| 32% | $394,600 — ~$501,050 |
| 35% | $501,050 — ~$751,600 |
| 37% | Above ~$751,600 |

---

## Why the Combined Rate Is What Matters

Federal bracket alone understates the true marginal cost of each unshielded dollar. State tax applies to the same income at 5%. Every dollar sheltered into a traditional 401(k) saves:

- Federal: $0.24
- State: $0.05
- **Combined: $0.29**

Net benefit per bonus dollar sheltered after Medicare FICA:
$0.29 − $0.029 = **~$0.261 per dollar**

---

## Revised Total Benefit at 29% Combined Rate

| | ~$25k scenario | ~$30k scenario |
|---|---|---|
| Employer 401(k) contribution | ~$15,000 | ~$16,000 |
| Combined tax savings (29%) | ~$4,350 | ~$4,640 |
| Medicare cost (2.9%) | ~$580 | ~$670 |
| **Net benefit** | **~$3,770** | **~$3,970** |

---

## Why-Not

**Why not use federal rate alone for planning?**
Understates true marginal rate by 5%. State tax is material — ignoring it produces decisions that are directionally correct but numerically wrong. Combined rate must be used for any optimization calculation.

---

## The Scar

The analysis began at 35% federal. The correction happened upon confirming actual MFJ bracket — 24% federal is the correct rate. State at 5% brings the effective combined rate to 29%. The decision outcome was unchanged; the number was refined.

This is the kind of correction that gets lost when reasoning isn't preserved. The scar is intentional.

---

## Assumptions This Decision Depends On

- MFJ filing status maintained for 2026
- State tax rate remains 5%
- Income composition holds to projections above
- No material itemized deductions that would exceed standard deduction (~$30,000)

---

## Commit

**Decision:** Use **29% combined marginal rate** (24% federal + 5% State) for all 2026 optimization calculations. The 401(k) employer contribution strategy is confirmed correct at this rate. Net benefit of ~$3,770–3,970 is real and material.

---

## Tribal Context

**Operator supplied:** The MFJ filing status correction — which dropped the assumed federal rate from 35% to 24%. The state rate of 5% — supplied by the operator, not researched by the model. The bracket correction as a deliberate clarification.

**Model supplied:** The MFJ bracket thresholds and the recalculated benefit figures at the corrected combined rate.

The rate correction originated with the operator confirming filing status. The model had been running all calculations at the wrong federal rate. The combined rate ending up near the original assumption was coincidence that the operator recognized immediately — the tax savings were real all along, just via state rather than federal bracket.
