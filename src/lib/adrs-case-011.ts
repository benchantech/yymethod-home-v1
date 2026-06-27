import type { ADRStatus } from "@/lib/adrs";

export type ADRCase011Domain =
  | "canon"
  | "voice"
  | "positioning"
  | "progression"
  | "pathway"
  | "business"
  | "worldview"
  | "funding"
  | "boundary"
  | "seed"
  | "adaptation"
  | "architecture"
  | "consent"
  | "disclosure"
  | "privacy"
  | "lens"
  | "expansion";

export interface ADRCase011 {
  id: string;
  number: string;
  title: string;
  status: ADRStatus;
  freshness: "Active" | "Permanent" | "Pending";
  freshnessNote: string;
  date: string;
  domain: ADRCase011Domain;
  position: "Foundational" | "Derived" | "Correction" | "Cross-cutting";
  dependsOn: string[];
  summary: string;
  tags: string[];
}

export const adrsCase011: ADRCase011[] = [
  {
    id: "C11-001",
    number: "001",
    title: "Real YY as First-Class Viewpoint",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The system may mature, but the source of YY's authority remains the real YY from yyandme.benchantech.com.",
    date: "2026-06-06",
    domain: "canon",
    position: "Foundational",
    dependsOn: [],
    summary: "Real YY from yyandme.benchantech.com is promoted from mascot/reference to first-class viewpoint for YY Method Home Edition. YY is the emotional operating system and teaching lens: companion, comic interruption, inner-child keeper, and narrative bridge between childhood imagination and adult reasoning. yysworld remains a branch/sandbox lineage; yyandme.benchantech.com remains the canonical emotional source.",
    tags: ["real-yy", "yyandme", "first-class-viewpoint", "canon", "emotional-operating-system", "not-mascot", "yysworld-lineage", "teaching-lens"],
  },
  {
    id: "C11-002",
    number: "002",
    title: "Adult Syntax, Childlike Wonder",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The voice may evolve, but the posture remains adult syntax carrying childlike wonder.",
    date: "2026-06-06",
    domain: "voice",
    position: "Derived",
    dependsOn: ["C11-001"],
    summary: "YY Method Home Edition should preserve YY's curiosity, surprise, comic timing, warmth, and associative leaps while keeping the public instructional register adult. YY asks disarming questions; the system answers with precision. The result is family-accessible wonder without child-directed positioning or professional blandness.",
    tags: ["adult-syntax", "childlike-wonder", "voice", "family-accessible", "not-childish", "professional-trust", "yy-guide"],
  },
  {
    id: "C11-003",
    number: "003",
    title: "Adult-Directed Family Learning Posture",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The product may include family experiences, but the public learning posture remains adult-directed.",
    date: "2026-06-06",
    domain: "positioning",
    position: "Derived",
    dependsOn: ["C11-002"],
    summary: "The product is adult-directed and family-shareable. Parents, adult learners, builders, and professionals are the public audience. Children can participate through family use and private sandbox pathways, but the product does not position itself as a kids-only or child-directed service, preserving the correction from Case 002.",
    tags: ["adult-directed", "family-learning", "coppa-posture", "family-shareable", "parents", "ai-literacy", "case-002-correction"],
  },
  {
    id: "C11-004",
    number: "004",
    title: "Gamified Progression Loop — Badges, XP, Quests, Family Victories",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit when the first usable progression system is designed or when rewards begin distorting learning.",
    date: "2026-06-06",
    domain: "progression",
    position: "Derived",
    dependsOn: ["C11-003"],
    summary: "Gamification becomes a core learning loop: quests, XP, badges, and family victories. Rewards should attach to demonstrated cognitive moves such as naming assumptions, preserving provenance, correcting AI errors, creating artifacts, and explaining constraints, not to passive completion.",
    tags: ["gamification", "badges", "xp", "quests", "family-victories", "ai-literacy", "cognitive-moves", "provenance"],
  },
  {
    id: "C11-005",
    number: "005",
    title: "Sandbox-to-Graduation Pathway — yyworld to yymethod-home",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit as yyworld, child studio, or academy surfaces become real software.",
    date: "2026-06-06",
    domain: "pathway",
    position: "Derived",
    dependsOn: ["C11-004"],
    summary: "yyworld is the kids' safe sandbox for imagination, character play, and family-supervised experiments. yymethod-home is the graduation field where selected ideas become reasoning records, philosophy, training modules, and product engine components. Graduation requires approval, traceability, usefulness, and appropriate privacy posture.",
    tags: ["yyworld", "yymethod-home", "sandbox", "graduation-field", "family-approved", "traceable", "ideas-to-doctrine", "safe-sandbox"],
  },
  {
    id: "C11-006",
    number: "006",
    title: "Ben Chan Tech as YY Method Academy",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit when Ben Chan Tech packaging, offers, or public positioning change.",
    date: "2026-06-06",
    domain: "business",
    position: "Foundational",
    dependsOn: [],
    summary: "Ben Chan Tech's long-term mission is to become a YY Method learning academy: family-accessible, AI-native, and rooted in YY's world. Advisory work remains valid, but the durable home product is a family learning system that lets parents and children learn through quests, cases, artifacts, and guided practice.",
    tags: ["benchantech", "learning-academy", "yy-method-academy", "ai-native", "family-learning", "training-system", "home-surface"],
  },
  {
    id: "C11-007",
    number: "007",
    title: "Parallel Metaphor for Families and 1:1 Adult Learners",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The metaphor may mature, but the thematic thread remains load-bearing.",
    date: "2026-06-06",
    domain: "worldview",
    position: "Derived",
    dependsOn: ["C11-001", "C11-006"],
    summary: "The same YY forest/fantasy metaphor can support families and 1:1 adult learners with graduated seriousness, but the Home Edition surface should privilege families. Kids enter through wonder and quests; parents through co-learning; individual adults through personal AI literacy and reasoning. Team and organization training remain outside this surface so the public domain does not drift corporate.",
    tags: ["parallel-metaphor", "yy-forest", "families", "one-to-one", "adult-learners", "graduated-seriousness", "trojan-horse", "shared-world"],
  },
  {
    id: "C11-008",
    number: "008",
    title: "Client Advisory Funding Boundary",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit whenever a client engagement materially changes scope, ownership, or mission influence.",
    date: "2026-06-06",
    domain: "funding",
    position: "Derived",
    dependsOn: ["C11-006"],
    summary: "Client advisory work may fund and inform the academy, but it does not control the mission, doctrine, canon, or product center. Patterns may be distilled only when anonymized, generalized, and aligned with the family-and-business training mission. Consulting is a funding and field-learning channel, not the academy's owner.",
    tags: ["client-advisory", "funding-boundary", "retainer", "cto-to-ceo", "field-learning", "anonymized-patterns", "mission-control"],
  },
  {
    id: "C11-009",
    number: "009",
    title: "Family-First Domain Boundary — yymethod.com as Home Surface, Professional Method Elsewhere",
    status: "Decided — Correction",
    freshness: "Permanent",
    freshnessNote: "Permanent until ownership, employment scope, or audience posture materially changes. Revisit before any team, organizational, corporate, executive-program, or employer-adjacent positioning appears on yymethod.com.",
    date: "2026-06-06",
    domain: "boundary",
    position: "Correction",
    dependsOn: ["C11-003", "C11-006", "C11-007"],
    summary: "yymethod.com and YY Method Home Edition are family-first surfaces. The professional method implementation developed inside the operator's company remains acknowledged but separate. Professional use is limited to 1:1 training/advisory and must not become team, department, company, employer, or cohort training. The public domain may grow toward family AI literacy, parent-child learning, gamified quests, child-safe creative sandboxes, and possibly school-oriented learning.",
    tags: ["family-first", "domain-boundary", "yymethod-com", "home-edition", "professional-separate", "one-to-one", "non-corporate", "school-possible", "yy-guardrail"],
  },
  {
    id: "C11-010",
    number: "010",
    title: "Fantasy Golden Seed — Childhood Thinking Modes Matured Into Adult Method",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Immutable. This is the golden seed for the fantasy theme underpinning YY Method Home Edition and YY. Product surfaces may evolve, but they must not contradict this source.",
    date: "2026-06-06",
    domain: "seed",
    position: "Foundational",
    dependsOn: ["C11-001", "C11-002", "C11-004", "C11-009"],
    summary: "The fantasy theme underpinning YY Method Home Edition is not invented brand dressing. It is the truthful maturation of the operator's childhood thinking modes: character lensing through YY and other companions, private worldbuilding, quest framing, skill transfer, visible logging, XP, and restart without shame. The product should use the operator's mode as a guide that helps families and 1:1 adult learners discover and mature their own modes.",
    tags: ["golden-seed", "fantasy-theme", "childhood-thinking-modes", "yy", "rpg", "new-game-plus", "xp", "worldbuilding", "visible-logging", "adult-method", "immutable"],
  },
  {
    id: "C11-011",
    number: "011",
    title: "Adaptive Proof Layer — New Game Plus Meets 2026 Social Proof",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active through 2027. Revisit when discovery behavior, creator trust patterns, AI content norms, or learning-platform gamification norms materially change.",
    date: "2026-06-06",
    domain: "adaptation",
    position: "Derived",
    dependsOn: ["C11-004", "C11-010"],
    summary: "YY Method Home Edition will add an adaptive proof layer for 2026/27. New Game Plus becomes the internal progression grammar; quests, XP, badges, and progress dashboards map to accepted gamification patterns; visible logs, scars, artifacts, and family victories become the social-proof layer; AI personalization adapts the path without replacing human agency. The golden seed remains immutable, but the interface to the world stays current.",
    tags: ["adaptive-proof-layer", "new-game-plus", "social-proof", "gamification", "visible-logs", "family-victories", "ai-personalization", "trust", "anti-ossification", "2026"],
  },
  {
    id: "C11-012",
    number: "012",
    title: "yysworld Kernel Architecture for the New YY Method",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit when yymethod-home gains runtime learner/account/progression state, when yyworld becomes public/account-based, or when yysworld's kernel patterns materially change.",
    date: "2026-06-06",
    domain: "architecture",
    position: "Cross-cutting",
    dependsOn: ["C11-001", "C11-004", "C11-005", "C11-006", "C11-009", "C11-010", "C11-011"],
    summary: "The new YY Method Home Edition should adopt yysworld's actual construction kernel: versioned seeds, typed schemas, append-only records, explicit AI roles, generated artifacts with provenance, branch/comparison mechanics, static human projections, and machine-readable data projections. Case 011 supplies the mental scaffolding and purpose; yysworld supplies the early operating architecture that keeps quests, badges, sandbox graduation, family proof, and AI personalization from collapsing into generated content.",
    tags: ["yysworld-kernel", "architecture", "operating-system", "method-seed", "typed-schemas", "append-only", "provenance", "ai-role-separation", "machine-readable-data", "branch-comparison", "proof-artifacts", "anti-slop", "construction-discipline"],
  },
  {
    id: "C11-013",
    number: "013",
    title: "Founder-Parent Non-Coercion Invariant",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. This invariant must be satisfied before the child-led AI learning ledger is introduced to any child. Revisit only to strengthen the protection, not to weaken it.",
    date: "2026-06-06",
    domain: "consent",
    position: "Foundational",
    dependsOn: ["C11-003", "C11-005", "C11-010", "C11-012"],
    summary: "The first system under test is the founder-parent. A child-led AI learning ledger is valid only if participation is opt-in, reversible, non-punitive, and emotionally safe. The child may decline, pause, narrow scope, or stop without explanation. Clean opt-out is required proof that the model is safe, not a failure case.",
    tags: ["founder-parent", "non-coercion", "clean-opt-out", "child-agency", "consent", "emotionally-safe", "parent-training-ground", "no-pressure", "breaks-if"],
  },
  {
    id: "C11-014",
    number: "014",
    title: "Non-Coercive Upside Disclosure",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. Revisit if the invitation script, child-facing language, or participant onboarding changes.",
    date: "2026-06-06",
    domain: "disclosure",
    position: "Derived",
    dependsOn: ["C11-013"],
    summary: "The child should understand the upside of participation: resume strengthening, portfolio proof, career foundation, AI literacy, fun experimentation, flexible pacing, guardrailed review, and parent-built scaffolding. These benefits must be presented as opportunities, not obligations. Upside disclosure is valid only when paired with clean opt-out.",
    tags: ["upside-disclosure", "resume-proof", "portfolio", "career-foundation", "ai-literacy", "flexible-schedule", "guardrails", "not-pressure"],
  },
  {
    id: "C11-015",
    number: "015",
    title: "Child Journey as Private Key, YY Method as Public Key",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent for minor-child source material. Revisit only when the child is legally able to control disclosure, or if the private repository/access model changes materially.",
    date: "2026-06-06",
    domain: "privacy",
    position: "Foundational",
    dependsOn: ["C11-005", "C11-012", "C11-013", "C11-014"],
    summary: "The child's actual AI learning journey is the private key: journals, prompts, attempts, artifacts, corrections, AI guardrail reviews, and parent decisions. YY Method is the public key: it may derive safe-distance projections, quests, badges, lessons, and proof metadata. The public key may change surface by audience and intent, but it may not mutate, overwrite, disclose, or define the private key.",
    tags: ["private-key", "public-key", "child-owned-repo", "private-git", "public-projection", "source-truth", "portfolio-proof", "disclosure-consent", "one-way-flow"],
  },
  {
    id: "C11-016",
    number: "016",
    title: "YY Lens as Safe-Distance Narrator and Self-Narration Model",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. Revisit only if YY's role changes from narrator/guide into author, evaluator, or public substitute for the child.",
    date: "2026-06-06",
    domain: "lens",
    position: "Derived",
    dependsOn: ["C11-001", "C11-002", "C11-010", "C11-015"],
    summary: "The power is in the YY lens. YY narrates what happened at a safe distance, translates private learning into public patterns, and models how learners can self-narrate in their own way. YY and Me is the guide: not because everyone must adopt YY, but because it demonstrates how a personal companion, character, or metaphor can make experience legible over time.",
    tags: ["yy-lens", "safe-distance", "narrator", "self-narration", "yy-and-me", "public-pattern", "not-author", "private-source", "learner-lens"],
  },
  {
    id: "C11-017",
    number: "017",
    title: "Founder-Led Golden Path and Personal Opt-In Expansion",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit before inviting siblings, trusted families, parent-child participants, adult learners, or any school/community cohort.",
    date: "2026-06-06",
    domain: "expansion",
    position: "Derived",
    dependsOn: ["C11-013", "C11-014", "C11-015", "C11-016"],
    summary: "The first child-led AI learning ledger may become the founder-led golden path if the child personally opts in and can cleanly opt out. It can prove the repo structure, guardrail review, parent gate, YY projection, badge criteria, and portfolio tags for siblings, trusted families, parent-child learners, and adults. It models agency; it does not create obligation.",
    tags: ["founder-led", "golden-path", "personal-opt-in", "siblings", "trusted-families", "adult-learners", "no-obligation", "pattern-transfer", "agency"],
  },
];

export function getADRCase011(id: string): ADRCase011 | undefined {
  return adrsCase011.find((a) => a.id === id);
}

export const domainLabelCase011: Record<ADRCase011Domain, string> = {
  canon: "Canon",
  voice: "Voice",
  positioning: "Positioning",
  progression: "Progression",
  pathway: "Pathway",
  business: "Business",
  worldview: "Worldview",
  funding: "Funding",
  boundary: "Boundary",
  seed: "Seed",
  adaptation: "Adaptation",
  architecture: "Architecture",
  consent: "Consent",
  disclosure: "Disclosure",
  privacy: "Privacy",
  lens: "Lens",
  expansion: "Expansion",
};
