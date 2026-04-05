# C4-012: Set Power Policy by Machine Role — Not a Single Global Preference
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** Operations & Safeguards
**Depends On:** C4-005, C4-009, C4-010
**Freshness Boundary:** Active. Reverify if device roles, thermal limits, or office patterns change materially.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

Different machine roles in this architecture require contradictory power behavior.

The office automation node should sleep when idle, to avoid wasting power on unused displays and peripherals. The portable secure work node must remain reachable for remote access when the operator is away — sleep would make it unavailable. Both should minimize unnecessary energy use where their roles permit it.

A single global rule cannot satisfy all three requirements simultaneously.

---

## Why

Power policy is architectural, not cosmetic. When machine roles are distinct (C4-005), their power policies must be distinct as well.

**Office automation node:** Wakefulness is conditional on active automation (C4-007). When automation ends, sleep is allowed and preferred. Idle availability is not a requirement for this machine class.

**Portable secure work node:** Must remain reachable when the operator needs remote access. Aggressive sleep would break the remote execution model. Idle draw should be minimized within the constraint of remaining reachable — but reachability takes precedence.

**Control devices (phone, tablet, personal portable):** Opportunistic and disposable from a power perspective. These devices follow their own native power management. No special policy is required.

Applying a single rule — "never sleep" or "sleep aggressively" — fails once machine roles diverge. The office node set to never sleep wastes power permanently. The portable node set to sleep aggressively becomes unreachable at night. Policy must follow role.

---

## Why-Not

**Why not keep all systems always on?**
Idle availability is not universally worth the power and display cost. For the office node, there is no operational requirement to remain fully awake when automation is not running. Always-on is a policy chosen by default rather than by reasoning — and it fails on cost without providing a compensating benefit.

**Why not let all systems sleep aggressively?**
Availability and long-running jobs would fail unpredictably. The portable work node must remain reachable for remote access. Heavy inference jobs must not be interrupted by unexpected sleep. Aggressive uniform sleep introduces failure modes that the admission control and recovery systems (C4-010, C4-011) cannot compensate for.

---

## Commit

**Decision:** Role-specific power policy:
- Office automation node: awake only during active automation windows, sleep allowed and preferred otherwise.
- Portable secure work node: reachable when needed, tuned to reduce idle draw within the constraint of remaining accessible.
- Control devices: opportunistic, follow native device power management, no policy required.

**Confidence:** High.

---

## Timestamp

2026-04-05
