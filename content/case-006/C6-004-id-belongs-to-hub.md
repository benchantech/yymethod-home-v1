# C6-004: @id URI Belongs to the Hub Domain
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Domain:** Identity
**Depends On:** C6-001, C6-003
**Freshness Boundary:** Active. Reverify if the hub domain changes or if a different property becomes the canonical reference point.
**Source:** Operator oral decompression. 2026-04-05.

---

## Capture

The canonical `@id` URI must resolve to a domain. Which domain? In a multi-property personal site, the choices are: the hub domain, the most prominent spoke domain, the oldest domain, or the highest-traffic domain. The decision: the hub domain owns the `@id`.

In this case, the hub domain is `benchantech.com`. The canonical `@id` is `https://benchantech.com/#person`.

---

## Why

The hub domain is the correct home for the `@id` URI for three reasons.

First, the hub's explicit purpose is to represent the whole. It is the property designed to surface all other properties. Placing the canonical identity anchor on the hub is the natural topology: the hub is the center, the spokes radiate from it, and the `@id` lives at the center.

Second, the hub has no product identity of its own. The spokes have competing claims on their namespace — yymethod.com is a methodology framework; yyand.me is a podcast brand; home.yymethod.com is a case registry. The hub is purely personal and relational. Its `@id` namespace is uncontested.

Third, concentrating the canonical signal on the hub strengthens the hub's authority as an entity anchor. As more properties reference the hub's `@id`, the hub accumulates cross-domain citations for the entity it represents. This strengthens the overall entity graph.

---

## Why-Not

**Why not use the most prominent spoke domain (yymethod.com)?**
yymethod.com is a brand — it represents the method, not exclusively the person. The method has its own identity that extends beyond the operator. Placing the canonical Person `@id` there conflates the person with the brand. The hub is the better candidate precisely because it has no brand of its own.

**Why not use the oldest domain?**
Age is not the criterion. The hub role is what determines canonical authority. The oldest domain may predate the hub architecture and may not have been designed as a hub.

**Why not use the highest-traffic domain?**
Traffic measures reach, not canonical authority. The `@id` should live on the domain whose role is identity, regardless of current traffic levels. A low-traffic hub is still the correct canonical anchor.

---

## Commit

**Decision:** The canonical `@id` URI is `https://{hub-domain}/#person`. All other properties reference this URI in their Person schema. No other property claims a competing `@id` for the same person.

**Confidence:** High. Hub-centric @id placement is consistent with the hub-and-spoke architecture of the overall system.

---

## Timestamp

2026-04-05
