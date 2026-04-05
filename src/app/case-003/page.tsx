import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase003, domainLabelCase003, type ADRCase003, type ADRCase003Domain } from "@/lib/adrs-case-003";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 003: Quest 3 — Cognitive Theft & AI Governance — YY Method™ Home Edition",
  description: "ADR registry for Quest 3 of the benchanviolin Substack series. Applying the YY Method to the writing process itself — capturing decisions about essay architecture, framing, and authorship as artifacts alongside the work.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 003: Quest 3 — Cognitive Theft & AI Governance — YY Method™ Home Edition",
    description: "YY Method applied to the writing process. Decision records for Quest 3 essays on cognitive theft and AI governance.",
    url: "https://home.yymethod.com/case-003",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase003Domain; label: string; description: string }[] = [
  { domain: "writing", label: "Writing", description: "Essay architecture, structure, framing decisions" },
  { domain: "methodology", label: "Methodology", description: "How the method applies to the writing process" },
  { domain: "identity", label: "Identity", description: "Authorship, provenance, cognitive theft resistance" },
];

export default function Case003Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #003 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Quest 3 — Cognitive Theft & AI Governance</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #003 · {adrsCase003.length} knowledge artifacts · March 31, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          The YY Method applied to the writing process. ADRs evolve alongside the essays — not ahead of them.
        </p>
      </div>

      <Separator />

      {/* Founding argument */}
      <Card className="border-violet-500/20 bg-violet-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-violet-400 font-mono leading-relaxed">
            The founding argument: the same artifact capture process that governs software architecture decisions applies equally to writing. The essay is the artifact. The ADR is the decision record. Both evolve together. Neither precedes the other.
          </p>
        </CardContent>
      </Card>

      {/* Quest arc context */}
      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Quest Arc</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { quest: "Quest 1", label: "5 essays", note: "Heavy AI assistance. Voice taken without knowing." },
              { quest: "Quest 2", label: "4 essays", note: "Minimal AI. Voice reclaimed. Scars Visible is the capstone." },
              { quest: "Quest 3", label: "In progress", note: "Turning around and facing it directly. Cognitive theft named." },
            ].map((q) => (
              <div key={q.quest} className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono text-foreground/80 font-semibold">{q.quest}</span>
                  <span className="text-xs text-muted-foreground font-mono">{q.label}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{q.note}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* By domain */}
      {domainGroups.map(({ domain, label, description }) => {
        const group = adrsCase003.filter((a) => a.domain === domain);
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
                  href={`/case-003/${adr.id.toLowerCase()}`}
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
