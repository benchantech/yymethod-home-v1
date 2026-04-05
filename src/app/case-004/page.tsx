import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase004, domainLabelCase004, type ADRCase004Domain } from "@/lib/adrs-case-004";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 004: Local-First Remote Work Orchestration — YY Method™ Home Edition",
  description: "16 ADRs documenting the principles behind a local-first, remote-operable work architecture for sensitive compute. Separates control surfaces from execution surfaces, guards heavy local inference, and preserves the method without disclosing the client deployment.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 004: Local-First Remote Work Orchestration — YY Method™ Home Edition",
    description: "16 ADRs: trust boundary, device roles, private overlay, admission control, and governance for sensitive local compute.",
    url: "https://home.yymethod.com/case-004",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase004Domain; label: string; description: string }[] = [
  { domain: "principle", label: "Foundational Principles", description: "Trust boundary, control/execution separation, private overlay, publication boundary" },
  { domain: "architecture", label: "System Architecture", description: "Machine roles, portable node, office node, mobile interaction, command system" },
  { domain: "operations", label: "Operations & Safeguards", description: "Admission control, recovery paths, power policy, dual-mode operation, tablet boundary" },
  { domain: "governance", label: "Governance", description: "Method ownership, client boundary, publication and obfuscation standards" },
];

export default function Case004Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #004 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Local-First Remote Work Orchestration for Sensitive Compute</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #004 · {adrsCase004.length} knowledge artifacts · April 5, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          Complete. Implemented under employer. Will be reopened as circumstances evolve and new technology arrives.
        </p>
      </div>

      <Separator />

      {/* Founding argument */}
      <Card className="border-violet-500/20 bg-violet-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-violet-400 font-mono leading-relaxed">
            The founding argument in one sentence: window from operator into work. Work stays put.
          </p>
        </CardContent>
      </Card>

      {/* Load-bearing anchor */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            C4-001 is the anchor — all 15 downstream decisions derive from the local-first trust-boundary principle.
            If C4-001&apos;s assumptions change, re-verify the entire case.
          </p>
        </CardContent>
      </Card>

      {/* Scope / abstraction notice */}
      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Abstraction Policy</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Generalized", note: "Device names reduced to roles. Model sizes reduced to workload classes. No hostnames, addresses, or ports." },
              { label: "Removed", note: "Exact commands, pathnames, schedules, automation triggers, and client-identifying environmental markers." },
              { label: "Preserved", note: "Tradeoffs, constraints, reverify conditions, dependency graph, and scars. The reasoning chain is intact." },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <span className="text-xs font-mono text-foreground/80 font-semibold">{item.label}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* By domain */}
      {domainGroups.map(({ domain, label, description }) => {
        const group = adrsCase004.filter((a) => a.domain === domain);
        if (group.length === 0) return null;
        return (
          <div key={domain} className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3">
              <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{label}</h2>
              <span className="text-xs text-muted-foreground">{description}</span>
            </div>
            <div className="space-y-1">
              {group.map((adr) => (
                <Link
                  key={adr.id}
                  href={`/case-004/${adr.id.toLowerCase()}`}
                  className="flex items-start gap-4 p-3 rounded-lg border border-border hover:bg-muted/40 transition-colors group"
                >
                  <span className="font-mono text-xs text-muted-foreground pt-1 shrink-0 w-16">
                    {adr.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium group-hover:text-foreground truncate">
                      {adr.title}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                      {adr.summary}
                    </p>
                    <span className={`sm:hidden mt-1.5 inline-block text-xs px-1.5 py-0.5 rounded border font-mono ${statusColor[adr.status]}`}>
                      {adr.status}
                    </span>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1.5 pt-0.5">
                    <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${statusColor[adr.status]}`}>
                      {adr.status}
                    </span>
                    {adr.dependsOn.length > 0 && (
                      <span className="text-xs text-muted-foreground font-mono">
                        ← {adr.dependsOn.length > 3 ? `${adr.dependsOn.slice(0, 3).join(", ")} +${adr.dependsOn.length - 3}` : adr.dependsOn.join(", ")}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}
