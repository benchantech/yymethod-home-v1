# ADR-011: payroll platform Deferral Setup & Dollar Cost Averaging Strategy
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided — Pending Execution Monday March 30
**Date:** March 29, 2026
**Depends On:** ADR-003, ADR-007, ADR-010
**Freshness Boundary:** Expires when annual cap is hit (~October 2026). Re-evaluate every September for following year. Expires if salary, pay frequency, or IRS limits change.

---

## Capture

New employer uses **payroll platform** for payroll. Start date March 16, 2026. First paycheck ~April 11 (March 16-29 period paid in arrears). Second paycheck ~April 25 — first one not yet received.

Payroll has not yet run for the current biweekly period — deferral election submitted now will take effect on or before April 25.

Key facts:
- Salary exceeds SS wage base — biweekly pay frequency continues
- 2026 employee deferral limit: $23,500
- Some amount already deferred via S corp Q1 salary payrolls. Remaining deferral capacity: ~$21,500.
- S corp election revoked — **5-year re-election lockout through 2030** — full $23,500 available every year with no S corp deferral to subtract

---

## The payroll platform Setup

Two fields must be set correctly:

| Field | Value | Why |
|---|---|---|
| Deferral percentage | **10%** | DCA across ~16-19 paychecks |
| Annual maximum amount | **$21,500** | Hard stop — prevents excess deferral |

**Critical:** payroll platform has no visibility into external plan deferrals (solo 401(k) via S corp). It will not auto-stop at the IRS limit based on outside contributions. The annual maximum cap field is the only protection against excess deferral. Without it, payroll platform would allow up to $23,500 through its own plan alone — producing combined excess deferrals that would be taxed twice.

---

## How To Set It In payroll platform

**Deferral percentage:**
- Log into payroll platform
- Select My Retirement
- Elect deferral percentage: **10%**
- Set Annual Maximum Amount: **$21,500**
- Submit

**Additional withholding (Step 4c):**
- Employee → Compensation → Tax Status
- Step 4(c) Extra Withholding: set an additional flat withholding amount per paycheck per tax situation
- Submit — goes through HR approval, allow 1-2 business days

**Note:** Deferral changes take effect within two business days. Submit Monday March 30 to catch April 25 paycheck.

---

## Why 10% — The Dollar Cost Averaging Argument

The instinct to front-load contributions (20%+) in a down market is understandable but flawed in a volatile year. Dollar cost averaging across the full year produces a lower average entry price than concentrated front-loading because:

- Entry price is unknown — the bottom may not be in
- Spreading across ~16 paychecks captures multiple price points through the recovery
- Maximum DCA benefit with minimum take-home disruption
- Cap still protects the annual limit regardless of percentage

At 10%:
- Cap hit in approximately October 2026
- Contributions spread across the full volatile year
- Take-home comfortable throughout

---

## Why-Not

**Why not 20% to front-load the down market?**
Concentrates contributions into 8 paychecks. Assumes the market doesn't go lower. Reduces take-home significantly during the front-loading period. DCA across a volatile year is the superior risk-adjusted approach when the bottom is uncertain.

**Why not set percentage without the annual cap?**
payroll platform has no visibility into the S corp Q1 salary deferrals already made. Without the cap, contributions continue until payroll platform hits $23,500 on its own — producing excess deferrals taxed twice. The cap is non-negotiable.

**Why not dollar amount instead of percentage?**
payroll platform only accepts percentage-based deferrals for employee elections. Dollar amounts are not an option.

---

## The Full 2026 DCA Picture

Contributions deployed across the entire year at multiple price points:

| Period | Contribution | Context |
|---|---|---|
| Q1 S corp salary deferrals | ~$2,000 | Before transition |
| Q1 S corp employer contribution | ~$15,000 | March — market down |
| April–October employer deferrals (10%) | ~$21,500 | Spread across recovery/volatility |
| SEP-IRA for LLC SE income | ~$2,500 | At 2026 filing |
| **Total 2026 retirement contributions** | **~$41,000** | Full year DCA |

This DCA structure emerged naturally from the entity transition mechanics — not from deliberate timing. The result is near-ideal market exposure across a volatile year without any active timing decisions.

---

## Tax Savings Summary

| Contribution | Combined Rate | Tax Saved |
|---|---|---|
| ~$41,000 total contributions | 29% | **~$11,900** |

---

## Annual September Update Rhythm

Every September, 5-minute login:

| Year | Action | IRS Limit (est.) | Cap To Set |
|---|---|---|---|
| Sep 2026 | Set 2027 election | ~$24,000 | ~$24,000 (no S corp) |
| Sep 2027 | Set 2028 election | ~$24,500 | ~$24,500 |
| Sep 2028 | Set 2029 election | ~$25,000 | ~$25,000 |
| Sep 2029 | Set 2030 election | ~$25,500 | ~$25,500 |
| Sep 2030 | Set 2031 election | ~$26,000 | ~$26,000 or adjust if S corp re-evaluated |

**Note:** S corp re-election not available until 2031 at earliest. Full annual limit available every year through 2030 — no S corp deferral to subtract. Confirm IRS limit announcement each October/November before setting cap.

---

## Assumptions This Decision Depends On

- Salary exceeds SS wage base — biweekly pay frequency continues
- payroll platform remains employer's payroll system
- 2026 IRS deferral limit confirmed at $23,500
- No S corp re-election through 2030 — confirmed by 5-year lockout rule
- S corp Q1 salary deferrals confirmed

---

## Tribal Context

The DCA insight came from the operator — not the model. The model defaulted to front-loading logic (higher percentage = more capital deployed in down market sooner). The operator correctly identified that in a volatile year, spreading contributions across the full year via DCA produces a better average entry price than concentration.

The annual cap field is the most important technical detail in this ADR. It is the only mechanism preventing an excess deferral situation that would create a tax problem. It must be set correctly on day one and verified each September update.

The 5-year re-election lockout — also caught by the operator — fundamentally simplifies the annual September update through 2030. No S corp math. No partial year calculation. Just update the IRS limit and keep the percentage at 10-15%.

---

## Commit

**Decision:**
- payroll platform deferral: **10%, annual cap $21,500**
- Additional withholding Step 4(c): flat amount per paycheck (per individual tax situation)
- Submit Monday March 30 morning
- Update every September — confirm IRS limit, reset cap to full annual limit
- Keep percentage at 10-15% for DCA benefit
- 5-year S corp lockout means full annual limit available every year through 2030 — no adjustments needed for S corp deferrals
