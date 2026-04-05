# C4-006: Maintain a Portable Secure Work Node as the Primary Remote Execution Surface
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** System Architecture
**Depends On:** C4-005
**Freshness Boundary:** Active. Reverify if the portable endpoint stops being the practical remote anchor or if policy changes remove its suitability.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

One portable work endpoint must remain reachable from outside the office and capable of hosting sensitive, heavier local workloads when required.

This is the endpoint the window opens onto. When the operator is away, this is where the work stays.

---

## Why

A portable secure work node preserves continuity between office and travel contexts without forcing sensitive activity onto personal devices or cloud services.

Without a designated portable execution surface, the operator faces a false choice: either leave sensitive work behind entirely when traveling, or move it onto personal devices or cloud services — both of which violate the trust boundary established in C4-001.

The portable node resolves this by being present in both contexts. In the office, it can be used locally. Away from the office, it is the remote execution anchor reachable through the private overlay. The trust model stays intact in both modes because the work never had to move.

Portability is a property of the device's physical form, not of the data on it. The device travels with the operator; the sensitive execution context stays on the device but does not escape it.

---

## Why-Not

**Why not use the office-bound node for all remote work?**
Office dependency weakens resilience and mobility. A stationary node that cannot be taken to a different location or accessed under varied network conditions is a single point of operational failure. When the operator travels, the work must remain accessible — not dependent on physical presence at the office.

**Why not perform heavier work directly on personal client devices?**
This breaks the control/execution separation established in C4-002. A personal device that hosts sensitive execution state has crossed from a control surface to an execution surface — with all the custody and exposure implications that follow.

---

## Constraints

- The node must remain reachable under varied networks via the private overlay (C4-003).
- It must be usable both remotely and locally without reconfiguration cost (see C4-013).
- Power and thermal management must remain practical under heavier local workloads.

---

## Commit

**Decision:** Maintain a portable secure work node as the designated remote execution anchor. It remains reachable through the private overlay, capable of heavier local inference under admission control (C4-010), and operable in both remote and local contexts.

**Confidence:** High. This is the execution surface the entire remote operation model depends on.

---

## Timestamp

2026-04-05
