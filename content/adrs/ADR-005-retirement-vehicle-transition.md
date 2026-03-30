# ADR-005: Retirement Vehicle Transition — Solo 401(k) → Dormant → SEP-IRA
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided — Partially Corrected (see ADR-023)
**Date:** March 29, 2026
**Depends On:** ADR-001, ADR-003
**Freshness Boundary:** Expires when employer plan rollover eligibility is confirmed or denied. SEP-IRA path is stable until SE income structure changes.
**Correction:** ADR-023 supersedes two specific claims in this ADR: (1) the solo 401(k) does NOT freeze after March 31 — it can be sponsored by the LLC (disregarded entity) with SE income as the contribution basis; (2) the IRA → solo 401(k) rollover window did not close March 31 — it remains open while the plan is active. Read ADR-023 before acting on any solo 401(k) or SEP-IRA guidance in this ADR.

---

## Capture

After March 31, the solo 401(k) sponsored by the S corp can no longer accept contributions. Three retirement vehicles are in play for the transition:

1. **Solo 401(k)** — existing plan, goes dormant after March 31
2. **Employer 401(k)** — available through W-2 employment starting April 1
3. **SEP-IRA** — available for any self-employment income earned as disregarded entity from April 1

The question: what happens to each vehicle, and in what sequence?

---

## Why — Each Vehicle

**Solo 401(k) → Dormant**
The plan does not need to be terminated simply because the S corp election ends. It can sit dormant with accumulated balances. No contributions in. Balance grows tax-deferred. Form 5500-SF is required annually only if balance exceeds $250k. If balance stays below $250k, no filing burden.

**SEP-IRA → Opens for SE income**
Once operating as a disregarded entity, a SEP-IRA is the natural fit for any self-employment income. Zero administrative overhead, no plan document, no Form 5500, funded at tax filing deadline. Contributions capped at 25% of net SE income up to the annual limit (~$70k+). SEP contributions for 2026 will be based only on Schedule C/SE income from April 1 onward — Q1 W-2 wages from the S corp are not included.

**Employer 401(k) → Rollover destination (conditional)**
If the employer plan accepts incoming rollovers from other qualified plans (check plan SPD/documents), rolling the solo 401(k) into the employer 401(k) is the cleanest outcome: consolidates accounts, eliminates dormant plan, removes Form 5500 risk, and preserves the 401(k) wrapper's stronger creditor protection relative to an IRA in many states.

---

## Why-Not

**Why not terminate the solo 401(k) immediately?**
No urgency. Termination requires formal plan termination procedures and ultimately a distribution or rollover. Letting it sit dormant while evaluating the rollover option is lower friction and preserves optionality.

**Why not roll solo 401(k) to Traditional IRA immediately?**
Always available — no deadline. If the employer plan rollover is confirmed as viable, the employer plan is the better destination (creditor protection, keeps 401(k) wrapper). IRA rollover is the fallback if employer plan rejects the rollover.

**Why not keep contributing to solo 401(k) after April 1?**
Cannot. No W-2 compensation from the sponsoring employer after March 31. No contribution basis exists. The plan is frozen.

**Can Traditional IRA roll into the dormant solo 401(k)?**
This window closes March 31. Once the S corp terminates, the solo 401(k) has no active participant and most plan documents will not accept incoming rollovers. If this move was desired, it needed to happen before March 31. It was not executed — window is now closed.

---

## The Rollover Hierarchy

| Move | Feasibility | Timing |
|---|---|---|
| Solo 401(k) → Employer 401(k) | Check plan docs — preferred if allowed | Anytime after April 1 |
| Solo 401(k) → Traditional IRA | Always available | Anytime |
| Traditional IRA → Solo 401(k) | Window closed March 31 | Not available |
| New contributions → SEP-IRA | Available for SE income | At tax filing for 2026 |

---

## Assumptions This Decision Depends On

- Solo 401(k) balance remains below $250k (no Form 5500-SF trigger) — monitor annually
- Employer plan SPD permits incoming rollovers from qualified plans — **unverified, must check**
- SE income is generated as disregarded entity from April 1 onward to justify SEP-IRA contributions
- Plan custodian permits dormant status without forced distribution

---

## Tribal Context

**Operator supplied:** The question of whether the solo 401(k) could roll into the employer plan — and whether the IRA could roll into the solo 401(k) before March 31. These were the operator's questions, not model suggestions.

**Model supplied:** The Form 5500-SF $250k threshold, the IRA → solo 401(k) window closing March 31 (plan document participation requirement), the SEP contribution timing flexibility (tax filing deadline including extensions), and the creditor protection advantage of keeping funds in a 401(k) wrapper vs IRA.

The two-vehicle structure emerged from operator questions. The model supplied the mechanics and thresholds that shaped the decision parameters.

---

## Commit

**Decision:**
1. Solo 401(k) goes dormant after March 31. No termination yet.
2. SEP-IRA opens for 2026 SE income. Funded at 2026 tax filing.
3. Pursue employer plan rollover — request SPD and verify rollover-in eligibility.
4. If employer plan accepts: roll solo 401(k) → employer 401(k).
5. If employer plan rejects: solo 401(k) sits dormant, roll to IRA at future convenience.
6. Monitor solo 401(k) balance annually against $250k Form 5500-SF threshold.
