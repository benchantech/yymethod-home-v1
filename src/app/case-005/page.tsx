import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase005, domainLabelCase005, type ADRCase005Domain } from "@/lib/adrs-case-005";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 005: Family Move Architecture — YY Method™ Home Edition",
  description: "11 ADRs capturing a live family housing decision in progress. A lifestyle upgrade desire collides with a 7-figure opportunity cost, a split household, a funding trilemma, a rejected tax strategy, school district integrity constraints, and one paramount rule: protect the spouse's time.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 005: Family Move Architecture — YY Method™ Home Edition",
    description: "10 ADRs: housing upgrade vs. compounding, family alignment, spouse protection, and the discipline of waiting without settling.",
    url: "https://home.yymethod.com/case-005",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase005Domain; label: string; description: string }[] = [
  { domain: "framing", label: "Framing", description: "Initial idea, financial realization, opportunity cost" },
  { domain: "family", label: "Family", description: "Alignment constraints, spouse protection, unity as precondition" },
  { domain: "paths", label: "Paths Considered", description: "Rental strategy, optionality, rent-first, split-time (rejected)" },
  { domain: "resolution", label: "Resolution", description: "Current operating decisions: wait, accumulate, stay ready, don't settle" },
];

export default function Case005Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #005 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Family Move Architecture</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #005 · {adrsCase005.length} knowledge artifacts · April 5, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          In progress. Decision captured while still fresh. The move has not happened.
        </p>
      </div>

      <Separator />

      {/* Founding argument */}
      <Card className="border-violet-500/20 bg-violet-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-violet-400 font-mono leading-relaxed">
            The founding argument in one sentence: move or not — family unity required.
          </p>
        </CardContent>
      </Card>

      {/* Load-bearing constraint */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            C5-005 is the paramount constraint — protect spouse&apos;s time above all else. Every path that violates it is
            rejected regardless of financial benefit. REPS rejected here. Self-management rejected here.
          </p>
        </CardContent>
      </Card>

      {/* Constraint stack */}
      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Constraint Stack</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              { rank: "1", label: "Family unity", note: "Required. No move without it. No stay without it either." },
              { rank: "2", label: "Spouse's time", note: "Paramount. Capability ≠ obligation. Never the default escalation path." },
              { rank: "3", label: "Sovereignty", note: "Accumulate until you answer to no one — no external financing, no obligations." },
              { rank: "4", label: "Optionality", note: "Don't foreclose futures prematurely. Irreversibility has a hidden tax." },
            ].map((item) => (
              <div key={item.rank} className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono text-muted-foreground/50">#{item.rank}</span>
                  <span className="text-xs font-mono text-foreground/80 font-semibold">{item.label}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Framing notice */}
      <Card className="border-border bg-muted/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs font-mono text-muted-foreground leading-relaxed">
            <span className="text-foreground/60 font-semibold">Framing notice (C5-011):</span> This case involves active financial planning, minor children, and personal relationships. The reasoning structure and constraint hierarchy are preserved at full fidelity. Identifying details — family composition, specific financial figures, and personal network references — are abstracted. The method is the subject. The family is not.
          </p>
        </CardContent>
      </Card>

      {/* By domain */}
      {domainGroups.map(({ domain, label, description }) => {
        const group = adrsCase005.filter((a) => a.domain === domain);
        if (group.length === 0) return null;
        return (
          <div key={domain} className="space-y-3">
            <div className="flex items-baseline gap-3">
              <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{label}</h2>
              <span className="text-xs text-muted-foreground">{description}</span>
            </div>
            <div className="space-y-1">
              {group.map((adr) => (
                <Link
                  key={adr.id}
                  href={`/case-005/${adr.id.toLowerCase()}`}
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
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-1.5 pt-0.5">
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
