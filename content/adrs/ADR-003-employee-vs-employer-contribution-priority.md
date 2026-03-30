# ADR-003: Employee Deferral vs Employer Contribution Priority
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** March 29, 2026
**Depends On:** ADR-001, ADR-002
**Freshness Boundary:** Expires if 2026 annual deferral limit changes, or if employer plan prohibits employee deferral catch-up mid-year.

---

## Capture

Two contribution types are available before March 31:

1. **Employee deferral** — up to $23,500 for 2026, per-person annual limit, available through any qualifying employer plan
2. **Employer contribution** — up to 25% of W-2, S corp as plan sponsor, window closes permanently March 31

The question: given limited cash, which gets funded from the S corp, and which gets deferred to the employer plan?

---

## Why

The employer contribution opportunity is **irreplaceable**. After March 31 it does not exist in any form. The S corp is gone. No future plan can recreate this specific contribution window.

The employee deferral opportunity is **fungible**. The annual limit of $23,500 can be consumed through any qualifying employer 401(k) plan across the full calendar year. Spreading it over April–December W-2 paychecks from the employer is straightforward and has no deadline risk.

The correct hierarchy: fund the irreplaceable piece first. Let the fungible piece flow through the channel that has no deadline.

Additionally, skipping the employee deferral from the S corp bonus preserves capital inside the S corp account — capital that can be used to fund a **larger employer contribution** (25% of a larger W-2 base).

---

## Why-Not

**Why not do both employee deferral and employer contribution from S corp?**
Cash constraint. The ~$30k available must cover bonus payroll, employer contribution, and Medicare taxes. Pulling dollars out as bonus and immediately routing them back as employee deferral is circular — it doesn't add shelter, it just reroutes cash. Better to preserve the cash for the employer contribution, which is the higher-value, time-limited piece.

**Why not skip the employer contribution and just do employee deferral?**
This would be the wrong optimization. Employee deferral is available all year. Employer contribution closes in two days. Prioritizing the fungible over the irreplaceable is a category error.

---

## The Insight That Drove This Decision

The employee deferral limit is per-person, per-year — not per-plan. Whatever is deferred into the solo 401(k) in Q1 counts against the annual limit; the remainder is available through the employer plan in Q2-Q4. There is no loss of total annual deferral capacity by shifting the employee deferral to the employer plan. The only thing lost is the S corp cash that would have been consumed by the deferral.

This is the kind of insight that separates mechanical tax compliance from optimized tax planning.

---

## Assumptions This Decision Depends On

- Employer plan allows employee deferrals — standard for any qualifying 401(k)
- Employer plan does not impose waiting periods that would prevent deferral for new employees (verify with employer HR)
- 2026 annual deferral limit is $23,500 (confirmed)
- No catch-up contribution complications (age-dependent — verify if applicable)

---

## Tribal Context

**Operator supplied:** The pivot itself — skipping employee deferral to preserve capital for employer contribution. The irreplaceable/fungible distinction was the operator's insight, not prompted by the model. The model had been calculating both employee deferral and employer contribution simultaneously without recognizing the hierarchy.

**Model supplied:** Confirmation that the annual deferral limit is per-person per-year across all plans, and that the remaining deferral can flow through the employer plan April–December without loss.

This is one of the clearest examples in the conversation of the operator seeing the structural rule the model missed.

---

## Commit

**Decision:** Skip employee deferral from S corp bonus. Preserve capital for employer contribution. Elect employee deferral through employer W-2 payroll April–December 2026, up to remaining annual limit after any Q1 deferrals.
