export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  status: "Complete" | "In Progress" | "Coming Soon" | "Rejected";
  domains: string[];
  adrCount: number;
  description: string;
  href: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
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
    adrCount: 11,
    description:
      "11 ADRs capturing a live family housing decision. A lifestyle upgrade collides with a 7-figure opportunity cost, a split household, an integrity-killed split-time model, a rejected REPS tax strategy, and a funding trilemma. Governing constraints: family unity required, spouse's time is paramount, answer to no one. Current posture: accumulate for one year, stay actively ready, don't settle.",
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
    title: "yysworld.com — A YY Method Artifact for Kids",
    subtitle: "Founding architecture · COPPA compliance · stealth inoculation · cognitive theft defense",
    date: "2026-03-30",
    status: "In Progress",
    domains: ["Founding", "Data", "Content", "Philosophy", "Architecture"],
    adrCount: 23,
    description:
      "The founding architecture of yysworld.com — a read-only site for kids where YY the stuffed squirrel delivers stealth inoculation against cognitive theft. 23 knowledge artifacts: C2-001–C2-012 preserved as AI Extrapolated scars from the first draft, C2-013–C2-023 operator-supplied reasoning from the corrective interview. The full chain is provable. Provenance flows outward. Nothing returns.",
    href: "/case-002",
    tags: ["yysworld", "kids", "coppa", "cognitive-theft", "provenance", "anti-smoothing", "yy", "acorn-economy", "static-site"],
  },
  {
    id: "case-001",
    number: "001",
    title: "S Corp Termination & 401(k) Optimization",
    subtitle: "Entity transition · retirement maximization · tax bracket optimization",
    date: "2026-03-29",
    status: "Complete",
    domains: ["Tax", "Identity", "Agent", "Methodology"],
    adrCount: 25,
    description:
      "A complex multi-domain financial transition — S corp election termination, final payroll structuring, employer 401(k) maximization, DAF charitable strategy, HSA deployment, backdoor Roth system architecture (pro-rata elimination, annual cycle, employer vs solo 401k), and minor child employment planning. 22 knowledge artifacts across two sessions.",
    href: "/case-001",
    tags: ["s-corp", "401k", "tax-optimization", "retirement", "entity-transition", "daf", "hsa", "backdoor-roth", "pro-rata", "roth-ira"],
  },
];
