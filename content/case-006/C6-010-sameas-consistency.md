# C6-010: Cross-Property sameAs Consistency — The Array Is a Contract
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Domain:** Identity
**Depends On:** C6-003, C6-004
**Freshness Boundary:** Active. Reverify when any property is added to or removed from the system. The array must be updated across all properties at the same time.
**Source:** Operator oral decompression. 2026-04-05.

---

## Capture

The Person schema `sameAs` array lists all URLs that represent the same entity. This array must be identical across all properties that carry the Person schema. A `sameAs` array that varies between properties — some with five URLs, some with six, some omitting the hub itself — is a fractured signal.

In this case, the array stabilized at six URLs:

1. `https://benchantech.com` (hub)
2. `https://yymethod.com` (framework)
3. `https://home.yymethod.com` (cases)
4. `https://yyand.me` (podcast)
5. `https://www.youtube.com/@benchanviolin` (video)
6. `https://benchanviolin.substack.com` (writing)

All four properties (benchantech, yymethod, home.yymethod, yyand.me) carry this identical array.

---

## Why

The `sameAs` array is machine-readable. Search engines and LLMs process it to understand entity equivalence. If the array is inconsistent — if one property's schema lists five URLs while another lists six — the machine-readable signal is inconsistent. A processor that encounters both versions does not know which is authoritative. It may treat the discrepancy as noise.

Consistency is also a maintenance discipline. When a new property is added to the system, the array on every existing property must be updated to include it. If this discipline is not in place, the array drifts: the newest property is added to some schemas but not others, and the entity graph is partially consolidated at best.

The array should also include the property that carries it. A schema on yymethod.com that lists all other properties but not yymethod.com itself is incomplete — it is a schema that says "I know about these other URLs representing this person" but not "I am one of those URLs too." Include every property in every property's sameAs array.

---

## Why-Not

**Why not trust that the @id alone is sufficient for entity consolidation?**
The `@id` establishes identity; `sameAs` establishes equivalence. Both signals contribute to entity graph consolidation. Omitting `sameAs` is leaving signal on the table at negligible cost — the array is a few lines of JSON.

**Why not maintain separate sameAs arrays per property, each listing only adjacent properties?**
Partial arrays create partial consolidation. The goal is a complete entity graph. A property that only knows about its "neighbors" forces the graph processor to chain-traverse to discover the full picture. A complete array is a single, authoritative declaration.

**Why not update the sameAs array only when "something changes"?**
Something always changes eventually — new properties are added, platforms evolve, spokes are renamed. The discipline of treating the array as a contract means updates happen at the time of change, not in retrospect when the drift has already accumulated. When the array is updated, it is updated everywhere simultaneously.

---

## Commit

**Decision:** `sameAs` array is a contract. When any property is added, removed, or renamed, the array is updated across all properties simultaneously. The array is identical on all properties. Every property includes itself in its own sameAs array.

**Confidence:** High. Consistency is a binary property — either the arrays match or they don't. The maintenance cost of keeping them in sync is low.

---

## Timestamp

2026-04-05
