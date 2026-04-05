# C4-010: Put Admission Control in Front of Heavy Local Inference
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Decided
**Date:** 2026-04-05
**Layer:** Operations & Safeguards
**Depends On:** C4-005, C4-007
**Freshness Boundary:** Active. Reverify if the hardware envelope changes enough to justify broader concurrency or if the workload class changes materially.
**Source:** Client engagement. Abstracted per C4-004.

---

## Capture

The portable secure work node may run large local inference workloads. These are not ordinary process launches — they consume substantial memory, thermal headroom, and computational resources for extended periods.

Uncontrolled parallel launches could exhaust resources, destabilize ongoing work, degrade responsiveness, and create thermal events. The operator cannot always know at launch time what is already running, especially when operating remotely from a mobile device.

---

## Why

Heavy local inference is not a casual process class. A small number of overlapping launches can create disproportionate and compounding cost:

- Memory pressure from two simultaneous heavy workloads can exceed available physical memory, triggering swap that degrades both jobs.
- Thermal load from concurrent inference stresses cooling capacity and can trigger throttling that extends both jobs unpredictably.
- CPU/GPU contention creates interference that neither job can detect or compensate for.

The failure mode is predictable. The cost is high. The correct response is not to allow best-effort concurrency and manage the fallout — it is to refuse unsafe starts by default.

A guarded admission layer checks current load before allowing a launch. If the check fails, the operator receives a clear reason. The refusal is not a bug; it is the system working correctly.

---

## Why-Not

**Why not rely on operator memory alone?**
Mobility and fragmented work windows increase the probability of accidental overlap. The operator may have launched a job from the office in the morning and forgotten it is still running when triggering another from a phone in the afternoon. Remote operation increases the gap between launch and awareness. Operator memory is not a reliable safeguard under these conditions.

**Why not allow best-effort concurrency and let the OS manage it?**
The OS will manage the resource contention, but it will do so by degrading both jobs — potentially to the point of failure or hours of extension. The failure mode is predictable and costly. Safe refusal is preferable to opportunistic overload with unpredictable degradation.

---

## Assumptions

- Heavy jobs are distinguishable from light operational commands at launch time — the admission layer can reliably identify which process class is being requested.
- Safe refusal is preferable to opportunistic overload. A blocked launch that can be retried is better than a destabilized running job.

---

## Commit

**Decision:** All heavy local inference must be launched through a guarded admission layer that checks current load, enforces a conservative concurrency limit, and reports refusal reasons clearly. The operator receives a specific, actionable refusal message rather than a silent failure or degraded execution.

**Confidence:** High.

---

## Timestamp

2026-04-05
