export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  status: "Complete" | "In Progress" | "Coming Soon";
  domains: string[];
  adrCount: number;
  description: string;
  href: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-001",
    number: "001",
    title: "S Corp Termination & 401(k) Optimization",
    subtitle: "Entity transition · retirement maximization · tax bracket optimization",
    date: "2026-03-29",
    status: "Complete",
    domains: ["Tax", "Identity", "Agent", "Methodology"],
    adrCount: 24,
    description:
      "A complex multi-domain financial transition — S corp election termination, final payroll structuring, employer 401(k) maximization, DAF charitable strategy, HSA deployment, backdoor Roth system architecture (pro-rata elimination, annual cycle, employer vs solo 401k), and minor child employment planning. 22 knowledge artifacts across two sessions.",
    href: "/case-001",
    tags: ["s-corp", "401k", "tax-optimization", "retirement", "entity-transition", "daf", "hsa", "backdoor-roth", "pro-rata", "roth-ira"],
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
];
