# C4-004: Preserve the Method — Do Not Publish the Client's Concrete Deployment
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** Foundational Principle
**Depends On:** C4-001
**Freshness Boundary:** Active. Reverify before any broader publication or derivative teaching use.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

The operator wants to capture the reasoning as a YY Method Home case study while protecting the client from exposure of concrete implementation details.

The case study must remain useful as a methodological record. It must not become a map of the client's environment.

---

## Why

A useful case study preserves reasoning, constraints, tradeoffs, and scars. These are the elements that make the method teachable — they show how judgment was structured under real conditions.

A careless case study leaks topology, specific practices, defensive controls, and operational patterns. These elements do not add methodological value. They add risk.

The method is the message. The deployment is not for publication.

The line between the two is principled abstraction: generalize device names to roles, generalize workload classes without naming specific runtimes, remove addresses and commands, preserve the reasoning structure intact. Everything that teaches the method stays. Everything that maps the client goes.

---

## Why-Not

**Why not publish the exact setup?**
Specificity can degrade client security and disclose operational patterns not required to teach the method. Enough specific detail accumulated in one place can allow reconstruction of the client's defensive posture, network topology, and tooling choices. The security cost is real; the methodological benefit is zero.

**Why not omit the case entirely?**
The method gains force through durable, structured examples drawn from real problems. A case study that preserves principles without exposing the instance serves both the method and the client. Omitting it entirely removes the example without gaining any protection — the choice between abstraction and omission should always favor abstraction.

---

## Constraints

- The archive must remain useful as a methodological record — the reasoning chain must be intact.
- Client-identifying or security-relevant specifics must be obscured or generalized throughout.

---

## Commit

**Decision:** The ADR set preserves principles, tradeoffs, abstractions, and decision logic. It redacts or generalizes environment-specific details that would reduce client protection. The method is published; the deployment is not.

**Confidence:** High. This ADR is itself the operating instruction for the entire case — it defines how every other ADR in the set should be read and how they were written.

---

## Timestamp

2026-04-05
