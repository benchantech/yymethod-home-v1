# ADR-006: Cash & Banking Execution — Conditional Wire Strategy
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** March 29, 2026
**Depends On:** ADR-002, ADR-003
**Freshness Boundary:** Expires March 31, 2026 upon execution. Permanently stale after that date.

---

## Capture

Cash position as of March 29, 2026:
- **Main LLC bank:** ~$25k — already linked to plan custodian 401(k) plan, proven ACH history
- **Secondary savings account:** ~$5k — proven ACH history to main LLC bank (large transfer ~1 month prior)

Total available: ~$30k

Execution requires:
- Bonus payroll funded from main LLC bank (payroll pulls from main)
- Employer 401(k) contribution funded from main LLC bank to plan custodian
- Medicare taxes deposited on S corp EIN

The question: should the ~$5k in secondary account be incorporated into the execution, and if so, how?

---

## Why the ~$5k Matters

With ~$25k in main, the baseline plan is sufficient. If the ~$5k from secondary account lands in main before execution:
- Total available rises to ~$30k
- Bonus ceiling increases by ~$4k
- Employer contribution increases to ~$6,000 employer contribution
- Additional benefit: ~$400 in additional combined tax savings
- Additional benefit: deploying ~$1,200 more capital into a down market inside a tax-deferred wrapper

The market timing angle strengthens the case: contributions made during a market downturn buy more units at lower prices, compounding the benefit over time inside the tax shelter.

**$1k cash reserve — considered and rejected.** A $1k reserve was initially considered. Rejected because April 1 the entity becomes a disregarded entity — cash moves freely with zero friction. Credit card float covers any immediate expenses. Employer paycheck begins immediately. Holding $1k back solves a problem that expires in 24 hours. Full amount deployed.

---

## Why-Not

**Why not wire immediately (Sunday March 29)?**
Secondary bank has no weekend customer support. Wires initiated Sunday are unlikely to process until Monday. ACH initiated Sunday settles Tuesday at earliest — potentially after the March 31 deadline.

**Is the wire guaranteed same-day if initiated Monday?**
No. Secondary bank does not explicitly guarantee same-day domestic wire delivery. Settlement depends on the bank's internal processing cutoff, the receiving bank's processing, and Fedwire operating hours. The wire is typically same-day if initiated before cutoff but is not contractually guaranteed.

**Why not build the March 31 execution plan around the wire?**
Building a hard-deadline execution around a non-guaranteed transfer is unnecessary risk when ~$25k is already sitting in the correct account. The ~$5k is additive, not foundational.

---

## The Conditional Execution Model

Rather than treating the wire as required, the decision was to treat it as **conditional and additive**:

1. **Monday morning** — initiate outgoing domestic wire (nominal domestic wire fee) from secondary account to main LLC bank
2. **Tuesday March 31** — check main bank balance before executing anything
3. **If wire landed** — execute with full ~$30k picture, maximize bonus and employer contribution
4. **If wire did not land** — execute cleanly with ~$25k, no stress, slightly lower bonus and employer contribution

This converts a binary timing risk into a simple conditional check. Either branch produces a valid, complete execution. The wire failure path is not a degraded outcome — it was the baseline plan all along.

---

## Secondary Bank Wire Facts (Verified)

- Outgoing domestic wire fee: nominal (low double digits)
- ACH transfers: free, 1-2 business days, ACH cutoff (same-business-day)
- No weekend customer support
- Wire transfers: same-day domestic typically available on business days
- Nominal fee on ~$5k = trivially small relative to benefit

---

## Why the Wire Is Worth Initiating

Even without a guarantee, the expected value is positive:
- Cost: nominal fee + 10 minutes Monday morning
- Upside if lands: ~$400 additional tax savings + down-market deployment of ~$1,200 additional capital
- Downside if doesn't land: nominal wire fee; execution proceeds on ~$25k baseline

The asymmetry strongly favors initiating the wire.

---

## Assumptions This Decision Depends On

- Main LLC bank already has established plan custodian contribution link — confirmed by prior usage
- Wire cutoff on Monday allows same-day processing — verify Monday morning
- March 31 is a business day — confirmed (Tuesday)
- ~$25k in main is sufficient for baseline — confirmed

---

## Tribal Context

**Operator supplied:** The conditional execution model — check the balance, branch accordingly. The market timing insight — contributions into a down market inside a tax shelter compound the benefit. Both came from the operator unprompted. The operator also identified that April 1 disregarded entity status plus credit card float eliminated the need for a cash reserve — rejecting the $1k reserve suggestion the model had accepted.

**Model supplied:** Secondary bank specific mechanics — nominal wire fee, ACH cutoffs, weekend limitations, settlement timing. These details were looked up and supplied by the model. Without them the operator could not have made an informed timing decision.

The execution architecture was the operator's. The banking logistics were the model's contribution.

---

## Commit

**Decision:**
1. Initiate domestic wire (nominal fee) from secondary account → main LLC bank, Monday March 30 morning before cutoff
2. Tuesday March 31: check main bank balance
3. If wire landed: execute payroll + plan custodian contribution using full ~$30k
4. If wire did not land: execute payroll + plan custodian contribution using ~$25k baseline
5. Either branch: execution is complete, S corp is closed cleanly
