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
];

export function getADRCase003(id: string): ADRCase003 | undefined {
  return adrsCase003.find((a) => a.id === id);
}

export const domainLabelCase003: Record<ADRCase003Domain, string> = {
  writing: "Writing",
  methodology: "Methodology",
  identity: "Identity",
};
