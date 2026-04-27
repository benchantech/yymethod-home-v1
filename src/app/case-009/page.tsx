import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase009, domainLabelCase009, type ADRCase009Domain } from "@/lib/adrs-case-009";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 009: Writing for the Future — Voice, AI, and the Inheritance — YY Method™ Home Edition",
  description: "14 ADRs documenting the meta-decision behind all public-facing work: writing for children and grandchildren across four surfaces, five AI scars derived from live experience, the four-quest training arc, and the multi-generational corpus architecture.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 009: Writing for the Future — Voice, AI, and the Inheritance — YY Method™ Home Edition",
    description: "14 ADRs: YouTube origin, primary audience declaration, four-surface architecture, five AI scars, the writing coach corridor, the AI fast, four quests as training program, and the inheritance architecture.",
    url: "https://home.yymethod.com/case-009",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase009Domain; label: string; description: string }[] = [
  { domain: "origin", label: "Origin", description: "The YouTube founding act — gap-filling, unscripted, before any method" },
  { domain: "architecture", label: "Architecture", description: "Primary audience declaration and the four-surface design" },
  { domain: "scars", label: "Scars", description: "Five AI scars derived from live experience: smoothing, accountability, drift, muscle formation, and the attribution corridor" },
  { domain: "method", label: "Method", description: "The AI fast as recovery protocol and the four quests as training program" },
  { domain: "inheritance", label: "Inheritance", description: "What compounds across generations, Case 003 as rejected predecessor, and this case as the reasoning chain made visible" },
];

export default function Case009Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #009 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Writing for the Future — Voice, AI, and the Inheritance</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #009 · {adrsCase009.length} knowledge artifacts · April 26, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          In Progress. The founding decision is made. Q3 and Q4 are ahead.
        </p>
      </div>

      <Separator />

      {/* Founding argument */}
      <Card className="border-violet-500/20 bg-violet-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-violet-400 font-mono leading-relaxed">
            In an AI-saturated world, the deepest threat is not replacement but substitution of voice — and the deepest purpose is not audience but inheritance. Writing for your children and grandchildren changes everything: what you protect, how honest you must be, and what the corpus is built to survive.
          </p>
        </CardContent>
      </Card>

      {/* Load-bearing anchor */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            C9-002 (Primary Audience Declaration) is the load-bearing anchor. The AI disciplines, the quest training arc, the four-surface architecture, and the inheritance plan are all infrastructure built to honor one commitment: write something worth keeping for the people who will need it when you are not there.
          </p>
        </CardContent>
      </Card>

      {/* Decision layers */}
      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Five Decision Layers</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { layer: "Origin", adrs: "C9-001", note: "The YouTube founding act: not 'I want to be a creator' but 'this specific thing isn't being said and I can say it.'" },
              { layer: "Architecture", adrs: "C9-002 – C9-003", note: "Primary audience declared. Four surfaces maintained in parallel, each doing what the others cannot." },
              { layer: "Scars", adrs: "C9-004 – C9-009", note: "Five AI scars from live experience: smoothing, accountability, drift, muscle formation, and Level 5." },
              { layer: "Method", adrs: "C9-010 – C9-011", note: "The AI fast as recovery. The four quests as training program. Q4 is the exam." },
              { layer: "Inheritance", adrs: "C9-012 – C9-014", note: "What compounds across generations. Case 003 as scar. This case as the reasoning chain made visible." },
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
        const group = adrsCase009.filter((a) => a.domain === domain);
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
                  href={`/case-009/${adr.id.toLowerCase()}`}
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
