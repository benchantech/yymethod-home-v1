import type { ADRStatus } from "@/lib/adrs";

export type ADRCase013Domain =
  | "control-surface"
  | "temporal-architecture"
  | "scene-construction"
  | "character-direction"
  | "scene-composition"
  | "visual-locking"
  | "prompt-architecture"
  | "visual-composition"
  | "experimental-method"
  | "production-constraints"
  | "asset-system"
  | "production-workflow"
  | "production-strategy"
  | "knowledge-preservation"
  | "human-ai-collaboration";

export interface ADRCase013 {
  id: string;
  number: string;
  slug: string;
  title: string;
  domain: ADRCase013Domain;
  status: ADRStatus;
  freshness: "Active";
  freshnessNote: string;
  date: string;
  dependsOn: string[];
  summary: string;
  tags: string[];
}

export const adrsCase013: ADRCase013[] = [
  {
    id: "C13-001",
    number: "001",
    slug: "reject-text-only-control-of-the-video-generator",
    title: "Reject Text-Only Control of the Video Generator",
    domain: "control-surface",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if text-only systems reliably preserve identity, geometry, blocking, and narrative continuity across repeated generations.",
    date: "2026-07-24",
    dependsOn: [],
    summary: "Do not use prose as the sole control surface for a multi-shot AI video sequence.",
    tags: ["control-surface", "ai-video", "decision-reduction"],
  },
  {
    id: "C13-002",
    number: "002",
    slug: "limit-the-sequence-to-four-legible-shots",
    title: "Limit the Sequence to Four Legible Shots",
    domain: "temporal-architecture",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if the generator can reliably preserve comprehension across longer sequences without increasing narrative ambiguity.",
    date: "2026-07-24",
    dependsOn: ["C13-001"],
    summary: "A short AI-generated sequence should generally contain no more than four legible shots.",
    tags: ["temporal-architecture", "ai-video", "legibility"],
  },
  {
    id: "C13-003",
    number: "003",
    slug: "give-each-shot-one-primary-beat",
    title: "Give Each Shot One Primary Beat",
    domain: "temporal-architecture",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if shot-level generation can reliably support multiple simultaneous beats without weakening comprehension.",
    date: "2026-07-24",
    dependsOn: ["C13-002"],
    summary: "Each shot should carry one primary visible beat.",
    tags: ["temporal-architecture", "ai-video", "shot-design"],
  },
  {
    id: "C13-004",
    number: "004",
    slug: "separate-camera-direction-from-subject-direction",
    title: "Separate Camera Direction From Subject Direction",
    domain: "scene-construction",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if generation systems reliably distinguish camera motion from subject motion without explicit separation.",
    date: "2026-07-24",
    dependsOn: ["C13-003"],
    summary: "Camera direction and subject direction should be specified as separate decisions.",
    tags: ["scene-construction", "ai-video", "camera"],
  },
  {
    id: "C13-005",
    number: "005",
    slug: "describe-observable-behavior-instead-of-internal-emotion",
    title: "Describe Observable Behavior Instead of Internal Emotion",
    domain: "character-direction",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if emotional labels become consistently legible as specific visible behavior across generations.",
    date: "2026-07-24",
    dependsOn: ["C13-004"],
    summary: "Direct visible behavior instead of asking the generator to infer performance from internal emotion.",
    tags: ["character-direction", "ai-video", "observable-behavior"],
  },
  {
    id: "C13-006",
    number: "006",
    slug: "give-every-visible-subject-something-to-do",
    title: "Give Every Visible Subject Something to Do",
    domain: "character-direction",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if background or secondary subjects can remain visually coherent without explicit objectives.",
    date: "2026-07-24",
    dependsOn: ["C13-005"],
    summary: "Every visible subject should have a concrete visual objective.",
    tags: ["character-direction", "ai-video", "blocking"],
  },
  {
    id: "C13-007",
    number: "007",
    slug: "replace-ambiguous-directions-with-observable-geometry",
    title: "Replace Ambiguous Directions With Observable Geometry",
    domain: "scene-composition",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if ambiguous directional language becomes reliably mapped to intended screen geometry.",
    date: "2026-07-24",
    dependsOn: ["C13-006"],
    summary: "Replace ambiguous narrative directions with visible geometry.",
    tags: ["scene-composition", "ai-video", "geometry"],
  },
  {
    id: "C13-008",
    number: "008",
    slug: "use-reference-images-to-eliminate-unnecessary-decisions",
    title: "Use Reference Images to Eliminate Unnecessary Decisions",
    domain: "visual-locking",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if text-only generation reliably preserves identity, setting, props, and composition without reference artifacts.",
    date: "2026-07-24",
    dependsOn: ["C13-007"],
    summary: "Use reference images to hold stable visual facts outside the prompt.",
    tags: ["visual-locking", "ai-video", "reference-images"],
  },
  {
    id: "C13-009",
    number: "009",
    slug: "let-images-define-nouns-and-prompts-define-verbs",
    title: "Let Images Define Nouns and Prompts Define Verbs",
    domain: "prompt-architecture",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if prompts can reliably define both stable nouns and desired action without reopening visual choices.",
    date: "2026-07-24",
    dependsOn: ["C13-008"],
    summary: "Let images define stable nouns and prompts define the remaining verbs.",
    tags: ["prompt-architecture", "ai-video", "reference-images"],
  },
  {
    id: "C13-010",
    number: "010",
    slug: "align-the-reference-frame-with-the-intended-motion",
    title: "Align the Reference Frame With the Intended Motion",
    domain: "visual-composition",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if generators reliably infer intended motion from reference frames that conflict with the desired action.",
    date: "2026-07-24",
    dependsOn: ["C13-009"],
    summary: "Choose reference frames that already support the intended motion.",
    tags: ["visual-composition", "ai-video", "reference-frame"],
  },
  {
    id: "C13-011",
    number: "011",
    slug: "reduce-the-prompt-after-the-visual-decisions-are-fixed",
    title: "Reduce the Prompt After the Visual Decisions Are Fixed",
    domain: "prompt-architecture",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if longer prompts stop reopening decisions that have already been fixed by other artifacts.",
    date: "2026-07-24",
    dependsOn: ["C13-010"],
    summary: "Reduce the prompt after stable visual decisions have been moved into other artifacts.",
    tags: ["prompt-architecture", "ai-video", "prompt-reduction"],
  },
  {
    id: "C13-012",
    number: "012",
    slug: "debug-one-variable-at-a-time",
    title: "Debug One Variable at a Time",
    domain: "experimental-method",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if the production system gains reliable attribution across simultaneous prompt, asset, timing, and model changes.",
    date: "2026-07-24",
    dependsOn: ["C13-011"],
    summary: "Change one primary variable at a time so production experiments can become evidence.",
    tags: ["experimental-method", "ai-video", "debugging"],
  },
  {
    id: "C13-013",
    number: "013",
    slug: "treat-content-moderation-as-a-system-boundary",
    title: "Treat Content Moderation as a System Boundary",
    domain: "production-constraints",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if moderation behavior becomes transparent, predictable, and consistently explainable at the production boundary.",
    date: "2026-07-24",
    dependsOn: ["C13-012"],
    summary: "Treat content moderation as an opaque system boundary rather than a debate to win inside the prompt.",
    tags: ["production-constraints", "ai-video", "moderation"],
  },
  {
    id: "C13-014",
    number: "014",
    slug: "build-reusable-visual-assets-instead-of-recreating-them",
    title: "Build Reusable Visual Assets Instead of Recreating Them",
    domain: "asset-system",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if regeneration becomes more reliable than preserving approved visual assets.",
    date: "2026-07-24",
    dependsOn: ["C13-013"],
    summary: "Build reusable visual assets instead of asking the generator to recreate settled work.",
    tags: ["asset-system", "ai-video", "reusable-assets"],
  },
  {
    id: "C13-015",
    number: "015",
    slug: "separate-asset-creation-from-scene-direction",
    title: "Separate Asset Creation From Scene Direction",
    domain: "production-workflow",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if asset generation and scene direction can be reliably optimized in a single step without quality loss.",
    date: "2026-07-24",
    dependsOn: ["C13-014"],
    summary: "Separate asset creation from scene direction.",
    tags: ["production-workflow", "ai-video", "asset-creation"],
  },
  {
    id: "C13-016",
    number: "016",
    slug: "optimize-for-repeatability-rather-than-individual-success",
    title: "Optimize for Repeatability Rather Than Individual Success",
    domain: "production-strategy",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if one-off success becomes sufficient for the production purpose and no repeatable pipeline is needed.",
    date: "2026-07-24",
    dependsOn: ["C13-015"],
    summary: "Optimize the system for repeatable production rather than isolated successful clips.",
    tags: ["production-strategy", "ai-video", "repeatability"],
  },
  {
    id: "C13-017",
    number: "017",
    slug: "record-principles-not-prompts",
    title: "Record Principles, Not Prompts",
    domain: "knowledge-preservation",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if exact prompts become stable, portable, and more valuable than the production principles they express.",
    date: "2026-07-24",
    dependsOn: ["C13-016"],
    summary: "Record reusable production principles rather than preserving exact prompts as the public knowledge artifact.",
    tags: ["knowledge-preservation", "ai-video", "principles"],
  },
  {
    id: "C13-018",
    number: "018",
    slug: "preserve-human-judgment-throughout-the-production-pipeline",
    title: "Preserve Human Judgment Throughout the Production Pipeline",
    domain: "human-ai-collaboration",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit only if the production system can reliably assume responsibility for meaning, fitness, and editorial consequence.",
    date: "2026-07-24",
    dependsOn: ["C13-017"],
    summary: "Preserve human judgment as the governing boundary throughout the production pipeline.",
    tags: ["human-ai-collaboration", "ai-video", "human-judgment"],
  }
];

export function getADRCase013(idOrSlug: string): ADRCase013 | undefined {
  return adrsCase013.find(
    (adr) => adr.id.toLowerCase() === idOrSlug.toLowerCase() || adr.slug === idOrSlug
  );
}

export function getADRsCase013ByDomain(domain: ADRCase013Domain): ADRCase013[] {
  return adrsCase013.filter((a) => a.domain === domain);
}

export const domainLabelCase013: Record<ADRCase013Domain, string> = {
  "control-surface": "Control Surface",
  "temporal-architecture": "Temporal Architecture",
  "scene-construction": "Scene Construction",
  "character-direction": "Character Direction",
  "scene-composition": "Scene Composition",
  "visual-locking": "Visual Locking",
  "prompt-architecture": "Prompt Architecture",
  "visual-composition": "Visual Composition",
  "experimental-method": "Experimental Method",
  "production-constraints": "Production Constraints",
  "asset-system": "Asset System",
  "production-workflow": "Production Workflow",
  "production-strategy": "Production Strategy",
  "knowledge-preservation": "Knowledge Preservation",
  "human-ai-collaboration": "Human-AI Collaboration",
};
