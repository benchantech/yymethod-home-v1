# ADR-026: Information Architecture Invariant — Share the Methodology, Hide the Application, Protect the Employer
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Permanent Record
**Date:** April 11, 2026
**Depends On:** ADR-013 (operator identity), ADR-017 (case study framing), C4-015 (method ownership boundary), C4-016 (publish reasoning, obfuscate deployment), C7-008 (case 007 information architecture)
**Freshness Boundary:** Permanent. This invariant governs all current and future properties in this system. It does not expire.

---

## Capture

Three surfaces. Three rules. One invariant.

**Surface 1 — yymethod.com:** The YY Method's schema and reasoning framework are fully public by design. The structured data is intentionally bare and inspectable. The methodology is the product. Anyone can read the Capture → Why → Why-Not → Commit → Timestamp loop, examine the JSON-LD schema, and understand exactly how the method works. This is not a vulnerability. It is the point.

**Surface 2 — home.yymethod.com and YY's World:** The reasoning artifacts (ADRs, case studies, stories) are public. The application code that generates and serves them is private — deployed to Vercel, not open-sourced, not inspectable. A visitor to home.yymethod.com can read every ADR and understand every decision. They cannot inspect the Next.js application, the component architecture, or the deployment configuration. A visitor to YY's World can read every story and see every interaction. They cannot see the code.

**Surface 3 — Employment:** The operator's employer is never named, implied, or identifiable in any artifact in this system. Work product, clients, methodologies developed under employment, and any identifying detail about the employer's business or systems exist entirely outside this system. Per C4-015, the YY Method Home Edition was carved out before the current employment relationship and is not subject to employer IP. That carve-out is the basis; this invariant is the operational enforcement.

---

## Why

The three surfaces share a common information structure, and naming it explicitly makes the pattern legible and enforceable.

**Why the methodology is public:** The method is the product. A reasoning framework that cannot be demonstrated is a framework that cannot be trusted. The YY Method's value is in showing how it works under real conditions — real decisions, real constraints, real errors preserved as scars. If the methodology were private, every case study would be an untestable assertion. Public methodology is the proof.

**Why the application is private:** The implementation is the operator's execution advantage. Any capable engineer can read how home.yymethod.com works from the published ADRs and build something similar. They cannot inspect the specific component architecture, deployment configuration, or generation pipeline to replicate the exact implementation. The gap between "understands the approach" and "has the codebase" is maintained by keeping the application private. This is not security through obscurity — the approach is fully documented. It is the difference between knowing a recipe and having a professional kitchen.

**Why the employment protection is absolute:** C4-015 established the principle: the operator brings the method; the work product stays with the client or employer. The corollary for this system is that nothing from the employment surface enters the public record. Not the employer's name. Not the industry. Not the methodologies developed under employment. Not the clients served. The employment relationship is invisible in this system, by design.

---

## Why-Not

**Why not open-source the application code?**
Open-sourcing the code would complete the inversion of the intended architecture: method public + application public = no execution advantage. The implementation is not the methodology. Publishing both would conflate them. The method is designed to be forked; the implementation is not.

**Why not keep the methodology private too?**
A private methodology with public applications (the usual developer posture) is the opposite of what the YY Method is for. The method exists to be demonstrated, taught, and applied. Its value compounds through public use. Keeping it private forfeits that compounding without protecting anything meaningful — the methodology is not the competitive asset.

**Why not make the employer surface partially visible?**
There is no partial visibility that doesn't create risk. "Works in fintech" is one step toward identification. "Works at a mid-size company in the Pacific Northwest" is another. Once any identifying detail is added, the chain begins. The rule is binary: the employer is invisible in this system. Any deviation from binary creates a gradient that is difficult to defend.

**Why not treat this as a policy rather than an invariant?**
A policy can be waived by circumstance or forgotten over time. An invariant is a structural constraint that must be explicitly overridden — and the act of explicit override is itself a decision that triggers this method. Treating this as an invariant means that any future AI agent or editor working on this system cannot accidentally violate it by treating it as a default that can be relaxed.

---

## The Unified Principle

> **Public face: reasoning and schema.**
> **Private face: implementation and application.**
> **Employment: invisible.**

This applies uniformly across all current and future YY Method properties. It is not re-evaluated per property. Any new property added to this system inherits this structure unless an explicit ADR overrides it with full reasoning for why the exception is warranted.

---

## Commit

**Decision:** This is the system-level information architecture invariant for all YY Method properties. It supersedes any property-specific interpretation and governs all future additions to the system. It is cross-referenced by C7-008 (case 007) and extends C4-015 and C4-016 (case 004) to the full property portfolio.

**Confidence:** High.

---

## Timestamp

2026-04-11
