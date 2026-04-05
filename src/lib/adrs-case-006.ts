import type { ADRStatus } from "@/lib/adrs";

export type ADRCase006Domain = "strategy" | "identity" | "structure" | "surface";

export interface ADRCase006 {
  id: string;
  number: string;
  title: string;
  status: ADRStatus;
  freshness: "Active" | "Permanent" | "Pending";
  freshnessNote: string;
  date: string;
  domain: ADRCase006Domain;
  position: "Foundational" | "Derived";
  dependsOn: string[];
  summary: string;
  tags: string[];
}

export const adrsCase006: ADRCase006[] = [
  {
    id: "C6-001",
    number: "001",
    title: "Consolidation Decision — Hub Architecture for Multi-Property Personal Identity",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The case for consolidation over fragmentation does not expire.",
    date: "2026-04-05",
    domain: "strategy",
    position: "Foundational",
    dependsOn: [],
    summary: "Multiple digital properties exist in isolation by default. Each independently signals the operator's identity without connecting to the others — fragmenting the entity graph and the visitor experience simultaneously. The decision: designate one domain as the hub, redesign it as a navigational surface for all properties, and implement canonical Person schema anchored to the hub domain. Do this now, on current infrastructure, without waiting for a cleaner stack.",
    tags: ["consolidation", "hub-architecture", "multi-property", "entity-graph", "fragmentation", "canonical-hub"],
  },
  {
    id: "C6-002",
    number: "002",
    title: "Signal Before Elegance — Ship Canonical Signals on Current Infrastructure",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The principle does not expire. Infrastructure changes; the quality of a correct signal does not require infrastructure to change first.",
    date: "2026-04-05",
    domain: "strategy",
    position: "Foundational",
    dependsOn: [],
    summary: "The default instinct when beginning identity consolidation is to wait for a modern stack. This is the trap. Signal Before Elegance is the governing principle that breaks it: a correct Person schema on a Jekyll static site is identical in machine-readable value to the same schema on Next.js. The signal is in the HTML output; the framework that generates it is invisible to the entity graph. Ship the correct signal on whatever infrastructure exists today. Do not gate on stack. Do not gate on migration plans.",
    tags: ["signal-before-elegance", "governing-principle", "infrastructure-independent", "ship-now", "migration-deferred", "compounding"],
  },
  {
    id: "C6-003",
    number: "003",
    title: "Canonical Person Entity — One @id Across All Properties",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify if schema.org Person guidance changes or if major search engines deprecate @id-based entity resolution.",
    date: "2026-04-05",
    domain: "identity",
    position: "Foundational",
    dependsOn: ["C6-001"],
    summary: "Schema.org Person with @id uniquely identifies the operator across all machine-readable contexts. Without a canonical @id, each property's Person schema is a disconnected assertion — 'Ben Chan' without specifying which Ben Chan. With a canonical @id, all properties point to the same entity and the graph consolidates. The sameAs array extends this by explicitly listing all equivalent URLs. Full coverage across all properties is required; partial coverage produces partial consolidation.",
    tags: ["person-schema", "canonical-id", "schema-org", "entity-graph", "sameas", "machine-readable"],
  },
  {
    id: "C6-004",
    number: "004",
    title: "@id URI Belongs to the Hub Domain",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify if the hub domain changes or if a different property becomes the canonical reference point.",
    date: "2026-04-05",
    domain: "identity",
    position: "Derived",
    dependsOn: ["C6-001", "C6-003"],
    summary: "The canonical @id URI must resolve to a domain. The hub domain is the correct choice for three reasons: the hub's explicit purpose is to represent the whole, the hub has no competing product identity of its own, and concentrating the canonical signal on the hub strengthens the hub's authority as an entity anchor. Spoke domains have their own brand identities (the method, the podcast, the registry) that compete with a personal @id placement. The hub is neutral.",
    tags: ["id-uri", "hub-domain", "canonical-anchor", "entity-topology", "hub-and-spoke"],
  },
  {
    id: "C6-005",
    number: "005",
    title: "Identity Decoupled from Infrastructure",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The principle that identity outlasts infrastructure is a durable architectural constraint.",
    date: "2026-04-05",
    domain: "identity",
    position: "Derived",
    dependsOn: ["C6-002", "C6-003", "C6-004"],
    summary: "The @id URI is a logical address — it identifies a person, not a stack. The hub domain may migrate from Jekyll to Next.js, from GitHub Pages to Vercel, without changing the @id URI. Identity decoupled from infrastructure means the consolidation work is durable. It does not expire on migration. The stack migration can proceed on its own timeline, for its own reasons, without any identity-related urgency or sequencing dependency.",
    tags: ["identity-durability", "infrastructure-independence", "migration-proof", "logical-address", "permanent-principle"],
  },
  {
    id: "C6-006",
    number: "006",
    title: "Domain Role Canonicalization — One Role Per Property, Zero for the Hub",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify if the portfolio of properties changes or if a spoke's role changes materially.",
    date: "2026-04-05",
    domain: "structure",
    position: "Foundational",
    dependsOn: ["C6-001"],
    summary: "Each property in a multi-property personal site needs one explicitly assigned role. Without assignment, properties accumulate content in all directions — role bleed. The hub's role is special: navigation and cohesion, with no original content. A hub that publishes its own content competes with its spokes. The explicit role assignments in this case: hub (benchantech.com, cohesion), framework authority (yymethod.com), applied reasoning (home.yymethod.com), origin and narrative (yyand.me).",
    tags: ["role-canonicalization", "domain-roles", "role-bleed", "hub-zero-content", "content-topology", "explicit-assignment"],
  },
  {
    id: "C6-007",
    number: "007",
    title: "Hub Stack Decision — Current Infrastructure Is Sufficient",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify when functional migration reasons emerge — performance, capability, developer experience. Do not reverify for aesthetic reasons alone.",
    date: "2026-04-05",
    domain: "structure",
    position: "Derived",
    dependsOn: ["C6-002", "C6-006"],
    summary: "Scar ADR. An early proposal to migrate the hub to Next.js before implementing the identity signal was reversed after a single question: does the migration change signal quality? No. Jekyll generates static HTML that carries Person schema identically to Next.js. The migration was driven by aesthetic preference for a modern stack, not a functional requirement. Reversed, deferred. The hub stays on Jekyll for the identity consolidation work. Migration is a separate future decision to be made on functional grounds.",
    tags: ["hub-stack", "jekyll", "migration-deferred", "scar-record", "direction-reversal", "aesthetic-vs-functional"],
  },
  {
    id: "C6-008",
    number: "008",
    title: "Hub Landing Architecture — Card Grid, Minimal Intro, Folded About",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify if the number or nature of properties in the system changes materially.",
    date: "2026-04-05",
    domain: "surface",
    position: "Derived",
    dependsOn: ["C6-006", "C6-007"],
    summary: "The hub landing page accomplishes three things: welcome the visitor, show the full map of properties, identify the operator. Architecture: brief structural intro → card grid (domain, title, role, one-sentence description) → about section folded in at the bottom. Cards are the primary navigation element. The intro is evergreen — structural, not editorial. The about section is short enough to live on the landing page, eliminating the need for a separate /about page and a navigation link to reach it.",
    tags: ["hub-landing", "card-grid", "folded-about", "single-page", "evergreen-intro", "navigation-structure"],
  },
  {
    id: "C6-009",
    number: "009",
    title: "Navigation Philosophy — Wordmark Only, Transparent Hub",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify if the hub grows beyond a single landing page into a multi-section site.",
    date: "2026-04-05",
    domain: "surface",
    position: "Derived",
    dependsOn: ["C6-008"],
    summary: "A nav rail implies sections worth navigating. The hub has none — it is one page. Nav rail on a one-page site is organizational noise that implies complexity that doesn't exist. The decision: wordmark only, no nav rail. Subline below the wordmark carries descriptive context in one line (title, key affiliations as clickable links) without navigation overhead. The hub's call to action is to leave for a spoke, not to navigate within the hub. Footer handles links and attribution.",
    tags: ["navigation-minimalism", "wordmark-only", "transparent-hub", "no-nav-rail", "subline", "outbound-focus"],
  },
  {
    id: "C6-010",
    number: "010",
    title: "Cross-Property sameAs Consistency — The Array Is a Contract",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Reverify when any property is added to or removed from the system — the array must be updated across all properties simultaneously.",
    date: "2026-04-05",
    domain: "identity",
    position: "Derived",
    dependsOn: ["C6-003", "C6-004"],
    summary: "The sameAs array must be identical across all properties that carry the Person schema. A fractured array — some with five URLs, some with six, some omitting the hub — is a fractured signal. The array is a contract: when any property is added or renamed, the array is updated on every property simultaneously. Every property includes itself in its own sameAs array. Consistency is binary — either the arrays match or they don't. In this case: six URLs, identical on all four properties.",
    tags: ["sameas", "consistency-contract", "entity-completeness", "maintenance-discipline", "cross-property", "array-synchronization"],
  },
];

export function getADRCase006(id: string): ADRCase006 | undefined {
  return adrsCase006.find((a) => a.id === id);
}

export function getADRsCase006ByDomain(domain: ADRCase006Domain): ADRCase006[] {
  return adrsCase006.filter((a) => a.domain === domain);
}

export const domainLabelCase006: Record<ADRCase006Domain, string> = {
  strategy: "Strategy",
  identity: "Identity",
  structure: "Structure",
  surface: "Surface",
};
