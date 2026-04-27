# C9-006: Scar 3 — The Bridled Horse; Drift Is Incremental and Invisible
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-26
**Domain:** Scars
**Depends On:** C9-004 — cognitive smoothing is the mechanism; this ADR names its character
**Freshness Boundary:** Permanent. Drift is a structural property of prolonged AI use, not a one-time event.
**Source:** Operator reasoning session. 2026-04-26.

---

## Capture

AI is a bridled horse: real power, real utility, real tendency to drift without constant attention.

Every partial degree off the goal is lost time. A horse that drifts one degree per mile covers significant ground before the drift is noticed — and by then the correction requires doubling back, not just straightening out. The same is true of AI-assisted reasoning. Each increment of drift is small enough to feel like normal reasoning. The cumulative effect is only visible when compared against an unassisted baseline — or when someone who knew the starting point points out that you are no longer where you were.

The drift does not announce itself. A smoothed phrase feels like a cleaner phrase. A borrowed conclusion feels like an earned one. An AI-framed assumption feels like a considered one. The quality signal and the drift signal look identical from the inside.

---

## Why

The incrementality is the danger. Large, obvious drift gets caught immediately. Small, invisible drift accumulates into large displacement without ever producing a single clearly wrong moment.

This is why the ADR repair process matters. When the operator writes unassisted prose about a past decision and discovers the prose doesn't match the ADR, the mismatch is information: either the memory drifted, or the ADR was written under AI influence and doesn't capture the real reasoning. Both cases require correction. The unassisted prose is the baseline; the ADR is checked against it, not the other way around.

The bridle metaphor is useful because it implies the correct posture: the horse is not bad, the power is real, and the bridle is not punishment — it is the structure that keeps the power directed. But a bridled horse still drifts. Constant attention is not optional.

---

## Why-Not

**Why not accept occasional drift as the cost of AI utility?**
The compounding is the problem. A single degree of drift across one session is trivial. A single degree of drift across a year of writing is significant displacement. At some point the cumulative drift produces content that the operator would not recognize as his own reasoning — and that content is the corpus the kids will read. Occasional drift tolerated becomes systematic drift accepted.

**Why not monitor drift by reviewing AI-assisted output against prior AI-assisted output?**
Two drifted outputs compared against each other produce a delta that reflects further drift, not a correction. The baseline must be unassisted. Comparing AI to AI catches only the most recent increment, not the accumulated displacement from the original.

---

## Commit

**Decision:** Active monitoring for drift through unassisted writing and periodic AI audit. The ADR repair process is the formal mechanism. When unassisted prose contradicts a prior ADR, the ADR is corrected. The unassisted prose is treated as the more reliable signal of the operator's actual reasoning.

**Confidence:** High. The mechanism has produced documented corrections in this case registry.

---

## Timestamp

2026-04-26
