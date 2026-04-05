import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase006, domainLabelCase006, type ADRCase006Domain } from "@/lib/adrs-case-006";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 006: Personal Identity Consolidation — YY Method™ Home Edition",
  description: "10 ADRs capturing an in-progress multi-property identity consolidation. A hub is designed, a canonical Person entity is anchored, domain roles are made explicit, and the governing principle — Signal Before Elegance — is formalized after a direction reversal.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 006: Personal Identity Consolidation — YY Method™ Home Edition",
    description: "10 ADRs: hub architecture, canonical @id, domain roles, stack decision reversal, and the governing principle that identity compounds over time.",
    url: "https://home.yymethod.com/case-006",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase006Domain; label: string; description: string }[] = [
  { domain: "strategy", label: "Strategy", description: "Why consolidate, governing principles, the case for acting on current infrastructure" },
  { domain: "identity", label: "Identity", description: "Canonical @id, Person schema, sameAs array, infrastructure independence" },
  { domain: "structure", label: "Structure", description: "Domain roles, hub selection, stack decision and its reversal" },
  { domain: "surface", label: "Surface", description: "Landing page architecture, navigation philosophy, what the visitor encounters" },
];

export default function Case006Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #006 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Personal Identity Consolidation — Multi-Property Hub Architecture</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #006 · {adrsCase006.length} knowledge artifacts · April 5, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          In progress. The consolidation is implemented and live. The reasoning chain is still being captured.
        </p>
      </div>

      <Separator />

      {/* Founding argument */}
      <Card className="border-violet-500/20 bg-violet-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-violet-400 font-mono leading-relaxed">
            The founding argument in one sentence: consolidating identity online is an ongoing process that compounds over time — it&apos;s worth the effort.
          </p>
        </CardContent>
      </Card>

      {/* Load-bearing anchor */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            C6-002 is the governing principle — Signal Before Elegance. It unlocked execution by eliminating the false dependency on stack migration before signaling.
            Without it, the entire case would have been deferred pending a Next.js migration that had no bearing on signal quality. Every surface and identity decision flows downstream of it.
          </p>
        </CardContent>
      </Card>

      {/* Properties in scope */}
      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Properties in Scope</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { domain: "benchantech.com", role: "Hub", note: "Navigation, cohesion, canonical Person @id anchor. No original content." },
              { domain: "yymethod.com", role: "Framework", note: "The method in full — what it is, how it works, why it was built." },
              { domain: "home.yymethod.com", role: "Cases", note: "Live registry of decisions made under the method. This site." },
              { domain: "yyand.me", role: "Origin", note: "Podcast. The method&apos;s backstory. Real life in real time." },
            ].map((item) => (
              <div key={item.domain} className="space-y-1">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-foreground/80 font-semibold">{item.role}</span>
                  <p className="text-xs font-mono text-muted-foreground/60">{item.domain}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* By domain */}
      {domainGroups.map(({ domain, label, description }) => {
        const group = adrsCase006.filter((a) => a.domain === domain);
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
                  href={`/case-006/${adr.id.toLowerCase()}`}
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
