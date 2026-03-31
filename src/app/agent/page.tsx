import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agent System — YY Method™ Home Edition",
  description: "YY Method agent orchestration reference. Builder / Test / Review / Docs roles, ambiguity queue protocol, and executor contract.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Agent System — YY Method™ Home Edition",
    description: "Builder / Test / Review / Docs. Ambiguity queue. Executor contract.",
    url: "https://home.yymethod.com/agent",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AGENT_ROLES, SYSTEM_INVARIANTS } from "@/lib/framework";

const EXECUTOR_ACTIONS = [
  { name: "deploy_staging", description: "Deploy current workspace to staging environment" },
  { name: "run_tests", description: "Execute full test suite, return pass/fail summary" },
  { name: "fetch_metrics_summary", description: "Return aggregated metrics (never raw data)" },
  { name: "get_staging_config_values", description: "Return filtered config values (never raw secrets)" },
  { name: "run_db_migration_plan", description: "Execute migration plan, return outcome" },
];

const AMBIGUITY_PRIORITIES = [
  { label: "P0", color: "text-red-400 border-red-500/20 bg-red-500/10", description: "Blocks execution entirely" },
  { label: "P1", color: "text-amber-400 border-amber-500/20 bg-amber-500/10", description: "Blocks deployment or migration" },
  { label: "P2", color: "text-blue-400 border-blue-500/20 bg-blue-500/10", description: "Blocks polish or hardening" },
  { label: "P3", color: "text-muted-foreground border-border bg-muted/30", description: "Optional improvement" },
];

const WORK_CYCLE = [
  { step: "01", actor: "Operator", action: "Write spec → /workspace/spec.md" },
  { step: "02", actor: "Builder", action: "Implement. File ambiguities to /.agent/ambiguities/ — never halt." },
  { step: "03", actor: "Test", action: "Write and run tests. File its own ambiguities." },
  { step: "04", actor: "Review", action: "Check invariants, flow rules, hidden coupling." },
  { step: "05", actor: "Docs", action: "Update ADRs, specs, operator notes." },
  { step: "06", actor: "Operator", action: "Read ambiguity queue summary. Resolve in batch." },
  { step: "07", actor: "Executor", action: "Perform sensitive actions via POST /execute." },
];

export default function AgentPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground">Agent System</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-mono text-xs">agent_secure_setup v2</Badge>
          <Badge variant="outline" className="font-mono text-xs">March 29, 2026 · 22:57</Badge>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Agent Orchestration System</h1>
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Hard-boundary architecture: agents run isolated with no secrets. All sensitive operations
          flow through an executor with IAM-scoped identity. Ambiguities are batched — never interrupt the build.
        </p>
      </div>

      <Separator />

      {/* Core principle */}
      <div className="p-4 rounded-lg border border-border bg-card font-mono text-sm text-center">
        Agent proposes → Human decides → Executor executes
      </div>

      {/* Agent roles */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Agent Roles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {AGENT_ROLES.map((role) => (
            <Card key={role.name} className="border-border">
              <CardHeader className="pb-2 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-base">{role.icon}</span>
                  <CardTitle className="text-sm font-medium">{role.name} Agent</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pb-4">
                <p className="text-xs text-muted-foreground">{role.description}</p>
                <div className="space-y-1">
                  {role.allowed.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-xs">
                      <span className="text-emerald-400">✓</span>
                      <span>{a}</span>
                    </div>
                  ))}
                  {role.forbidden.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs">
                      <span className="text-red-400">✗</span>
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Work cycle */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Work Cycle</h2>
        <div className="space-y-1">
          {WORK_CYCLE.map((s) => (
            <div key={s.step} className="flex items-start gap-4 p-3 rounded-md hover:bg-muted/30 transition-colors">
              <span className="font-mono text-xs text-muted-foreground pt-0.5 shrink-0">{s.step}</span>
              <span className="text-xs text-muted-foreground w-16 shrink-0 pt-0.5">{s.actor}</span>
              <span className="text-sm">{s.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ambiguity queue */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Ambiguity Queue</h2>
        <Card className="border-border">
          <CardContent className="pt-4 pb-4 space-y-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Agents work start-to-finish with no oversight. When something is unclear, it is filed to{" "}
              <span className="font-mono bg-muted/50 px-1.5 py-0.5 rounded">/.agent/ambiguities/</span>
              {" "}— never a reason to stop. Human resolves in batch.
            </p>
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">File format</div>
              <div className="font-mono text-xs bg-muted/30 rounded p-3 space-y-1 text-muted-foreground">
                <div>### Question</div>
                <div>### Why It Blocks Progress</div>
                <div>### Options Considered</div>
                <div>### Recommended Option</div>
                <div>### Impact</div>
                <div>### Default Held</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {AMBIGUITY_PRIORITIES.map((p) => (
                <div key={p.label} className={`text-xs px-2.5 py-2 rounded border font-mono ${p.color}`}>
                  <div className="font-medium">{p.label}</div>
                  <div className="text-xs mt-0.5 opacity-80">{p.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Executor contract */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Executor Contract</h2>
        <Card className="border-border">
          <CardContent className="pt-4 pb-4 space-y-3">
            <p className="text-xs text-muted-foreground">
              Executor runs with AWS IAM role. Reads only approved SSM Parameter Store paths.
              Returns booleans, summaries, status — never raw secrets.
            </p>
            <div className="space-y-1.5">
              {EXECUTOR_ACTIONS.map((action) => (
                <div key={action.name} className="flex items-start gap-3 p-2.5 rounded border border-border">
                  <span className="font-mono text-xs text-emerald-400 shrink-0 pt-0.5">{action.name}</span>
                  <span className="text-xs text-muted-foreground">{action.description}</span>
                </div>
              ))}
            </div>
            <div className="pt-1 border-t border-border">
              <p className="text-xs text-red-400 font-mono">
                ✗ expose raw secrets · ✗ arbitrary shell · ✗ unrestricted SSM reads
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security model */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Security Architecture</h2>
        <div className="space-y-1 font-mono text-xs">
          {[
            { layer: "OPERATOR", note: "resolves ambiguity batches · makes final decisions", color: "border-violet-500/30 bg-violet-500/5" },
            { layer: "AGENT LAYER", note: "isolated container · /workspace only · no secrets · no .env", color: "border-blue-500/30 bg-blue-500/5" },
            { layer: "EXECUTOR LAYER", note: "AWS IAM identity · POST /execute · validates + logs · returns status", color: "border-emerald-500/30 bg-emerald-500/5" },
            { layer: "SECRETS LAYER", note: "AWS SSM Parameter Store · executor-only reads · never surface to agent", color: "border-border bg-muted/20" },
          ].map((l, i) => (
            <div key={l.layer} className="space-y-0">
              <div className={`p-3 rounded border ${l.color}`}>
                <div className="text-foreground font-medium">{l.layer}</div>
                <div className="text-muted-foreground mt-0.5">{l.note}</div>
              </div>
              {i < 3 && <div className="text-center text-muted-foreground py-0.5">↕</div>}
            </div>
          ))}
        </div>
      </div>

      {/* System invariants */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Invariants That Never Break</h2>
        <div className="grid md:grid-cols-2 gap-2">
          {SYSTEM_INVARIANTS.map((inv, i) => (
            <div key={i} className="flex items-start gap-2.5 p-2.5 rounded border border-border text-xs">
              <span className="font-mono text-muted-foreground shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span>{inv}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
