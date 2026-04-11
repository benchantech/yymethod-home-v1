import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case 001: S Corp Tax Transition — YY Method™ Home Edition",
  description: "26 Architecture Decision Records documenting an S Corp dissolution, Solo 401(k) strategy, backdoor Roth architecture, operator identity, and system-wide information architecture invariant. YY Method applied to personal tax architecture.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 001: S Corp Tax Transition — YY Method™ Home Edition",
    description: "26 ADRs: S Corp dissolution, Solo 401(k), backdoor Roth, operator identity, information architecture invariant. YY Method applied.",
    url: "https://home.yymethod.com/case-001",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrs, statusColor, domainLabel, type ADR } from "@/lib/adrs";

const domainGroups: { domain: ADR["domain"]; label: string; description: string }[] = [
  { domain: "tax", label: "Tax Optimization", description: "S Corp termination, 401(k) mechanics, bracket optimization, family employment" },
  { domain: "identity", label: "Operator Identity", description: "Cross-domain mastery profile, YY Method lineage, permanent record" },
  { domain: "agent", label: "Agent Architecture", description: "AI capability assessment, execution model, coordination" },
  { domain: "device", label: "Device & Flow", description: "Personal/Client/Employer boundaries, controlled flow system" },
  { domain: "methodology", label: "Methodology", description: "Case study framing, illustrative notice, interpretive context" },
];

export default function ADRsPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #001 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">S Corp Termination &amp; 401(k) Optimization</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #001 · {adrs.length} knowledge artifacts · March 29, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          Illustrative case study. Numbers approximate. Not financial advice.
        </p>
      </div>

      <Separator />

      {/* Legal disclaimer */}
      <Card className="border-muted-foreground/20 bg-muted/10">
        <CardContent className="pt-3 pb-3">
          <p className="text-xs text-muted-foreground leading-relaxed font-mono">
            <span className="text-foreground/60 font-semibold">Case Study Notice:</span>{" "}
            This ADR registry is an illustrative case study demonstrating the YY Method™ Home Edition v2.3.
            Numbers are approximate and generalized. Math is illustrative only.
            Not financial, tax, or legal advice. See{" "}
            <a href="/case-001/adr-017" className="underline underline-offset-2 hover:text-foreground transition-colors">ADR-017</a>{" "}
            for the full framing notice.
          </p>
        </CardContent>
      </Card>

      {/* Cascade hierarchy note */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            ADR-001 is foundational — all downstream decisions depend on it.
            If ADR-001 changes, re-verify: 002, 003, 006.
            If ADR-007 changes, re-verify: 002, 003, 004.
          </p>
        </CardContent>
      </Card>

      {/* By domain */}
      {domainGroups.map(({ domain, label, description }) => {
        const group = adrs.filter((a) => a.domain === domain);
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
                  href={`/case-001/${adr.id.toLowerCase()}`}
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
