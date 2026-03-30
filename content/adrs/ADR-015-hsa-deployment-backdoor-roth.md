# ADR-015: HSA Cash Deployment & Backdoor Roth Sequencing
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Date:** March 29, 2026
**Status:** Partially Decided — HSA immediate, Backdoor Roth pending
**Depends On:** ADR-005 (retirement vehicle transition), ADR-007 (combined marginal rate)
**Freshness Boundary:** HSA section expires when cash is deployed. Backdoor Roth expires when IRA rollover confirmed. Re-evaluate if HDHP eligibility returns.

---

## Capture

**HSA:**
- Custodian: plan custodian
- Status: Heavily invested — cash portion remaining idle in core position (money market core position)
- New contributions: ineligible — HDHP coverage ended with employer plan switch
- Existing balance: grows and compounds tax-free indefinitely regardless of contribution eligibility
- Action: deploy remaining cash into invested positions immediately

**Backdoor Roth IRA:**
- At income levels exceeding the Roth IRA direct contribution threshold, direct Roth IRA contributions are not permitted
- Backdoor conversion is the correct route: contribute to Traditional IRA → convert immediately to Roth
- Blocker: existing Traditional IRA balance triggers pro-rata rule — conversion would be partially taxable
- Solution: roll Traditional IRA balance into employer 401(k) first, then execute backdoor cleanly
- Timing: Q2-Q3 2026 once employer plan rollover eligibility confirmed

---

## HSA — Why Deploy Cash Now

Every dollar sitting in HSA cash is earning near-zero while missing permanent tax-free compounding. The HSA is the highest-efficiency long-term account available — tax-free contribution (when eligible), tax-free growth, tax-free withdrawal for qualified medical expenses, and at age 65 functions as a traditional IRA for any purpose.

**The math on idle HSA cash at 7% annual growth:**

| | Cash | Invested |
|---|---|---|
| Year 10 | $10,000 | $19,672 |
| Year 20 | $10,000 | $38,697 |
| Year 30 | $10,000 | **$76,123** |

All growth tax-free. No capital gains. No RMDs. Deploying idle cash into index funds inside the plan custodian is a 5-minute action with decades of compounding consequence.

**Recommended funds (HSA):**
- **A zero-expense-ratio total market index fund** — 0% expense ratio
- Either is appropriate for a long time horizon set-and-forget position

**Enable automatic investment feature** in HSA — ensures any future deposits (if HDHP eligibility returns) invest automatically rather than sitting in cash.

---

## HSA Operating Principle

**Treat the HSA as the last account ever touched for medical expenses.**

Spend hierarchy:
1. Current year medical expenses → income/taxable account
2. HSA balance → never touch, let compound indefinitely
3. At 65 → withdraw for any purpose, taxed as traditional IRA if non-medical

The longer the HSA compounds untouched the more powerful it becomes. Every dollar spent from the HSA today is a dollar that doesn't compound tax-free for 20-30 years.

---

## Backdoor Roth — Why It Matters

At income levels exceeding the Roth IRA direct contribution threshold, traditional IRA contributions are not deductible and Roth IRA contributions are not permitted directly. The backdoor conversion is the only route to Roth benefits.

**Annual benefit:**
- $7,000 per person (2026 limit)
- MFJ: $14,000 total per year (operator + spouse)
- Growth: permanently tax-free
- No RMDs — passes to children tax-free
- Compounds alongside 401(k) and HSA as third permanent tax-free vehicle

**Over 20 years at 7%, $14,000/year: ~$574,000 tax-free**

---

## The Pro-Rata Blocker and Solution

The pro-rata rule treats all Traditional IRA balances as a single pool when calculating the taxable portion of a Roth conversion. If Traditional IRA has a pre-tax balance, converting $7,000 produces a partially taxable event proportional to the pre-tax balance.

**Solution:** Roll entire Traditional IRA balance into employer 401(k) before executing backdoor.

**Sequence:**
1. Confirm employer 401(k) plan accepts incoming IRA rollovers — request SPD ✅ already in ADR-005
2. Initiate direct rollover: Traditional IRA → employer 401(k)
3. Confirm rollover received and Traditional IRA balance = $0
4. Open new Traditional IRA at any custodian
5. Contribute $7,000 (non-deductible)
6. Convert immediately to Roth IRA — $0 taxable (basis = contribution)
7. Repeat annually for both operator and spouse

**Timing:** Q2-Q3 2026 — after employer plan rollover eligibility confirmed and IRA rollover processed.

---

## Why-Not

**Why not execute backdoor Roth now before IRA rollover?**
Pro-rata rule makes the conversion partially taxable if Traditional IRA has pre-tax balance. The rollover must clear first. This is not a shortcut-able sequence.

**Why not just leave HSA cash alone?**
Idle cash inside a tax-free account is one of the most expensive forms of inaction available. The opportunity cost compounds annually. Five minutes of action captures decades of tax-free growth.

**Why not use a different HSA custodian?**
Current plan custodian offers zero account fees, zero expense ratio fund options, full investment access. No reason to move.

**Why not contribute to Roth 401(k) instead of backdoor Roth IRA?**
Roth 401(k) contributions are subject to RMDs (unless rolled to Roth IRA at separation). Roth IRA has no RMDs. Both are valid but Roth IRA is the cleaner long-term vehicle. Both can be used simultaneously — Roth 401(k) within employer plan if available, backdoor Roth IRA separately.

---

## Complete Shelter Stack — Final State

| Shelter | Annual Benefit | Status |
|---|---|---|
| 401(k) employer + employee | ~$12,000 | ✅ Executing March 31 |
| DAF charitable Phase 1 | ~$5,800 | ⏳ Pending contribution amount |
| Family employment (multiple kids) | ~$6,500 per child deployed | ⏳ State workers comp |
| Backdoor Roth (2 people) | $14,000/yr tax-free growth | ⏳ Q2-Q3 after IRA rollover |
| SEP-IRA on LLC income | ~$2,500 | ⏳ At 2026 tax filing |
| Profit-sharing EOY bonus | ~$8,000-10,000 | ⏳ Employer conversation |
| HSA cash deployment | Decades of compounding | ✅ This week — 5 minutes |
| 529 (multiple kids) | ✅ Already maxed annually | ✅ Done |
| QBI deduction | Modest on LLC income | ✅ Capturing at filing |
| Home office | ✅ Already captured | ✅ Done |

**Deferred to future years:**
- Defined benefit plan: when LLC income grows materially
- CRT: when appreciated assets justify structure
- Real estate: when capital available beyond current priorities

---

## Assumptions This Decision Depends On

- HSA plan custodian remains available and fee-free
- Zero-expense-ratio total market index fund remains 0% expense ratio — verify annually
- Employer 401(k) accepts IRA rollover — unconfirmed, pending SPD review
- Traditional IRA balance confirmed — must be $0 before backdoor execution
- Spouse eligible for separate backdoor Roth — confirm no separate IRA balance
- 2026 IRA contribution limit confirmed at $7,000 per person
- HDHP eligibility does not return in 2026 — no new HSA contributions

---

## Tribal Context

**Operator supplied:** The HSA plan custodian, the existing heavily-invested position, the cash portion still idle, the HDHP ineligibility, the pro-rata blocker on the backdoor Roth, the 529 already maxed, the equipment already employer-provided, and the systematic elimination of every shelter option that was already covered or inapplicable.

**Model supplied:** The zero-expense-ratio total market index fund recommendations, the automatic investment feature suggestion, the backdoor Roth sequencing steps, the pro-rata rule mechanics, and the complete shelter stack summary table.

The operator arrived with a complete picture of what was already done and what remained. The model organized the remaining items and supplied the mechanical steps. The survey of remaining shelters was collaborative — the operator eliminated options in real time as they were raised, leaving a short precise list of genuine remaining actions.

---

## Commit

**Immediate (this week):**
- Log into HSA plan custodian
- Move cash from core position into a zero-expense-ratio total market index fund
- Enable automatic investment feature
- 5 minutes. Done.

**Q2-Q3 2026:**
- Confirm employer 401(k) accepts IRA rollover
- Execute Traditional IRA → 401(k) rollover
- Confirm Traditional IRA balance = $0
- Contribute $7,000 each (operator + spouse) to new Traditional IRA
- Convert immediately to Roth IRA
- Repeat annually

**Ongoing:**
- Never touch HSA for current medical expenses — let compound indefinitely
- Execute backdoor Roth every January once IRA rollover is complete
- Review shelter stack every September alongside payroll platform deferral update
