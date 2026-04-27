# C10-005: Pseudonymous Portfolio Structure — Identity Decoupling
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-27
**Domain:** Structure
**Depends On:** C10-004 — access control handles security; this ADR handles identity decoupling within the access model
**Freshness Boundary:** Active. Revisit when each child reaches adulthood and makes an identity disclosure decision.
**Source:** Operator reasoning session. 2026-04-27.

---

## Capture

Within the access-controlled portfolio system, each child's work needs to be organized. The obvious organizing principle is the child's name. But the child's name is their real identity, and the portfolio is private for reasons that include protecting the child's identity from external exposure.

There is a subtler risk that does not require the portfolio to be publicly accessible: real-identity metadata gets logged in systems the operator does not fully control. OAuth providers log authentication events. Servers log requests. Error reporting systems capture context. Analytics systems capture paths. If the child's real name appears in URLs, filenames, and page content, that real-identity metadata propagates into logs that may be retained for years, may be accessible to third parties, or may be exposed in ways the operator cannot fully anticipate.

The portfolio being private today does not mean the metadata is private today.

---

## Why

A pseudonym or character-linked identifier for each child's portfolio serves two distinct purposes.

**Purpose 1: Identity decoupling from external systems.** If the child's portfolio is at `/alice` instead of `/[real-name]`, the real name does not appear in any of the systems that log access. When the portfolio is eventually accessed selectively or publicly, those logs do not reveal the child's real identity retroactively. The identity decoupling is most valuable precisely when the portfolio transitions toward broader exposure — and it has to be established before the first content is created, not retrofitted afterward.

**Purpose 2: Selective publication without retroactive exposure.** If the child, as an adult, decides to publish certain characters or works selectively — sharing one character with a creative community while keeping others private — the pseudonym allows that without exposing the child's real identity through metadata baked into the published URLs. The pseudonym creates optionality the real name does not.

The pseudonym is stable — it does not rotate. Rotating pseudonyms creates confusion and breaks any references that have accumulated. The pseudonym is chosen once, ideally with the child's participation at an age-appropriate level, and it persists.

---

## Why-Not

**Why not use the child's real name and handle identity questions if and when they come up?**
The problem with "handle it later" is that real-identity metadata is written at creation time and is not retroactively removable. URLs, filenames, server logs, cached content, and indexed metadata accumulate the real name from the first access onward. If the child later wants the portfolio to be associated with a pseudonym — or if the adult child wants to share specific work without revealing their identity — the metadata from the early years cannot be erased. The pseudonym must be established before the first content.

**Why not use a rotating pseudonym for extra privacy?**
Rotation creates a different problem: any external reference to the old pseudonym breaks, and the accumulated identity of the portfolio — the character-linked identifier the child has grown up with — is lost. Stability is a design goal. The pseudonym is the child's portfolio identity across their entire creative life with this system. Rotation trades that continuity for marginal additional privacy that the access control model already provides.

**Why not let each child choose their own pseudonym independently, without guidance?**
Children can participate in choosing their pseudonym, and that participation is encouraged where age allows. But the pseudonym should be chosen with the parent's guidance to ensure it doesn't accidentally reveal real-identity information, is age-appropriate, and is something the child will be comfortable with as an adult looking back. "Guidance" is not "override" — it is the parent making sure the choice is thought through.

---

## Commit

**Decision:** Each child's portfolio is organized under a pseudonym or character-linked identifier, not the child's legal name. The pseudonym is stable, chosen before the first content is created, and chosen with the child's participation where age allows. Real names do not appear in URLs, filenames, or page content. The pseudonym handles identity decoupling; access control handles security.

**Confidence:** High.

---

## Timestamp

2026-04-27
