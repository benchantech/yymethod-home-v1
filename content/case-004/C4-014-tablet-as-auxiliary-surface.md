# C4-014: Treat Tablet-Class Devices as Auxiliary Surfaces — Not Trust-Boundary Shortcuts
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** Operations & Safeguards
**Depends On:** C4-003, C4-012, C4-013
**Freshness Boundary:** Active. Reverify if the tablet becomes essential rather than optional, or if identity coupling requirements change materially.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

A tablet may be useful in travel contexts as an auxiliary display or control surface — a larger screen for status monitoring, light reading, or graphical remote desktop when a phone screen is too constraining.

But the tablet is optional. The architecture must remain intact and fully functional without it.

---

## Why

The value of the tablet in this architecture is ergonomic, not foundational. It provides optional convenience — a larger surface for certain interaction patterns — without adding anything architecturally necessary.

This optional character must be preserved explicitly. The temptation to couple a tablet through a consumer identity stack for convenience — single sign-on, shared clipboard, cross-device continuity — introduces identity separation risks. Consumer identity platforms are designed for personal convenience, not for clean organizational separation between device roles.

If the tablet is enrolled through a consumer identity that blurs the personal/work boundary, it weakens the separation that C4-002 and C4-003 depend on. The tablet becomes a path through which identity coupling can erode the trust model — not through malice, but through convenience-driven design that does not account for the boundary it crosses.

The correct treatment: tablet provides optional ergonomic benefit, never load-bearing function. The trust model stays intact whether the tablet is present or absent.

---

## Why-Not

**Why not couple everything through one consumer identity stack for convenience?**
Identity convenience is not the same as trust-boundary clarity. A consumer identity platform that provides seamless cross-device continuity achieves that continuity by collapsing the separation between devices. For devices that are supposed to maintain distinct roles — control versus execution, personal versus organizational — this collapse is not a feature. It is the security model eroding through a convenience-optimized surface.

**Why not force the tablet into the primary control path?**
The tablet is supplemental, not essential. Building the control path around a device that may not always be present, or that may be on a different network, or that requires specific configuration, introduces fragility. The phone (C4-008) is the reliable primary control surface. The tablet is optional augmentation.

---

## Commit

**Decision:** Treat tablet-class devices as optional secondary surfaces. Prefer configurations that preserve independent identity boundaries and keep the primary trust model unchanged whether the tablet is present or not. The tablet is an ergonomic convenience, never a load-bearing trust assumption.

**Confidence:** High.

---

## Timestamp

2026-04-05
