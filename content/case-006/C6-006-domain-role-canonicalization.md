# C6-006: Domain Role Canonicalization — One Role Per Property, Zero for the Hub
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Domain:** Structure
**Depends On:** C6-001
**Freshness Boundary:** Active. Reverify if the portfolio of properties changes or if a spoke's role changes materially.
**Source:** Operator oral decompression. 2026-04-05.

---

## Capture

Each property in a multi-property personal site needs a primary job. Without explicit assignment, properties accumulate content in every direction — because the operator is the same person, and they bring the same range of interests to every surface. The result is role bleed: properties that start doing each other's jobs, duplicating content, and competing with each other for the same signals.

Role canonicalization is the explicit assignment of one role per property, before the bleed happens or to stop it once it has.

In this case:
- **benchantech.com** — hub (navigation, cohesion, identity anchor)
- **yymethod.com** — framework authority (the method: what it is, how it works, why it was built)
- **home.yymethod.com** — applied reasoning (cases, ADR registry, decisions made under the method)
- **yyand.me** — origin and narrative (podcast, backstory, real life in real time)

The hub's role is special: it holds no original content. Its value is entirely relational.

---

## Why

Role bleed is the natural entropy of a multi-property site. The operator's voice is consistent across all surfaces, which makes it easy for content to migrate. An essay that belongs on the writing spoke could appear on the hub. A case that belongs in the case registry could be summarized on the framework site. Over time, the properties stop being distinct destinations and start being different front-ends for the same undifferentiated mass of content.

Explicit role assignment constrains this. When a new piece of content is created, the role assignments answer the question: which property does this belong on? The answer is usually clear. Without the assignment, the answer is always "wherever is most convenient right now," and the architecture degrades.

The hub's zero-content role is the most important constraint. A hub that publishes its own content begins competing with its spokes for attention. It develops an editorial voice. It creates return visit reasons of its own. All of this undermines the hub-and-spoke topology — the hub is supposed to send traffic outward, not retain it.

---

## Why-Not

**Why not let the hub publish a blog or essays?**
A hub that publishes original content dilutes the roles of the writing spoke. If the hub has essays, what does the writing spoke need to be for? Role confusion follows. The hub's value is in navigation and identity; content creation belongs on the spokes.

**Why not let each property define its own role organically?**
Organic role definition produces organic role bleed. The roles feel natural and distinct at the beginning; they converge over time. Explicit assignment is a discipline, not a description of the current state.

**Why not assign primary and secondary roles per property?**
Secondary roles are deferred role bleed. A property with a "secondary" role will eventually have content that justifies the secondary role at the expense of the primary. Name the primary role and treat the rest as either overflow (send it to the correct spoke) or out-of-scope.

---

## Commit

**Decision:** Assign one explicit role to each property. Treat the hub's role as navigation and cohesion — no original content. Respect role assignments when adding new content anywhere in the system.

**Confidence:** High. The role assignments are already legible in how the properties were independently developed. This ADR makes them explicit.

---

## Timestamp

2026-04-05
