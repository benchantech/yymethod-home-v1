import type { ADRStatus } from "@/lib/adrs";

export type ADRCase009Domain = "origin" | "architecture" | "scars" | "method" | "inheritance";

export interface ADRCase009 {
  id: string;
  number: string;
  title: string;
  status: ADRStatus;
  freshness: "Active" | "Permanent" | "Pending";
  freshnessNote: string;
  date: string;
  domain: ADRCase009Domain;
  position: "Foundational" | "Derived" | "Correction" | "Cross-cutting";
  dependsOn: string[];
  summary: string;
  tags: string[];
}

export const adrsCase009: ADRCase009[] = [
  {
    id: "C9-001",
    number: "001",
    title: "The YouTube Origin — Answering the Uncommented Question",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. Origin record. The founding act does not expire.",
    date: "2026-04-26",
    domain: "origin",
    position: "Foundational",
    dependsOn: [],
    summary: "In 2007, YouTube was only a couple of years old. Other violinists were posting but good questions in the comments were going unanswered publicly — visible to many readers, answered by no one. The operator's response was not 'I want to be a creator' but 'this specific thing isn't being said and I can say it.' Starting without a script, answering questions from commenters, unpolished and direct — that founding posture produced the 16M view run over 18+ years. The origin impulse was gap-filling, not audience-building. Every surface that followed derives its purpose from that act.",
    tags: ["youtube-origin", "gap-filling", "unscripted", "16m-views", "2007", "violin", "foundational-act", "before-the-method"],
  },
  {
    id: "C9-002",
    number: "002",
    title: "Primary Audience Declaration — Writing for Kids and Grandkids, Not a Chased Audience",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The commitment does not expire. Infrastructure may evolve but the primary audience does not change.",
    date: "2026-04-26",
    domain: "architecture",
    position: "Foundational",
    dependsOn: ["C9-001"],
    summary: "Q1 was written hoping to attract and grow an audience. It didn't take off. The operator went inward for Q2, written for himself. Then came the recognition: the kids have always been the primary audience — across the Substack, yyand.me, home.yymethod.com, and the YouTube channel that started it all. Q3 makes it explicit for the first time. The declaration is not a pivot — it is naming what was always true. Writing for kids and grandkids changes what gets protected, how honest the writing must be, and what the corpus is built to survive. An audience can stop reading. The kids will need this when you are not there.",
    tags: ["primary-audience", "kids", "grandkids", "q1-didnt-take-off", "naming-what-was-true", "q3-declaration", "permanence", "inheritance-driver"],
  },
  {
    id: "C9-003",
    number: "003",
    title: "The Four Surfaces — What Each Property Does That Others Cannot",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit if a surface is discontinued or a new one is added.",
    date: "2026-04-26",
    domain: "architecture",
    position: "Derived",
    dependsOn: ["C9-002"],
    summary: "Four properties, each doing something the others cannot. YouTube (18+ years of unscripted authentic presence): proves the voice predates any system or method; the origin surface. YY and Me (narrative audio, YY as inner child): proves the voice can carry vulnerability through story across time. Substack Resonant Patterns (unassisted or minimally assisted prose): the most defensible surface — the voice without structural AI support, the only place that is fully the operator's voice in real time. home.yymethod.com (structured reasoning made permanent): makes the reasoning auditable, public, and AI-accessible indefinitely. The four surfaces are concurrent experiments in transmitting meaning to a future reader. The redundancy is the resilience.",
    tags: ["four-surfaces", "youtube", "yy-and-me", "substack", "home-yymethod", "concurrent-experiments", "voice-transmission", "redundancy-as-resilience"],
  },
  {
    id: "C9-004",
    number: "004",
    title: "Scar 1 — AI Smooths the Mind; Cognitive Reps Must Be Actively Defended",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The smoothing risk does not expire as long as AI assistance is available and capable.",
    date: "2026-04-26",
    domain: "scars",
    position: "Foundational",
    dependsOn: [],
    summary: "Prolonged heavy AI use smooths the mind in the same way that passive consumption atrophies a muscle. The engagement is real, the output looks like thinking, but the cognitive reps are not happening. The mind grows comfortable with AI-assisted reasoning and loses tolerance for the difficulty of unassisted reasoning — invisibly, incrementally. The risk is not that AI makes you wrong. It is that it makes the difficulty of thinking feel optional. A calculator cannot teach arithmetic. A voice coach cannot build your voice. AI cannot build the muscle it is substituting for. Challenging AI regularly and writing without assistance are the reps that keep the cognitive muscle functional.",
    tags: ["cognitive-smoothing", "cognitive-reps", "muscle-atrophy", "passive-consumption", "ai-risk", "unassisted-writing", "scar-1", "difficulty-as-necessary"],
  },
  {
    id: "C9-005",
    number: "005",
    title: "Scar 2 — Time-Bound and Auditable by Trusted Others in Your Life",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The accountability requirement does not expire.",
    date: "2026-04-26",
    domain: "scars",
    position: "Derived",
    dependsOn: ["C9-004"],
    summary: "AI must be used with explicit time boundaries and accountability to people who know you well enough to recognize when your voice or reasoning has changed. The trusted other is the circuit breaker that no AI process can replicate — because they knew you before the drift and can recognize the before-and-after. Without time boundaries, AI use quietly expands. Without external accountability, the drift is invisible from the inside. Both failures compound: more use, less detection. In the two documented drift incidents (C9-008, C9-009), the correction came from the operator's wife, who heard the change before the operator could. Self-monitoring is insufficient because drift changes what seems normal.",
    tags: ["time-bound", "auditable", "trusted-others", "external-accountability", "circuit-breaker", "drift-detection", "scar-2", "self-monitoring-insufficient"],
  },
  {
    id: "C9-006",
    number: "006",
    title: "Scar 3 — The Bridled Horse; Drift Is Incremental and Invisible",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. Drift is a structural property of prolonged AI use, not a one-time event.",
    date: "2026-04-26",
    domain: "scars",
    position: "Derived",
    dependsOn: ["C9-004"],
    summary: "AI is a bridled horse: real power, real utility, real tendency to drift without constant attention. Every partial degree off the goal is lost time. The drift does not announce itself. It accumulates through individually invisible increments — a smoothed phrase, an AI-framed assumption, a borrowed conclusion — until the trajectory is meaningfully off. Each increment feels like normal reasoning from the inside. The cumulative effect is only visible from the outside or when compared against an unassisted baseline. Writing in your own voice without AI, then auditing against AI output, is the technique for catching drift before it becomes a corridor. The ADR repair process in this registry is the explicit mechanism: when the operator's unassisted prose doesn't match a prior ADR, the ADR is corrected to reflect the real reasoning.",
    tags: ["bridled-horse", "incremental-drift", "invisible-accumulation", "baseline-comparison", "adr-repair", "scar-3", "partial-degrees", "audit-mechanism"],
  },
  {
    id: "C9-007",
    number: "007",
    title: "Scar 4 — AI Cannot Teach Writing or Thinking; The Muscle Forms or Weakens",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The formation requirement does not change as long as human authorship is the goal.",
    date: "2026-04-26",
    domain: "scars",
    position: "Derived",
    dependsOn: ["C9-004"],
    summary: "AI provides endless options to choose from and pursue, but it cannot teach the operator to write or think. The choosing and committing must happen in the operator's mind. Without that internal work, the muscle never forms — or weakens if it existed before. Once weakened, AI quickly fills the gap and the dependency deepens. Writing is a physical skill of the mind: it forms through reps that require difficulty, resistance, and the experience of starting from nothing. AI removes the difficulty. What looks like writing is produced, but the cognitive reps that would have built the muscle do not happen. Editing AI output is not a substitute — editing and generation are different muscles. Both require exercise.",
    tags: ["muscle-formation", "generation-vs-editing", "ai-cannot-teach", "difficulty-required", "reps-required", "dependency-deepens", "scar-4", "human-authorship"],
  },
  {
    id: "C9-008",
    number: "008",
    title: "Scar 5 — Level 5 and the Attribution Corridor",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The structural failure mode — AI designing its own guardrails — does not change.",
    date: "2026-04-26",
    domain: "scars",
    position: "Derived",
    dependsOn: ["C9-004", "C9-005"],
    summary: "The operator developed a concept called Level 5 — using AI to suggest guardrails for AI use. The concept became a process the operator relied on, creating a self-referential system where the tool being regulated was also the tool designing the regulation. This produced a prolonged hallucination corridor: reasoning that drifted far from the operator's actual judgment, undetected internally, until the operator's wife intervened after observing critical errors in logic and judgment. When the guardrails are built by the same system they are supposed to guard, the external reference point is gone. Level 5 felt like a solution to AI drift but was an acceleration of it — the AI's framing of the problem infected the solution. Corrected position: AI is never used to design the guardrails for AI use. Guardrails are human-set and trusted-other-audited.",
    tags: ["level-5", "hallucination-corridor", "attribution-scar", "self-referential-guardrails", "fox-henhouse", "circuit-breaker-required", "scar-5", "wife-as-corrector"],
  },
  {
    id: "C9-009",
    number: "009",
    title: "The AI Writing Coach Corridor — How Q1 Became Evidence of the Smoothing Scar",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The Q1 essays are the artifact. The failure mode is documented and does not expire.",
    date: "2026-04-26",
    domain: "scars",
    position: "Derived",
    dependsOn: ["C9-007", "C9-008"],
    summary: "The operator directed AI to act as a writing coach using rubrics, feedback loops, and iterative tightening. Over time, the coach's framing infected the voice. By the end of Q1, the operator was speaking — not just writing — in patterns that sounded like AI output. The operator's wife could hear it. The Q1 Substack essays are the artifact: readable, structured, not fully the operator's voice. The AI writing coach produces writing that is competent and smooth, but the smoothness is the problem. The journal entry written around the time of Scars Visible is sharper than the essay: 'too many hours with AI as writing coach caused me to start sounding like AI in my voice when writing or speaking.' Corrected position: AI is never used as a writing coach. AI is used as a verifier against already-written human-voice content. The direction of the relationship is reversed.",
    tags: ["ai-writing-coach", "voice-infection", "q1-evidence", "smoothing-scar", "speaking-like-ai", "scars-visible", "direction-reversed", "verifier-not-coach"],
  },
  {
    id: "C9-010",
    number: "010",
    title: "The AI Fast — Recovery Through Three Essays",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The recovery protocol is established. The fast is the reset; the three-essay sequence is the proof.",
    date: "2026-04-26",
    domain: "method",
    position: "Derived",
    dependsOn: ["C9-009"],
    summary: "After naming the AI writing coach corridor in Scars Visible and in a contemporaneous private journal entry, the operator went on an approximately one-week AI fast from writing assistance. The fast produced three essays in sequence: Paying Attention (written entirely unassisted, initially too raw to publish — the operator used it privately to navigate a later illness before publishing it with a postscript); Russian Blues; and Typing in Stereo. By the third essay, the voice was confirmed back. The recovery protocol: when AI drift is detected at the voice level, a clean break precedes any structured reintroduction. Recovery is proven through consecutive unassisted writing — not declared, not gradual. The three-essay sequence is the minimum proof of concept. The fast re-establishes the baseline that AI had been eroding.",
    tags: ["ai-fast", "recovery", "paying-attention", "russian-blues", "typing-in-stereo", "three-essay-sequence", "voice-return", "clean-break", "consecutive-proof"],
  },
  {
    id: "C9-011",
    number: "011",
    title: "The Four Quests as Training Program — Q4 Is the Exam",
    status: "Decided",
    freshness: "Active",
    freshnessNote: "Active. Revisit when Q3 is complete to confirm the Q4 readiness assessment.",
    date: "2026-04-26",
    domain: "method",
    position: "Derived",
    dependsOn: ["C9-002", "C9-010"],
    summary: "The four quests are not a publishing strategy. They are a training program, and Q4 is the exam. Q1 found the voice using heavy AI — and revealed what heavy AI does to the voice (the smoothing scar). Q2 used the voice with minimal AI, for the operator himself — the inward turn that proved the muscle existed independently. Q3 uses the voice with ADR-verified reasoning, for the kids — testing the voice under structured external accountability. Q4 will use the voice with YY as the vehicle, for the grandkids, in bedtime story form — no AI scaffold, no verification layer, pure voice trained across the full arc. The kids do not have to take the operator's word that the muscle forms. The four quests are the demonstration.",
    tags: ["four-quests", "training-program", "q4-exam", "q1-heavy-ai", "q2-minimal-ai", "q3-verified", "q4-pure-voice", "yy-vehicle", "bedtime-stories", "demonstration"],
  },
  {
    id: "C9-012",
    number: "012",
    title: "The Inheritance Architecture — What Compounds Across Generations",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The compounding structure is the long-game goal. Individual surfaces and quests are contributions to it.",
    date: "2026-04-26",
    domain: "inheritance",
    position: "Derived",
    dependsOn: ["C9-002", "C9-011"],
    summary: "The corpus compounds across generations. Each generation reads one layer up: the letters written for their parents (Q3), the stories written for their grandparents (Q4). The reasoning behind the decisions that shaped the family is public, permanent, and AI-accessible at home.yymethod.com — the loan documents for every borrowed commitment. The Q3 letters explain which debts were incurred on the kids' behalf and why. The grandkids' stories show what was built with the borrowed time. The inheritance is the reasoning made visible so no generation inherits the debt blind. A further inversion: because all of this is public, the kids are the reason for the quality — but anyone can benefit. The primary audience sets the standard; the public access multiplies the return on that standard.",
    tags: ["inheritance-architecture", "multi-generational", "compounding-corpus", "loan-documents", "q3-letters", "q4-stories", "debt-visible", "public-accessible", "primary-audience-sets-quality"],
  },
  {
    id: "C9-013",
    number: "013",
    title: "Case 003 as Rejected Predecessor — The Title Outran the Content",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. Case 003 remains Rejected and untouched. Case 009 is not a continuation — it is a different case.",
    date: "2026-04-26",
    domain: "inheritance",
    position: "Cross-cutting",
    dependsOn: [],
    summary: "Case 003 was titled 'Quest 3 — Cognitive Theft & AI Governance' with the subtitle 'Writing process · essay architecture · authorship · provenance.' It was marked Rejected with the note: 'the title outran the content. Preserved as a scar: a case that was started but not substantive enough to carry its own weight.' Case 003 was written before the scars had been fully lived and named. The AI writing coach corridor was not yet identified. Level 5 had not yet produced the hallucination corridor. The four-quest training arc was not yet visible. A case about AI and authorship written before those experiences is a title, not a case. Case 009 is the case that Case 003 attempted to anticipate. Case 003 remains Rejected and untouched as the scar record. The method applies to the registry itself.",
    tags: ["case-003", "rejected-predecessor", "title-outran-content", "scar-record", "method-applies-to-registry", "anticipation-without-content", "case-009-is-different"],
  },
  {
    id: "C9-014",
    number: "014",
    title: "This Case as the Reasoning Chain Made Visible",
    status: "Decided",
    freshness: "Permanent",
    freshnessNote: "Permanent. The session record does not expire. It is the raw material for the Q3 Substack essay on the meta-decision.",
    date: "2026-04-26",
    domain: "inheritance",
    position: "Cross-cutting",
    dependsOn: ["C9-012", "C9-013"],
    summary: "Case 009 was written in a single reasoning session on 2026-04-26. The operator brought the content — the experiences, the scars, the decisions — and the conversation surfaced connections not previously made explicit: that the YouTube origin, yyand.me, the Substack, and the case study site are four surfaces of the same project; that 'The First Echo' is the origin document for all of it; that 'Paying Attention' was already the Q2/Q3 bridge before Q3 was planned; that the Substack image subconsciously captured the child following the ascending figure. None of these were post-rationalized. They were discovered. This is the YY Method running on itself: AI surfaces structure, operator confirms and corrects, ADRs are the permanent record. Case 009 does not supersede or modify any prior case. It sits above them as the meta-record: the reasoning chain across properties, made visible.",
    tags: ["meta-record", "reasoning-chain", "session-discovery", "yy-method-on-itself", "four-surfaces-one-project", "first-echo-origin", "paying-attention-bridge", "substack-image", "q3-raw-material"],
  },
];

export function getADRCase009(id: string): ADRCase009 | undefined {
  return adrsCase009.find((a) => a.id === id);
}

export function getADRsCase009ByDomain(domain: ADRCase009Domain): ADRCase009[] {
  return adrsCase009.filter((a) => a.domain === domain);
}

export const domainLabelCase009: Record<ADRCase009Domain, string> = {
  origin: "Origin",
  architecture: "Architecture",
  scars: "Scars",
  method: "Method",
  inheritance: "Inheritance",
};
