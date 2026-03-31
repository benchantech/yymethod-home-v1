# ADR-025: FICA Correction — Full Payroll Tax on Final Bonus
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided — Correction
**Date:** 2026-03-31
**Depends On:** ADR-002
**Freshness Boundary:** Permanent record. Corrects the FICA assumption in ADR-002. Applies as a standing principle: do not act on future wage information to reduce current FICA obligations.

---

## Capture

ADR-002 calculated FICA cost on the final S corp bonus as Medicare-only (2.9%) on the grounds that the employer W-2 beginning April 1 independently exceeds the SS wage base, making bonus dollars above SS threshold and therefore subject only to Medicare.

That assumption was wrong at the time of the bonus.

YTD S corp W-2 at bonus time: ~$60k. The 2026 SS wage base: $176,100. The S corp wages alone are well below the SS wage base. The employer W-2 had not yet started — it starts April 1. Using a future paycheck to argue that the SS threshold is already met, and therefore full SS FICA can be skipped on today's payroll, is acting on future information.

Additionally, ADR-002 did not account for employee FICA withheld from the bonus. The employer pays FICA on top of gross wages — but the employee's share (7.65%) must also be withheld from the gross bonus before the net is paid to the operator. This affects the cash planning: gross bonus ≠ cash received by operator.

---

## Why

Two reasons to pay full FICA, not Medicare-only:

**1. You cannot use future wages to justify current FICA treatment.**
The SS wage base cap is a running total. You only stop paying SS once the cumulative wages paid to the employee in the calendar year cross $176,100. At the time of the March 31 bonus, cumulative S corp wages were ~$60k — nowhere near the cap. The fact that an employer W-2 will push you past the cap later in the year is irrelevant to the obligation that exists today. Acting on that future information to under-deposit FICA now is not a defensible position.

**2. At $60k YTD, full FICA is simply correct.**
There is no ambiguity here. Full FICA (7.65% employee + 7.65% employer = 15.3%) applies on every dollar of the bonus.

**3. The safer path is always cleaner.**
Even if there were a gray area — there isn't — paying full FICA and letting the SS credit sort itself out through the year is infinitely preferable to a payroll tax under-deposit on a final payroll for a terminating entity. A terminating S corp's final payroll is not the place to optimize FICA.

---

## Why Not

**Why not stick with Medicare-only as ADR-002 calculated?**
Because ADR-002's premise was incorrect. The SS wage base had not been crossed at the time of the bonus. The employer W-2 was future information — it does not apply retroactively to a prior payroll. The Medicare-only treatment would constitute an under-deposit of federal payroll taxes on the S corp's final payroll.

**Why not pay a smaller bonus to reduce the FICA exposure?**
FICA is a percentage — it scales with the bonus. The tax benefit from deferring bonus dollars into the 401(k) still exceeds the full FICA cost. The math is less favorable than ADR-002 projected but remains strongly positive.

**Why not treat the employee FICA as a separate cash item and not account for it in bonus sizing?**
Because the employee FICA is withheld from the gross bonus before the operator receives net pay. If the operator needs a specific net amount, the gross bonus must be grossed up to account for the withholding. If the bonus is set at a gross amount, the cash received is gross minus employee FICA — not the full gross. Either way, this must be modeled before execution, not after.

---

## Corrected Cash Math

For a $20,000 gross bonus at full FICA:

| Item | Amount |
|---|---|
| Gross bonus | $20,000 |
| Employee FICA withheld (7.65%) | −$1,530 |
| Net to operator | $18,470 |
| Employer FICA owed (7.65%) | $1,530 |
| Total S corp cash required (gross + employer FICA) | $21,530 |
| Employer 401(k) contribution (separate, ~25% of total W-2) | ~$5,000 |
| **Total cash deployed** | **~$26,530** |

vs ADR-002's calculation (Medicare-only):

| Item | Amount |
|---|---|
| Gross bonus | $20,000 |
| Medicare total (2.9%) | $580 |
| Employer 401(k) | $5,000 |
| **Total cash deployed** | **$25,580** |

**Delta: ~$950 more in FICA costs under the correct treatment.**

The 401(k) deferral benefit still outweighs the full FICA cost. The decision to run the bonus stands. Only the FICA deposit amount changes.

---

## Standing Principle

**Do not act on future wage information to determine current FICA obligations.**

In any year where a combination of S corp wages and employer W-2 will together cross the SS wage base mid-year, the FICA treatment on each payroll is determined by cumulative wages paid to date — not by a projection of what will be paid. Deposits must reflect the obligation at the time of each payroll.

This principle applies in any future scenario where the operator has multiple compensation sources that in aggregate will cross the SS wage base.

---

## Assumptions This Decision Depends On

- 2026 SS wage base: $176,100
- S corp YTD W-2 at time of bonus: ~$60k (well below threshold)
- Employer W-2 begins April 1 — not yet in effect at time of bonus
- Employee FICA withheld from gross before net is paid to operator

---

## Tribal Context

**Operator supplied:** The correction. The principle that you cannot act on future wage information to justify current FICA treatment. The observation that employee FICA must be accounted for before net pay is calculated.

**Model supplied:** The corrected cash table, the structured articulation of the standing principle.

---

## Commit

**Decision:** Pay full FICA (15.3% — 7.65% employee withheld + 7.65% employer deposited) on the final S corp bonus. Do not reduce SS withholding based on anticipated employer W-2 wages that have not yet been paid. Account for employee FICA in net pay calculations before executing payroll. Deposit both employee and employer shares via S corp EIN before entity termination.

**Supersedes:** ADR-002 FICA assumption. The bonus execution decision in ADR-002 stands. The FICA cost calculation does not.

---

## Timestamp

2026-03-31
