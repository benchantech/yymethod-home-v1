# C6-007: Hub Stack Decision — Current Infrastructure Is Sufficient
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Domain:** Structure
**Depends On:** C6-002, C6-006
**Freshness Boundary:** Active. Reverify when functional migration reasons emerge (performance, developer experience, new capability requirements). Do not reverify for aesthetic reasons alone.
**Source:** Operator oral decompression. 2026-04-05.

---

## Capture

This is a scar ADR. The direction was proposed, reversed, and reversed again before reaching the final decision documented here. Preserving the reversals is the point.

The hub domain (benchantech.com) was running on Jekyll/GitHub Pages at the start of the identity consolidation project. An early proposal argued for migrating the hub to Next.js on Vercel before implementing the identity signal — on the grounds that the hub should be on a "proper" modern stack to serve as a credible identity anchor. That proposal was recorded as an ADR.

On reflection, the proposal was challenged: does the migration change the signal quality? The answer was no. A Jekyll static site with correct schema is identical in machine-readable identity value to a Next.js application with the same schema. The stack is invisible to the entity graph.

The early proposal was superseded. The hub stays on Jekyll. The identity signal is implemented on the current stack. Migration is deferred until there is a functional reason to migrate.

---

## Why

Jekyll is fully capable of rendering a Person schema, a card grid, and a hub landing page. These are static HTML requirements. Jekyll generates static HTML. The match is complete.

The migration would add implementation cost, deployment configuration overhead, and new infrastructure dependencies with no increase in signal quality. The signal lives in the HTML output; Jekyll's HTML output is indistinguishable from Next.js's HTML output for the purposes of schema.org entity resolution.

The reversal happened because the first proposal was driven by aesthetic preference for a modern stack, not by a functional requirement. "Proper" is not a functional criterion. The functional criterion is: does the hub correctly serve the identity signal? Yes. Does the current stack prevent it? No. Migration deferred.

The longer lesson: when a proposal cannot answer the question "what does this change in signal quality?", the proposal is aesthetic, not functional. Aesthetic proposals belong in the backlog.

---

## Why-Not

**Why not migrate anyway for long-term developer experience benefits?**
Long-term benefits of migration — better developer experience, edge performance, modern routing — are real. They are not relevant to the identity signal work. Those benefits justify a migration on their own merits, on their own timeline, for their own reasons. They do not justify blocking the identity signal on the migration. See C6-002.

**Why not stay on Jekyll permanently?**
This ADR does not decide permanence. It decides that "migrate before shipping signal" is the wrong sequence. A future migration will be made on functional grounds when those grounds emerge. The `@id` URI will survive the migration without change (see C6-005).

**Why not document this as a mistake and move on?**
The reversal is the most useful part of this ADR. It names the failure mode: aesthetic preference disguised as architectural requirement. The scar record prevents the same argument from being made again. "We already went through this" is a complete answer only if the reasoning is preserved.

---

## Commit

**Decision:** Hub stays on Jekyll for the duration of the identity consolidation work. Identity signal is implemented on current infrastructure. Migration is a separate future decision, to be made on functional grounds.

**Confidence:** High. Confirmed after concrete direction reversal. The principle underlying the decision (C6-002) is durable.

---

## Scars

An early ADR proposed migrating benchantech.com to Next.js before implementing the identity signal. The proposal was based on a preference for a "proper" stack, not a functional requirement. The proposal was superseded when it could not answer the question: "does this migration change the signal quality?" It could not. The migration was deferred. The identity signal was shipped on Jekyll the same day.

---

## Timestamp

2026-04-05
