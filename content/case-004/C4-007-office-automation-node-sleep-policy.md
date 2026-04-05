# C4-007: Keep the Office Automation Node Awake Only When Automation Is Active
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** System Architecture
**Depends On:** C4-005, C4-006
**Freshness Boundary:** Active. Reverify if the automation becomes mission-critical outside office hours or if peripherals require a different sleep policy.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

The office-bound node supports ambient automation that is valuable during office presence — displays active, workflows running, peripherals engaged.

When the operator is away, this automation either ends or does not require sustained wakefulness to run. Keeping displays and system resources active unnecessarily wastes power and creates pointless device wear.

---

## Why

The correct policy is neither "always awake" nor "always asleep." It is conditional wakefulness tied to active automation.

When automation is running, the node may hold awake — the power cost is justified by the work being done. When automation ends or the operator leaves, sleep is allowed and preferred.

This conditional policy minimizes power draw, reduces display and peripheral wear, and preserves the automation's integrity by not forcing an arbitrary choice between always-on and always-off.

The office node's role is ambient automation, not remote execution. Its sleep policy should reflect that role. An execution surface needs to stay reachable; an automation surface needs to stay awake only when automating.

---

## Why-Not

**Why not disable sleep entirely?**
It wastes power and keeps displays, fans, and peripherals active without benefit. When automation is not running, there is no reason for the machine to be fully awake. The cost is paid continuously; the benefit is zero.

**Why not allow unrestricted automatic sleep?**
Unrestricted sleep can interrupt in-progress automation at unpredictable moments, creating partial executions, stale state, or failed workflows. The automation must be allowed to complete before the machine sleeps.

---

## Commit

**Decision:** Bind the office automation node's wakefulness to active automation windows. When automation is running, the node may hold awake. When automation ends or the machine is idle, sleep is allowed and preferred. The policy follows the workload, not a fixed timer.

**Confidence:** High.

---

## Timestamp

2026-04-05
