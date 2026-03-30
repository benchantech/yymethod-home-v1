# ADR-002: Final Payroll Bonus Strategy
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** March 29, 2026
**Depends On:** ADR-001
**Freshness Boundary:** Expires March 31, 2026 upon execution. If cash position changes before execution, re-verify bonus amount.

---

## Capture

YTD S corp W-2 salary: ~$60k
Available S corp cash: ~$30k total — ~$25k in primary LLC bank, ~$5k in secondary savings
Employer W-2 beginning April 1: exceeds SS wage base
Illustrative marginal federal rate: 24% (MFJ)

A final bonus must be run through S corp payroll before March 31. Only W-2 compensation can serve as the basis for 401(k) contributions. The bonus amount directly determines the ceiling on the employer 401(k) contribution (25% of total W-2).

**Note:** ~$30k was taken as distributions in Q1. This was not reclassified. See ADR-004.

---

## Why

At a **29% combined marginal rate** (24% federal + 5% State — see ADR-007), every dollar pushed through as W-2 compensation and deferred into a traditional 401(k) saves $0.29 in combined tax. The FICA cost on incremental bonus dollars is only Medicare (2.9%) — not Social Security — because the employer W-2 independently exceeds the SS wage base.

Net benefit per bonus dollar sheltered: $0.29 saved − $0.029 FICA = **~$0.261 net per dollar**. That is a compelling return.

Note: Analysis corrected to 24% federal upon confirming MFJ filing status. State rate of 5% brings combined to 29%. See ADR-007 for full bracket analysis. Decision outcome unchanged.

The employer contribution (25% of total W-2) is the irreplaceable piece. Once March 31 passes, that contribution opportunity closes permanently. The bonus amount determines how much employer contribution is available.

---

## Why-Not

**Why not maximize the bonus to hit employer contribution ceiling?**
The hard cap is available cash. ~$30k total must cover the bonus, the employer 401(k) contribution (on top of W-2, not part of it), and Medicare payroll taxes. Pushing the bonus too high leaves insufficient cash for the employer contribution itself.

**Why not a smaller bonus to preserve more cash?**
At the 24% federal bracket with Medicare-only FICA, every incremental dollar of bonus sheltered into a traditional 401(k) generates a strong return on the FICA cost. Leaving money on the table at this marginal rate is suboptimal.

**Target bonus range:**

| Scenario | Bonus | Total W-2 | Employer 401(k) | Medicare | Cash Used |
|---|---|---|---|---|---|
| ~$25k available | ~$20,000 | ~$60,000 | ~$5,000 | ~$580 | ~$25,580 |
| ~$30k available | ~$23,000 | ~$63,000 | ~$5,750 | ~$667 | ~$29,417 |

**No cash reserve held back.** A $1k reserve was considered then rejected — April 1 the entity becomes a disregarded entity and cash can move freely. Credit card float covers any immediate expenses. Employer paycheck begins flowing immediately. Holding $1k back solves a problem that expires in 24 hours. Deploy the full amount.

---

## The Payroll Tax Constraint

Medicare deposit (2.9% — employee + employer share) on the bonus must be deposited via the S corp EIN before the entity terminates. This is a compliance requirement, not optional. Failure to deposit correctly on the final payroll creates a liability that survives the S corp termination.

---

## Assumptions This Decision Depends On

- Employer W-2 maintains SS wage base position, keeping bonus dollars above SS wage base
- Available cash remains ~$30k through execution (see ADR-006 for wire contingency)
- Payroll is processed and **funded** — not just dated — by March 31
- 2026 employer contribution limit (~$70k total) is not a binding constraint at these levels

---

## Tribal Context

**Operator supplied:** The salary correction, the SS wage base analysis, the instinct to push the bonus as high as possible given the marginal rate, the constructive receipt requirement (funded not just dated), and the $1k reserve rejection.

**Model supplied:** The bonus optimization formula (bonus × 1.279 = available cash), the specific dollar amounts at each scenario, and the Medicare tax calculation.

A salary correction came from the operator mid-conversation. The model had accepted the wrong number across multiple passes without flagging it. The operator caught it.

---

## Commit

**Decision:** Run final S corp payroll with bonus of ~$20k. Total W-2 ~$60k. Fund employer 401(k) contribution of ~$5,000 simultaneously from LLC bank. Medicare taxes deposited on S corp EIN. All executed and funded by March 31.
