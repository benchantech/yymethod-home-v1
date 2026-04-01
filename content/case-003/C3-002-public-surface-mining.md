# C3-002: Public Surface Mining — The Enrichment Architecture
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-03-31
**Depends On:** C3-001
**Freshness Boundary:** Active. Expires when local LLMs achieve sufficient constraint fidelity to hold shadows directly. At that point the architecture inverts — vault and model occupy the same secured surface.

---

## Capture

A cloud LLM interaction is a mining operation, not a collaboration.

The operator transmits flares — public-facing material, chosen deliberately, shaped to generate useful ore. The model generates raw material: connections, framings, first-draft content, analysis. The operator privately enriches the vault with what's worth keeping. Nothing private was ever transmitted. The mine never knows what it produced that mattered.

The operator's statement of the architecture: *"The YY method allows me to mine using public surface and then discreetly enrich the private vault."*

The boundary condition: *"You only get the public key."*

The security property: *"You also can't leak what I never told you. I obfuscated the mechanics."*

---

## Why

**The cloud LLM is structurally incapable of being trusted with shadows.** Not because of malice — because of architecture. Context evaporates between API calls. Memory systems are not under operator control. Weights cannot be inspected or constrained. Anything transmitted can potentially be retained, logged, or leaked.

**The mining model converts this limitation into a feature.** Instead of worrying about what the model might do with sensitive inputs, the operator simply never transmits them. The model receives public material and generates ore from it. The operator's private judgment — what's gold, what's slag — never enters the mine.

**The enrichment step is where the YY Method applies.** The model cannot distinguish its good output from its plausible output. The operator can. The Why-Not step, the freshness judgment, the tribal context marking — all of that happens in the vault, after the mining session, applied to raw ore the model never sees enriched.

**Provenance stays clean.** Artifacts enriched from mining sessions carry a verifiable provenance chain: public inputs only, documented interaction, operator corrections visible as scars. Nothing in the vault traces back to shadow material the model could theoretically have influenced.

---

## Why Not

**Why not just use a local LLM instead?**
Local LLMs today are slower and less capable for the mining use case. The cloud LLM's breadth of training makes it a better ore generator. The mining architecture makes cloud use safe. Once local LLMs achieve sufficient speed and capability, the architecture can shift — but the mining model works now, with current tools.

**Why not transmit shadows to get better ore?**
Better ore from contaminated inputs is not better ore. An artifact enriched from a session where shadows were transmitted has a compromised provenance chain. The shadow contamination can't be removed after the fact. The vault integrity depends on the mining boundary being absolute.

**Why not trust the model's own quality judgment on the ore?**
The model cannot identify its own drift, its own extrapolation, or its own coherent-but-wrong outputs. It was demonstrated in the field study that the model led, amplified, skipped Why-Nots, and treated flares as terrain — while producing material that felt like insight. Ore assessment is the operator's job, not the model's.

---

## Assumptions This Decision Depends On

- Operator discipline in maintaining the public/shadow boundary during sessions
- Enrichment step is always applied before ore becomes an artifact — raw mining output is never filed directly
- Cloud LLM memory and logging are treated as adversarial by default, not trusted by default

---

## Tribal Context

**Operator supplied:** The architecture. The flare/shadow distinction. The public key framing. The mechanics obfuscation as deliberate security practice. The statement "you can't leak what I never told you."

**Model supplied:** The mine/vault/ore/assay metaphor. The expiration condition linking to local LLM trust maturity.

---

## Commit

**Decision:** Cloud LLM interactions are mining operations governed by a strict public boundary. Operator transmits flares only — public surface material, deliberately shaped. Model generates ore. Operator enriches vault privately. The model never has access to the enrichment layer. This is the operating architecture for all cloud LLM sessions until local LLMs can be trusted with shadows.

---

## Timestamp

2026-03-31
