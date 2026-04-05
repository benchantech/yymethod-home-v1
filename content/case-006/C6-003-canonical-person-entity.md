# C6-003: Canonical Person Entity — One @id Across All Properties
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Domain:** Identity
**Depends On:** C6-001
**Freshness Boundary:** Active. Reverify if schema.org Person type guidance changes materially or if major search engines deprecate @id-based entity resolution.
**Source:** Operator oral decompression. 2026-04-05.

---

## Capture

Schema.org provides a Person type with an `@id` field — a URI that uniquely identifies the person in any machine-readable context. Without a canonical `@id`, each property's Person schema is a disconnected assertion: it says "Ben Chan" but does not say which Ben Chan or whether this is the same Ben Chan as on the other properties. With a canonical `@id`, all properties point to the same entity, and the entity graph consolidates.

The Person schema also carries a `sameAs` array — a list of URLs that are equivalent representations of the same entity. Together, `@id` and `sameAs` form the identity signal.

---

## Why

The `@id` is the linchpin of entity graph consolidation. Search engines and LLMs use `@id` URIs to associate schema assertions across domains. If yymethod.com says "Ben Chan" and benchantech.com says "Ben Chan" but they use different `@id` values — or no `@id` at all — they may be processed as different entities. A single `@id` that appears on all properties makes the relationship unambiguous: they all describe the same person.

The `sameAs` array extends this by explicitly listing all related URLs as equivalent representations. It answers the question "where else can I find this entity?" in a machine-readable way. A complete `sameAs` array covering all properties in the system is a more complete entity signal than any single property can provide alone.

Without this work, the entity graph is a collection of independently-named individuals with no connection between them. With this work, it is a single individual with multiple known addresses.

---

## Why-Not

**Why not use a standard external identifier (ORCID, LinkedIn URL) as the @id?**
External identifiers are less stable than a self-owned domain. A LinkedIn URL can change format; a platform can go away; an ORCID is authoritative in academic contexts but not in web-native contexts. A personal domain URI is as durable as the domain registration.

**Why not rely on the name string alone to link entities?**
Name strings create ambiguous matches. "Ben Chan" is a common name. An `@id` URI with a controlled namespace is unique by construction. Name-based entity matching is probabilistic; URI-based matching is deterministic.

**Why not implement @id on only the hub?**
The hub carrying the `@id` while spokes do not is partial consolidation. A search engine encountering yymethod.com and not seeing an `@id` pointing to the canonical entity gets a weaker signal than if the same `@id` appears on both. Full coverage is the goal.

---

## Commit

**Decision:** Implement a single Person schema with `@id` set to a URI on the hub domain. Deploy the identical `@id` on all properties. The `sameAs` array lists all properties in the system, including the hub itself. See C6-010 for the consistency contract.

**Confidence:** High. Standard schema.org practice; well-supported by all major search engines.

---

## Timestamp

2026-04-05
