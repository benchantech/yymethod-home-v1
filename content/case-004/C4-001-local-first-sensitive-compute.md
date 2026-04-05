# C4-001: Keep Sensitive Compute Local — Remote the Operator, Not the Data
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** Foundational Principle
**Depends On:** None — anchors all downstream decisions
**Freshness Boundary:** Active. Becomes stale if confidentiality requirements, endpoint trust model, or approved AI usage model change.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

The architecture must support high-sensitivity work without sending the reasoning substrate, prompts, context, or outputs into third-party cloud AI systems by default.

Remote capability is required — the operator works across locations and must be able to act from away. But remote access must move the operator to the work, not move the work into a different trust domain.

The core risk being managed is not merely endpoint access. It is custody of reasoning-bearing material.

---

## Why

Sensitive work becomes materially safer when the primary execution surface remains under organizational control and the operator reaches that surface through a constrained control channel.

Cloud AI services are not a trust boundary — they are a trust expansion. Every prompt transmitted, every context window shared, every output received represents material that has left the organizational perimeter. That departure may be acceptable for some work classes. For the work this architecture supports, it is not.

The framing that resolves the apparent contradiction: the operator's presence is remote, but the work's execution environment is not. The window opens toward the work. The work does not move toward the window.

---

## Why-Not

**Why not use cloud-first AI assistance?**
The trust boundary expands immediately and materially. Cloud AI services are not architecturally equivalent to on-premise execution — they introduce a third-party custody surface for every input transmitted. For high-sensitivity work, this is not a risk to be managed through contracts or data agreements. It is a category shift in trust assumptions that cannot be managed back down.

**Why not sync working context to portable personal devices?**
Portability of context is the same as portability of exposure. A working context on a personal device follows that device through every network it touches, every physical space it enters, and every compromise event it may experience. Keeping context on controlled endpoints keeps the exposure surface bounded.

**Why not treat remote access as file replication?**
Replication multiplies custody surfaces. Each copy is a new exposure event with its own risk profile. The correct model keeps one authoritative copy on a controlled surface and moves the operator's presence — not the data — to meet the work.

---

## Constraints

- Remote work must remain practical. The architecture cannot require physical presence to function.
- Sensitive material must remain inside the organizational execution environment throughout all work phases.
- The operator must be able to act from multiple physical contexts: home, office, travel, mobile.

---

## Assumptions

- A sufficiently secure remote control path can be established without prohibitive performance cost.
- Local endpoints are better aligned with confidentiality requirements than external AI services for this work class.

---

## Commit

**Decision:** Adopt a local-first model. Sensitive computation remains on controlled work endpoints. Remote devices act as control surfaces, not execution hosts. Remote access moves the operator; it does not move the work.

**Confidence:** High. This is the governing principle — not an optimization layered on top of a cloud-first architecture, but the first constraint that shapes every downstream decision in this case.

---

## Scars / Corrections

Initial discussion centered on convenience and remote usability. The reasoning matured into a trust-boundary decision: local-first was not just an optimization but the governing principle. Convenience cannot be the organizing constraint when the work class demands custody management. The scar: trust-boundary primacy arrived late in the discussion and should have been the first question asked.

---

## Timestamp

2026-04-05
