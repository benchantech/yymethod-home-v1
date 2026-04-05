import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case 002: yysworld.com Founding Architecture — YY Method™ Home Edition",
  description: "23 ADRs documenting the founding architecture of yysworld.com — a COPPA-compliant YY Method artifact for kids. Includes the AI extrapolation scars and the operator correction interview.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 002: yysworld.com Founding Architecture — YY Method™ Home Edition",
    description: "23 ADRs: AI extrapolated scars + operator-corrected founding architecture for yysworld.com.",
    url: "https://home.yymethod.com/case-002",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase002, domainLabelCase002, type ADRCase002, type ADRCase002Domain } from "@/lib/adrs-case-002";
import { statusColor } from "@/lib/adrs";

const domainGroups: { domain: ADRCase002Domain; label: string; description: string }[] = [
  { domain: "founding", label: "Founding", description: "Domain identity, primary audience, foundational constraints" },
  { domain: "data", label: "Data & COPPA", description: "Outward-only data posture, structural COPPA compliance" },
  { domain: "content", label: "Content", description: "Entry schema, YY's role, anti-smoothing, stealth inoculation" },
  { domain: "philosophy", label: "Philosophy", description: "Cognitive theft, acorn economy, employer inversion" },
  { domain: "architecture", label: "Architecture", description: "Technical stack, static-first, zero extraction surface" },
];

export default function Case002Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #002 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">yysworld.com — A YY Method Artifact for Kids</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #002 · {adrsCase002.length} knowledge artifacts · March 30, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          Founding architecture. In progress.
        </p>
      </div>

      <Separator />

      {/* Founding argument */}
      <Card className="border-violet-500/20 bg-violet-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-violet-400 font-mono leading-relaxed">
            The founding argument in one sentence: provenance flows outward from Ben and YY to the reader. Nothing flows back. Ever.
          </p>
        </CardContent>
      </Card>

      {/* Load-bearing wall note */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            C2-003 is the load-bearing wall — all downstream decisions derive from the outward-only data posture.
            If C2-003 changes, re-verify C2-004, C2-010, C2-011, C2-012 immediately.
          </p>
        </CardContent>
      </Card>

      {/* By domain */}
      {domainGroups.map(({ domain, label, description }) => {
        const group = adrsCase002.filter((a) => a.domain === domain);
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
                  href={`/case-002/${adr.id.toLowerCase()}`}
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
                        ← {adr.dependsOn.join(", ")}
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
