# C10-003: Private Prototype Boundary — Squirrel Reference Stays Internal
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-27
**Domain:** Containment
**Depends On:** C10-002 — the derivative-character rejection establishes what the prototype can and cannot be
**Freshness Boundary:** Active. Revisit only if the IP status of the source material changes or if the squirrel prototype is under consideration for release.
**Source:** Operator reasoning session. 2026-04-27.

---

## Capture

After the decision to require original characters for the portfolio (C10-002), the squirrel plush-derived prototype still has a legitimate role: proving that the pipeline works. Before asking a child to originate a character and committing to the rendering workflow, it is worth knowing that consistent AI rendering across iterations is achievable, that the parent can explain the process to a child, and that the output quality meets the standard the system is designed to produce.

The squirrel prototype serves as that proof of concept. It was the first run of the engine. It demonstrates that the system works.

The question this ADR answers: what happens to it after that?

---

## Why

The private prototype boundary is architectural, not advisory. The prototype is never published, never presented as original work, never included in any child's portfolio as a character, and never used in any commercial activity.

The reasons stack:

**IP risk persists.** The original character requirement (C10-002) rejected derivative characters precisely because of the IP uncertainty around the squirrel plush. That uncertainty does not resolve by keeping the prototype around privately. The prototype carries the same IP risk as any derivative work; it is just not compounded by public exposure or commercial use.

**Leakage risk is real.** A prototype that lives in the same environment as the portfolio creates the possibility of leakage — a file in the wrong folder, a reference in the wrong conversation, a render used as an example that blurs the boundary between prototype and portfolio. The architectural decision is to keep the prototype in a separate, clearly bounded private environment so leakage cannot happen accidentally.

**The scaffolding is not the building.** The prototype proves the pipeline. The pipeline is what the system builds on. The prototype's value is the confidence it creates in the pipeline — not the prototype itself.

---

## Why-Not

**Why not delete the prototype once the pipeline is proven?**
Deletion is not required. The prototype can remain as a private engineering record — a reference for iterating on the pipeline, a baseline for comparison as the rendering tools improve. The constraint is not that the prototype must not exist; it is that it must stay private and bounded. A deleted prototype cannot be referenced or learned from. A bounded prototype can.

**Why not publish the prototype with a clear label that it is a derivative and not original work?**
Publishing the prototype, however labeled, changes the calculus. It introduces public exposure of a derivative work, which is exactly what C10-002 was designed to avoid. A label that says "this is derivative" does not reduce the IP risk — it advertises it. The purpose of the private prototype boundary is to keep the derivative work out of public view, permanently.

**Why not treat the prototype as a testing fixture that occasionally appears in the child's workflow as an example?**
An example that appears in the child's workflow is a portfolio-adjacent presence. Children learn from what they see in their working environment. If the prototype appears as an example, the child may learn that borrowed characters are a valid starting point. The architectural decision keeps the prototype invisible to the child's creative process entirely.

---

## Commit

**Decision:** The squirrel prototype is bounded to private engine validation. It is never published, never used as a portfolio character, never presented as original work, and never included in any commercial activity. The prototype lives in a separate private environment. The child's creative workflow does not reference it. The boundary is architectural.

**Confidence:** High.

---

## Timestamp

2026-04-27
