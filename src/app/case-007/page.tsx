import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase007, domainLabelCase007, type ADRCase007Domain } from "@/lib/adrs-case-007";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 007: AI-Native Venture Launch — YY Method™ Home Edition",
  description: "13 ADRs closing a venture re-entry decision. Acquisition rejected after full component decomposition. Closing ADRs define the operator's final posture: time-gated strategic advisor with no ownership or governance rights; advisory availability bounded to weekend synchronous and off-hours asynchronous; family talent channel as performance-bound referral; partner controls the build with full independence.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 007: AI-Native Venture Launch — YY Method™ Home Edition",
    description: "13 ADRs: strategic architecture, AI-native vs. retrofit, cash flow bridge, knowledge transfer limits, asset decomposition, reputation debt, prior data as acquisition-independent moat, acquisition rejection, role transition to time-gated advisor, advisory time boundary, family talent channel, and partner build independence.",
    url: "https://home.yymethod.com/case-007",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase007Domain; label: string; description: string }[] = [
  { domain: "strategy", label: "Strategy", description: "Operating model, AI-native vs. retrofit, and the cash flow bridge to fund the transition" },
  { domain: "operations", label: "Operations", description: "Knowledge transfer limits, advisory time boundary, and the family talent channel as performance-bound referral" },
  { domain: "evaluation", label: "Evaluation", description: "Asset decomposition methodology and the disqualifying findings applied to each component" },
  { domain: "resolution", label: "Resolution", description: "Prior data as acquisition-independent moat, acquisition rejection, role transition, and partner build independence" },
  { domain: "structure", label: "Structure", description: "The information architecture of this case — what is deliberately public and what is deliberately protected" },
];

export default function Case007Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #007 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">AI-Native Venture Launch — Re-Entry Decision, Asset Decomposition, and the Build Resolution</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #007 · {adrsCase007.length} knowledge artifacts · April 11, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          Complete. The case is closed. The operator is structurally outside day-to-day execution.
        </p>
      </div>

      <Separator />

      {/* Resolution in one sentence */}
      <Card className="border-violet-500/20 bg-violet-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-violet-400 font-mono leading-relaxed">
            The most valuable asset in the bundle had already been extracted before the negotiation began. The remaining components were either disqualified by measurable liabilities or replaceable by the operator&apos;s own capability. Build fresh.
          </p>
        </CardContent>
      </Card>

      {/* Load-bearing anchor */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            C7-007 (Prior Data as Acquisition-Independent Moat) closed the acquisition path: the most valuable component was already owned, the remaining bundle failed decomposition. C7-013 (Partner Control and Build Independence) closes the case entirely: acquisition rejected, role defined, time bounded, talent channel structured, partner autonomous. The operator is structurally outside day-to-day execution.
          </p>
        </CardContent>
      </Card>

      {/* Decision layers */}
      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Five Decision Layers</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { layer: "Strategic Architecture", adrs: "C7-001 – C7-003", note: "Does AI change the correct operating model? What funds the transition without external capital?" },
              { layer: "Engagement + Evaluation", adrs: "C7-004 – C7-007", note: "Can partnership fund the build? Is the distressed brand worth acquiring? Which component was already owned?" },
              { layer: "Closing", adrs: "C7-009 – C7-013", note: "Acquisition rejected. Role transition to time-gated advisor. Advisory access bounded. Partner controls the build." },
              { layer: "Operations", adrs: "C7-011 – C7-012", note: "Explicit time boundary prevents implicit availability. Family talent channel structured as performance-bound referral." },
              { layer: "Information Architecture", adrs: "C7-008", note: "What is deliberately public and what is deliberately protected in this case. The abstraction is load-bearing." },
            ].map((item) => (
              <div key={item.layer} className="space-y-1">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-foreground/80 font-semibold">{item.layer}</span>
                  <p className="text-xs font-mono text-muted-foreground/60">{item.adrs}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* By domain */}
      {domainGroups.map(({ domain, label, description }) => {
        const group = adrsCase007.filter((a) => a.domain === domain);
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
                  href={`/case-007/${adr.id.toLowerCase()}`}
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
