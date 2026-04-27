export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  status: "Complete" | "In Progress" | "Coming Soon" | "Rejected" | "Superseded";
  domains: string[];
  adrCount: number;
  description: string;
  href: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-010",
    number: "010",
    title: "Child-Originated Character Studio — Authorship Architecture, IP Origin, and the Private Release Lifecycle",
    subtitle: "Character authorship · original IP · private portfolio · provenance · adult consent",
    date: "2026-04-27",
    status: "In Progress",
    domains: ["Authorship", "Containment", "Structure", "Provenance", "Lifecycle"],
    adrCount: 10,
    description:
      "10 ADRs documenting the architecture of a child-safe creative portfolio system where children originate characters entirely from imagination and AI acts as a rendering and consistency layer. Establishes the authorship split as the governing invariant, rejects the derivative-character path on IP grounds, documents the private prototype boundary for the squirrel plush reference, specifies Google OAuth with email allowlist as the access model, defines pseudonymous portfolio structure and no-indexing posture, requires provenance and process logging, defines the parent as engine-builder, and gates commercialization behind adult consent. The system is private until the child is old enough to decide otherwise.",
    href: "/case-010",
    tags: ["character-studio", "child-authorship", "ai-rendering-layer", "original-characters", "ip-ownership", "private-portfolio", "google-oauth", "allowlist", "no-public-indexing", "provenance-logging", "adult-consent", "commercialization-gate", "pseudonymous-portfolio", "parent-built-engine", "derivative-character-risk", "release-lifecycle"],
  },
  {
    id: "case-009",
    number: "009",
    title: "Writing for the Future — Voice, AI, and the Inheritance",
    subtitle: "Primary audience declaration · AI scars · cognitive muscle · multi-generational corpus",
    date: "2026-04-26",
    status: "In Progress",
    domains: ["Origin", "Architecture", "Scars", "Method", "Inheritance"],
    adrCount: 15,
    description:
      "15 ADRs capturing the meta-decision behind all public-facing work: writing for children and grandchildren, not a chased audience, across four surfaces maintained in parallel for 18+ years. Documents five AI scars derived from live experience: cognitive smoothing, the accountability requirement, incremental drift (the bridled horse), the muscle-formation failure mode, and the Level 5 attribution corridor that required an external circuit breaker. Records the AI writing coach corridor that produced Q1 and necessitated a week-long AI fast. Establishes the four quests as a training program aimed at Q4, where the voice writes bedtime stories for grandkids without AI assistance. Closes with the inheritance architecture and the first formal documentation of a registry invariant: Rejected cases are never superseded — the scar record is preserved intact as the demonstration that the registry is self-auditing.",
    href: "/case-009",
    tags: ["primary-audience", "kids", "grandkids", "ai-scars", "cognitive-smoothing", "bridled-horse", "level-5", "attribution-corridor", "ai-writing-coach", "ai-fast", "four-quests", "training-program", "inheritance-architecture", "multi-generational"],
  },
  {
    id: "case-008",
    number: "008",
    title: "Local Scrabble-like Charity Event — Scoring Integrity, Competitive Strategy, Rule Ambiguity, and Clean Execution Under Constraint",
    subtitle: "Scoring integrity · premium square exhaustion · expected-value strategy · competitive posture · play the actual game",
    date: "2026-04-25",
    status: "Complete",
    domains: ["Framing", "Integrity", "Analysis", "Strategy", "Execution", "Posture"],
    adrCount: 36,
    description:
      "36 ADRs documenting a Scrabble-variant tournament strategy overhaul and its post-event resolution. Separates competitive frustration from structural scoring analysis, establishes premium square exhaustion as the central integrity invariant, corrects AI letter-count errors, reframes strategy from 15-letter obsession to 9x expected-value engine, and defines a clean-play operating posture. Post-event ADRs close the prior anomaly via rule clarification, document the solvability finding (near-deterministic dominance under full optimization), reject intentional underperformance and full disclosure on integrity and accessibility grounds, and establish a role transition from direct competitor to coach. Closes with the generalizable principle: when you can solve a system, the question is what role within it produces the best outcome for the system as a whole.",
    href: "/case-008",
    tags: ["scrabble-variant", "scoring-integrity", "premium-square-exhaustion", "expected-value", "9x-strategy", "competitive-posture", "clean-play", "judgment-under-constraint", "emotional-calibration", "letter-count-correction"],
  },
  {
    id: "case-007",
    number: "007",
    title: "AI-Native Venture Launch — Re-Entry Decision, Asset Decomposition, and the Build Resolution",
    subtitle: "Build vs. buy · asset decomposition · knowledge transfer limits · reputation debt · prior data as moat",
    date: "2026-04-11",
    status: "Complete",
    domains: ["Strategy", "Operations", "Evaluation", "Resolution", "Structure"],
    adrCount: 13,
    description:
      "13 ADRs closing a venture re-entry decision. Acquisition rejected after full component decomposition: the most valuable asset was already owned; the remaining bundle was liabilities and replaceables. Closing ADRs define the operator's final posture: time-gated strategic advisor with no ownership, governance rights, or delivery obligation; advisory availability bounded to weekend synchronous and off-hours asynchronous; family talent channel structured as performance-bound referral, not guaranteed placement; partner controls the build with full independence. The operator is structurally outside day-to-day execution. The case is closed.",
    href: "/case-007",
    tags: ["build-vs-buy", "asset-decomposition", "ai-native", "distressed-brand", "reputation-debt", "knowledge-transfer", "cash-flow-bridge", "prior-data", "acquisition-independent-moat"],
  },
  {
    id: "case-006",
    number: "006",
    title: "Personal Identity Consolidation — Multi-Property Hub Architecture",
    subtitle: "Hub design · canonical Person entity · domain roles · Signal Before Elegance · schema.org",
    date: "2026-04-05",
    status: "In Progress",
    domains: ["Strategy", "Identity", "Structure", "Surface"],
    adrCount: 10,
    description:
      "10 ADRs capturing an in-progress identity consolidation across four digital properties. A hub is designed with no original content. A canonical Person entity is anchored at the hub domain. Domain roles are made explicit to prevent role bleed. The governing principle — Signal Before Elegance — is formalized after a direction reversal that attempted to gate the signal on a stack migration. The @id URI is decoupled from infrastructure. The sameAs array is treated as a contract.",
    href: "/case-006",
    tags: ["identity-consolidation", "hub-architecture", "person-schema", "canonical-id", "domain-roles", "signal-before-elegance", "jekyll", "schema-org", "sameas", "direction-reversal"],
  },
  {
    id: "case-005",
    number: "005",
    title: "Family Move Architecture",
    subtitle: "Housing upgrade · opportunity cost · family alignment · spouse protection · sovereignty",
    date: "2026-04-05",
    status: "Complete",
    domains: ["Framing", "Family", "Paths", "Resolution"],
    adrCount: 20,
    description:
      "20 ADRs capturing and closing a family housing decision. A lifestyle upgrade collides with a 7-figure opportunity cost, a split household, a rejected split-time model, and a funding trilemma. Closing ADRs establish the decision architecture: default stay as the permanent baseline, a six-condition unicorn gate that must be met in full before any move is permitted, three event-driven reopen triggers, a hard ban on time-based review, and non-forced financing as a structural disqualifier. The question is closed. It reopens only when reality changes.",
    href: "/case-005",
    tags: ["family-move", "housing", "opportunity-cost", "optionality", "spouse-protection", "school-district", "integrity", "accumulation", "sovereignty"],
  },
  {
    id: "case-004",
    number: "004",
    title: "Local-First Remote Work Orchestration for Sensitive Compute",
    subtitle: "Trust boundary · device roles · private overlay · admission control · governance",
    date: "2026-04-05",
    status: "Complete",
    domains: ["Principles", "Architecture", "Operations", "Governance"],
    adrCount: 16,
    description:
      "16 ADRs documenting the principles behind a local-first, remote-operable work architecture for sensitive compute. Separates control surfaces from execution surfaces, keeps the execution surface dark via private overlay, guards heavy local inference with admission control, and preserves the method without disclosing the client deployment. Complete — implemented under employer. Will be reopened as circumstances evolve.",
    href: "/case-004",
    tags: ["local-first", "trust-boundary", "private-overlay", "admission-control", "device-roles", "remote-work", "sensitive-compute", "governance"],
  },
  {
    id: "case-003",
    number: "003",
    title: "Quest 3 — Cognitive Theft & AI Governance",
    subtitle: "Writing process · essay architecture · authorship · provenance",
    date: "2026-03-31",
    status: "Rejected",
    domains: ["Writing", "Methodology", "Identity"],
    adrCount: 5,
    description:
      "Rejected. 4 ADRs — the title outran the content. Preserved as a scar: a case that was started but not substantive enough to carry its own weight. The method applies to the registry itself.",
    href: "/case-003",
    tags: ["cognitive-theft", "quest-3", "substack", "writing", "authorship", "provenance"],
  },
  {
    id: "case-002",
    number: "002",
    title: "YY's World — A YY Method Artifact for Kids",
    subtitle: "Founding architecture · COPPA compliance · stealth inoculation · cognitive theft defense",
    date: "2026-03-30",
    status: "Superseded",
    domains: ["Founding", "Data", "Content", "Philosophy", "Architecture"],
    adrCount: 24,
    description:
      "Superseded 2026-04-13 by yysworld (YY Branching World) — see C2-024. The kids-only, COPPA-by-elimination, dandelion model is abandoned. 24 knowledge artifacts preserved as a scar record: C2-001–C2-012 AI Extrapolated first draft, C2-013–C2-023 operator-supplied corrective reasoning, C2-024 supersession record. YY as protagonist and the Calvin-and-Hobbes model carry into yysworld. The audience restriction and outward-only posture do not.",
    href: "/case-002",
    tags: ["yys-world", "kids", "coppa", "cognitive-theft", "provenance", "anti-smoothing", "yy", "acorn-economy", "static-site", "superseded"],
  },
  {
    id: "case-001",
    number: "001",
    title: "S Corp Termination & 401(k) Optimization",
    subtitle: "Entity transition · retirement maximization · tax bracket optimization",
    date: "2026-03-29",
    status: "Complete",
    domains: ["Tax", "Identity", "Agent", "Methodology"],
    adrCount: 26,
    description:
      "A complex multi-domain financial transition — S corp election termination, final payroll structuring, employer 401(k) maximization, DAF charitable strategy, HSA deployment, backdoor Roth system architecture (pro-rata elimination, annual cycle, employer vs solo 401k), and minor child employment planning. 26 knowledge artifacts including FICA correction and system-wide information architecture invariant.",
    href: "/case-001",
    tags: ["s-corp", "401k", "tax-optimization", "retirement", "entity-transition", "daf", "hsa", "backdoor-roth", "pro-rata", "roth-ira"],
  },
];
