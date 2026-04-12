import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase002, getADRCase002, domainLabelCase002 } from "@/lib/adrs-case-002";
import { statusColor } from "@/lib/adrs";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/json-ld";
import { extractFaqItems } from "@/lib/faq-schema";

const ADR_FILE_MAP: Record<string, string> = {
  "C2-001": "C2-001-domain-and-identity.md",
  "C2-002": "C2-002-primary-audience.md",
  "C2-003": "C2-003-data-posture-outward-only.md",
  "C2-004": "C2-004-coppa-compliance-architecture.md",
  "C2-005": "C2-005-entry-schema.md",
  "C2-006": "C2-006-yy-role.md",
  "C2-007": "C2-007-anti-smoothing-principle.md",
  "C2-008": "C2-008-stealth-inoculation.md",
  "C2-009": "C2-009-cognitive-theft-archnemesis.md",
  "C2-010": "C2-010-acorn-economy.md",
  "C2-011": "C2-011-employer-inversion.md",
  "C2-012": "C2-012-technical-stack.md",
  "C2-013": "C2-013-founding-origin.md",
  "C2-014": "C2-014-calvin-and-hobbes-audience.md",
  "C2-015": "C2-015-yy-liberated.md",
  "C2-016": "C2-016-six-invariants-dna.md",
  "C2-017": "C2-017-cognitive-theft-tsunami.md",
  "C2-018": "C2-018-coppa-by-elimination.md",
  "C2-019": "C2-019-dandelion-seeds.md",
  "C2-020": "C2-020-ai-force-multiplier.md",
  "C2-021": "C2-021-employer-as-liberation.md",
  "C2-022": "C2-022-genealogical-artifact.md",
  "C2-023": "C2-023-stack-pending.md",
};

async function getADRRaw(adrId: string): Promise<string | null> {
  const filename = ADR_FILE_MAP[adrId];
  if (!filename) return null;
  try {
    const filePath = path.join(process.cwd(), "content", "case-002", filename);
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
  return adrsCase002.map((adr) => ({ id: adr.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase002(id.toUpperCase());
  if (!adr) return {};
  const title = `${adr.id}: ${adr.title} — YY Method™ Home Edition`;
  const description = `${adr.summary} Decision status: ${adr.status}. Case 002 — YY's World founding architecture.`;
  return {
    title,
    description,
    authors: [{ name: "Ben Chan" }],
    openGraph: {
      title,
      description,
      url: `https://home.yymethod.com/case-002/${adr.id}`,
      siteName: "YY Method™ Home Edition",
      type: "article",
      publishedTime: adr.date,
    },
  };
}

export default async function ADRCase002Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase002(id.toUpperCase());
  if (!adr) notFound();

  const [content, rawContent, dependsOnADRs] = await Promise.all([
    getADRContent(adr.id),
    getADRRaw(adr.id),
    Promise.resolve(adr.dependsOn.map((depId) => getADRCase002(depId)).filter(Boolean)),
  ]);

  const faqItems = rawContent ? extractFaqItems(rawContent) : [];
  const dependents = adrsCase002.filter((a) => a.dependsOn.includes(adr.id));
  const currentNum = parseInt(adr.number);
  const prevADR = adrsCase002.find((a) => parseInt(a.number) === currentNum - 1);
  const nextADR = adrsCase002.find((a) => parseInt(a.number) === currentNum + 1);

  return (
    <>
      <JsonLd data={articleSchema({
        title: `${adr.id}: ${adr.title}`,
        description: adr.summary,
        url: `https://home.yymethod.com/case-002/${adr.id}`,
        datePublished: adr.date,
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "YY Method™ Home Edition", url: "https://home.yymethod.com" },
        { name: "Case 002", url: "https://home.yymethod.com/case-002" },
        { name: adr.id, url: `https://home.yymethod.com/case-002/${adr.id}` },
      ])} />
      {faqItems.length > 0 && <JsonLd data={faqSchema(faqItems)} />}
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">← Case Studies</Link>
        <span>/</span>
        <Link href="/case-002" className="hover:text-foreground">Case #002</Link>
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
          <Badge variant="outline" className="text-xs font-mono">{domainLabelCase002[adr.domain]}</Badge>
          <Badge variant="outline" className="text-xs font-mono">{adr.position}</Badge>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">{adr.title}</h1>
        <div className="flex flex-wrap gap-1.5">
          {adr.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <Separator />

      {/* Meta row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border">
          <CardContent className="pt-4 pb-4 space-y-1">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Date</div>
            <div className="font-mono text-sm">{adr.date}</div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-4 pb-4 space-y-1">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Freshness</div>
            <div className="font-mono text-sm">{adr.freshness}</div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-4 pb-4 space-y-1">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Boundary</div>
            <div className="text-xs text-muted-foreground leading-relaxed">{adr.freshnessNote}</div>
          </CardContent>
        </Card>
      </div>

      {/* Dependency graph */}
      {(dependsOnADRs.length > 0 || dependents.length > 0) && (
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Dependency Graph
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dependsOnADRs.length > 0 && (
              <div className="space-y-1.5">
                <div className="text-xs text-muted-foreground">Depends on</div>
                <div className="flex flex-wrap gap-2">
                  {dependsOnADRs.map((dep) => dep && (
                    <Link
                      key={dep.id}
                      href={`/case-002/${dep.id.toLowerCase()}`}
                      className="flex items-center gap-2 px-3 py-1.5 rounded border border-border hover:bg-muted/40 transition-colors text-xs font-mono"
                    >
                      ← {dep.id}: {dep.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {dependents.length > 0 && (
              <div className="space-y-1.5">
                <div className="text-xs text-muted-foreground">Depended on by</div>
                <div className="flex flex-wrap gap-2">
                  {dependents.map((dep) => (
                    <Link
                      key={dep.id}
                      href={`/case-002/${dep.id.toLowerCase()}`}
                      className="flex items-center gap-2 px-3 py-1.5 rounded border border-border hover:bg-muted/40 transition-colors text-xs font-mono"
                    >
                      {dep.id}: {dep.title} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Full artifact content */}
      {content ? (
        <div
          className="prose prose-invert prose-sm max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h1:text-xl prose-h2:text-base prose-h2:text-muted-foreground prose-h2:uppercase prose-h2:tracking-wider prose-h2:text-xs prose-h2:font-medium
            prose-h3:text-sm prose-h3:font-medium
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground
            prose-strong:text-foreground prose-strong:font-medium
            prose-code:text-xs prose-code:font-mono prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border prose-pre:rounded-lg
            prose-blockquote:border-l-border prose-blockquote:text-muted-foreground
            prose-table:text-xs prose-th:text-muted-foreground prose-th:font-medium prose-td:text-muted-foreground
            prose-hr:border-border"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <Card className="border-border bg-muted/20">
          <CardContent className="pt-4 pb-4">
            <p className="text-xs text-muted-foreground font-mono">
              Full artifact content not available for this ADR.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4">
          <Link href="/case-002" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            ← All ADRs
          </Link>
          {prevADR && (
            <Link
              href={`/case-002/${prevADR.id.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              ← {prevADR.id}
            </Link>
          )}
        </div>
        {nextADR && (
          <Link
            href={`/case-002/${nextADR.id.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            {nextADR.id} →
          </Link>
        )}
      </div>
    </main>
    </>
  );
}
