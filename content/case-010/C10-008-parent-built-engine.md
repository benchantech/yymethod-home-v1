# C10-008: Parent-Built Creative Engine — Infrastructure Invisible to the Child
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-27
**Domain:** Structure
**Depends On:** None — foundational role division
**Freshness Boundary:** Active. Revisit as children's technical capabilities grow. The engine may transfer to the child over time as they develop the capability and interest.
**Source:** Operator reasoning session. 2026-04-27.

---

## Capture

Someone has to build the system. Rendering pipelines, consistency tooling, layout templates, version management, access control, provenance logging — these are engineering problems. They require setup, maintenance, iteration, and ongoing care.

The question is not whether someone builds it, but who, and what that means for the child's relationship to the creative work.

The answer is architectural: the parent builds and maintains the infrastructure. The child does not see it. The child's experience is: I have an idea for a character. Something happens. The character appears. I tell someone what to change. It changes. I add to the story. The story is preserved.

---

## Why

The separation between engine and studio is the core design principle. The child should spend creative time creating, not managing systems. Every minute a child spends understanding why a render failed, managing file versions, or figuring out why the access control broke is a minute not spent on the character, the story, or the decision about what to build next.

The parent's engineering role makes the child's authorship role possible. This is not a shortcut or a convenience — it is the design. The engine exists to be invisible.

The parent may also act as translator between the child's creative intent and the technical inputs the rendering system requires. A child says "I want the character to look like they've been running and they're out of breath and also their hat is tilted." The parent translates that into whatever the rendering system needs. The creative decision — what the character looks like at this moment — is the child's. The translation is infrastructure.

The boundary between translation and origination requires judgment. The parent's job is to translate faithfully, not to improve. "The hat tilts this way" is the child's decision. "I made it tilt a bit more because it looks better" is the parent originating. The parent corrects for clarity and technical constraints; the parent does not override creative decisions.

---

## Why-Not

**Why not teach the child to use the rendering tools directly, as early as possible?**
Age-appropriate technical capability transfer is appropriate over time (and the ADR allows for it). But starting with "learn the tools" instead of "originate the character" gets the order wrong. The creative habit — imagining something from scratch, iterating, deciding — should form before the technical layer is introduced. A child who learns that creative work starts with learning tools learns the wrong lesson. The lesson is: creative work starts with imagination. Tools come later, and only if the child wants them.

**Why not have the child participate in building the engine from the start, as a learning project?**
Building the engine is an engineering project. It competes with the creative project for the child's attention and energy. The parent builds the engine precisely so the child can focus entirely on the creative work. If the child develops an interest in the engineering side later, that interest can be developed — but it should follow the creative formation, not precede or compete with it.

**Why not use a fully off-the-shelf system that requires no parent engineering?**
A fully off-the-shelf system comes with constraints that may not match the family's requirements: no-indexing is hard to guarantee in hosted platforms, identity decoupling may not be possible, provenance logging may not be built in, access control may be limited, and the platform may change terms or discontinue. The parent-built engine gives the family control over all the properties that matter for this case. The engineering cost is the tradeoff.

---

## Commit

**Decision:** The parent builds and maintains the infrastructure. The child's experience is the creative surface only. The parent translates the child's creative intentions into technical inputs faithfully, without originating or overriding. The engine may transfer to the child over time as capability and interest develop, but the transfer follows the creative formation — it does not precede or compete with it.

**Confidence:** High.

---

## Timestamp

2026-04-27
