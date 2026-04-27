# ADR Index — Child-Originated Character Studio — Authorship Architecture, IP Origin, and the Private Release Lifecycle
**Method:** YY Method™ Home Edition v2.3
**Captured:** 2026-04-27
**Author:** Case Study Operator
**Freshness Boundary:** C10-001, C10-002, C10-006, C10-009, C10-010 are permanent records. C10-003, C10-004, C10-005, C10-007, C10-008 are active and revisit on the triggers documented in each ADR.

---

## What This Case Is

A structured knowledge artifact documenting the architecture decisions behind a child-safe, AI-augmented creative portfolio system. Children originate characters from their own imagination — through sketches, stories, staging, and iterative decision-making. AI acts as a rendering and consistency layer, not a co-author. The parent builds and maintains the infrastructure so the child can focus entirely on character, story, taste, and iteration.

The case documents five decision domains:

1. **Authorship** — Who creates what, why the derivative-character path was rejected, and how the squirrel plush prototype is bounded.
2. **Containment** — Keeping the prototype internal and keeping the portfolio invisible to crawlers, indexers, and training pipelines.
3. **Structure** — Google OAuth plus email allowlist, pseudonymous portfolio organization, and the parent-as-engineer role division.
4. **Provenance** — Logging process artifacts so the authorship chain is demonstrable and the memory of creation is retrievable.
5. **Lifecycle** — The adult consent requirement, the three valid release outcomes, and the commercialization gate.

The system is private by design. Nothing escalates toward publication without the adult child's explicit decision. The architecture makes all three release outcomes — private, selective, public — equally achievable.

---

## The Founding Argument in One Sentence

A character that springs entirely from a child's imagination is owned outright — no IP gray area, no derivative risk, no permission to seek. AI renders what the child creates. The work is private until the author is old enough to decide its fate.

---

## ADR Hierarchy

```
C10-001  Child as Author, AI as Rendering Layer                        [FOUNDATIONAL]
    └── C10-002  Original Character Requirement — Derivative Path Rejected  [depends on C10-001]
        └── C10-003  Private Prototype Boundary — Squirrel Reference Stays Internal  [depends on C10-002]
            └── C10-010  Commercialization Gate — Original Value, Protected Until Consent  [depends on C10-009, C10-002]
    └── C10-007  Provenance and Process Logging — Authorship Is Demonstrable  [depends on C10-001]

C10-004  Google OAuth + Email Allowlist — Access Model                 [FOUNDATIONAL]
    └── C10-005  Pseudonymous Portfolio Structure — Identity Decoupling  [depends on C10-004]
    └── C10-006  No Public Indexing — Discoverability Off by Default    [depends on C10-004]

C10-008  Parent-Built Creative Engine — Infrastructure Invisible to the Child  [FOUNDATIONAL]

C10-009  Adult Consent / Release Lifecycle — Three Outcomes, All Valid  [FOUNDATIONAL]
    └── C10-010  Commercialization Gate — Original Value, Protected Until Consent  [depends on C10-009, C10-002]
```

---

## ADR Registry

| ID | Title | Domain | Status | Freshness |
|---|---|---|---|---|
| C10-001 | Child as Author, AI as Rendering Layer | Authorship | Decided | Permanent |
| C10-002 | Original Character Requirement — Derivative Path Rejected | Authorship | Decided | Permanent |
| C10-003 | Private Prototype Boundary — Squirrel Reference Stays Internal | Containment | Decided | Active |
| C10-004 | Google OAuth + Email Allowlist — Access Model | Structure | Decided | Active |
| C10-005 | Pseudonymous Portfolio Structure — Identity Decoupling | Structure | Decided | Active |
| C10-006 | No Public Indexing — Discoverability Off by Default | Containment | Decided | Permanent |
| C10-007 | Provenance and Process Logging — Authorship Is Demonstrable | Provenance | Decided | Active |
| C10-008 | Parent-Built Creative Engine — Infrastructure Invisible to the Child | Structure | Decided | Active |
| C10-009 | Adult Consent / Release Lifecycle — Three Outcomes, All Valid | Lifecycle | Decided | Permanent |
| C10-010 | Commercialization Gate — Original Value, Protected Until Consent | Lifecycle | Decided | Permanent |

---

## Cascade Rules

If a child decides they want to learn to use the rendering tools directly → revisit C10-008; the engine-transfer decision should follow demonstrated creative formation, not precede it  
If the squirrel plush IP status resolves unambiguously (e.g., confirmed public domain) → C10-002 and C10-003 may be revisited; the original-character requirement for portfolio characters remains regardless  
If a child reaches adulthood and makes a release decision → update C10-005, C10-006, and C10-009 to reflect the outcome; cascade the decision through any affected ADRs  
If commercial interest in a portfolio character arises before adulthood → C10-010's gate applies; document the inquiry and hold until adult consent  
If the Google OAuth provider changes terms relevant to minor-data handling → revisit C10-004 with urgency; the access model may need to change before the terms take effect  
If AI training pipelines develop capability to ingest behind OAuth walls → the no-indexing posture (C10-006) may need to be strengthened; the containment boundary may need to shift from discovery to access
