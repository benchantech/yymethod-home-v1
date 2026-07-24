import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase013, type ADRCase013Domain } from "@/lib/adrs-case-013";
import { statusColor } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 013: Constraining an AI Video Generator — YY Method™ Home Edition",
  description: "18 ADRs documenting an AI video workflow that moves from elaborate prompts to progressive decision reduction, visual locking, repeatability, and preserved human judgment.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 013: Constraining an AI Video Generator — YY Method™ Home Edition",
    description: "A public reasoning archive for human-directed AI video production.",
    url: "https://home.yymethod.com/case-013",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const domainGroups: { domain: ADRCase013Domain; label: string; description: string }[] = [
  { domain: "control-surface", label: "Control Surface", description: "Rejecting prose as the sole control surface for multi-shot AI video" },
  { domain: "temporal-architecture", label: "Temporal Architecture", description: "Constraining sequence length and shot-level beats for legibility" },
  { domain: "scene-construction", label: "Scene Construction", description: "Separating camera direction from subject direction" },
  { domain: "character-direction", label: "Character Direction", description: "Replacing internal states with observable behavior and visible objectives" },
  { domain: "scene-composition", label: "Scene Composition", description: "Turning ambiguous direction into observable geometry" },
  { domain: "visual-locking", label: "Visual Locking", description: "Using reference images to remove unnecessary visual decisions" },
  { domain: "prompt-architecture", label: "Prompt Architecture", description: "Letting images define nouns while prompts direct verbs" },
  { domain: "visual-composition", label: "Visual Composition", description: "Aligning reference frames with intended motion" },
  { domain: "experimental-method", label: "Experimental Method", description: "Debugging one variable at a time" },
  { domain: "production-constraints", label: "Production Constraints", description: "Treating moderation as a system boundary" },
  { domain: "asset-system", label: "Asset System", description: "Building reusable visual assets instead of recreating them" },
  { domain: "production-workflow", label: "Production Workflow", description: "Separating asset creation from scene direction" },
  { domain: "production-strategy", label: "Production Strategy", description: "Optimizing for repeatability over one-off success" },
  { domain: "knowledge-preservation", label: "Knowledge Preservation", description: "Recording principles rather than exact prompts" },
  { domain: "human-ai-collaboration", label: "Human-AI Collaboration", description: "Preserving human judgment throughout the production pipeline" },
];

export default function Case013Page() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">← Case Studies</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="text-xs text-foreground">Case #013 · ADR Registry</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Constraining an AI Video Generator Through Progressive Decision Reduction</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Case #013 · {adrsCase013.length} knowledge artifacts · July 24, 2026 · YY Method™ Home Edition v2.3
        </p>
        <p className="text-sm text-muted-foreground">
          Complete. Public-safe synthesis; exact prompts, generated clips, reference libraries, and platform-specific production fixtures remain private.
        </p>
      </div>

      <Separator />

      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-xs text-amber-400 font-mono leading-relaxed">
            The public record preserves the decisions, the discarded assumptions, and the scars that made each later decision necessary. It is not a prompt collection.
          </p>
        </CardContent>
      </Card>

      <Card className="border-border bg-muted/10">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider">Case Distillation</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { layer: "Clarify", adrs: "C13-001 - C13-007", note: "Narrative, temporal, behavioral, and spatial ambiguity move out of the generator before generation." },
              { layer: "Lock", adrs: "C13-008 - C13-013", note: "Reference images, reduced prompts, one-variable debugging, and moderation boundaries turn iteration into evidence." },
              { layer: "Compound", adrs: "C13-014 - C13-018", note: "Reusable assets, separated workflow stages, repeatability, principle capture, and human judgment define the production pipeline." },
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
        const group = adrsCase013.filter((a) => a.domain === domain);
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
                  href={`/case-013/${adr.id.toLowerCase()}`}
                  className="flex items-start gap-4 p-3 rounded-lg border border-border hover:bg-muted/40 transition-colors group"
                >
                  <span className="font-mono text-xs text-muted-foreground pt-1 shrink-0 w-16">{adr.id}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium group-hover:text-foreground truncate">{adr.title}</div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{adr.summary}</p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1.5 pt-0.5">
                    <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${statusColor[adr.status]}`}>
                      {adr.status}
                    </span>
                    {adr.dependsOn.length > 0 && (
                      <span className="text-xs text-muted-foreground font-mono">← {adr.dependsOn.join(", ")}</span>
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
