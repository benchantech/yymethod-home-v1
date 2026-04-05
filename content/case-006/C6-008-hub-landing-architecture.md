# C6-008: Hub Landing Architecture — Card Grid, Minimal Intro, Folded About
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Domain:** Surface
**Depends On:** C6-006, C6-007
**Freshness Boundary:** Active. Reverify if the number or nature of properties in the system changes materially.
**Source:** Operator oral decompression. 2026-04-05.

---

## Capture

The hub landing page needs to accomplish three things in sequence: welcome the visitor, show them the full map of properties, and tell them who the operator is. The structure that accomplishes this: a brief intro paragraph, a card grid for each spoke, and an about section folded into the bottom of the page.

Each card in the grid carries four pieces of information: the domain URL (for recognition), the property title, its role label (one term), and a one-sentence description. The about section answers "who is this person?" and folds in naturally after the cards, so every visitor who scrolls the page gets the full picture without navigating away.

---

## Why

The visitor may arrive at the hub from any direction — from a search result, from a link in a spoke's footer, from a direct referral. They arrive with varying levels of prior context. Some know the operator well; some have never encountered any of the properties.

The intro paragraph establishes the thread without assuming prior knowledge. It does not list credentials or achievements — those are fragile and become stale. It describes the structure: what connects these properties, what the operator does, why the hub exists.

The card grid is the functional core. Each card is a door. The domain label provides recognition for visitors who arrived from that spoke. The role label names the spoke's job. The description tells the visitor enough to decide whether to go there. A visitor who scans four cards in ten seconds has navigated the full portfolio.

Folding the about section into the landing page keeps the hub single-page. A separate `/about` page creates a navigation step that many visitors won't take. The about content is lightweight — two or three sentences — and belongs at the bottom of a page where the visitor who has read the cards is primed to learn more.

---

## Why-Not

**Why not have a more editorial or narrative intro?**
A narrative intro that describes the operator's current status, recent achievements, or ongoing projects becomes stale immediately. A structural intro — what this site connects, what the operator does at the category level — is evergreen. The hub intro should not require maintenance to remain accurate.

**Why not have a separate /about page?**
The about content on the hub is short enough to live on the landing page. A separate page requires a navigation link, which adds UI complexity, and a click, which reduces coverage. If the about section requires more than a few paragraphs, a separate page is appropriate. At the scale of a hub, it is not.

**Why not show activity feeds, recent writing, or latest case studies on the hub?**
Activity feeds belong to the spokes. The hub holds no original content (C6-006). Surfacing spoke content on the hub creates maintenance overhead and muddies the card grid's role as the primary navigation element. The card grid already points to the spokes; additional spoke content on the hub is redundant.

**Why not use a single long prose page instead of cards?**
Cards provide parallel comparison. A prose page requires the visitor to parse which properties exist and what they do from embedded text. Cards make the structure explicit in the visual layout.

---

## Commit

**Decision:** Hub landing architecture: brief intro → card grid (domain, title, role, description) → folded about. No original content beyond intro and about copy. Cards are the primary navigation element.

**Confidence:** High. The architecture is minimal, evergreen, and consistent with the hub's zero-content role.

---

## Timestamp

2026-04-05
