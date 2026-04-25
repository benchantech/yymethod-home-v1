import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase008, domainLabelCase008, type ADRCase008Domain } from "@/lib/adrs-case-008";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 008: Scrabblerama Scoring Integrity — YY Method™ Home Edition",
  description: "28 ADRs documenting competitive strategy, rule ambiguity, and clean execution under constraint in a Scrabble-variant tournament: premium square integrity, expected-value scoring strategy, emotional calibration, and the operating posture for winning clean.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 008: Scrabblerama Scoring Integrity — YY Method™ Home Edition",
    description: "28 ADRs: scoring integrity analysis, 9x strategy engine, 15-letter word correction, theme gray-zone reframe, pre-clarification posture, and the commitment to play a game whose board can be proudly displayed.",
    url: "https://home.yymethod.com/case-008",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase008Domain; label: string; description: string }[] = [
  { domain: "framing", label: "Framing", description: "The game as judgment under constraint, the prior result as signal, and the discipline of separating frustration from evidence" },
  { domain: "integrity", label: "Integrity", description: "Premium square exhaustion, geometric constraints, plausibility analysis, and the charitable hypothesis" },
  { domain: "analysis", label: "Analysis", description: "The personal benchmark, the letter-count correction, and the strategy reframe" },
  { domain: "strategy", label: "Strategy", description: "The 9x scoring engine, round structure, pivot rule, and the correct role of 15-letter words" },
  { domain: "execution", label: "Execution", description: "Tile staging, letter buying, theme gray-zone interpretation, and the one-sentence test" },
  { domain: "posture", label: "Posture", description: "Pre-clarification, board display, non-relitigating, clean defeat, clean victory, and final operating checklist" },
];

export default function Case008Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #008 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Scrabblerama Scoring Integrity — Competitive Strategy, Rule Ambiguity, and Clean Execution Under Constraint</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #008 · {adrsCase008.length} knowledge artifacts · April 25, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          Complete. The strategy is revised. The posture is set. The board should speak.
        </p>
      </div>

      <Separator />

      {/* Founding argument */}
      <Card className="border-violet-500/20 bg-violet-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-violet-400 font-mono leading-relaxed">
            Finishing 2nd to a score that cannot be explained by proper rule application licenses exactly one response: clarify rules before play begins, propose that boards be displayed, and win clean.
          </p>
        </CardContent>
      </Card>

      {/* Load-bearing anchor */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            C8-005 (Premium Square Exhaustion) is the load-bearing anchor. The plausibility analysis in C8-006 through C8-009, the transparency proposals in C8-021 and C8-022, and the clean-play standards in C8-025 and C8-026 all flow from one rule: a premium square multiplier may only be applied once. Everything else in the integrity chain is a consequence of that invariant.
          </p>
        </CardContent>
      </Card>

      {/* Decision layers */}
      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Six Decision Layers</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { layer: "Framing", adrs: "C8-001 – C8-003", note: "Is this a judgment problem? What does the 2nd place result signal, and can frustration be separated from evidence?" },
              { layer: "Integrity", adrs: "C8-004 – C8-009, C8-020", note: "What is the charitable explanation for an implausibly high score? Where does the scoring ceiling actually sit?" },
              { layer: "Analysis + Strategy", adrs: "C8-010 – C8-016", note: "What preparation errors need correction? What is the practical scoring engine, and how should the round be structured?" },
              { layer: "Execution", adrs: "C8-017 – C8-020", note: "How should themes be interpreted? What is the one-sentence test? What does delayed judging risk?" },
              { layer: "Posture", adrs: "C8-021 – C8-028", note: "Pre-clarify rules, propose board display, don't relitigate, accept clean defeat, deliver clean victory." },
              { layer: "Reversals", adrs: "C8-010, C8-011, C8-017, C8-019", note: "Letter count error corrected. 15-letter core strategy abandoned. Strict theme enforcement explicitly rejected." },
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
        const group = adrsCase008.filter((a) => a.domain === domain);
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
                  href={`/case-008/${adr.id.toLowerCase()}`}
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
