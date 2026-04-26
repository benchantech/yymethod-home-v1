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
    status: "In Progress",
    domains: ["Strategy", "Operations", "Evaluation", "Resolution", "Structure"],
    adrCount: 8,
    description:
      "8 ADRs capturing a venture re-entry decision: whether to reacquire a previously owned brand, structure a revenue partnership with the prior acquirer, or build fresh. The reasoning chain traverses three layers — strategic architecture (does AI change the correct operating model?), engagement structure (can a partnership fund the build without transferring the moat?), and asset evaluation (is the distressed brand worth acquiring?). Multiple reversals: the acquisition appeared viable at price; it was closed by quantitative health metrics. The most valuable asset in the bundle had already been extracted before negotiations began. Resolution: build fresh.",
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
    status: "In Progress",
    domains: ["Framing", "Family", "Paths", "Resolution"],
    adrCount: 15,
    description:
      "15 ADRs capturing a live family housing decision. A lifestyle upgrade collides with a 7-figure opportunity cost, a split household, an integrity-killed split-time model, a rejected REPS tax strategy, and a funding trilemma. Governing constraints: family unity required, spouse's time is paramount, answer to no one. Resolved posture: intentional stay — current home wins unless a unicorn appears; open houses reframed as blueprint extraction; surplus income deployed on life now; dream home deferred to the aging-in-place phase.",
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
