import type { ADRStatus } from "@/lib/adrs";

export type ADRCase003Domain = "writing" | "methodology" | "identity";

export interface ADRCase003 {
  id: string;
  number: string;
  title: string;
  status: ADRStatus;
  freshness: "Active" | "Permanent" | "Pending";
  freshnessNote: string;
  date: string;
  domain: ADRCase003Domain;
  position: "Foundational" | "Derived" | "Permanent" | "Correction";
  dependsOn: string[];
  summary: string;
  tags: string[];
}

export const adrsCase003: ADRCase003[] = [
  {
    id: "C3-001",
    number: "001",
    title: "Cognitive Theft Essay — Opening Architecture",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Amend as the essay evolves. Each departure from this record gets a timestamp.",
    date: "2026-03-31",
    domain: "writing",
    position: "Foundational",
    dependsOn: [],
    summary: "Open with warning, dive into how-to. Entry point: the podcast moment, not a definition. Primary receipt: the interview page. Five how-to points from operator practice. Close: dandelion seeds. AI does not write this essay. ADR amends alongside the writing — the amendments are the scars.",
    tags: ["cognitive-theft", "quest-3", "substack", "writing-architecture", "anti-ghostwrite"],
  },
  {
    id: "C3-002",
    number: "002",
    title: "Public Surface Mining — The Enrichment Architecture",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Expires when local LLMs achieve sufficient constraint fidelity to hold shadows directly.",
    date: "2026-03-31",
    domain: "methodology",
    position: "Foundational",
    dependsOn: ["C3-001"],
    summary: "Cloud LLM interactions are mining operations. Operator transmits flares — public surface only. Model generates ore. Operator enriches vault privately. The model never has access to the enrichment layer. Nothing private was ever transmitted. The mine never knows what it produced that mattered.",
    tags: ["mining", "public-surface", "vault", "flares", "shadows", "cloud-llm", "provenance"],
  },
  {
    id: "C3-003",
    number: "003",
    title: "ADRs as Lenses — Pointed, Not Stored",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. Optical properties don't degrade. What degrades is the scene being observed.",
    date: "2026-03-31",
    domain: "methodology",
    position: "Foundational",
    dependsOn: [],
    summary: "ADRs are lenses, not containers. The six invariants are optical properties. The operator's job is aim. A well-formed artifact pointed at the wrong question is not a good artifact. The same lens structure applies across all domains — tax, founding architecture, essay writing. Applies retroactively to all artifacts in the archive.",
    tags: ["lens", "adr-theory", "six-invariants", "aim", "optical", "domains"],
  },
  {
    id: "C3-004",
    number: "004",
    title: "Cloud LLM Field Study — Controlled First Draft",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent record. Failure modes are architectural, not incidental. Findings don't expire.",
    date: "2026-03-31",
    domain: "methodology",
    position: "Derived",
    dependsOn: ["C3-002"],
    summary: "Deliberate field study: operator gave cloud LLM controlled room under YY discipline. Documented failure modes: leading, amplifying, Why-Not skipping, temporal drift, flares-as-terrain, writing operator conclusions. All failure modes undetected by model independently, corrected immediately when flagged. Session content is ore — requires enrichment before becoming artifact.",
    tags: ["field-study", "cloud-llm", "failure-modes", "correction", "ore", "scar", "first-draft"],
  },
  {
    id: "C3-005",
    number: "005",
    title: "Case 003 Rejected — Title Outran Content",
    status: "Decided — Rejected",
    freshness: "Permanent",
    freshnessNote: "Permanent. A rejection decision does not expire.",
    date: "2026-04-05",
    domain: "methodology",
    position: "Permanent",
    dependsOn: ["C3-001", "C3-002", "C3-003", "C3-004"],
    summary: "Case 003 reviewed against the registry's own standard and found insufficient. Four ADRs, stalled, no essays written, energy never returned. The stall is a verdict. Title outran content. Expanding it now would be performed rather than genuine. Deletion removes the evidence. The scar is more useful than a clean registry: it proves the registry is curated and held to the same standard as the decisions it documents.",
    tags: ["rejection", "scar-record", "registry-standard", "curation", "method-applied-to-itself", "permanent"],
  },
];

export function getADRCase003(id: string): ADRCase003 | undefined {
  return adrsCase003.find((a) => a.id === id);
}

export const domainLabelCase003: Record<ADRCase003Domain, string> = {
  writing: "Writing",
  methodology: "Methodology",
  identity: "Identity",
};
