import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase012, type ADRCase012Domain } from "@/lib/adrs-case-012";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 012: Violin Stand Partner — YY Method™ Home Edition",
  description: "42 ADRs documenting Violin Stand Partner: rejecting the generic AI violin coach, preserving teacher authority, one five-minute page turn, visible memory, source provenance, Approved Compacts, deterministic authorization, and First Response as a protective layer.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 012: Violin Stand Partner — YY Method™ Home Edition",
    description: "A public reasoning archive for building a human-judgment system between violin lessons.",
    url: "https://home.yymethod.com/case-012",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase012Domain; label: string; description: string }[] = [
  { domain: "identity", label: "Product Origin and Identity", description: "Rejecting generic AI coaching and defining Stand Partner as bounded between-lessons support" },
  { domain: "audience", label: "Audience Evolution", description: "Returning players, developing players, parents, and actor-sensitive routing" },
  { domain: "daily-ritual", label: "Daily Ritual and Page Architecture", description: "Five-minute page turns, multiple open pages, and one current action per page" },
  { domain: "coach-authority", label: "Coach and Conversational Authority", description: "Coach as orchestration layer with visible corrigibility and attribution boundaries" },
  { domain: "method-runtime", label: "YY Method as Runtime Behavior", description: "Human first, AI second translated into natural violin practice behavior" },
  { domain: "memory", label: "Memory and Longitudinal State", description: "Visible page history, approved durable memory, and contextual resurfacing" },
  { domain: "corpus", label: "Corpus and Knowledge Provenance", description: "Reviewed segment-level source corpus and permission to say no exact source was found" },
  { domain: "defensive-judgment", label: "Defensive Judgment and First Response", description: "Behavioral boundaries, Approved Compacts, deterministic authorization, and no-match as success" },
];

export default function Case012Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #012 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Violin Stand Partner — Building a Human-Judgment System Between Lessons</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #012 · {adrsCase012.length} knowledge artifacts · July 17, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          In Progress. Public reasoning draft; production implementation and private forensic registry intentionally withheld.
        </p>
      </div>

      <Separator />

      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            Violin Stand Partner was not created by asking AI to design a violin app. It emerged from human judgments about where AI should help, where it should stop, what evidence it should preserve, and which product obligations had not earned the right to exist.
          </p>
        </CardContent>
      </Card>

      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Case Distillation</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { layer: "Authority", adrs: "C12-001 – C12-011", note: "The app rejects broad coaching and teacher replacement. Parents become first-class users, but physical-action authority remains actor-sensitive and violin-specific." },
              { layer: "Ritual", adrs: "C12-012 – C12-029", note: "The daily product narrows from comprehensive plans to one page turn. Coach orchestrates intake, reflection, routing, and correction while structured surfaces preserve state." },
              { layer: "Protection", adrs: "C12-030 – C12-042", note: "Memory, source provenance, Approved Compacts, deterministic authorization, and no-match behavior keep the system useful without pretending to know more than it does." },
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

      {domainGroups.map(({ domain, label, description }) => {
        const group = adrsCase012.filter((a) => a.domain === domain);
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
                  href={`/case-012/${adr.id.toLowerCase()}`}
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
