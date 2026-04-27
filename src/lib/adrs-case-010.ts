import type { ADRStatus } from "@/lib/adrs";

export type ADRCase010Domain = "authorship" | "containment" | "structure" | "provenance" | "lifecycle";

export interface ADRCase010 {
  id: string;
  number: string;
  title: string;
  status: ADRStatus;
  freshness: "Active" | "Permanent" | "Pending";
  freshnessNote: string;
  date: string;
  domain: ADRCase010Domain;
  position: "Foundational" | "Derived" | "Correction" | "Cross-cutting";
  dependsOn: string[];
  summary: string;
  tags: string[];
}

export const adrsCase010: ADRCase010[] = [
  {
    id: "C10-001",
    number: "001",
    title: "Child as Author, AI as Rendering Layer",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The authorship split is the governing invariant of the system. It does not expire as long as the system exists.",
    date: "2026-04-27",
    domain: "authorship",
    position: "Foundational",
    dependsOn: [],
    summary: "The authorship split is the load-bearing invariant. The child originates character, story, identity, taste, and decision. AI handles rendering, consistency, scaling, layout, and polish. This is not a convenience tradeoff — it is the architecture. A child who decides what happens to a character, pushes back on what doesn't feel right, and iterates toward something that matches their interior vision is building taste, identity, and creative agency. A child who approves AI-generated characters is curating a catalog. The split also determines IP: authorship originates with the child, the creative decisions are traceable to the child, and the rendering is a tool — not a co-author. Crossing the authorship line degrades both the creative outcome and the ownership clarity.",
    tags: ["child-as-author", "ai-rendering-layer", "authorship-split", "creative-agency", "taste-formation", "ip-foundation", "rendering-not-authoring", "co-authorship-rejected"],
  },
  {
    id: "C10-002",
    number: "002",
    title: "Original Character Requirement — Derivative Path Rejected",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The derivative-character risk does not diminish with time. The original-character requirement is the permanent baseline.",
    date: "2026-04-27",
    domain: "authorship",
    position: "Derived",
    dependsOn: ["C10-001"],
    summary: "The approach of adapting a beloved existing squirrel plush as the character basis was considered and rejected. The IP landscape for derivative characters is treacherous even when the original company is old or defunct: defunct does not mean public domain; name ownership does not resolve visual copyright risk; any resemblance to the original design may constitute infringement regardless of the original rights holder's commercial status. The cleaner path — and the better creative outcome — is for children to originate characters from scratch through sketches, stories, staging, and play. Original characters are unambiguously owned. They compound in value without IP uncertainty hanging over them. The squirrel plush prototype is retained as a private engine reference — useful for proving the pipeline works — but not suitable as public-facing creative work or as the basis for any portfolio character.",
    tags: ["original-character-requirement", "derivative-character-rejected", "ip-ownership", "squirrel-prototype", "defunct-not-public-domain", "visual-copyright-risk", "clean-ip-origin", "imagination-as-source"],
  },
  {
    id: "C10-003",
    number: "003",
    title: "Private Prototype Boundary — Squirrel Reference Stays Internal",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit only if the IP status of the source material changes or if the squirrel prototype is under consideration for release.",
    date: "2026-04-27",
    domain: "containment",
    position: "Derived",
    dependsOn: ["C10-002"],
    summary: "The squirrel plush-derived prototype serves one function: private engine validation. It proves the rendering pipeline works, that consistency is achievable across iterations, and that the workflow can be explained to a child. Beyond that, it stops. The prototype is never published, never presented as original work, never included in any child's portfolio as a character, and never used in any commercial activity. The boundary is architectural, not advisory: the prototype lives in a private environment, is not indexed, and is outside the portfolio access system. A prototype reference that leaks into the portfolio would carry IP risk that the original character requirement was designed to eliminate. The prototype is the scaffolding proof. The scaffolding is not the building.",
    tags: ["private-prototype", "squirrel-boundary", "engine-validation", "no-leakage-to-portfolio", "ip-containment", "scaffolding-not-building", "architectural-boundary"],
  },
  {
    id: "C10-004",
    number: "004",
    title: "Google OAuth + Email Allowlist — Access Model",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if the family's trusted-access needs change or if the OAuth provider changes terms relevant to minor-data handling.",
    date: "2026-04-27",
    domain: "structure",
    position: "Foundational",
    dependsOn: [],
    summary: "The access model uses Google OAuth combined with a hardcoded email allowlist over: public access (no protection), nickname subdomains as the sole privacy mechanism (a URL is a barrier only until it's discovered), simple passwords (credential management burden, sharing risk), or self-registration (operator loses control of who can read). Nickname subdomains are acceptable as organizational structure — each child's work can live under a readable path or subdomain — but they are not privacy. Anything at a public URL is accessible to anyone who has or discovers the URL. The combination of OAuth (trusted identity provider, no per-user password management) and explicit allowlist (operator decides who can read, not a registration flow) produces a system where the children's work is readable only by people the operator has explicitly approved. This is not a security hardening exercise. It is a privacy posture appropriate to a private family portfolio.",
    tags: ["google-oauth", "email-allowlist", "access-control", "nickname-subdomains-insufficient", "operator-controls-access", "privacy-posture", "no-self-registration", "url-is-not-privacy"],
  },
  {
    id: "C10-005",
    number: "005",
    title: "Pseudonymous Portfolio Structure — Identity Decoupling",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit when each child reaches adulthood and makes an identity disclosure decision.",
    date: "2026-04-27",
    domain: "structure",
    position: "Derived",
    dependsOn: ["C10-004"],
    summary: "Each child's portfolio is organized under a pseudonym or character-linked identifier, not the child's legal name. The pseudonym serves two functions: it decouples the child's real identity from anything logged in external systems (OAuth providers, server logs, error reporting), and it allows the portfolio to be published selectively in the future without retroactively exposing the child's real identity through metadata baked into URLs, filenames, and content. The pseudonym is stable — it does not rotate. It is chosen with the child's participation where age allows. The pseudonym handles identity decoupling; access control handles security. A portfolio organized by legal name and later partially published would carry real-identity metadata the child cannot retract. The pseudonym is chosen before the first content is created.",
    tags: ["pseudonymous-portfolio", "identity-decoupling", "stable-pseudonym", "no-legal-name-in-system", "selective-publication", "metadata-hygiene", "chosen-before-first-content"],
  },
  {
    id: "C10-006",
    number: "006",
    title: "No Public Indexing — Discoverability Off by Default",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The no-indexing default does not expire. Discoverability is toggled on explicitly by the adult child — never before.",
    date: "2026-04-27",
    domain: "containment",
    position: "Derived",
    dependsOn: ["C10-004"],
    summary: "The system is never indexed. robots.txt disallows all crawlers. No OpenGraph metadata that makes content shareable or attractive to scrapers. No share buttons, no social graph integration. The goal is not security through obscurity — access control handles who can read. The goal is that AI training pipelines, search engines, and data brokers do not ingest the children's creative work before the children are old enough to consent to that exposure. The work can be made discoverable later — that decision belongs to the adult child. Discoverability defaults off and requires an explicit action to enable. The no-indexing default is permanent as a system setting; only the adult child's explicit decision can change it for their own work.",
    tags: ["no-public-indexing", "robots-txt", "no-og-metadata", "ai-training-pipeline-excluded", "discoverability-off-by-default", "adult-consent-required-to-enable", "search-engine-excluded"],
  },
  {
    id: "C10-007",
    number: "007",
    title: "Provenance and Process Logging — Authorship Is Demonstrable",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit as the logging format matures. The goal is durability and readability by the adult child, not completeness of capture.",
    date: "2026-04-27",
    domain: "provenance",
    position: "Derived",
    dependsOn: ["C10-001"],
    summary: "The system logs process artifacts alongside outputs. Character origin sketches, first written descriptions, iteration notes, staging photos, voice memos of the child describing the character, parent notes on creative decisions — these are the provenance record. They matter for two reasons: they demonstrate authorship (the child's creative process is the most durable IP defense against any future claim of AI origination), and they preserve the memory of creation that the child will want access to as an adult. AI-generated renders are stored with metadata: date, prompt context, iteration number, which child approved it and what they said about it. The provenance record is what separates 'this character was originated by a child from their imagination' from 'a prompt was run.' The logging is lightweight and habitual — not a bureaucratic overhead.",
    tags: ["provenance-logging", "process-artifacts", "authorship-defense", "creation-memory", "render-metadata", "lightweight-habitual-logging", "ai-origination-defense", "iteration-record"],
  },
  {
    id: "C10-008",
    number: "008",
    title: "Parent-Built Creative Engine — Infrastructure Invisible to the Child",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit as children's technical capabilities grow. The engine may transfer to the child over time as they develop the capability and interest.",
    date: "2026-04-27",
    domain: "structure",
    position: "Foundational",
    dependsOn: [],
    summary: "The parent's role is to build and maintain the infrastructure so the child does not spend creative time on it. Rendering pipeline, consistency tooling, layout templates, version history, access control — these are engineering problems that sit below the creative work. A child who has to manage prompts, file organization, or account settings is spending creative time on infrastructure. The separation is intentional: parent as engineer, child as author. The parent may help translate the child's creative intentions into prompts or staging inputs, but the originating decisions — what the character looks, acts, and feels like — belong to the child. The engine is invisible from the child's perspective. It is the scaffolding; the creative work is the building. As children grow, the scaffolding may transfer to them — but only as they have the capability and interest, not as an expectation.",
    tags: ["parent-built-engine", "scaffolding", "child-author-parent-engineer", "prompt-translation", "engine-invisible-to-child", "creative-time-protected", "capability-transfer-possible"],
  },
  {
    id: "C10-009",
    number: "009",
    title: "Adult Consent / Release Lifecycle — Three Outcomes, All Valid",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The consent requirement does not expire. The decision belongs to the adult child.",
    date: "2026-04-27",
    domain: "lifecycle",
    position: "Foundational",
    dependsOn: [],
    summary: "The portfolio is fully private until the child reaches adulthood and can give informed consent to broader exposure. At adulthood, three outcomes are possible: keep everything private; selectively share specific characters or works; make the full portfolio public. All three are valid. None is the default. The decision belongs to the adult child — not to the parent's judgment about what would be good for the child's career or creative reputation. The parent may express a preference; the adult child decides. The lifecycle is: private by design → child becomes adult → explicit consent decision → one of three outcomes. Nothing escalates without the explicit step. The architecture is built to make all three outcomes equally achievable — not to funnel toward publication or toward permanent privacy.",
    tags: ["adult-consent", "release-lifecycle", "three-outcomes-all-valid", "private-by-design", "no-default-publication", "child-agency", "parent-preference-not-deciding", "explicit-step-required"],
  },
  {
    id: "C10-010",
    number: "010",
    title: "Commercialization Gate — Original Value, Protected Until Consent",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The commercialization gate does not expire. It opens only with adult consent and appropriate legal structure.",
    date: "2026-04-27",
    domain: "lifecycle",
    position: "Derived",
    dependsOn: ["C10-009", "C10-002"],
    summary: "Commercial use of any character in the portfolio — licensing, merchandise, publication, sale — is gated behind adult consent. No commercial activity involving a child's creative work happens while the child is a minor without explicit adult legal decisions, appropriate guardianship structure, and the child's meaningful participation appropriate to their age. The gate is not a discouragement of commercialization. Original characters can develop significant commercial value, and that value is worth protecting and eventually realizing. The gate is a protection against premature commercialization that strips the child of agency over their own creative work before they have the judgment and legal standing to exercise that agency. The squirrel prototype is doubly excluded from commercialization: it is private by architectural boundary, and it carries unresolved IP risk that makes it unsuitable as a commercial asset regardless of consent.",
    tags: ["commercialization-gate", "adult-consent-required", "original-character-value", "minor-protection", "legal-standing", "squirrel-doubly-excluded", "ip-before-commerce", "value-worth-protecting"],
  },
];

export function getADRCase010(id: string): ADRCase010 | undefined {
  return adrsCase010.find((a) => a.id === id);
}

export function getADRsCase010ByDomain(domain: ADRCase010Domain): ADRCase010[] {
  return adrsCase010.filter((a) => a.domain === domain);
}

export const domainLabelCase010: Record<ADRCase010Domain, string> = {
  authorship: "Authorship",
  containment: "Containment",
  structure: "Structure",
  provenance: "Provenance",
  lifecycle: "Lifecycle",
};
