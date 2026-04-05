# C4-002: Separate Control Surfaces from Execution Surfaces
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** Foundational Principle
**Depends On:** C4-001
**Freshness Boundary:** Active. Reverify if portable devices begin hosting durable work context or if the execution environment becomes distributed by design.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

The environment contains multiple personal and organizational devices. Their roles must not be flattened into a single blended model.

Some devices exist to control work. Others exist to execute work. The distinction is foundational — not incidental, not cosmetic, not a preference.

---

## Why

Role separation reduces confusion, leakage, and accidental migration of sensitive state.

A device that both controls and executes work becomes difficult to classify, difficult to harden, and difficult to reason about when something goes wrong. Did the sensitive output remain on the execution surface? Was context synced to a control device? These questions become unanswerable when the same device plays both roles.

Separation also improves ergonomics without compromising security. Lightweight devices can remain mobile and unencumbered. Heavier systems remain stable, powered, and optimized for their execution function. Each class does what it is best at without being asked to do what it is not.

The rule is simple to state and enforces itself naturally once the roles are assigned: personal devices control, work endpoints execute, and the boundary between them is explicit.

---

## Why-Not

**Why not let every device do everything?**
Every additional role on every endpoint increases ambiguity and attack surface. A device that carries execution state is a higher-value target than one that only issues commands. A device that can initiate sensitive computation can also, inadvertently, expose it. The cost of flattening roles is paid in both security and clarity — simultaneously and permanently.

**Why not make the mobile device a peer execution surface?**
Mobile convenience does not justify duplicating sensitive execution state. The portability that makes a phone useful as a control surface is exactly what makes it unsuitable as an execution surface — it moves through too many networks, spaces, and conditions to be trusted with work that must stay put.

---

## Constraints

- The operator needs continuity across phone, tablet, and portable computer.
- The execution environment must remain stable and predictable regardless of where the operator is physically located.

---

## Assumptions

- Remote command and remote desktop access are sufficient for the majority of work interactions.
- The operator can tolerate and work effectively within the asymmetry between control devices and execution surfaces.

---

## Commit

**Decision:** Personal devices are designated control surfaces. Work-managed endpoints are designated execution surfaces. Control may move freely; sensitive execution does not.

**Confidence:** High. This separation is the structural expression of C4-001's trust-boundary principle applied to device roles. It is load-bearing for the entire architecture downstream.

---

## Timestamp

2026-04-05
