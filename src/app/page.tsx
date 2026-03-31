import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { caseStudies } from "@/lib/cases";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-12">

      {/* Header — YY Method Home Edition brand */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">YY Method™</span>
          <Badge variant="outline" className="font-mono text-xs font-semibold">Home Edition</Badge>
          <Badge variant="outline" className="font-mono text-xs">v2.3</Badge>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight leading-snug">
          Preserve judgment under constraint.
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          The YY Method is a personal epistemological framework for making decisions durable —
          structured so they survive time, correction, and handoff to AI.
          It applies everywhere judgment is required under constraint: tax strategy, system design, creative work, life architecture.
        </p>

        {/* Edition ownership notice */}
        <Card className="border-border bg-card max-w-2xl">
          <CardContent className="pt-4 pb-4 space-y-2">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="text-foreground/80 font-semibold font-mono">This is YY Method™ Home Edition</span>
              {" "}— independently owned and controlled. v2.3 is the last version personally owned by the method&apos;s author.
              A professional version has since been developed under an employer, with rights to its evolution assigned accordingly.
              Home Edition was carved out before that employment and remains under the author&apos;s sole control.
              The two editions share the v2.3 foundation and diverge from there.
            </p>
            <p className="text-xs text-muted-foreground">
              Canonical framework overview →{" "}
              <a
                href="https://yymethod.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors font-mono"
              >
                yymethod.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* What this system is */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">About This System</h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          This is the YY Method™ Home Edition case study archive. Each case study applies the method to a real-world complex problem,
          producing a structured set of ADRs (Architecture Decision Records) that capture the full reasoning chain —
          decisions made, alternatives rejected, corrections applied, and freshness boundaries defined.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Case studies are illustrative and anonymized. Numbers are approximate. The method is the message.
          More case studies will be added over time — some from the method&apos;s author, some from other practitioners.
          As the archive grows, the method itself becomes the through-line.
        </p>
      </div>

      {/* Case Studies */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Case Studies</h2>
          <span className="text-xs text-muted-foreground">{caseStudies.length} published · more in progress</span>
        </div>

        <div className="space-y-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              href={cs.href}
              className="group block p-5 rounded-lg border border-border bg-card hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs text-muted-foreground">Case #{cs.number}</span>
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded border font-mono ${
                        cs.status === "Complete"
                          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
                          : cs.status === "In Progress"
                          ? "bg-blue-500/15 text-blue-400 border-blue-500/20"
                          : "bg-muted/50 text-muted-foreground border-border"
                      }`}
                    >
                      {cs.status}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{cs.date}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold group-hover:text-foreground transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">{cs.subtitle}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cs.description}
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex flex-wrap gap-1">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-muted-foreground bg-muted/40 px-2 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col items-end gap-2 pt-0.5">
                  <span className="text-xs font-mono text-muted-foreground">{cs.adrCount} ADRs</span>
                  <div className="flex flex-wrap justify-end gap-1">
                    {cs.domains.map((d) => (
                      <Badge key={d} variant="outline" className="text-xs font-mono">
                        {d}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <Separator />

      {/* Legal disclaimer */}
      <Card className="border-muted-foreground/20 bg-muted/10">
        <CardContent className="pt-3 pb-3">
          <p className="text-xs text-muted-foreground leading-relaxed font-mono">
            <span className="text-foreground/60 font-semibold">Disclosure:</span>{" "}
            Case studies published here are illustrative demonstrations of the YY Method™ Home Edition applied to real-world problems.
            Numbers are approximate and generalized. Math is illustrative only.
            Nothing here constitutes financial, tax, legal, or professional advice of any kind.
            Consult qualified professionals before making any decisions. See individual ADRs for case-specific framing notices.
          </p>
        </CardContent>
      </Card>

      {/* Nav to framework/agent/interview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            href: "/framework",
            title: "YY Framework",
            description: "Core formula. Eight layers. Canonical principles. The method itself.",
            badge: "v2.3",
          },
          {
            href: "/agent",
            title: "Agent System",
            description: "Builder / Test / Review / Docs. Ambiguity queue. Executor contract.",
            badge: "v2",
          },
          {
            href: "/interview",
            title: "Interview with AI",
            description: "Word-for-word audit of the Case 002 first draft. AI extrapolated; operator corrected. The scar record.",
            badge: "2026-03-30",
          },
        ].map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className="group block p-5 rounded-lg border border-border bg-card hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-sm group-hover:text-foreground">{nav.title}</h3>
              <Badge variant="outline" className="font-mono text-xs shrink-0">
                {nav.badge}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              {nav.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="pb-6 text-center">
        <p className="text-xs text-muted-foreground font-mono">Human captures. AI reads.</p>
      </div>

    </main>
  );
}
