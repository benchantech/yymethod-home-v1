# ADR-022: Employer 401(k) vs Solo 401(k) — Simplicity First, Optionality Preserved
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** March 30, 2026
**Depends On:** ADR-019 (pro-rata rule), ADR-005 (retirement vehicle transition)
**Freshness Boundary:** Expires if: employment ends, LLC income grows to a level that warrants employer contributions, or employer 401(k) quality degrades materially.

---

## The Question

Should the primary pre-tax storage vehicle be the employer 401(k) or the solo 401(k)?

**Answer:** Employer 401(k) now. Solo 401(k) added later when LLC income or mega backdoor capability justifies the overhead.

---

## Capture

Two pre-tax storage vehicles are available:

1. **Employer 401(k)** — currently active, funded via W-2 payroll, accepts IRA roll-ins
2. **Solo 401(k)** — available via the LLC (disregarded entity), currently dormant (ADR-005)

The core question: which vehicle should serve as the primary pre-tax staging area for the backdoor Roth system and long-term retirement savings?

---

## Employer 401(k) — Why It Wins Now

**Investment quality:** Quality index fund options. Low fixed annual fee. Negligible cost on the account balance.

**IRA rollover:** Accepts direct IRA roll-ins — enables Phase 1 cleanup (ADR-020) with minimal friction.

**Employee deferral:** Already maxing employee deferral via payroll (above SS wage base — employer FICA match covered separately). The payroll infrastructure is in place.

**No admin:** No plan documents, no annual filings, no custodian administration. Employer handles all compliance.

**Summary:** Low cost, high quality, zero friction, accepts rollovers. For the current employment situation, this is an excellent vehicle.

---

## Solo 401(k) — Why It Waits

The solo 401(k) offers capabilities the employer plan does not:

| Feature | Employer 401(k) | Solo 401(k) |
|---|---|---|
| Employee deferral | Yes — up to annual limit | Yes — same limit |
| Employer contributions | Employer decides | You decide — up to ~20% of LLC net income |
| Mega backdoor Roth | No | Yes — if plan allows after-tax contributions + in-service withdrawal |
| IRA rollover (inbound) | Yes | Yes |
| IRA rollover (outbound) | Can roll out if employment ends | Can roll employer 401(k) in if employment ends |
| Plan admin | None (employer handles) | Moderate — annual 5500 filing if >$250k (ADR-005) |
| Cost | Low fixed fee | Varies by custodian |

**Why not activate it now:**

- No significant LLC income currently generating employer contribution opportunities
- Mega backdoor Roth requires after-tax 401(k) contributions — a feature the solo 401(k) must explicitly enable in its plan document. Not yet configured.
- Phase 1 IRA rollover is easier via employer 401(k) (direct transfer vs physical check per ADR-020)
- Adding a solo 401(k) now increases complexity without near-term payoff

**Key insight — deferred complexity, not lost options:**

If employment ends, the employer 401(k) can be rolled directly into the solo 401(k). Nothing about using the employer plan now forecloses the solo 401(k) path later. Simplicity is being chosen; optionality is being preserved.

---

## The Future Trigger

Activate the solo 401(k) when one or more of these conditions are met:

1. **LLC income warrants employer contributions** — if LLC net income reaches a level where 20% employer contributions produce meaningful additional tax shelter (~$15k+/year), the solo 401(k) becomes worthwhile
2. **Mega backdoor Roth is desired** — after-tax 401(k) contributions + in-service Roth conversion, if configured in the plan document, can shelter significantly more than the standard deferral limit
3. **Employment ends** — employer 401(k) becomes inaccessible; solo 401(k) becomes the primary vehicle and can absorb the rollover

---

## System Architecture — Current State

```
Employer 401(k)          ← primary pre-tax storage
    ↑ IRA roll-ins (one-time, Phase 1)
    ↑ Payroll deferrals (ongoing)
    ↑ Employer contributions (if profit-sharing, ADR-014)

Traditional IRA          ← empty pipe (post-Phase 1 cleanup)
    ↓ Annual non-deductible contribution
    ↓ Immediately converted → Roth IRA

Roth IRA                 ← final destination
    ↑ Annual backdoor conversion (~$7k/person)

Solo 401(k)              ← dormant, available
    (activates when LLC income or circumstances change)
```

---

## Why-Not

**Why not use both simultaneously?**

Adding the solo 401(k) now while the employer plan is active creates two active pre-tax vehicles. This adds annual filing complexity, IRA rollover routing decisions, and deferral limit coordination — without near-term benefit. Unnecessary complexity.

**Why not prioritize the solo 401(k) for its mega backdoor Roth potential?**

Mega backdoor requires the plan to permit after-tax contributions and in-service withdrawals — the plan document must explicitly include these provisions. This requires setup work and custodian selection. The employer plan provides most of the needed shelter at zero admin cost. Mega backdoor becomes relevant when the solo 401(k) is activated and configured.

**Why not keep pre-tax funds in the IRA instead of rolling to employer 401(k)?**

Would permanently block the backdoor Roth system (pro-rata). Employer 401(k) is the correct staging area for all pre-tax accumulation. The IRA must remain empty.

---

## Assumptions This Decision Depends On

- Employer 401(k) plan quality (cost and investment options) remains acceptable
- Employment continues — employer 401(k) remains accessible
- LLC income remains below the threshold where solo 401(k) employer contributions are material
- No change to annual contribution limits or plan rules that would shift this calculus

---

## Commit

**Decision:** Use employer 401(k) as primary pre-tax vehicle. Keep solo 401(k) dormant. Activate solo 401(k) when LLC income, mega backdoor Roth configuration, or employment change makes it the right tool. The employer 401(k) rollover path to solo 401(k) remains open — nothing is foreclosed.

**Principle:** Defer complexity. Preserve optionality. Use the simplest tool that covers the need.
