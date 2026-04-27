# C9-015: Registry Integrity — Rejected Cases Are Never Superseded
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-26
**Domain:** Inheritance
**Depends On:** C9-013 — Case 003 as rejected predecessor establishes the specific instance this ADR generalizes from
**Freshness Boundary:** Permanent. The distinction between Rejected and Superseded is a stable invariant of the registry's information architecture.
**Source:** Operator reasoning session. 2026-04-26.

---

## Capture

After Case 009 was written, the question arose: does Case 009 supersede Case 003 directly? Both cases cover similar territory — AI use, authorship, voice, the writing process. Case 009 was written because Case 003 lacked the substance to carry its subject. The proximity of subject matter raised the question of whether the status relationship should be made formal.

The answer is no. But this is the first time a Rejected case has been adjacent to a new case covering the same territory, which means the principle has not previously been documented. This ADR documents it.

---

## Why

Rejected and Superseded are distinct statuses with different meanings, and conflating them destroys the information each carries.

**Superseded** means: a case's reasoning was replaced or absorbed by a successor. The decision evolved. A better version exists. The prior case is preserved as the record of where the reasoning was before the supersession. Case 002 (YY's World) is Superseded — the kids-only audience restriction and outward-only posture were replaced by a different model in yysworld.

**Rejected** means: a case lacked the substance to carry its own weight. The method caught an empty case and called it out. Case 003 was five ADRs that pointed at real territory but had not yet accumulated the content to fill it. The Rejected status is the method applied to the registry itself — the same discipline the method applies to any decision that is not yet ready to commit.

A Rejected case is a scar record. Scars are not superseded. They are preserved intact as the demonstration that the registry is self-auditing. Converting Case 003 from Rejected to Superseded would erase that demonstration.

Case 009 covers territory that Case 003 anticipated. It does not absorb, replace, or build on Case 003's ADRs. It is a new case that arrived when the substance existed.

---

## Why-Not

**Why not supersede Case 003 with Case 009 on the grounds that Case 009 fills the gap Case 003 identified?**
Filling the gap Case 003 identified is not the same as superseding Case 003. Supersession implies a lineage — that Case 009 is the evolved form of Case 003. It is not. Case 003 is the record of an attempt that lacked substance. Case 009 is a separate case that happens to cover similar territory. The lineage is the territory, not the case.

**Why not simply mark Case 003 as closed with a note pointing to Case 009?**
Case 003 is already closed — it is Rejected. Adding a forward pointer would imply that the Rejected status is provisional, pending a successor case. It is not. The Rejected status is the final disposition. Case 003 does not need to be updated to acknowledge Case 009's existence.

---

## Commit

**Decision:** Rejected cases are never superseded. They are preserved intact as the scar record of the method applied to itself. A new case covering similar territory to a Rejected case is a new case — it stands entirely on its own. This principle is documented here as a registry invariant, established at the first occurrence.

**Confidence:** High.

---

## Timestamp

2026-04-26
