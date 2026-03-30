# ADR Index — S Corp Termination & 401(k) Optimization
**Method:** YY Method™ Home Edition v2.3  
**Captured:** March 29, 2026  
**Author:** Case Study Operator
**Freshness Boundary:** Expires if: tax law changes, 2026 contribution limits revised, entity structure changes, or banking relationship changes.

---

## What This Set Is

A structured knowledge artifact capturing the full reasoning chain behind the S corp termination and retirement account optimization decisions made on March 29, 2026. Each ADR covers one distinct decision node — including what was decided, why, what was rejected, and what the decision depends on being true.

This is not a summary. It is a preserved record of judgment under constraint, with the negative space intact.

---

## ADR Hierarchy

```
ADR-001  Entity Termination Timing          [FOUNDATIONAL]
    └── ADR-002  Final Payroll Strategy          [depends on ADR-001, ADR-007]
        └── ADR-003  Employee vs Employer 401k   [depends on ADR-002]
            └── ADR-004  Distribution Reclassification [depends on ADR-003, ADR-007]
                └── ADR-005  Retirement Vehicle Transition [depends on ADR-001, ADR-003]
                    └── ADR-006  Cash & Banking Execution [depends on ADR-002, ADR-003]
ADR-007  Tax Bracket & Combined Rate        [CROSS-CUTTING — informs ADR-002, ADR-003, ADR-004]
ADR-008  Employer Contribution Basis        [CORRECTION — supersedes bonus figures in ADR-002, ADR-006]
ADR-009  DAF Charitable Front-Load Strategy  [FORWARD-LOOKING — depends on ADR-007, ADR-004]
ADR-010  FSA Election — Max Contribution    [FORWARD-LOOKING — depends on ADR-007]
ADR-011  payroll platform Deferral & DCA Strategy    [FORWARD-LOOKING — depends on ADR-003, ADR-007]
ADR-012  Minor Child Employment Strategy    [FORWARD-LOOKING — depends on ADR-001, ADR-007]
ADR-013  Operator Identity & Mastery        [PERMANENT — identity layer beneath all ADRs]
ADR-014  Employer Profit-Sharing Strategy   [FORWARD-LOOKING — depends on ADR-007, ADR-011]
ADR-015  HSA Deployment & Backdoor Roth     [IMMEDIATE + FORWARD-LOOKING — depends on ADR-005, ADR-007]
ADR-016  AI Capability Assessment           [PERMANENT HISTORICAL RECORD — depends on all ADRs as evidence]
ADR-017  Case Study Methodology Notice      [PERMANENT — interpretive frame for the full ADR set]
```

---

## ADR Registry

| ID | Title | Status | Freshness |
|---|---|---|---|
| ADR-001 | S Corp Election Termination Timing | Decided | Expires: if entity structure changes |
| ADR-002 | Final Payroll Bonus Strategy | Decided | Expires: if cash position changes before March 31 |
| ADR-003 | Employee Deferral vs Employer Contribution Priority | Decided | Expires: if 2026 limits change or employer plan rules change |
| ADR-004 | Distribution Reclassification Decision | Decided — Rejected | Permanent record — no reversal |
| ADR-005 | Retirement Vehicle Transition: 401k → Dormant → SEP | Decided | Expires: if employer plan rollover rules confirmed |
| ADR-006 | Cash & Banking Execution — Conditional Wire Strategy | Decided | Expires: March 31, 2026 — execution complete |
| ADR-007 | Tax Bracket Reality — Federal + State Combined Rate | Decided | Expires: if filing status, state rate, or income composition changes |
| ADR-008 | Employer Contribution Basis Correction | Decided — Correction | Permanent — supersedes bonus figures in ADR-002, ADR-006 |
| ADR-009 | DAF Charitable Front-Load Strategy — Two Phase | Pending Timing | Expires: if charitable contribution amount, bracket trajectory, or DAF rules change |
| ADR-010 | FSA Election — Max Contribution Strategy | Pending Enrollment | Expires: when enrollment window closes. Re-evaluate annually |
| ADR-011 | payroll platform Deferral Setup & DCA Strategy | Pending Execution | Expires: when annual cap hit (~Oct 2026). Update every September |
| ADR-012 | Minor Child Employment — LLC Disregarded Entity | Pending State WC Verification | Expires: if child turns 18, work changes, or State rules change |
| ADR-013 | Operator Identity & Cross-Domain Mastery Profile | Permanent Record | Does not expire — identity layer beneath all other ADRs |
| ADR-014 | Employer Profit-Sharing Contribution — EOY Bonus Restructure | Pending Employer Conversation | Expires: if plan document, bonus policy, or additions limit changes |
| ADR-015 | HSA Cash Deployment & Backdoor Roth Sequencing | HSA: Immediate / Roth: Q2-Q3 | Expires: if HDHP eligibility returns, IRA limits change, or rollover confirmed |
| ADR-016 | AI Capability Assessment — March 2026 | Permanent Historical Record | Never expires as record. Stale as current assessment immediately upon AI advancement |
| ADR-017 | Case Study Methodology — Illustrative Framing Notice | Permanent Record | Permanent. Governs interpretation of the full ADR set |

---

## Cascade Rules

If ADR-001 changes (entity timing shifts) → re-verify ADR-002, ADR-003, ADR-006  
If ADR-003 changes (contribution priority shifts) → re-verify ADR-006  
If ADR-007 changes (bracket or filing status changes) → re-verify ADR-002, ADR-003, ADR-004  
If ADR-008 changes (prior contribution amount differs) → re-verify ADR-002, ADR-006  
If ADR-009 timing shifts (bracket trajectory changes) → re-verify Phase 1 vs Phase 2 decision  
If ADR-010 enrollment window closes without action → FSA opportunity lost for 2026  
If ADR-011 salary or pay frequency changes → recalculate deferral percentage and cap  
If ADR-012 work type changes to hazardous → re-verify State workers comp exemption immediately  
If ADR-014 plan document doesn't allow profit-sharing → pursue plan amendment via payroll platform  
If ADR-015 IRA rollover confirmed → execute backdoor Roth immediately  
If ADR-015 HDHP eligibility returns → resume HSA contributions up to annual limit  
If ADR-001 5-year lockout is relevant → no S corp deferral subtraction needed through 2030  
If 2026 IRS limits are revised → re-verify ADR-002, ADR-003, ADR-011  
If employer plan rejects rollover → re-verify ADR-005
