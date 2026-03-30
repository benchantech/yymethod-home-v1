# ADR-021: Backdoor Roth Annual Cycle — Phase 2 Repeating System
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** March 30, 2026
**Depends On:** ADR-019 (pro-rata rule), ADR-020 (IRA rollover Phase 1)
**Freshness Boundary:** Expires if: IRA contribution limits change materially, Roth conversion rules change, or IRA balance is not $0 on Dec 31 (triggering pro-rata — do not execute that year).

---

## The Question

Once the IRA is clean (ADR-020 complete), what is the repeating annual system?

**Answer:** Three steps per person, per year. Contribute → convert → file. ~$0 tax. Permanent clean Roth funding.

---

## Capture

With pre-tax IRA balances eliminated (ADR-020), the IRA becomes a temporary pass-through — not a storage vehicle. The annual backdoor Roth cycle runs each year independently for each spouse.

The IRA is never held. It is funded and immediately converted. It is an empty pipe.

---

## The Annual System

**Step 1 — Contribute (non-deductible)**

Contribute ~$7k per person to the Traditional IRA.

- Mark as **non-deductible** — this is critical
- Do not take a deduction on the tax return
- Filing status: MFJ at this income level disqualifies direct Roth IRA contributions — this is why the backdoor route is used
- Timing: any time during the calendar year; January is optimal (maximizes time in market)

**Step 2 — Convert immediately**

Convert the full Traditional IRA balance → Roth IRA.

- Do not wait. Convert within days of the contribution landing.
- If the contribution earns any return before conversion (unlikely with immediate execution), a small amount will be taxable. Acceptable and minimal.
- "Immediately" means: contribution settles → convert the next business day

**Step 3 — File Form 8606**

File IRS Form 8606 with the annual tax return.

- Reports non-deductible IRA contribution
- Reports Roth conversion
- Establishes that the conversion had $0 taxable basis (or minimal, from Step 2 earnings)
- Required every year this strategy is executed
- One form per spouse per year

**Result:** ~$14k/year (two spouses) moves into Roth IRA tax-free. Compounds indefinitely, tax-free.

---

## Critical Rules

| Rule | Consequence of violation |
|---|---|
| IRA balance = $0 on Dec 31 | If not zero → pro-rata applies → conversion becomes taxable |
| Contribution marked non-deductible | If deducted → conversion becomes fully taxable (double-counted) |
| Convert quickly after contribution | Delay lets earnings accumulate pre-conversion → small taxable gain |
| File Form 8606 every year | Missing form → IRS treats conversion as fully taxable by default |
| Each spouse runs independently | One spouse's IRA balance does not affect the other |

---

## The System Architecture — One-Line Version per Account

| Account | Role |
|---|---|
| Traditional IRA | Empty pipe — funded and converted immediately, holds $0 |
| Roth IRA | Final destination — never touched except to receive conversions |
| Employer 401(k) | Pre-tax storage — holds rollover, grows tax-deferred |

---

## Annual Calendar Rhythm

| Timing | Action |
|---|---|
| January (optimal) | Contribute ~$7k → Traditional IRA for each spouse |
| Within days | Convert → Roth IRA |
| Tax season | File Form 8606 for each spouse |
| December | Verify IRA balance = $0. If not, convert remainder before Dec 31 |

---

## Never Use SEP IRA Again

The SEP IRA has been rolled into the employer 401(k) (ADR-020). Do not open or fund a new SEP IRA while the backdoor Roth system is active. A SEP IRA contribution would immediately reintroduce a pre-tax IRA balance, triggering pro-rata.

If LLC income later warrants a SEP-like contribution, use the solo 401(k) instead (ADR-022) — it does not affect IRA pro-rata.

---

## Spouse-Specific Notes

The spouse runs the identical process independently. Their IRA must also reach $0 by December 31. Their Form 8606 is separate. Their rollover (ADR-020) must also be complete before Phase 2 is activated for them.

There is no shared execution here. Each person owns their own system.

---

## Why-Not

**Why not do the contribution and conversion in the same tax year but different calendar year?**

Fine — contribute in December, convert in January of the following year. The form 8606 rules handle this. But "convert immediately" is the simpler execution model and avoids year-end confusion.

**Why not let the IRA balance sit and compound for a while before converting?**

Every day with a pre-tax IRA balance is pro-rata risk if additional pre-tax amounts are present. With a fully clean IRA, there is no benefit to waiting — the contribution is non-deductible, so conversion is tax-neutral immediately. Waiting gains nothing and adds risk.

**Why not contribute directly to Roth IRA?**

At the income level of this case, Roth IRA direct contributions are phased out (MFJ phase-out range is approximately $230k–$240k for 2026). The backdoor route is the only legal path to Roth IRA funding at this income level.

---

## Assumptions This Decision Depends On

- IRA → Roth conversion continues to be permitted under current tax law (no "backdoor Roth ban" legislation)
- Pre-tax IRA balance = $0 on December 31 each year (ADR-019 and ADR-020 maintained)
- Annual IRA contribution limit remains at ~$7k per person (verify each year)
- Direct Roth IRA contributions remain phased out at this income level (justifies backdoor route)

---

## Commit

**Decision:** Execute the three-step annual backdoor Roth cycle for both spouses each year: (1) non-deductible Traditional IRA contribution ~$7k, (2) immediate full conversion → Roth IRA, (3) Form 8606 filed. Both spouses run independently. Never fund SEP IRA again. Verify $0 IRA balance on December 31 every year.

**Principle:** The IRA is an empty pipe. The Roth is the destination.
