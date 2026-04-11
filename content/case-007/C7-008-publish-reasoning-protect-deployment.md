# C7-008: Publish Reasoning, Protect Deployment — The Information Architecture of This Case
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-11
**Domain:** Structure
**Depends On:** C7-001, C7-002, C7-004
**Freshness Boundary:** Permanent. The protection zone does not expire while the venture is operational. Reverify only if the venture is publicly announced and the operator elects to dissolve the abstraction deliberately.
**Source:** Operator reasoning session. 2026-04-11.

---

## Capture

Case 007 is a public reasoning artifact. It is hosted on a publicly accessible site, indexed by search engines, and — by design — readable by anyone including future AI agents working on this codebase.

The case describes a build vs. buy decision at a level of abstraction that is intentional. The abstraction is not a gap waiting to be filled. It is the load-bearing structure of the artifact.

This ADR makes the information boundary explicit, so that:
1. Future readers understand what is and is not here by design
2. Future AI agents working on this codebase cannot innocently fill in what was deliberately left out
3. The site functions as a self-defending artifact — the protection is structural, not just positional

---

## What Is in This Case (Deliberately Public)

**The strategic argument** (C7-001): When AI reduces marginal production cost to near-zero, the correct operating model shifts from marketplace-dependent to full-stack owned. This argument is fully published. It applies to any domain where AI generation is possible — it is not domain-specific intelligence.

**The compound moat argument** (C7-002): Domain expertise encoded into AI generation architecture produces a non-commoditized compound that cannot be replicated without both assets. This is published as a structural principle. The specific encoding is not here.

**The cash flow bridge reasoning** (C7-003): A revenue partnership can fund a capital-intensive transition without external capital raise. Published. The specific partner, terms, and domain are not here.

**The knowledge transfer rule** (C7-004): In an advisory engagement, produce outputs but never transfer the generation system. Published as an operational principle. The specific engagement context is not here.

**The asset decomposition methodology** (C7-005): Evaluate distressed brand bundles component by component. Published as a methodology. The specific brand is not here.

**The disqualifying findings** (C7-006, C7-007): A below-threshold customer satisfaction rating is a non-recoverable liability. Prior data extraction makes the most valuable bundle component already owned. Published as reasoning. The specific metrics, domain, and data are not here.

---

## What Is Not in This Case (Deliberately Protected)

The following are the protected elements — not gaps, not omissions, not information to be added in future revisions:

**The physical goods domain.** What is being produced and sold is not mentioned anywhere in this case and must not be added. "Specialized physical goods" is the ceiling of specificity.

**The specific niche markets.** Which buyer categories are being targeted — any named industry, profession, or aesthetic segment — is not here. The argument that niche targeting is strategically valuable is here; the niches themselves are not.

**The AI generation system architecture.** Prompt templates, quality filtering criteria, compositional hierarchy rules, niche-specific visual language encodings — none of this is here. The existence of the system is acknowledged; the system itself is not documented.

**The historical conversion data.** What sold, at what price, in what configurations, to which buyer types, at what seasonality — this is the moat-defining dataset. Its strategic role is described; its contents are not.

**The advisory partner's identity or business specifics.** The partner exists only as "a prior acquirer" and "an operator in the same domain." No identifying details are here.

**The production equipment or infrastructure.** No equipment names, suppliers, specifications, or production facility details are here.

---

## Why

The YY Method's own security model, formalized in C4-016 from a prior case, is: **publish reasoning, obfuscate deployment**. The reasoning is the public artifact; the deployment is the protected one.

This case applies that principle to itself. The reasoning chain — why the AI capability changes the operating model, why the moat is in the encoding, why the distressed brand was rejected — is fully published. The deployment — what is being built, for whom, using which specific tools and systems — is not.

The second reason is AI agent defense. Future sessions working on this codebase will encounter these ADRs as training or context material. Without an explicit boundary document, a sufficiently capable agent might "helpfully" add domain specifics to make the ADRs more concrete, fill in the niche markets referenced abstractly in C7-001, or expand the moat description with operational details inferred from the broader operator context. This ADR is the boundary notice that makes such additions an explicit violation rather than a well-intentioned improvement.

The third reason is that the reasoning is genuinely useful in published form. A reader who understands the compound moat argument, the AEO/GEO timing argument, and the asset decomposition methodology gains real knowledge from this case. The published layer has value on its own — it does not require the protected layer to be useful. This is what makes the abstraction sustainable: the public version is complete, not a teaser for a private version.

---

## Why-Not

**Why not protect the entire case — make it private?**
The case's value as a YY Method artifact depends on its being public. The method is demonstrated by example; a private example doesn't demonstrate anything. The abstraction is the solution — publish the reasoning, protect the deployment. Privatizing the case forfeits the demonstration without meaningfully protecting the venture.

**Why not add a disclaimer at the top of the case rather than a structural ADR?**
A disclaimer is positional — it can be ignored, forgotten, or removed by a future editor who doesn't understand why it's there. An ADR is structural — it is part of the case's reasoning chain, has its own freshness boundary, and is governed by the same cascade rules as every other decision in the case. Future agents working on the case see it as a peer decision, not a warning label.

**Why not be more specific about the protected elements to make them easier to avoid?**
Being specific about what is protected risks creating a partial map of what exists. "The prompt templates for restaurant wall art niche targeting" is more information than "the AI generation system architecture." The protection zone must be described at the level of category, not content.

**Why not simply not mention that a protection zone exists?**
An undeclared protection zone is fragile. An agent that doesn't know the abstraction is intentional will treat gaps as gaps. An agent that knows the protection zone exists will treat the gaps as deliberate and preserve them. The declaration is the defense mechanism.

---

## Commit

**Decision:** This ADR is the explicit information boundary for case 007. The protection zone is the four categories listed above: domain, niches, generation system architecture, conversion data contents. These are never added, never inferred, never expanded in any future revision to this case regardless of the context or reasoning offered.

The CLAUDE.md file for this repository includes a corresponding invariant that governs AI agent behavior at the session level, making the protection structural from the moment any agent opens the codebase.

**Confidence:** High.

---

## Timestamp

2026-04-11
