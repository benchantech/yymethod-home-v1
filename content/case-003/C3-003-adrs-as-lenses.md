# C3-003: ADRs as Lenses — Pointed, Not Stored
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-03-31
**Depends On:** (none — reframes the nature of ADRs themselves)
**Freshness Boundary:** Permanent. Optical properties don't degrade. What degrades is the scene being observed — hence Timestamping and freshness boundaries on individual artifacts.

---

## Capture

ADRs are not containers. They are lenses.

A container holds a fixed thing. A lens has no content of its own — it focuses what passes through it. An ADR pointed at a decision makes the reasoning visible. Pointed at a different decision, it makes different reasoning visible.

The operator's statement: *"These are like lenses. They can point at things. Write ADRs through them."*

The six invariants — Compression · Scars · Survivability · Explainability · Timestamping · Discipline — are not a filing taxonomy. They are optical properties. An artifact satisfying all six can be aimed at any domain and produce a trustworthy image of the reasoning there.

This is demonstrated across the YY Method Home Edition itself: the same lens structure applied to S corp tax architecture (Case 001), founding architecture for a kids site (Case 002), and essay writing process (Case 003). Different domains. Same optical properties. Trustworthy image each time.

---

## Why

**The lens framing changes how ADRs are used.** A container is filed and retrieved. A lens is aimed. The operator's job is not to file decisions — it is to aim the lens correctly at the decision that matters. This shifts the work from documentation to focus.

**Lenses are reusable across domains.** The same Why-Not structure that identifies hazardous tax decisions identifies hazardous architectural decisions identifies hazardous essay structure decisions. The method doesn't change when the domain changes. The scene changes. The lens is the same.

**Lenses reveal what was already there.** A well-aimed ADR doesn't add reasoning to a decision — it makes existing reasoning visible. The Why and Why-Not were always present in the operator's thinking. The lens captures and focuses them. This is why AI can draft an ADR from a conversation without inventing the operator's reasoning — it's reading what's already in the light.

**The freshness boundary is a property of the scene, not the lens.** A lens doesn't expire. What expires is the accuracy of what it's pointing at. When the scene changes — tax law shifts, a founding assumption is corrected, an essay structure evolves — the lens needs to be re-aimed, not replaced.

---

## Why Not

**Why not treat ADRs as documentation?**
Documentation describes what happened. A lens reveals why it matters and what it depends on. The distinction is survivability — documentation tells future-you what was decided, but not whether to trust it. A well-aimed ADR tells you what has to remain true for the decision to hold.

**Why not use a different metaphor for what ADRs do?**
The lens metaphor is the operator's own framing, not an assignment. It captures something the container/record metaphor misses: directionality. An ADR has a target. It's aimed at something. A record is passive. A lens is active.

**Why not apply this framing only to Case 003 artifacts?**
It applies retroactively to every ADR in the archive. ADR-001 is a lens aimed at S corp termination timing. C2-017 is a lens aimed at cognitive theft as the primary threat to yysworld.com. C3-001 is a lens aimed at the opening architecture of the Cognitive Theft essay. The framing doesn't change the artifacts — it clarifies what they've always been.

---

## Assumptions This Decision Depends On

- The six invariants are stable — they are the optical properties of the lens
- The operator is responsible for aim — a compliant artifact pointed at the wrong question is still wrong
- Freshness boundaries protect against re-aiming at a scene that has already changed

---

## Tribal Context

**Operator supplied:** The lens framing. The statement "these are like lenses, they can point at things." The observation that the same structure applies across domains.

**Model supplied:** The optical properties articulation. The scene/lens separation. The retroactive application to the full archive.

---

## Commit

**Decision:** ADRs are lenses, not containers. The six invariants are optical properties, not a filing taxonomy. The operator's job is aim. A well-formed artifact pointed at the wrong question is not a good artifact. A well-aimed artifact satisfying all six invariants produces a trustworthy image of the reasoning in any domain. This framing applies to all existing and future artifacts in the YY Method Home Edition.

---

## Timestamp

2026-03-31
