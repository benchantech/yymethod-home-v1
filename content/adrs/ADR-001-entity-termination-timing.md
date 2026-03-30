# ADR-001: S Corp Election Termination Timing
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** March 29, 2026
**Position in Hierarchy:** Foundational — all other ADRs depend on this node
**Freshness Boundary:** Expires if entity structure changes, client relationship changes, or tax law governing S corp termination changes.

---

## Capture

S corp election is being terminated effective April 1, 2026. The entity reverts to a disregarded entity (single-member LLC) on that date. March 31 is therefore the final day of S corp existence. The transition is driven by a shift to full-time W-2 employment with a primary employer, eliminating the primary tax advantage of the S corp structure.

This was not a distressed termination. It was a deliberate, optimized close — timed to a clean quarter-end to avoid partial-year S corp complexity.

---

## Why

The S corp structure's core value proposition is splitting income between salary (subject to FICA) and distributions (not subject to FICA). That arbitrage is most powerful when self-employment income is the primary income source.

Once W-2 income from a primary employer dominates (salary exceeds SS wage base), the S corp loses its advantage for two reasons:

1. The SS wage base will be exceeded through the employer W-2 alone — meaning S corp salary dollars no longer generate SS savings
2. The administrative overhead (payroll, 941s, reasonable compensation scrutiny, separate bookkeeping) stops being justified by the remaining Medicare savings

March 31 was chosen specifically because it is a clean quarter-end. Q1 is complete. No mid-quarter proration required. The S corp's final 941 covers a full quarter cleanly.

---

## Why-Not

**Why not continue through year-end?**
No tax benefit justifies the overhead for the remaining 9 months. The S corp would require continued payroll processing, quarterly 941 filings, and reasonable compensation maintenance — for a structure providing negligible marginal benefit against an employer W-2 that independently exceeds the SS wage base.

**Why not terminate mid-quarter?**
Mid-quarter termination creates a partial-year S corp with prorated income allocation complexity. Clean quarter-end eliminates that entirely.

**Why not convert to C corp or another structure?**
Not relevant to current situation. Professional services business with a single dominant client relationship transitioning to W-2 employment. No retained earnings strategy, no investor considerations, no reason to add complexity.

---

## Critical Constraint — 5-Year Re-Election Lockout

Once S corp election is revoked, the entity **cannot re-elect S corp status for 5 years** without IRS consent. This is a foundational planning constraint affecting all years through 2030.

- **2026-2030:** Disregarded entity locked in — full employee deferral available every year, SEP-IRA for SE income, no S corp mechanics
- **2031:** First opportunity to evaluate S corp re-election if income composition justifies it
- **Planning implication:** All retirement, tax, and entity structure decisions through 2030 must assume disregarded entity status — no S corp optimization available

This constraint cascades to ADR-003, ADR-005, ADR-007, and all forward-looking ADRs. Any planning assumption that implicitly relies on S corp re-election before 2031 is invalid.

- Client relationship remains W-2 and does not revert to contractor/consulting
- No new self-employment income sources emerge in 2026 that would justify re-electing S corp status
- State tax treatment of the disregarded entity is acceptable (verify with state-specific rules)

---

## Tribal Context

**Operator supplied:** The entity termination decision, the clean quarter-end timing, the rationale for why the S corp loses its advantage once employer W-2 exceeds the SS wage base, and the 5-year re-election lockout rule — stated unprompted and correctly without reference.

**Model supplied:** Confirmation that constructive receipt doctrine requires the bonus to be funded, not just dated, by March 31. Verification of specific 2026 SS wage base figures.

The decision itself was the operator's. The model confirmed mechanics.

---

## Commit

**Decision:** Terminate S corp election effective April 1, 2026. March 31 is the final day. All S corp activity — payroll, 401(k) contributions, tax deposits — must be executed and funded on or before March 31.

**Confidence:** High. No meaningful alternatives remain viable.
