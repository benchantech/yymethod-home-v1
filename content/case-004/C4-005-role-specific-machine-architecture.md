# C4-005: Assign Distinct Roles to Distinct Machines — No Unified Pattern
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** System Architecture
**Depends On:** C4-001, C4-002, C4-003, C4-004
**Freshness Boundary:** Active. Reverify if one machine class disappears, becomes managed differently, or takes on materially new responsibilities.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

The environment contains multiple endpoint classes with different strengths, constraints, and intended uses:

- A stationary, office-bound node suited for ambient automation and multi-display work.
- A portable secure work node capable of hosting sensitive and heavier local workloads.
- Several personal control devices — phone, tablet, portable personal computer — for remote operation.

These classes want different power policies, interaction patterns, and security configurations. Forcing one pattern onto all of them creates friction in at least one class at all times.

---

## Why

Stable office-bound automation, portable secure execution, and mobile command-and-control each require different defaults. A machine optimized for one role performs poorly as another.

The office node benefits from staying awake during automation windows, connected to peripherals, and stable. Making it also function as a remote execution target for sensitive work would mix its ambient automation role with a more sensitive security posture — creating ambiguity about which workloads belong where.

The portable node benefits from being the reliable remote execution anchor — reachable, consistent, and guarded. Making it also absorb all local automation would strain its mobility and power constraints.

Personal devices benefit from being treated as pure control surfaces — light, mobile, no sensitive state. Asking them to also execute sensitive work breaks the trust model.

Role specialization is not overhead. It is the architecture.

---

## Why-Not

**Why not make every machine interchangeable?**
Interchangeability erases useful specialization and leads to the wrong defaults on at least one device class permanently. A machine configured to serve multiple contradictory roles cannot be optimally configured for any of them. The result is a blended policy that serves no single role well.

**Why not consolidate everything onto one endpoint?**
Consolidation increases blast radius. If the single endpoint is compromised, degraded, or unavailable, all work stops. It also makes the security model harder to reason about — a single device that handles ambient automation, sensitive execution, and remote access has a more complex and harder-to-harden attack surface than three devices with specialized roles.

---

## Assumptions

- The operator can reason clearly about which workload belongs on which endpoint class.
- The cost of maintaining multiple distinct roles is lower than the cost of blended ambiguity in policy and security.

---

## Commit

**Decision:** Use a role-based architecture. The office-bound node handles ambient automation and multi-display work. The portable work node serves as the secure remote execution surface. Personal devices operate as control surfaces only. Each class retains its distinct role, power policy, and interaction pattern.

**Confidence:** High. This decision operationalizes C4-001 and C4-002 into the concrete machine inventory.

---

## Timestamp

2026-04-05
