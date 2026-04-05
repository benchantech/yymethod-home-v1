import type { ADRStatus } from "@/lib/adrs";

export type ADRCase005Domain = "framing" | "family" | "paths" | "resolution";

export interface ADRCase005 {
  id: string;
  number: string;
  title: string;
  status: ADRStatus;
  freshness: "Active" | "Permanent" | "Pending";
  freshnessNote: string;
  date: string;
  domain: ADRCase005Domain;
  position: "Foundational" | "Derived";
  dependsOn: string[];
  summary: string;
  tags: string[];
}

export const adrsCase005: ADRCase005[] = [
  {
    id: "C5-001",
    number: "001",
    title: "Initial Idea — Upgrade Home, Rent Current to Trusted Tenants",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Expires if trusted tenants are no longer suitable or if the upgrade direction changes materially.",
    date: "2026-04-05",
    domain: "framing",
    position: "Foundational",
    dependsOn: [],
    summary: "Keep the current home for posterity — the option to move back someday — while renting it to trusted individuals to prevent it from becoming a cash bleed. Choose tenants specifically for trustworthiness to protect bandwidth. Explore the upgrade (buy or rent, open mode) pulled by community, convenience, and lifestyle. Nothing irreversible yet.",
    tags: ["initial-idea", "anchor-home", "trusted-tenants", "legacy", "bandwidth-protection", "exploratory"],
  },
  {
    id: "C5-002",
    number: "002",
    title: "Financial Realization — The 7-Figure Opportunity Cost",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify if the capital delta, investment return assumptions, or time horizon changes materially.",
    date: "2026-04-05",
    domain: "framing",
    position: "Derived",
    dependsOn: ["C5-001"],
    summary: "Running the numbers revealed a 7-figure opportunity cost. The capital delta between current and upgraded housing cost, compounded over several decades at reasonable investment returns, becomes a 7-figure foregone sum. Figures are order-of-magnitude and illustrative. Every dollar spent on the lifestyle upgrade is a dollar not compounding. The upgrade is not free — it has a generational price tag.",
    tags: ["financial", "opportunity-cost", "compounding", "seven-figures", "lifestyle-cost", "re-evaluate"],
  },
  {
    id: "C5-003",
    number: "003",
    title: "Family Constraints — Alignment Is a Core Input, Not a Preference",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify as kids age, school situations change, or family views shift.",
    date: "2026-04-05",
    domain: "family",
    position: "Derived",
    dependsOn: ["C5-001"],
    summary: "Kids are split: some ambivalent, some strongly in favor (desire to relocate closer to community), some strongly against (fear of destabilizing something that is already working). Two legitimate value systems within the household — stability vs. growth — are in conflict. Forcing the move creates resentment. Resentment is a real and lasting cost that doesn't appear in financial models.",
    tags: ["family", "kids", "alignment", "stability-vs-growth", "emotional-cost", "resentment"],
  },
  {
    id: "C5-004",
    number: "004",
    title: "Rental Strategy — Property Manager, REPS Rejected",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify when actual tenants are secured and operational details are live.",
    date: "2026-04-05",
    domain: "paths",
    position: "Derived",
    dependsOn: ["C5-001", "C5-005"],
    summary: "Considered Real Estate Professional Status (REPS): 750 hours qualifying spouse + 500 hours operator = rental losses deductible against W-2 wages. Rejected. The strategy requires treating the spouse's time as a tax optimization tool. Paramount rule #1 is to protect spouse's time — financial benefit does not override this. Self-management also rejected for the same reason. Decision: property manager handles operations.",
    tags: ["rental", "property-manager", "reps-rejected", "self-manage-rejected", "tax-strategy", "spouse-protection"],
  },
  {
    id: "C5-005",
    number: "005",
    title: "Protect Spouse's Time — Capability Is Not Obligation",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. This is a values principle. It does not expire.",
    date: "2026-04-05",
    domain: "family",
    position: "Derived",
    dependsOn: ["C5-003"],
    summary: "The paramount rule: protect the spouse's time above all else. This is not a preference — it is the governing constraint that filters every operational decision. Capability does not create obligation. The spouse is capable of managing a rental property and qualifying under REPS. Neither capability creates a duty to exercise it. Every system is designed so that issues escalate to a property manager, not to her.",
    tags: ["spouse-protection", "capability-not-obligation", "paramount-rule", "load-management", "escalation-model"],
  },
  {
    id: "C5-006",
    number: "006",
    title: "Optionality Insight — Preserve Multiple Viable Futures",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify if one path becomes foreclosed by circumstances or if financial constraints change.",
    date: "2026-04-05",
    domain: "paths",
    position: "Derived",
    dependsOn: ["C5-002", "C5-003"],
    summary: "Four futures remain simultaneously viable: (1) keep current + buy new, dual ownership; (2) rent current → sell later, liquid exit preserved; (3) new home as part-year vacation rental; (4) portfolio diversification with current home as legacy anchor — at what carrying cost? The cost of preserving all four is lower than the cost of foreclosing any prematurely. Irreversible decisions carry a hidden option-destruction tax.",
    tags: ["optionality", "multiple-futures", "reversibility", "dual-ownership", "vacation-rental", "legacy-anchor"],
  },
  {
    id: "C5-007",
    number: "007",
    title: "Rent First Path — De-Risk Alignment and Sidestep the Funding Trilemma",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Remains viable until the decision to buy is made or conditions change.",
    date: "2026-04-05",
    domain: "paths",
    position: "Derived",
    dependsOn: ["C5-002", "C5-003", "C5-006"],
    summary: "Renting the destination before buying de-risks both axes simultaneously. Family alignment: test the community before committing capital — exit is clean if it doesn't work. Financing: salary qualifies for a large bank loan but the operator is opposed on principle. Selling the current home destroys the legacy anchor (C5-001). Personal financing from a known party introduces external obligation. Rent-first sidesteps the funding trilemma entirely. Why-not: a rental move is still a move — the disruption cost is real.",
    tags: ["rent-first", "de-risk", "no-bank-loan", "funding-trilemma", "external-obligation-avoided", "test-environment"],
  },
  {
    id: "C5-008",
    number: "008",
    title: "Split Time Model — Rejected on Integrity Grounds",
    status: "Decided — Rejected",
    freshness: "Permanent",
    freshnessNote: "Permanent. Rejected on integrity grounds. This won't change — we're honorable.",
    date: "2026-04-05",
    domain: "paths",
    position: "Derived",
    dependsOn: ["C5-003", "C5-006"],
    summary: "Considered: adults split residence between current and new location while anchoring kids in preferred school district. Killed: school district residency rules require genuine primary residence to maintain enrollment. The model would require misrepresenting primary residency. 'We're honorable.' Rejected on integrity grounds, not structural grounds. The failure mode isn't logistics — it's dishonesty. Capability ≠ obligation; integrity ≠ negotiable.",
    tags: ["split-time", "school-district", "rejected", "integrity", "residency-rules", "honorable"],
  },
  {
    id: "C5-009",
    number: "009",
    title: "Wait One Year — Accumulate Until You Answer to No One",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify at the one-year mark or if accumulation pace changes materially.",
    date: "2026-04-05",
    domain: "resolution",
    position: "Derived",
    dependsOn: ["C5-002", "C5-003", "C5-007", "C5-008"],
    summary: "Delay the move approximately one year. The primary purpose is financial accumulation — not school year alignment, not family patience, but saving enough capital to execute without a bank loan, without a family loan, without answering to anyone. Sovereignty is the goal. The year is not passive: it is an active accumulation window toward the financial independence to move on the operator's terms, not a lender's or a family member's.",
    tags: ["wait", "accumulation", "sovereignty", "financial-independence", "no-loan", "clean-execution"],
  },
  {
    id: "C5-010",
    number: "010",
    title: "Wait With Optionality — Active Readiness, No Settling",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. This is the live operating decision. Re-evaluate at the one-year mark.",
    date: "2026-04-05",
    domain: "resolution",
    position: "Derived",
    dependsOn: ["C5-006", "C5-007", "C5-008", "C5-009"],
    summary: "The synthesis: wait, but remain actively ready. Not passive waiting — disciplined readiness. In practice: attend open houses, watch listings, build the ideal blueprint, maintain regular parent-only discussions to stay warm without burdening kids with decision overhead. The failure mode is decision drift: settling for a suboptimal outcome through fatigue and gradual erosion of standards. Drift doesn't feel like a decision. It produces the same outcome as choosing to settle. Guarding against it requires staying active.",
    tags: ["synthesis", "active-readiness", "open-houses", "decision-drift", "no-settling", "optionality-preserved", "parent-only"],
  },
  {
    id: "C5-011",
    number: "011",
    title: "Case 005 Framing Notice — Structure Preserved, Identifying Details Abstracted",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The disclosure posture for this case does not change retroactively.",
    date: "2026-04-05",
    domain: "framing",
    position: "Derived",
    dependsOn: ["C5-001", "C5-002", "C5-003", "C5-004", "C5-005", "C5-006", "C5-007", "C5-008", "C5-009", "C5-010"],
    summary: "Case 005 involves active financial planning, minor children, and personal relationships. The reasoning structure and constraint hierarchy are preserved at full fidelity. Identifying details — family composition, specific financial figures, relationship specifics, personal network references — are abstracted. The method is the subject. The family is not.",
    tags: ["framing-notice", "privacy", "abstraction", "disclosure-posture", "permanent"],
  },
];

export function getADRCase005(id: string): ADRCase005 | undefined {
  return adrsCase005.find((a) => a.id === id);
}

export function getADRsCase005ByDomain(domain: ADRCase005Domain): ADRCase005[] {
  return adrsCase005.filter((a) => a.domain === domain);
}

export const domainLabelCase005: Record<ADRCase005Domain, string> = {
  framing: "Framing",
  family: "Family",
  paths: "Paths Considered",
  resolution: "Resolution",
};
