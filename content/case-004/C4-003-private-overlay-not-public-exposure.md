# C4-003: Use a Private Overlay Network — Not Publicly Exposed Remote Services
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** Foundational Principle
**Depends On:** C4-001, C4-002
**Freshness Boundary:** Active. Becomes stale if the private overlay can no longer meet performance, policy, or assurance needs.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

Remote access is required from variable networks, including untrusted and transient ones: home networks, office networks, mobile hotspots, travel infrastructure.

Public exposure of management services is unacceptable under any of these conditions.

---

## Why

A private overlay keeps the execution surface dark to the public internet while preserving reachability from approved endpoints. This matters on multiple dimensions simultaneously:

**Exposure reduction.** A service that is not publicly routable cannot be brute-forced, scanned, or probed by the general internet. The attack surface is narrowed to enrolled endpoints rather than the entire internet population.

**Complexity reduction.** Public exposure demands compensating controls: port management, firewall rules, IP allowlisting, certificate management, and continuous monitoring. Each compensating control is a failure point. A private overlay removes the need for most of them.

**Trust clarity.** The private overlay establishes a clear perimeter: enrolled devices are inside, everything else is outside. This clarity is preferable to porous public exposure defended by accumulated rules.

---

## Why-Not

**Why not use direct public remote services?**
Convenience at the edge creates avoidable exposure at the core. A publicly accessible management interface is a permanent attack surface — it requires constant monitoring, hardening, and incident response capacity. The private overlay eliminates this category of risk rather than managing it.

**Why not rely on consumer identity coupling for access control?**
Identity convenience is not the same as network security. Consumer identity platforms are designed for ease, not for zero-trust network-level isolation. Relying on them to substitute for network segmentation blurs the personal/work boundary in ways that are difficult to audit and difficult to reverse.

---

## Constraints

- Access must work reliably across home networks, office networks, mobile hotspots, and travel infrastructure.
- The operator must be able to connect from more than one approved client device without friction.

---

## Assumptions

- Private overlay enrollment can be tightly scoped to approved endpoints only.
- Endpoint compromise remains a greater operational risk than raw connectivity failure for this work class.

---

## Commit

**Decision:** All remote access traverses a private overlay network or equivalent zero-trust channel. Publicly routable remote administration paths are rejected. The execution surface remains dark to the public internet.

**Confidence:** High. This is the network-layer expression of C4-001 and C4-002 — keeping the execution surface controlled means keeping it unreachable by default.

---

## Timestamp

2026-04-05
