import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase012, getADRCase012, domainLabelCase012 } from "@/lib/adrs-case-012";
import { statusColor } from "@/lib/adrs";

const ADR_FILE_MAP: Record<string, string> = {
  "C12-001": "C12-001-reject-the-generic-ai-violin-coach.md",
  "C12-002": "C12-002-define-the-missing-interval-as-between-lessons.md",
  "C12-003": "C12-003-reject-teacher-replacement-positioning.md",
  "C12-004": "C12-004-promote-stand-partner-from-behavior-to-product-identity.md",
  "C12-005": "C12-005-separate-product-metaphors.md",
  "C12-006": "C12-006-define-the-products-governing-promise.md",
  "C12-007": "C12-007-begin-with-returning-and-developing-players.md",
  "C12-008": "C12-008-make-parents-a-first-class-audience.md",
  "C12-009": "C12-009-reject-automatic-transfer-of-player-advice-to-parents.md",
  "C12-010": "C12-010-preserve-multiple-levels-without-one-universal-voice.md",
  "C12-011": "C12-011-keep-action-authorizing-launch-routes-violin-specific.md",
  "C12-012": "C12-012-reject-the-comprehensive-generated-practice-plan.md",
  "C12-013": "C12-013-establish-the-five-minute-page-turn.md",
  "C12-014": "C12-014-separate-committed-work-from-optional-depth.md",
  "C12-015": "C12-015-reject-the-single-thread-assumption.md",
  "C12-016": "C12-016-let-the-user-choose-page-capacity.md",
  "C12-017": "C12-017-constrain-every-page-to-one-current-action.md",
  "C12-018": "C12-018-reject-continuous-daily-reshuffling.md",
  "C12-019": "C12-019-make-today-the-primary-operating-surface.md",
  "C12-020": "C12-020-demote-coach-from-product-to-orchestration-layer.md",
  "C12-021": "C12-021-prefer-precise-reflection-over-praise.md",
  "C12-022": "C12-022-make-the-ai-visibly-corrigible.md",
  "C12-023": "C12-023-separate-bens-authority-from-coach-synthesis.md",
  "C12-024": "C12-024-prohibit-invented-ben-attribution-under-creative-pressure.md",
  "C12-025": "C12-025-apply-human-first-ai-second.md",
  "C12-026": "C12-026-translate-the-five-step-method-into-natural-violin-behavior.md",
  "C12-027": "C12-027-separate-observation-from-interpretation.md",
  "C12-028": "C12-028-prefer-reversible-one-variable-experiments.md",
  "C12-029": "C12-029-preserve-the-method-outside-the-app.md",
  "C12-030": "C12-030-reject-remember-everything.md",
  "C12-031": "C12-031-preserve-page-history-visibly.md",
  "C12-032": "C12-032-require-human-authority-over-durable-memory.md",
  "C12-033": "C12-033-return-memories-when-they-become-useful.md",
  "C12-034": "C12-034-reject-unconstrained-conversational-retrieval.md",
  "C12-035": "C12-035-build-a-reviewed-segment-level-corpus.md",
  "C12-036": "C12-036-route-to-the-relevant-source-portion.md",
  "C12-037": "C12-037-permit-no-exact-source-found.md",
  "C12-038": "C12-038-narrow-the-meaningful-action-surface.md",
  "C12-039": "C12-039-replace-disclaimers-with-behavioral-boundaries.md",
  "C12-040": "C12-040-introduce-approved-compacts.md",
  "C12-041": "C12-041-put-deterministic-authorization-beneath-probabilistic-intake.md",
  "C12-042": "C12-042-treat-no-match-and-non-intervention-as-successful-outcomes.md",
};

async function getADRRaw(adrId: string): Promise<string | null> {
  const filename = ADR_FILE_MAP[adrId];
  if (!filename) return null;
  try {
    const filePath = path.join(process.cwd(), "content", "case-012", filename);
    const raw = await fs.readFile(filePath, "utf-8");
    const dividerIndex = raw.indexOf("\n---\n");
    return dividerIndex !== -1 ? raw.slice(dividerIndex + 5) : raw;
  } catch {
    return null;
  }
}

async function getADRContent(adrId: string): Promise<string | null> {
  const raw = await getADRRaw(adrId);
  if (!raw) return null;
  return (await marked(raw, { gfm: true, breaks: false })) as string;
}

export function generateStaticParams() {
  return adrsCase012.map((adr) => ({ id: adr.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase012(id.toUpperCase());
  if (!adr) return {};
  const title = `${adr.id}: ${adr.title} — YY Method™ Home Edition`;
  const description = `${adr.summary} Decision status: ${adr.status}. Case 012 — Violin Stand Partner.`;
  return {
    title,
    description,
    authors: [{ name: "Ben Chan" }],
    openGraph: {
      title,
      description,
      url: `https://home.yymethod.com/case-012/${adr.id}`,
      siteName: "YY Method™ Home Edition",
      type: "article",
      publishedTime: adr.date,
    },
  };
}

export default async function ADRCase012Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase012(id.toUpperCase());
  if (!adr) notFound();

  const content = await getADRContent(adr.id);
  const dependsOnADRs = adr.dependsOn.map((depId) => getADRCase012(depId)).filter(Boolean);
  const dependents = adrsCase012.filter((a) => a.dependsOn.includes(adr.id));
  const currentNum = parseInt(adr.number);
  const prevADR = adrsCase012.find((a) => parseInt(a.number) === currentNum - 1);
  const nextADR = adrsCase012.find((a) => parseInt(a.number) === currentNum + 1);

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">← Case Studies</Link>
        <span>/</span>
        <Link href="/case-012" className="hover:text-foreground">Case #012</Link>
        <span>/</span>
        <span className="text-foreground font-mono">{adr.id}</span>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">{adr.id}</span>
          <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${statusColor[adr.status]}`}>
            {adr.status}
          </span>
          <Badge variant="outline" className="text-xs font-mono">{domainLabelCase012[adr.domain]}</Badge>
          <Badge variant="outline" className="text-xs font-mono">{adr.position}</Badge>
          <span className="font-mono text-xs text-muted-foreground">{adr.date}</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">{adr.title}</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{adr.summary}</p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Freshness</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${
                adr.freshness === "Active" ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" :
                adr.freshness === "Permanent" ? "bg-violet-500/15 text-violet-400 border-violet-500/20" :
                "bg-blue-500/15 text-blue-400 border-blue-500/20"
              }`}>{adr.freshness}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{adr.freshnessNote}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Dependencies</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            {dependsOnADRs.length > 0 ? (
              <div className="space-y-1">
                {dependsOnADRs.map((dep) => dep && (
                  <Link key={dep.id} href={`/case-012/${dep.id.toLowerCase()}`}
                    className="block text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
                    ← {dep.id}: {dep.title}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">No dependencies — foundational anchor.</p>
            )}
            {dependents.length > 0 && (
              <div className="mt-2 pt-2 border-t border-border space-y-1">
                <p className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider mb-1">Used by</p>
                {dependents.map((dep) => (
                  <Link key={dep.id} href={`/case-012/${dep.id.toLowerCase()}`}
                    className="block text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
                    → {dep.id}: {dep.title}
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {adr.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {adr.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted/40 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <Separator />

      {content ? (
        <div
          className="prose prose-sm max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h2:text-base prose-h2:mt-8 prose-h2:mb-3
            prose-h3:text-sm prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-sm
            prose-strong:text-foreground/90 prose-strong:font-medium
            prose-li:text-muted-foreground prose-li:text-sm
            prose-blockquote:border-border prose-blockquote:text-muted-foreground
            prose-code:text-xs prose-code:bg-muted/50 prose-code:px-1 prose-code:rounded prose-code:font-mono"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p className="text-sm text-muted-foreground italic">Content not yet available.</p>
      )}

      <Separator />

      <div className="flex items-center justify-between">
        {prevADR ? (
          <Link href={`/case-012/${prevADR.id.toLowerCase()}`}
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            ← {prevADR.id}
          </Link>
        ) : (
          <span />
        )}
        <Link href="/case-012" className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
          Case #012 Registry
        </Link>
        {nextADR ? (
          <Link href={`/case-012/${nextADR.id.toLowerCase()}`}
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            {nextADR.id} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </main>
  );
}
