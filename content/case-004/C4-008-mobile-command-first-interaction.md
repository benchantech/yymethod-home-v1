# C4-008: Prefer Command-First Mobile Interaction — Reserve Full Remote Desktop for Escalation
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** System Architecture
**Depends On:** C4-005
**Freshness Boundary:** Active. Reverify if phone-based work becomes primarily graphical or if command-first stops covering the majority of mobile needs.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

The operator needs to act from a phone during fragmented time: checking status, triggering work, monitoring jobs, making small changes, verifying state.

These interactions happen in brief windows — between meetings, during transit, in moments that do not support extended graphical engagement. The interaction model must be suited to that reality.

---

## Why

Phone-sized interaction punishes visual remoting for routine tasks.

Full remote desktop on a phone requires sustained attention to a small, latency-sensitive graphical surface. It consumes bandwidth, degrades on unstable networks, and demands more ergonomic investment than brief operational windows warrant. For status checks and command invocations — the majority of mobile work — this overhead is entirely unnecessary.

Command-first interaction is lower bandwidth, faster to initiate, more reliable on poor networks, and better suited to brief windows. A command that checks a job status or triggers a workflow takes seconds. The equivalent visual remoting operation takes minutes and requires the phone to be held stably.

The retained flexibility matters: the operator cannot predict every command in advance. Raw access through a command layer preserves generality that a fixed one-tap shortcut surface would eliminate.

---

## Why-Not

**Why not default to full remote desktop on the phone?**
It is ergonomically expensive and unnecessary for most mobile operations. The ergonomic cost — small screen, touch keyboard, network sensitivity — is paid on every interaction, including the simple ones where it adds no value. Defaulting to the expensive path makes routine operations harder than they need to be.

**Why not reduce the phone to fixed one-tap actions only?**
The future command set is unknown and emergent. Locking mobile interaction to a predetermined shortcut surface removes the ability to issue commands that were not anticipated at setup time. The operator needs the flexibility to respond to conditions that were not predicted.

---

## Commit

**Decision:** Mobile interaction defaults to secure command execution and status retrieval. Full graphical remoting remains available as an exception path for tasks that genuinely require it — not as the default.

**Confidence:** High. Command-first is not a convenience choice; it is the correct ergonomic and security fit for the mobile use case.

---

## Timestamp

2026-04-05
