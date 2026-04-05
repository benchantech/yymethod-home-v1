# C4-013: The Portable Work Node Must Support Both Remote and Local Use Without Reconfiguration Debt
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** Operations & Safeguards
**Depends On:** C4-005, C4-010
**Freshness Boundary:** Active. Reverify if one operating mode becomes negligible.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

The portable work node is not purely headless. It may be opened and used directly at the office — locally, with its own display, keyboard, and peripherals — then closed and returned to remote-optimized operation later.

Both modes are real. Neither is a special case.

---

## Why

A design that works only when the machine is closed or only when it is open creates operational drag at every mode transition.

If the machine must be manually reconfigured to switch from remote-optimized to local-use mode, the operator will accumulate a tax on every transition. Over time, this tax becomes significant — and it creates the temptation to leave the machine in one mode permanently, which suboptimizes the other.

The correct design requires zero manual reconfiguration at mode transitions. The machine is available locally when the operator is present. It is available remotely when the operator is away. The transition is automatic or trivially simple, not a procedure.

This also means the admission control and power management decisions (C4-010, C4-012) must work correctly in both modes — not only when the machine is being operated remotely, and not only when the operator is sitting in front of it.

---

## Why-Not

**Why not optimize only for remote headless use?**
The operator sometimes benefits from direct local use — richer display, full keyboard, faster network, access to physical peripherals. Treating local use as unsupported degrades a real and valuable mode of operation for no benefit.

**Why not optimize only for local desk use?**
Remote continuity is a core requirement. An endpoint that only works well when the operator is physically present does not support the travel and remote work patterns this architecture was designed to enable.

---

## Commit

**Decision:** Design the portable work node for dual-mode operation: remote-first when the operator is away, locally usable when present, with minimal or zero transition cost between the two states. Neither mode is treated as exceptional.

**Confidence:** High.

---

## Timestamp

2026-04-05
