# ADR-020: IRA → Employer 401(k) Rollover — Phase 1 One-Time Cleanup
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** March 30, 2026
**Depends On:** ADR-019 (pro-rata rule), ADR-005 (retirement vehicle transition)
**Freshness Boundary:** Expires when rollover is complete and confirmed for both spouses. One-time execution.

---

## The Question

How do we eliminate existing pre-tax IRA balances to satisfy ADR-019?

**Answer:** Roll the full balance of all Traditional and SEP IRA accounts into the employer 401(k). Select "full account balance." Execute once per spouse.

---

## Capture

Both spouses hold pre-tax IRA balances that block the backdoor Roth system (ADR-019). The balances must move somewhere that doesn't count in the pro-rata calculation. The available options are the employer 401(k) and the solo 401(k).

**Context on existing IRA composition:**

All IRA funds are 100% pre-tax — deductions were taken every year, no non-deductible basis exists. This means the rollover can be executed as a clean full transfer with no basis isolation or Form 8606 complexity. The simplest possible path is correct.

---

## The Key Design Decision — Employer 401(k) vs Solo 401(k)

**Original consideration:** Roll IRA → Solo 401(k)

The solo 401(k) was considered because it was already partially in scope (ADR-005) and offers more flexibility for LLC income and mega backdoor Roth.

**Rejection: Solo 401(k) first**

The plan custodian for the solo 401(k) requires a physical check mailed to the account holder for IRA rollovers — not a direct electronic transfer. This creates:
- 1–2 weeks out of the market during check transit
- A window where funds earn nothing (no money market yield while check is in transit)
- Additional friction for a one-time task

**Decision: Employer 401(k) first**

| Factor | Employer 401(k) | Solo 401(k) |
|---|---|---|
| Rollover method | Direct transfer | Physical check mailed |
| Time out of market | ~1 week (liquidate + wire) | ~2 weeks (includes check transit) |
| Admin burden | None | More |
| Ongoing cost | Low fixed annual fee | Varies |
| Investment quality | Quality index fund options | Depends on custodian |
| Accepts IRA roll-ins | Yes — confirmed | Yes — confirmed |

The employer 401(k) is operationally simpler for Phase 1. The solo 401(k) remains the correct future vehicle for LLC income and mega backdoor Roth (ADR-022).

---

## Execution Details

**Step 1 — Initiate rollover**
- Contact employer 401(k) provider
- Request IRA rollover initiation
- Select: "Full Account Balance" — Traditional IRA and SEP IRA

**Step 2 — Expect small leftover**
Dividends credited after the transfer date, interest accruals, and timing gaps may leave $1–$10 in the IRA after the primary transfer completes. This is normal.

**Step 3 — After rollover confirmation**
Check the IRA balance again. If anything remains:
- Convert the remainder → Roth IRA
- This small conversion will be taxable (it's pre-tax money) but the amount is negligible
- File Form 8606 if any non-deductible basis existed (not applicable in this case)

**Step 4 — Confirm Dec 31 balance**
Verify IRA balance = $0 before December 31 to satisfy ADR-019.

---

## What Happens During Rollover

Assets are liquidated to cash → transferred → reinvested in target 401(k) allocation.

- Time in cash (liquidated, in transfer): ~1 week
- Some time earns money market yield; check/wire transit earns nothing
- Acceptable tradeoff: a few days of missed returns vs decades of tax-free Roth compounding

The math strongly favors executing. Hesitating to avoid the out-of-market window defeats the purpose.

---

## Spouse Independence

Both spouses must execute this independently. IRA pro-rata is calculated per person. One spouse completing the rollover does not affect the other's eligibility.

The same process applies to the spouse's Traditional IRA and any SEP IRA. The spouse's employer 401(k) must also accept roll-ins — confirm before initiating.

---

## Why-Not

**Why not just convert the full pre-tax IRA balance directly to Roth?**

Would trigger immediate income tax on the full pre-tax balance — potentially a very large taxable event in a single year. Rolling into the 401(k) is tax-neutral (pre-tax to pre-tax). The funds stay pre-tax; only the location changes.

**Why not leave the IRA and skip backdoor Roth?**

Leaves ~$14k/year of tax-free compounding on the table (two spouses). At 7% over 30 years the compounding advantage is significant. The one-time cleanup cost is minimal relative to the permanent annual benefit.

**Why not wait until the rollover is more convenient?**

Every year with a non-zero IRA balance on Dec 31 is a blocked backdoor Roth year. Each year costs ~$14k of potential Roth contributions. There is no good reason to delay.

---

## Assumptions This Decision Depends On

- Employer 401(k) plan document permits IRA roll-ins (confirmed)
- Employer 401(k) remains accessible and available (employment continues)
- IRS continues to permit IRA → 401(k) rollovers (current law)
- Spouse's employer plan also permits roll-ins (verify before initiating)

---

## Commit

**Decision:** Roll full balance of all Traditional and SEP IRAs → employer 401(k) for both spouses. Select "full account balance." Convert any small leftover to Roth after transfer confirms. Verify $0 IRA balance by December 31. Execute Phase 2 annual cycle (ADR-021) beginning the following year.

**Status:** Decided — pending execution.
