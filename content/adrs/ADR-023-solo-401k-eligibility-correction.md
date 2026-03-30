# ADR-023: Solo 401(k) Eligibility Correction — LLC Self-Employment Income
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided — Correction
**Date:** March 30, 2026
**Depends On:** ADR-005 (retirement vehicle transition — contains the errors this ADR corrects)
**Freshness Boundary:** Permanent correction record. Supersedes two specific claims in ADR-005.

---

## What Was Wrong in ADR-005

ADR-005 made two incorrect claims:

**Error 1 — Contribution eligibility:**
> "Why not keep contributing to solo 401(k) after April 1? Cannot. No W-2 compensation from the sponsoring employer after March 31. No contribution basis exists. The plan is frozen."

**Error 2 — IRA rollover window:**
> "Traditional IRA → Solo 401(k): Window closed March 31. Not available."

Both are wrong. The correct rule follows.

---

## The Correct Rule

A solo 401(k) — also called a one-participant 401(k) or individual 401(k) — can be sponsored by a self-employed individual operating as a sole proprietor or single-member LLC (disregarded entity). It does not require a corporate entity or W-2 income to remain active.

**After April 1, the LLC (disregarded entity) is the plan sponsor.**

Contributions continue based on net self-employment income from the LLC — not W-2 wages. The plan may need to be amended or re-adopted to reflect the change in business structure from S corp to sole proprietorship/LLC, but the plan itself does not expire or freeze.

### Solo 401(k) Contribution Mechanics — Disregarded Entity

| Contribution type | Basis | 2026 limit |
|---|---|---|
| Employee deferral | Up to 100% of net SE income | $23,500 (or full income if less) |
| Catch-up (age 50+) | Additional | +$7,500 |
| Employer contribution | 20% of net SE income* | Up to annual additions limit (~$70k) |

*The self-employed employer contribution rate is 20% of net SE income (which equals 25% of "compensation" after deducting half of SE tax — the formula nets to ~20%).

### Solo 401(k) vs SEP-IRA for the Same SE Income

ADR-005 recommended SEP-IRA as the vehicle for post-April 1 LLC income. The solo 401(k) is almost always superior at the same income level:

| Feature | Solo 401(k) | SEP-IRA |
|---|---|---|
| Employee deferral | Yes — up to $23,500 | No |
| Employer contribution | ~20% of net SE income | ~20% of net SE income |
| Total shelter potential | Employee + employer combined | Employer only |
| Loan provision | Plan-dependent | No |
| Roth option | If plan document permits | No |
| Admin | Minimal (Form 5500-SF only if >$250k) | None |
| Plan document required | Yes | No |

**Example — $50k net LLC income:**

| Vehicle | Employee | Employer | Total |
|---|---|---|---|
| Solo 401(k) | $23,500 | $10,000 | **$33,500** |
| SEP-IRA | — | $10,000 | **$10,000** |

The solo 401(k) shelters an additional $23,500 at the same income level — the full employee deferral the SEP-IRA cannot access. For any meaningful LLC income, the solo 401(k) is the superior vehicle.

---

## Correction to the IRA Rollover Window

ADR-005 stated the IRA → solo 401(k) window closed March 31. This was based on the assumption that the solo 401(k) would have no active participant after the S corp terminated.

Correct rule: An IRA can roll into a qualified plan (including a solo 401(k)) if the plan is active — meaning the participant has compensation and is eligible to make contributions. If the LLC continues to generate SE income and the solo 401(k) remains the active plan, the rollover window remains open.

**Practical implication:** The IRA → solo 401(k) path was available after March 31 — it did not close. ADR-020 decided to use the employer 401(k) for the IRA rollover anyway (simpler, direct transfer vs physical check). That decision stands on its own merits. But the premise that the window closed was incorrect.

---

## What This Changes (and Does Not Change)

**Does not change:**
- ADR-020 decision: IRA → Employer 401(k) is still the right Phase 1 move (direct transfer, no friction, confirmed plan quality)
- ADR-021: Backdoor Roth annual cycle unchanged
- ADR-022: Solo 401(k) future activation thesis strengthened, not weakened

**Does change:**
- The solo 401(k) is not dormant — it is an active vehicle available for LLC SE income contributions
- SEP-IRA is not the right recommendation for LLC income — solo 401(k) is almost always better at the same income level
- The rollover hierarchy table in ADR-005 should be read with "IRA → Solo 401(k): available if plan is active" replacing "window closed"

---

## Revised Retirement Vehicle Landscape — Post April 1

| Vehicle | Status | Contribution basis | Notes |
|---|---|---|---|
| Employer 401(k) | Active | W-2 payroll | Primary pre-tax storage |
| Solo 401(k) | Active — available | LLC net SE income | Available, not dormant |
| SEP-IRA | Suboptimal | LLC net SE income | Solo 401(k) is better at same income |
| Traditional IRA | Empty pipe | N/A — not funded as pre-tax | Backdoor Roth pass-through only |
| Roth IRA | Active | Backdoor conversion | Final destination |

---

## Plan Amendment Consideration

When the sponsoring entity changes (S corp → sole proprietor/LLC), the solo 401(k) plan document should be reviewed and potentially re-adopted to reflect the correct business entity as plan sponsor. Most custodians have a process for this. Failure to update the plan document is an administrative issue, not a legal barrier to contributions — but it should be corrected for clean compliance.

---

## The Scar

ADR-005 was written with the model's contribution. The model stated the solo 401(k) would be frozen after March 31 due to the loss of W-2 income. This was a model error — it applied corporate plan logic (W-2 required) to a self-employment context (net SE income is the correct basis). The operator's subsequent question — "but isn't a solo 401(k) still available for an LLC with just the owner?" — is what surfaced this. Human catches the assumption. AI supplied the wrong constraint.

The error was in the Why-Not section, not the primary decision. The primary decision (don't terminate, let it sit) was correct. But the reasoning that the plan was "frozen" was not.

---

## Commit

**Correction:** A solo 401(k) remains available for LLC self-employment income after the S corp terminates. It is not frozen or dormant by default. The contribution basis changes from W-2 to net SE income. SEP-IRA is generally inferior for the same LLC income. The IRA → solo 401(k) rollover window did not close March 31 — it remains open as long as the plan is active.

**ADR-005 status:** Partially corrected. The dormancy framing and contribution freeze claim are superseded by this ADR. The rollover hierarchy table in ADR-005 should be read with this correction applied. All downstream decisions (ADR-020 through ADR-022) are unaffected in their conclusions.
