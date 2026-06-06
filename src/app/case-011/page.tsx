import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase011, type ADRCase011Domain } from "@/lib/adrs-case-011";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 011: YY Method Academy — Real YY as First-Class Guide — YY Method™ Home Edition",
  description: "17 ADRs crystallizing the YY Method Academy mission: real YY as first-class viewpoint, adult syntax with childlike wonder, family AI literacy, gamification, yyworld sandbox, yymethod-home graduation field, Ben Chan Tech learning academy model, client advisory funding boundary, family-first yymethod.com domain boundary, immutable fantasy golden seed, adaptive proof layer, yysworld kernel architecture, founder-parent non-coercion, private/public key learning records, YY narration lens, and opt-in expansion.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 011: YY Method Academy — YY Method™ Home Edition",
    description: "Real YY as guide, adult-directed family learning, gamified AI literacy, sandbox-to-graduation pathway, and family-first yymethod.com boundary.",
    url: "https://home.yymethod.com/case-011",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase011Domain; label: string; description: string }[] = [
  { domain: "canon", label: "Canon", description: "Real YY from yyand.me becomes the first-class guide and emotional source" },
  { domain: "voice", label: "Voice", description: "Childlike wonder carried through adult syntax" },
  { domain: "positioning", label: "Positioning", description: "Adult-directed, family-shareable AI literacy rather than kids-only product posture" },
  { domain: "progression", label: "Progression", description: "Badges, XP, quests, and family victories as the repeated learning loop" },
  { domain: "pathway", label: "Pathway", description: "yyworld as sandbox; yymethod-home as graduation field" },
  { domain: "business", label: "Business", description: "Ben Chan Tech graduates toward a family-first YY Method learning academy" },
  { domain: "worldview", label: "Worldview", description: "The forest/fantasy metaphor can mature for families and 1:1 adult learners without becoming corporate" },
  { domain: "funding", label: "Funding", description: "Client advisory work funds and informs the mission without owning it" },
  { domain: "boundary", label: "Boundary", description: "yymethod.com remains the family-first home surface; professional use is 1:1 only" },
  { domain: "seed", label: "Seed", description: "The fantasy theme grows from childhood thinking modes matured into adult method" },
  { domain: "adaptation", label: "Adaptation", description: "New Game Plus maps onto current gamification and social proof without replacing the seed" },
  { domain: "architecture", label: "Architecture", description: "yysworld's code structure becomes the early kernel for the new yymethod" },
  { domain: "consent", label: "Consent", description: "The founder-parent's non-coercion posture is the first system under test" },
  { domain: "disclosure", label: "Disclosure", description: "Upside is named clearly without turning future benefit into pressure" },
  { domain: "privacy", label: "Privacy", description: "The child's journey is the private key; YY Method is the public key" },
  { domain: "lens", label: "Lens", description: "YY narrates learning at safe distance and models self-narration" },
  { domain: "expansion", label: "Expansion", description: "The founder-led path can transfer only through personal opt-in" },
];

export default function Case011Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #011 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">YY Method Academy — Real YY as First-Class Guide, Family AI Literacy, and the Graduation Field</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #011 · {adrsCase011.length} knowledge artifacts · June 6, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          In Progress. Mission crystallized; product surfaces still forming.
        </p>
      </div>

      <Separator />

      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            The real YY is not decoration; he is the emotional operating system that lets adult AI doctrine remain playful enough for families to enter and serious enough for professionals to trust.
          </p>
        </CardContent>
      </Card>

      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Mission Distillation</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { layer: "YY", adrs: "C11-001 – C11-002", note: "Real YY from yyand.me becomes the first-class lens. The voice preserves wonder while speaking in adult syntax." },
              { layer: "Family Learning", adrs: "C11-003 – C11-005", note: "Adult-directed, family-shareable, gamified AI literacy. yyworld protects sandbox play; yymethod-home graduates ideas into doctrine." },
              { layer: "Seed + Kernel", adrs: "C11-006 – C11-017", note: "Ben Chan Tech becomes a family-first learning academy. The fantasy layer stays anchored in childhood truth while yysworld's kernel, consent invariants, and YY lens give the new method construction discipline." },
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
        const group = adrsCase011.filter((a) => a.domain === domain);
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
                  href={`/case-011/${adr.id.toLowerCase()}`}
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
