import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase008, getADRCase008, domainLabelCase008 } from "@/lib/adrs-case-008";
import { statusColor } from "@/lib/adrs";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/json-ld";
import { extractFaqItems } from "@/lib/faq-schema";

const ADR_FILE_MAP: Record<string, string> = {
  "C8-001": "C8-001-framing-judgment-under-constraint.md",
  "C8-002": "C8-002-prior-result-as-signal.md",
  "C8-003": "C8-003-emotional-calibration.md",
  "C8-004": "C8-004-charitable-hypothesis.md",
  "C8-005": "C8-005-premium-square-exhaustion.md",
  "C8-006": "C8-006-geometry-constraint-on-27x.md",
  "C8-007": "C8-007-letter-buying-rebuttal.md",
  "C8-008": "C8-008-score-functional-improbability.md",
  "C8-009": "C8-009-personal-benchmark.md",
  "C8-010": "C8-010-letter-count-correction.md",
  "C8-011": "C8-011-15-letter-words-reframed.md",
  "C8-012": "C8-012-9x-scoring-engine.md",
  "C8-013": "C8-013-round-structure.md",
  "C8-014": "C8-014-mid-round-pivot-rule.md",
  "C8-015": "C8-015-physical-letter-staging.md",
  "C8-016": "C8-016-letter-buying-strategy.md",
  "C8-017": "C8-017-theme-gray-zone.md",
  "C8-018": "C8-018-one-sentence-theme-test.md",
  "C8-019": "C8-019-strict-enforcement-rejected.md",
  "C8-020": "C8-020-delayed-judging-weakness.md",
  "C8-021": "C8-021-pre-clarify-rules.md",
  "C8-022": "C8-022-winning-board-display.md",
  "C8-023": "C8-023-no-relitigate.md",
  "C8-024": "C8-024-medal-as-prompt.md",
  "C8-025": "C8-025-clean-defeat.md",
  "C8-026": "C8-026-clean-victory.md",
  "C8-027": "C8-027-play-actual-game.md",
  "C8-028": "C8-028-final-operating-posture.md",
  "C8-029": "C8-029-letter-buying-charitable-multiplier.md",
  "C8-030": "C8-030-prior-anomaly-resolved.md",
  "C8-031": "C8-031-solvability-finding.md",
  "C8-032": "C8-032-no-intentional-underperformance.md",
  "C8-033": "C8-033-optimization-disclosure-rejected.md",
  "C8-034": "C8-034-role-transition-competitor-to-coach.md",
  "C8-035": "C8-035-public-private-reasoning-layers.md",
  "C8-036": "C8-036-final-principle.md",
};

async function getADRRaw(adrId: string): Promise<string | null> {
  const filename = ADR_FILE_MAP[adrId];
  if (!filename) return null;
  try {
    const filePath = path.join(process.cwd(), "content", "case-008", filename);
    const raw = await fs.readFile(filePath, "utf-8");
    const dividerIndex = raw.indexOf('\n---\n');
    return dividerIndex !== -1 ? raw.slice(dividerIndex + 5) : raw;
  } catch {
    return null;
  }
}

async function getADRContent(adrId: string): Promise<string | null> {
  const raw = await getADRRaw(adrId);
  if (!raw) return null;
  return await marked(raw, { gfm: true, breaks: false }) as string;
}

export function generateStaticParams() {
  return adrsCase008.map((adr) => ({ id: adr.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase008(id.toUpperCase());
  if (!adr) return {};
  const title = `${adr.id}: ${adr.title} — YY Method™ Home Edition`;
  const description = `${adr.summary} Decision status: ${adr.status}. Case 008 — Local Scrabble-like Charity Event.`;
  return {
    title,
    description,
    authors: [{ name: "Ben Chan" }],
    openGraph: {
      title,
      description,
      url: `https://home.yymethod.com/case-008/${adr.id}`,
      siteName: "YY Method™ Home Edition",
      type: "article",
      publishedTime: adr.date,
    },
  };
}

export default async function ADRCase008Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase008(id.toUpperCase());
  if (!adr) notFound();

  const [content, rawContent, dependsOnADRs] = await Promise.all([
    getADRContent(adr.id),
    getADRRaw(adr.id),
    Promise.resolve(adr.dependsOn.map((depId) => getADRCase008(depId)).filter(Boolean)),
  ]);

  const faqItems = rawContent ? extractFaqItems(rawContent) : [];
  const dependents = adrsCase008.filter((a) => a.dependsOn.includes(adr.id));
  const currentNum = parseInt(adr.number);
  const prevADR = adrsCase008.find((a) => parseInt(a.number) === currentNum - 1);
  const nextADR = adrsCase008.find((a) => parseInt(a.number) === currentNum + 1);

  return (
    <>
      <JsonLd data={articleSchema({
        title: `${adr.id}: ${adr.title}`,
        description: adr.summary,
        url: `https://home.yymethod.com/case-008/${adr.id}`,
        datePublished: adr.date,
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "YY Method™ Home Edition", url: "https://home.yymethod.com" },
        { name: "Case 008", url: "https://home.yymethod.com/case-008" },
        { name: adr.id, url: `https://home.yymethod.com/case-008/${adr.id}` },
      ])} />
      {faqItems.length > 0 && <JsonLd data={faqSchema(faqItems)} />}
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">← Case Studies</Link>
        <span>/</span>
        <Link href="/case-008" className="hover:text-foreground">Case #008</Link>
        <span>/</span>
        <span className="text-foreground font-mono">{adr.id}</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">{adr.id}</span>
          <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${statusColor[adr.status]}`}>
            {adr.status}
          </span>
          <Badge variant="outline" className="text-xs font-mono">{domainLabelCase008[adr.domain]}</Badge>
          <Badge variant="outline" className="text-xs font-mono">{adr.position}</Badge>
          <span className="font-mono text-xs text-muted-foreground">{adr.date}</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">{adr.title}</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{adr.summary}</p>
      </div>

      <Separator />

      {/* Metadata cards */}
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
                  <Link key={dep.id} href={`/case-008/${dep.id.toLowerCase()}`}
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
                  <Link key={dep.id} href={`/case-008/${dep.id.toLowerCase()}`}
                    className="block text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
                    → {dep.id}: {dep.title}
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Tags */}
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

      {/* Content */}
      {content ? (
        <div
          className="prose prose-sm prose-invert max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h2:text-base prose-h2:mt-8 prose-h2:mb-3
            prose-h3:text-sm prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-sm
            prose-strong:text-foreground/90 prose-strong:font-medium
            prose-li:text-muted-foreground prose-li:text-sm
            prose-table:text-sm prose-th:text-muted-foreground prose-th:font-medium prose-td:text-muted-foreground
            prose-blockquote:border-border prose-blockquote:text-muted-foreground
            prose-code:text-xs prose-code:bg-muted/50 prose-code:px-1 prose-code:rounded prose-code:font-mono"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p className="text-sm text-muted-foreground italic">Content not yet available.</p>
      )}

      <Separator />

      {/* Prev / Next */}
      <div className="flex items-center justify-between">
        {prevADR ? (
          <Link href={`/case-008/${prevADR.id.toLowerCase()}`}
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            ← {prevADR.id}
          </Link>
        ) : (
          <Link href="/case-008" className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            ← Case 008
          </Link>
        )}
        {nextADR && (
          <Link href={`/case-008/${nextADR.id.toLowerCase()}`}
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            {nextADR.id} →
          </Link>
        )}
      </div>
    </main>
    </>
  );
}
