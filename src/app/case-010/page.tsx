import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase010, domainLabelCase010, type ADRCase010Domain } from "@/lib/adrs-case-010";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 010: Child-Originated Character Studio — Authorship Architecture, IP Origin, and the Private Release Lifecycle — YY Method™ Home Edition",
  description: "10 ADRs documenting the architecture of a child-safe creative portfolio system: child as author, AI as rendering layer, original character requirement, private prototype boundary, Google OAuth with allowlist, pseudonymous structure, no indexing, provenance logging, parent-built engine, adult consent lifecycle, and commercialization gate.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 010: Child-Originated Character Studio — YY Method™ Home Edition",
    description: "10 ADRs: child as author, AI as rendering layer, derivative character path rejected, squirrel prototype bounded, OAuth plus allowlist, pseudonymous portfolios, no indexing, provenance logging, adult consent lifecycle, and commercialization gate.",
    url: "https://home.yymethod.com/case-010",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase010Domain; label: string; description: string }[] = [
  { domain: "authorship", label: "Authorship", description: "The authorship split as governing invariant, and why the derivative-character path was rejected" },
  { domain: "containment", label: "Containment", description: "Keeping the squirrel prototype internal and keeping the portfolio invisible to crawlers and training pipelines" },
  { domain: "structure", label: "Structure", description: "OAuth plus allowlist, pseudonymous organization, and the parent-as-engineer role division" },
  { domain: "provenance", label: "Provenance", description: "Logging process artifacts so the authorship chain is demonstrable and the memory of creation is retrievable" },
  { domain: "lifecycle", label: "Lifecycle", description: "Adult consent as the release trigger, three valid outcomes, and the commercialization gate" },
];

export default function Case010Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #010 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Child-Originated Character Studio — Authorship Architecture, IP Origin, and the Private Release Lifecycle</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #010 · {adrsCase010.length} knowledge artifacts · April 27, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          In Progress. The architecture is decided. The system is being built.
        </p>
      </div>

      <Separator />

      {/* Founding argument */}
      <Card className="border-violet-500/20 bg-violet-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-violet-400 font-mono leading-relaxed">
            A character that springs entirely from a child&apos;s imagination is owned outright — no IP gray area, no derivative risk, no permission to seek. AI renders what the child creates. The work is private until the author is old enough to decide its fate.
          </p>
        </CardContent>
      </Card>

      {/* Load-bearing anchor */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            C10-001 (Child as Author, AI as Rendering Layer) is the load-bearing anchor. The original character requirement, the private prototype boundary, the no-indexing posture, the provenance logging, and the commercialization gate all flow from one invariant: the child is the author. Every protection in this system exists to preserve the value of that authorship until the child is old enough to wield it.
          </p>
        </CardContent>
      </Card>

      {/* Decision layers */}
      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Five Decision Layers</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { layer: "Authorship", adrs: "C10-001 – C10-002", note: "Child authors, AI renders. Derivative characters rejected. The squirrel plush path exposed the IP risk; the original-character requirement closes it." },
              { layer: "Containment", adrs: "C10-003, C10-006", note: "The squirrel prototype stays private and bounded. The portfolio is invisible to crawlers, indexers, and AI training pipelines." },
              { layer: "Structure", adrs: "C10-004, C10-005, C10-008", note: "OAuth plus allowlist. Pseudonymous identifiers. The parent builds the engine so the child can focus entirely on creating." },
              { layer: "Provenance", adrs: "C10-007", note: "Process artifacts alongside outputs. Origin sketches, voice memos, iteration notes. Authorship is demonstrable; the memory of creation is retrievable." },
              { layer: "Lifecycle", adrs: "C10-009 – C10-010", note: "Private until adulthood. Three valid outcomes: keep private, share selectively, or publish fully. Commercialization gated behind adult consent." },
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
        const group = adrsCase010.filter((a) => a.domain === domain);
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
                  href={`/case-010/${adr.id.toLowerCase()}`}
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
