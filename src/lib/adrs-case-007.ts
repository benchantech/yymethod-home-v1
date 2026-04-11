import type { ADRStatus } from "@/lib/adrs";

export type ADRCase007Domain = "strategy" | "operations" | "evaluation" | "resolution" | "structure";

export interface ADRCase007 {
  id: string;
  number: string;
  title: string;
  status: ADRStatus;
  freshness: "Active" | "Permanent" | "Pending";
  freshnessNote: string;
  date: string;
  domain: ADRCase007Domain;
  position: "Foundational" | "Derived";
  dependsOn: string[];
  summary: string;
  tags: string[];
}

export const adrsCase007: ADRCase007[] = [
  {
    id: "C7-001",
    number: "001",
    title: "Strategic Architecture — Third-Party Distribution Dependency vs. Full-Stack Brand Ownership",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify if AI generation capability becomes commoditized across the industry, or if third-party distribution platforms significantly reduce their margin extraction.",
    date: "2026-04-11",
    domain: "strategy",
    position: "Foundational",
    dependsOn: [],
    summary: "When AI reduces marginal SKU cost to near-zero, the binding constraint moves from design production to distribution toll and margin retention. Third-party platforms extract a permanent percentage on every sale — a toll that doesn't decrease as the operator scales. Simultaneously, the AEO/GEO window for establishing topical authority in AI-indexed search is time-bounded by first-mover advantage. The correct architecture for the current period is full-stack ownership with owned distribution from day one. Third-party distribution is a temporary validation environment, not the destination.",
    tags: ["strategic-architecture", "marketplace-dependency", "full-stack-ownership", "aeo-geo", "ai-native", "margin-retention", "first-mover"],
  },
  {
    id: "C7-002",
    number: "002",
    title: "AI-Native Design vs. AI-Enhanced Retrofit — Where the Capability Differential Becomes a Moat",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent structural argument. Reverify if AI generation tools become fully commoditized and the knowledge-encoding advantage disappears.",
    date: "2026-04-11",
    domain: "strategy",
    position: "Foundational",
    dependsOn: ["C7-001"],
    summary: "Adding AI tooling to an existing operation is categorically different from designing an operation around AI generation from the start. The compound moat is domain expertise encoded into AI generation architecture — neither asset alone is the moat. An operator without domain knowledge produces generic outputs; an operator without AI produces correct outputs slowly. The compound produces correct outputs at scale, and cannot be replicated because the domain knowledge is not public. The moat is the encoding; the AI is the engine; the domain knowledge is what fills it with non-commoditized fuel.",
    tags: ["ai-native", "compound-moat", "domain-expertise", "prompt-architecture", "knowledge-encoding", "retrofit-vs-native", "capability-differential"],
  },
  {
    id: "C7-003",
    number: "003",
    title: "Cash Flow Bridge — Revenue Partnership as Transition Funding",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify at 12–18 month mark, or if the independent channel reaches self-funding earlier, or if partnership terms degrade significantly.",
    date: "2026-04-11",
    domain: "strategy",
    position: "Derived",
    dependsOn: ["C7-001"],
    summary: "The transition to a vertically integrated, AI-native architecture requires capital before it generates revenue. An adjacent advisory engagement — revenue share on incremental improvement in a partner's operation — can fund the transition without external capital raise, without a loan, and without governance strings. The engagement converts existing domain expertise (which exists regardless) into capital for the independent venture. Its purpose is singular: fund the bridge. The mental exit boundary is 12–18 months — once the independent channel is established, the engagement becomes opportunity cost.",
    tags: ["cash-flow-bridge", "revenue-partnership", "transition-funding", "advisory-engagement", "opportunity-cost", "exit-boundary", "bootstrap"],
  },
  {
    id: "C7-004",
    number: "004",
    title: "Knowledge Transfer Limits — What to Share and What to Withhold in an Advisory-Adjacent Engagement",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if the engagement scope expands or if the partner independently develops AI generation capability.",
    date: "2026-04-11",
    domain: "operations",
    position: "Derived",
    dependsOn: ["C7-002", "C7-003"],
    summary: "The operator's assets bifurcate cleanly: Class 1 (operational domain expertise — pricing, catalog structure, production quality) is industry-level knowledge any experienced practitioner could provide; Class 2 (AI generation architecture — prompt systems, niche targeting methodology, AEO/GEO content strategy) encodes the compound moat. Class 1 is safe to share. Class 2 is never shared. The rule: produce results, not architecture. A partner who receives better outputs without understanding the system that produced them cannot replicate the system. Formal IP protection is rejected — the cleaner protection is operational.",
    tags: ["knowledge-transfer", "moat-protection", "advisory-limits", "outputs-not-architecture", "class-1-class-2", "ip-protection", "consulting-boundary"],
  },
  {
    id: "C7-005",
    number: "005",
    title: "Asset Decomposition — How to Value a Distressed Brand Re-Engagement Offer",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent — methodology record. The specific asset conclusions are in C7-006 and C7-007.",
    date: "2026-04-11",
    domain: "evaluation",
    position: "Foundational",
    dependsOn: ["C7-001"],
    summary: "A brand is a bundle: distribution platform account, brand name and trademark, design catalog, customer data, and institutional sales knowledge. The error in a distressed acquisition is evaluating the bundle price without decomposing the components — particularly the liabilities embedded in some of them. Going concern valuation is the wrong lens when the acquiring operator is pivoting channels. Each component must be independently valued and risk-scored. Components already effectively owned through prior extraction add zero incremental value to an acquisition and must be subtracted from the purchase calculus.",
    tags: ["asset-decomposition", "distressed-brand", "bundle-evaluation", "component-valuation", "due-diligence", "going-concern-rejected", "acquisition-methodology"],
  },
  {
    id: "C7-006",
    number: "006",
    title: "Reputation Debt — Platform Customer Ratings as a Non-Recoverable Liability",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent — disqualifying finding record. The rating mechanics described do not change; the specific asset evaluated is no longer under consideration.",
    date: "2026-04-11",
    domain: "evaluation",
    position: "Derived",
    dependsOn: ["C7-005"],
    summary: "A customer satisfaction rating of 3.6 on a substantial review volume is mathematically sticky in the negative direction. Moving it to an acceptable threshold requires a sustained flood of positive reviews that dilutes the historical average — a multi-year investment incompatible with a rapid launch horizon. The rating travels with the brand name through indexed search results, review aggregation, and LLM training corpora regardless of channel migration. Price reduction at acquisition reduces capital at risk but does not eliminate the liability. Combined with an account health rating at the minimum 'Healthy' threshold with 13 open policy issues, this constitutes a disqualifying finding.",
    tags: ["reputation-debt", "rating-recovery", "nonrecoverable-liability", "platform-ratings", "disqualifying-finding", "3-6-stars", "account-health"],
  },
  {
    id: "C7-008",
    number: "008",
    title: "Publish Reasoning, Protect Deployment — The Information Architecture of This Case",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The protection zone does not expire while the venture is operational. Reverify only if the operator deliberately dissolves the abstraction upon public announcement.",
    date: "2026-04-11",
    domain: "structure",
    position: "Derived",
    dependsOn: ["C7-001", "C7-002", "C7-004"],
    summary: "Case 007 is a public reasoning artifact whose abstraction is load-bearing, not a gap. This ADR makes the information boundary explicit: the strategic arguments, methodology, and disqualifying findings are deliberately public; the domain, specific niches, AI generation system architecture, and conversion data contents are deliberately protected. The declaration exists to defend against future editors or AI agents who might treat the omissions as gaps to fill. An undeclared protection zone is fragile — an agent that doesn't know the abstraction is intentional will treat gaps as gaps. This ADR is the structural boundary notice.",
    tags: ["information-architecture", "publish-reasoning-protect-deployment", "protection-zone", "c4-016", "abstraction-is-load-bearing", "agent-defense", "self-defending-artifact"],
  },
  {
    id: "C7-007",
    number: "007",
    title: "Prior Data as an Acquisition-Independent Moat — When the Most Valuable Asset Is Already Owned",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The principle is durable; the specific asset conclusion is permanent given that the data extraction is already complete.",
    date: "2026-04-11",
    domain: "resolution",
    position: "Derived",
    dependsOn: ["C7-005", "C7-006"],
    summary: "Conversion data — which products sold, at which prices, in which configurations, to which buyer types, at what seasonality — is the primary intellectual asset of any established product business. If this data has already been extracted and structured before any acquisition or partnership is formalized, the most valuable component of the bundle is already owned at zero acquisition cost. The remaining components (platform account, brand name, design catalog, customer data) must be evaluated without including the data's value. In this case, those remaining components either carry disqualifying liabilities or are replaceable by the operator's own AI generation capability. Build fresh.",
    tags: ["prior-data", "conversion-data", "acquisition-independent", "moat", "already-owned", "build-fresh", "data-extraction", "institutional-knowledge"],
  },
];

export function getADRCase007(id: string): ADRCase007 | undefined {
  return adrsCase007.find((a) => a.id === id);
}

export function getADRsCase007ByDomain(domain: ADRCase007Domain): ADRCase007[] {
  return adrsCase007.filter((a) => a.domain === domain);
}

export const domainLabelCase007: Record<ADRCase007Domain, string> = {
  strategy: "Strategy",
  operations: "Operations",
  evaluation: "Evaluation",
  resolution: "Resolution",
  structure: "Structure",
};
