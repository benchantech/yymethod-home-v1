# C4-011: Pair Every Guardrail with Status, Kill, and Recovery Paths
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** Operations & Safeguards
**Depends On:** C4-010
**Freshness Boundary:** Active. Reverify if job orchestration moves to a more formal supervisor or queueing system.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

Blocking unsafe starts is insufficient by itself.

The operator must also be able to inspect what is currently running, terminate jobs that are stuck or rogue, and recover from stale lock conditions that would otherwise prevent new work from starting. Without these capabilities, the admission control guardrail in C4-010 becomes a trap rather than a safety device.

---

## Why

Guardrails without recovery create a different kind of brittleness.

If a heavy job stalls and the admission layer still considers it active, no new jobs can be launched. The operator is locked out until they can intervene — but from a phone, with limited tools, with incomplete visibility, this intervention may be slow, error-prone, or impossible without dangerous bypasses.

A mobile-first operator needs:
- **Fast observability:** What is currently running? Is the job active or stalled? How long has it been running?
- **Emergency control:** A targeted kill path that can terminate a specific rogue job without disrupting other processes.
- **Recovery from stale state:** A path to clear a lock or reset guard state when a job has failed without cleaning up after itself.
- **Logs suitable for mobile inspection:** Concise, recent, meaningful — not a raw log stream that requires a desktop to parse.

These capabilities transform the guardrail from a blocking mechanism into a complete supervisory layer. The operator remains in control across the full job lifecycle, not just at launch time.

---

## Why-Not

**Why not rely on the operating system process list alone?**
Raw process state is too low-level for fast mobile decisions. Parsing a process list from a phone to determine whether a specific heavy inference job is running, stalled, or zombie requires knowledge and tooling that should not be required for routine operations. A concise status command that reports job state in human-readable terms is faster and safer.

**Why not leave recovery manual — force the operator to fix it when they reach the machine?**
Stale guard state would eventually tempt unsafe bypasses. If the only way to clear a stuck admission lock is physical access to the machine, the operator will eventually devise a workaround that defeats the guardrail entirely. Manual-only recovery is an invitation to bypass the safety mechanism under pressure.

---

## Commit

**Decision:** Every heavy-work admission layer is paired with:
- a concise status command that reports current job state in terms readable from a mobile interface,
- a targeted kill path for terminating specific rogue or stalled jobs,
- a stale-state recovery path for clearing locks that a failed job left behind,
- logs recent and concise enough to be inspectable from a phone.

**Confidence:** High. The admission control in C4-010 is only as useful as the operator's ability to act on what it reports.

---

## Timestamp

2026-04-05
