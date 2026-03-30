export const YY_LAYERS = [
  { id: "L0", name: "Identity / Operator", description: "Who is making the judgment and what capabilities they bring." },
  { id: "L1", name: "Principles", description: "The stable beliefs shaping the system." },
  { id: "L2", name: "Constraints", description: "The rules, limitations, and boundaries that govern options." },
  { id: "L3", name: "Decisions", description: "What was chosen." },
  { id: "L4", name: "Rejections / Negative Space", description: "What was not chosen and why." },
  { id: "L5", name: "Corrections", description: "What changed and what was superseded." },
  { id: "L6", name: "Execution Rules", description: "How the decision is applied in practice." },
  { id: "L7", name: "Freshness Boundary", description: "When the artifact expires or must be re-evaluated." },
];

export const YY_CORE_FORMULA = "Reality → Constraint → Decision → Rejection → Correction → Commit";

export const YY_PRINCIPLES = [
  { name: "Capture broadly", description: "Raw inputs may be broad, messy, and not yet classified." },
  { name: "Classify deliberately", description: "Captured input does not become actionable truth until reviewed." },
  { name: "Promote selectively", description: "Only high-signal material should enter protected systems." },
  { name: "Preserve why", description: "A decision without its reasoning will decay." },
  { name: "Preserve why-not", description: "Rejected alternatives are part of the truth." },
  { name: "Record corrections", description: "Truth is often reached through revision. Corrections must be explicit." },
  { name: "Mark freshness boundaries", description: "Every artifact depends on assumptions that may expire." },
  { name: "Protect the terminal layer", description: "In protected systems, ingress may be allowed, but leakage must be controlled." },
];

export const CANONICAL_TEST = [
  "Preserves original intent through iteration",
  "Keeps rejected paths visible",
  "Survives correction without losing meaning",
  "Remains understandable to a future self or another human",
  "Prevents protected systems from being polluted by raw input",
  "Documents truth as converged judgment, not first output",
];

export const AGENT_ROLES = [
  {
    name: "Builder",
    icon: "🔨",
    description: "Writes code, refactors, implements features.",
    allowed: ["Write code in /workspace", "Run tests", "Create ambiguity reports"],
    forbidden: ["Access secrets", "Execute deployment directly", "Bypass executor"],
  },
  {
    name: "Test",
    icon: "✓",
    description: "Writes and runs tests. Identifies regressions. Prepares validation reports.",
    allowed: ["Run test suite", "Write test files", "Report regressions"],
    forbidden: ["Modify production code", "Access .env", "Skip test failures"],
  },
  {
    name: "Review",
    icon: "◎",
    description: "Checks invariants, flow rules, hidden coupling. Flags architectural violations.",
    allowed: ["Read all workspace files", "Flag violations", "Suggest corrections"],
    forbidden: ["Modify files directly", "Override invariants", "Mark violations as resolved"],
  },
  {
    name: "Docs",
    icon: "📄",
    description: "Updates ADRs, specs, and operator notes.",
    allowed: ["Write ADRs", "Update specs", "Record decisions"],
    forbidden: ["Write code", "Access secrets", "Modify executor config"],
  },
];

export const SYSTEM_INVARIANTS = [
  "Nothing leaves Employer",
  "Agent proposes, human decides, executor executes",
  "Capture first, decide later",
  "Don't guess the flow",
  "All ambiguity goes into queue — never halt the build",
  "All sensitive execution through executor",
  "No secrets in agent filesystem",
  "Promotion is intentional",
];

export const CONTROLLED_FLOW = {
  nodes: ["PERSONAL", "CLIENT", "EMPLOYER"],
  flows: [
    { from: "PERSONAL", to: "CLIENT", label: "context" },
    { from: "CLIENT", to: "EMPLOYER", label: "work product" },
  ],
  invariant: "Employer is inbound only. Nothing leaves.",
};
