# C10-004: Google OAuth + Email Allowlist — Access Model
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-27
**Domain:** Structure
**Depends On:** None — foundational access decision
**Freshness Boundary:** Active. Revisit if the family's trusted-access needs change or if the OAuth provider changes terms relevant to minor-data handling.
**Source:** Operator reasoning session. 2026-04-27.

---

## Capture

The portfolio system needs to be accessible to a specific set of trusted people — family members, close friends, people the operator has explicitly decided should be able to see the children's creative work — and inaccessible to everyone else.

Several access models were possible:
- Public access with no authentication
- Nickname subdomains as the access mechanism
- Simple passwords
- Self-registration flow
- Google OAuth with explicit email allowlist

The question this ADR answers: which access model is appropriate for a private family portfolio of children's creative work?

---

## Why

**Google OAuth + email allowlist** is the right combination for this use case because it addresses the failure modes that matter.

Google OAuth provides: a trusted identity provider that most people the operator wants to grant access already have; no password to manage or rotate on a per-user basis; a familiar, frictionless authentication flow; and reasonable assurance that the person logging in is who they say they are.

An explicit email allowlist provides: operator control over who has access; no self-registration path (access is granted by the operator, not requested by users); a durable record of who was granted access and when; and the ability to revoke access cleanly.

Together, the combination means: you can authenticate as yourself (Google handles this), but you can only read the portfolio if the operator has explicitly added your email address to the allowlist. Neither condition alone is sufficient. Authentication without allowlist means anyone with a Google account could log in. Allowlist without authentication means the list is trivially bypassed.

The result is a system where the operator makes a conscious decision about each person who can see the children's work.

---

## Why-Not

**Why not public access with no authentication?**
The portfolio is private by design (C10-009). Public access defeats the purpose. The children's creative work would be accessible to anyone — search engines, scrapers, data brokers, people the family does not know. This is categorically ruled out.

**Why not nickname subdomains as the access mechanism?**
Nickname subdomains — where `[child-nickname].domain.com` routes to the child's portfolio — are useful for organization. They are not privacy. A URL is only private until it is discovered, shared, indexed, or guessed. Subdomains do not authenticate anyone. They do not prevent discovery. They are not access control. Using them as the primary privacy mechanism would give a false sense of protection.

**Why not simple passwords?**
Simple passwords require the operator to manage and rotate credentials for each person with access. Passwords get shared. Shared passwords get shared again. A password that was given to grandma gets forwarded to a cousin. The operator has no visibility into who actually has the credentials. Revocation requires everyone to change their password. The administrative overhead scales badly with the number of trusted people.

**Why not self-registration?**
Self-registration inverts the control model. Instead of the operator deciding who has access, access is granted to anyone who registers. Self-registration requires the operator to then review and revoke registrations, which is harder than maintaining a list. The allowlist model means access is never granted unless the operator explicitly grants it.

---

## Commit

**Decision:** The access model is Google OAuth plus a hardcoded email allowlist. Authentication is handled by Google; access is granted by explicit allowlist entry. Nickname subdomains may be used for organization but are not the access control mechanism. No self-registration path. The operator controls who can read the portfolio.

**Confidence:** High.

---

## Timestamp

2026-04-27
