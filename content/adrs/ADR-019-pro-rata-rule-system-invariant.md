# ADR-019: Pro-Rata Rule — System Non-Negotiable
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** March 30, 2026
**Depends On:** ADR-005 (retirement vehicle transition), ADR-015 (HSA deployment and backdoor Roth sequencing)
**Freshness Boundary:** Expires if: IRS changes pro-rata rule mechanics, tax law fundamentally alters Roth conversion treatment, or IRA basis situation changes.

---

## The Question

What is the governing rule that makes the backdoor Roth system work cleanly?

**Answer:** All pre-tax IRA balances must reach $0 by December 31 each year. No exceptions.

---

## Capture

The backdoor Roth strategy requires contributing to a Traditional IRA (non-deductible) and then converting to Roth. The IRS applies the pro-rata rule to conversions: if any pre-tax IRA balances exist at year-end, the conversion is treated as coming proportionally from pre-tax and after-tax funds — making it partially taxable.

This is not a technicality. It is the entire mechanical basis of the strategy. If the pro-rata blocker fails, the backdoor Roth becomes a taxable event every year.

**Applicable accounts subject to pro-rata:**
- Traditional IRA
- SEP IRA
- SIMPLE IRA (not applicable here, but named for completeness)
- Rollover IRA

**Not subject to pro-rata:**
- 401(k) — employer or solo
- Roth IRA

**Context that makes a clean solution available:**

The IRA balance in this case is 100% pre-tax. Deductions were taken every year — there is no non-deductible basis. This means there is nothing to preserve, no basis tracking required, and the full IRA balance can be rolled over without any pro-rata complications on the rollover itself. Full clean rollover is the optimal path.

---

## Why

Without zero pre-tax IRA balance on Dec 31:

| Situation | Conversion taxability |
|---|---|
| IRA balance = $0 | Conversion of $7k non-deductible = $0 taxable |
| IRA balance = $50k pre-tax | Pro-rata applies: large taxable portion every year |
| IRA balance = $50k pre-tax + $7k after-tax | ~87.5% of conversion is taxable — strategy mostly fails |

The math is unforgiving. The rule must be permanent, not situational.

---

## Why-Not

**Why not just accept pro-rata and pay some tax each year?**

The entire point of backdoor Roth is tax-free compounding for decades. Paying even partial tax on each conversion eliminates most of the benefit and adds Form 8606 complexity without the reward. If pro-rata applies, the strategy should not be executed.

**Why not keep IRA funds and just not convert?**

The IRA balance doesn't go away — it continues compounding pre-tax, which is fine, but it permanently blocks the backdoor Roth system for any year where a balance exists. Every year of blocked backdoor Roth is ~$14k of lost Roth contribution opportunity (two spouses).

**Why not use a different strategy to eliminate pro-rata?**

The standard solution is to roll pre-tax IRA funds into an employer 401(k) or solo 401(k) — which is exactly what ADR-020 captures. This ADR establishes the rule; ADR-020 documents how to execute it.

---

## Scope

This rule applies to both spouses independently. Each person's IRA pro-rata calculation is separate. One spouse having a zero IRA balance does not protect the other. Both must maintain $0 pre-tax IRA balances on December 31.

---

## Assumptions This Decision Depends On

- IRS continues to apply the pro-rata rule to IRA → Roth conversions on a December 31 balance test
- The employer 401(k) continues to accept IRA roll-ins (confirmed; ADR-020)
- Annual IRA contribution limit remains at ~$7k per person (2026 figure; verify annually)

---

## Commit

**Decision:** The pro-rata rule is a system non-negotiable. Pre-tax IRA balance must equal $0 on December 31 each year. This governs ADR-020 (rollover execution), ADR-021 (annual cycle), and all future backdoor Roth operations.

**Violation consequence:** If the balance is not zero on Dec 31, do not execute the backdoor Roth conversion that year. Convert the remaining IRA balance to Roth and pay the tax — then resume the clean system the following year.
