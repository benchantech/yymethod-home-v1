# ADR-008: Employer 401(k) Contribution Basis — Correction to Prior Calculations
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided — Correction to ADR-002, ADR-006
**Date:** March 29, 2026
**Depends On:** ADR-002, ADR-003, ADR-006
**Freshness Boundary:** Permanent correction record. Numbers are final as of March 29, 2026.

---

## Capture

A material calculation error was identified and corrected during the planning session on March 29, 2026.

**The error:** Prior calculations applied the 25% employer 401(k) contribution against **total W-2** (salary + bonus combined) in the bonus optimization math — despite the fact that the employer contribution on the prior ~$40k salary had **already been made and funded** earlier in Q1.

**The correction:** The remaining employer contribution available before March 31 is **25% of the bonus only**. The prior salary employer contribution (~$10k — 25% of ~$40k in Q1 salary payments) is already funded and sheltered.

**Who caught it:** The operator. Not the model.

---

## Why This Matters

Applying 25% to total W-2 instead of incremental bonus produced two errors:

1. **Understated the available bonus** — the cash envelope was being incorrectly consumed by a phantom employer contribution on already-paid salary
2. **Understated total employer contribution** — the prior ~$10k was being recounted rather than treated as sunk

The corrected math produces a **larger bonus** because the full cash envelope now goes toward bonus + bonus employer contribution only, with no salary contribution to fund.

---

## Corrected Math

Constraint: bonus + (25% × bonus) + (2.9% × bonus) = available cash
Simplified: bonus × 1.279 = available cash

**With ~$25k available:**

| Item | Amount |
|---|---|
| Bonus | ~$19,500 |
| Employer 401(k) on bonus (25%) | ~$4,875 |
| Medicare (2.9%) | ~$566 |
| Cash consumed | ~$24,941 ≈ ~$25,000 |
| Prior employer contribution (already made) | ~$10,000 |
| **Total employer 401(k) 2026** | **~$14,875 ≈ ~$15,000** |
| Combined tax savings (29%) | **~$4,313** |

**With ~$30k available (secondary wire lands):**

| Item | Amount |
|---|---|
| Bonus | ~$23,456 |
| Employer 401(k) on bonus (25%) | ~$5,864 |
| Medicare (2.9%) | ~$680 |
| Cash consumed | ~$30,000 |
| Prior employer contribution (already made) | ~$10,000 |
| **Total employer 401(k) 2026** | **~$15,864 ≈ ~$16,000** |
| Combined tax savings (29%) | **~$4,601** |

---

## Why-Not

**Why not leave the prior calculation standing?**
It was wrong. The prior calculation double-counted the salary employer contribution by including it in the bonus optimization constraint. Leaving a wrong number in a knowledge artifact is worse than the correction — especially one that would be fed to payroll execution.

**What was the impact of the error?**
The error understated the optimal bonus amount. The corrected bonus is larger than the previously calculated bonus because the cash envelope is more efficiently utilized when only the incremental contribution is applied.

---

## The Scar

This error was caught by the operator — a motivated self learner — not by the model. The model applied 25% to total W-2 across multiple calculation passes without flagging that the salary employer contribution was already funded. The operator caught it on the third or fourth pass through the numbers.

This is consistent with the YY Method's position on AI and knowledge systems: **Human captures. AI reads.** The model is useful for structuring, synthesizing, and calculating — but the human must verify the assumptions embedded in the calculations, not just the arithmetic.

The correct mental model for employer 401(k) contribution optimization when mid-year contributions have already been made:

> Only the **incremental** W-2 drives the remaining contribution. Prior periods are sunk. The optimization runs against the marginal cash and marginal compensation only.

---

## Assumptions This Decision Depends On

- ~$10,000 employer contribution is confirmed funded and received by plan custodian
- No additional employer contributions were made beyond the ~$10,000 on ~$40k salary
- 2026 annual addition limit (~$70k total) is not a binding constraint at these levels — confirmed well below ceiling

---

## Cascade

ADR-002 and ADR-006 bonus and employer contribution figures should be read in conjunction with this ADR. The corrected numbers here supersede the bonus amounts in those documents.

---

## Commit

**Decision:** Employer contribution basis for bonus optimization is **bonus only** — 25% of the incremental bonus amount. Prior ~$10,000 salary contribution is sunk and excluded from the optimization constraint. Correct bonus targets: ~$19,500 (~$25k scenario) and ~$23,456 (~$30k scenario). Total 2026 employer 401(k): ~$15,000 and ~$16,000 respectively.
