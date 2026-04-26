# C7-013: Partner Control and Build Independence — Structural Separation
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-26
**Domain:** Resolution
**Depends On:** C7-009, C7-010
**Freshness Boundary:** Permanent. The separation of operator input from partner control is the structural foundation of the advisory relationship. It does not expire.
**Source:** Operator reasoning session. 2026-04-26.

---

## Capture

The partner controls how the venture is built. The operator's advisory input informs decisions; it does not determine them. This is not a default — it is an explicit, structural decision.

What the partner owns fully:
- Architecture and technical decisions
- Product and catalog direction
- Distribution and channel choices
- Hiring and team composition
- Operating cadence and prioritization
- The decision to accept, reject, or ignore advisory input

What the operator does not hold:
- Veto rights over any build decision
- Persistent access to internal systems or operational data
- Standing review or approval obligations
- The ability to block, delay, or condition any partner decision

---

## Why

**Independence is a prerequisite for operator credibility.** An advisor whose input can block partner decisions is not an advisor — they are a principal with informal control. That structure creates adversarial dynamics the moment the operator and the partner disagree. The operator's value as a strategic sounding board depends on the partner being able to implement differently without friction.

**The venture should not be built around the operator's ongoing input.** A build architecture that depends on the operator's availability to resolve decisions creates a fragile dependency. If the operator becomes unavailable — due to primary employment demands, personal circumstances, or simply the time boundary established in C7-011 — the venture stalls. The partner must be able to build, decide, and course-correct without the operator as a required input.

**The operator does not want to be liable for outcomes.** An advisor who holds architectural control is exposed to outcome accountability — if the build goes wrong on the dimensions the operator influenced, the operator carries partial responsibility. Structural separation eliminates that exposure. The operator's advice is input; the partner's decisions are the output. Accountability follows control.

**The role structure confirmed in C7-010 requires this separation.** A time-gated, pull-based advisory posture is only coherent if the partner can operate freely between windows. If the partner must wait for the operator's input to proceed, the time-gating is theoretical. Structural build independence makes the advisory time boundary real.

---

## Why-Not

**Why not maintain some architectural oversight to protect the operator's contribution?**
The operator's contribution — strategic input, domain framing, conversion data insights — is already captured and transferred before the build begins. Ongoing architectural oversight does not protect the contribution; it extends the operator's involvement beyond the scope defined in C7-010 and creates the dependency risk described above.

**Why not negotiate a lightweight review mechanism — e.g., the operator reviews quarterly?**
A lightweight review mechanism that carries no consequence is administrative noise. A review mechanism with consequences over build decisions is control. Neither is compatible with the advisory posture. The correct mechanism is: the partner asks when they want input; the operator responds in the defined window. Not a structured review cycle.

**Why not maintain read access to internal metrics to stay informed?**
Read access creates passive monitoring. Passive monitoring creates pull — the operator notices things and feels the obligation to comment. Monitoring and commentary without operational standing is exactly the shadow-employment dynamic the role structure in C7-010 is designed to prevent. The operator stays informed through the advisory channel, not through system access.

---

## Case 007 Closure Summary

This ADR closes the reasoning chain opened in C7-001. The full case logic:

1. The AI capability changes the operating model (C7-001, C7-002): full-stack ownership is the right architecture for the current period.
2. A revenue partnership can fund the build without transferring the moat (C7-003, C7-004).
3. The asset bundle was decomposed (C7-005, C7-006, C7-007): most components are liabilities or replaceables; the most valuable component was already owned.
4. Acquisition rejected (C7-009): build fresh, inherit nothing.
5. Operator role redefined (C7-010): time-gated advisory, no ownership, no control.
6. Advisory time bounded (C7-011): weekend synchronous, off-hours asynchronous, no weekday standing availability.
7. Family optionality preserved as performance-bound access, not guaranteed placement (C7-012).
8. Partner owns the build (C7-013): structural separation complete.

The case is closed. The operator's involvement is defined, bounded, and not contingent on the venture's outcome.

---

## Commit

**Decision:** The partner controls all build decisions with full independence. The operator's strategic input is available through the defined advisory channel but carries no veto, no review authority, and no persistent access to internal systems. The operator is not accountable for outcomes arising from decisions made after the advisory input is delivered. The build is the partner's.

**Confidence:** High.

---

## Timestamp

2026-04-26
