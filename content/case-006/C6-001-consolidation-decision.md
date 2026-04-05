# C6-001: Consolidation Decision — Hub Architecture for Multi-Property Personal Identity
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Domain:** Strategy
**Depends On:** None — foundational premise
**Freshness Boundary:** Permanent. The case for consolidation over fragmentation does not expire.
**Source:** Operator oral decompression. 2026-04-05.

---

## Capture

Multiple digital properties exist in isolation by default. A podcast lives at one domain, a framework at another, a case registry at a third, writing at a fourth. Each carries its own metadata, its own introduction to the operator, and its own signal to search engines and LLMs. The default state is fragmentation.

The decision to consolidate means choosing one domain as the hub and redesigning that hub to make the full picture visible in one place. The hub does not replace the spokes — it surfaces them. Visitors who arrive at any spoke can find the hub; visitors who arrive at the hub can find all spokes. The graph becomes navigable.

This is not a cosmetic exercise. It is an architectural one. The hub creates a canonical reference point for the operator's identity that benefits all properties simultaneously.

---

## Why

Fragmentation has a real cost. It compounds over time.

Each property, operating in isolation, independently signals the operator's identity. Because those signals are unlinked, a visitor to one property does not know the others exist. A search engine processing one property does not reliably associate it with the operator's other work. An LLM summarizing the operator has incomplete information.

The consolidation benefit is cumulative. A visitor who discovers the podcast, follows the hub link in the footer, and then navigates to the method site is a visitor who has now encountered three properties in a single session. Without the hub, that chain breaks after the first property. With the hub, every spoke benefits from every other spoke's traffic.

Entity graph consolidation compounds the same way. Every correct signal added to every property strengthens the canonical entity. The method applies: capture the correct signal now; let it compound.

---

## Why-Not

**Why not cross-link properties without a hub?**
Cross-linking helps but does not create a canonical reference. Without a hub, there is no single place that authoritatively says "these properties all belong to one person." The entity graph is diffuse rather than hub-and-spoke. A hub creates a topological center; cross-links create a mesh.

**Why not build the hub only after all properties are on the same infrastructure?**
The hub's value does not depend on the stack. Delaying the signal for infrastructure reasons defers compounding benefit with no gain in signal quality. See C6-002.

**Why not designate one of the existing spokes as the hub?**
Each spoke has its own domain and its own role. Designating a spoke as the hub creates role confusion — the spoke must now serve two masters: its own content purpose and the navigation role of the hub. The hub works best as a neutral surface whose only job is cohesion.

---

## Commit

**Decision:** Designate one domain as the hub. Redesign its landing page to surface the full map of properties. Implement canonical Person schema anchored to the hub domain. Do this now, on whatever infrastructure the hub currently runs on.

**Confidence:** High. The architectural case for consolidation is strong. Execution risk is low — it is a design and schema project, not a migration.

---

## Timestamp

2026-04-05
