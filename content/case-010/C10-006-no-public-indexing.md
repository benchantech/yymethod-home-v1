# C10-006: No Public Indexing — Discoverability Off by Default
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-27
**Domain:** Containment
**Depends On:** C10-004 — access control handles authentication; this ADR handles discoverability
**Freshness Boundary:** Permanent. The no-indexing default does not expire. Discoverability is toggled on explicitly by the adult child — never before.
**Source:** Operator reasoning session. 2026-04-27.

---

## Capture

Access control (C10-004) determines who can read the portfolio when they actively seek it out. But access control does not determine whether the portfolio gets discovered by people who weren't looking for it. Search engines index. Data brokers scrape. AI training pipelines ingest publicly-accessible content. Social media platforms preview URLs.

A portfolio behind Google OAuth is not, by itself, protected from discovery. The authentication wall stops unauthorized human readers. It does not stop automated systems that operate at the infrastructure level — looking for URLs, examining DNS records, following links, reading metadata in HTTP responses.

The no-indexing decision addresses a different threat: not unauthorized reading, but unauthorized discovery and ingestion.

---

## Why

The most concrete threat is AI training pipelines. The children's creative work — characters they originated, stories they developed, illustrations rendered through their decisions — could be ingested as training data before the children are old enough to consent to that use. Once ingested, the work is effectively part of a model. There is no mechanism to retract it. The only protection is to ensure the work is not discoverable and not accessible to crawlers before the consent decision is made.

The no-indexing posture does this:
- `robots.txt` disallows all crawlers
- No OpenGraph metadata (title, description, image) that would make the content attractive to scrapers or shareable in ways that generate previews
- No share buttons or social graph integration that would prompt users to create discoverable references
- No links to the portfolio from any indexed property

The goal is not security through obscurity — access control handles who can read. The goal is that the portfolio does not appear in any index, training dataset, or cached web record before the adult child makes a deliberate decision about discoverability.

When that decision is made, the adult child can turn discoverability on — by adding metadata, by removing robots restrictions, by linking to the portfolio from indexed properties. That decision belongs to them. Discoverability defaults off and requires an explicit action to enable.

---

## Why-Not

**Why not rely on access control alone, since the content is behind OAuth?**
OAuth blocks human readers who haven't been granted access. It does not block automated systems that operate at the DNS, HTTP header, or metadata level. A page that returns authentication-required responses still has a URL, and that URL can appear in logs, in link graphs, in DNS records, and in other signals that automated systems use to discover and catalog content. The no-indexing posture removes the portfolio from those signals.

**Why not add indexing controls later, when the children are older?**
The problem with "add later" is the same as "handle real identity later" (C10-005): metadata accumulates from the moment of first deployment. If the portfolio domain appears in DNS records or link graphs before no-index rules are in place, that appearance is already logged in systems the operator does not control. The no-indexing posture must be established from the first deployment.

**Why not allow selective indexing — some characters public, some private — from the start?**
Selective indexing is the right adult-consent outcome (see C10-009), but it requires the adult child's decision about what to expose. Allowing it from the start — before the consent decision — exposes content that the child has not yet been given the opportunity to consent to exposing. The sequencing matters: private first, selective exposure as a deliberate adult decision.

---

## Commit

**Decision:** The portfolio is never indexed. robots.txt disallows all crawlers from the first deployment. No OpenGraph metadata, no share buttons, no social graph integration. The portfolio is invisible to automated discovery systems. Discoverability is off by default and can only be turned on by the adult child's explicit decision. The no-indexing default does not expire.

**Confidence:** High.

---

## Timestamp

2026-04-27
