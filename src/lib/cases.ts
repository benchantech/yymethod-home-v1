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
    adrCount: 18,
    description:
      "A complex multi-domain financial transition — S corp election termination, final payroll structuring, employer 401(k) maximization, DAF charitable strategy, HSA deployment, backdoor Roth sequencing, and minor child employment planning. Executed under real-time deadline pressure in a single session. 18 knowledge artifacts preserved.",
    href: "/adrs",
    tags: ["s-corp", "401k", "tax-optimization", "retirement", "entity-transition", "daf", "hsa", "backdoor-roth"],
  },
];
