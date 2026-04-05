import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase004, getADRCase004, domainLabelCase004 } from "@/lib/adrs-case-004";
import { statusColor } from "@/lib/adrs";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/json-ld";
import { extractFaqItems } from "@/lib/faq-schema";

const ADR_FILE_MAP: Record<string, string> = {
  "C4-001": "C4-001-local-first-sensitive-compute.md",
  "C4-002": "C4-002-control-surfaces-from-execution-surfaces.md",
  "C4-003": "C4-003-private-overlay-not-public-exposure.md",
  "C4-004": "C4-004-preserve-method-not-deployment.md",
  "C4-005": "C4-005-role-specific-machine-architecture.md",
  "C4-006": "C4-006-portable-secure-work-node.md",
  "C4-007": "C4-007-office-automation-node-sleep-policy.md",
  "C4-008": "C4-008-mobile-command-first-interaction.md",
  "C4-009": "C4-009-command-system-progressive-promotion.md",
  "C4-010": "C4-010-admission-control-heavy-local-inference.md",
  "C4-011": "C4-011-guardrails-status-kill-recovery.md",
  "C4-012": "C4-012-power-policy-by-machine-role.md",
  "C4-013": "C4-013-portable-node-dual-mode-operation.md",
  "C4-014": "C4-014-tablet-as-auxiliary-surface.md",
  "C4-015": "C4-015-method-ownership-client-boundary.md",
  "C4-016": "C4-016-publish-reasoning-obfuscate-deployment.md",
};

async function getADRRaw(adrId: string): Promise<string | null> {
  const filename = ADR_FILE_MAP[adrId];
  if (!filename) return null;
  try {
    const filePath = path.join(process.cwd(), "content", "case-004", filename);
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
  return adrsCase004.map((adr) => ({ id: adr.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase004(id.toUpperCase());
  if (!adr) return {};
  const title = `${adr.id}: ${adr.title} — YY Method™ Home Edition`;
  const description = `${adr.summary} Decision status: ${adr.status}. Case 004 — Local-First Remote Work Orchestration for Sensitive Compute.`;
  return {
    title,
    description,
    authors: [{ name: "Ben Chan" }],
    openGraph: {
      title,
      description,
      url: `https://home.yymethod.com/case-004/${adr.id}`,
      siteName: "YY Method™ Home Edition",
      type: "article",
      publishedTime: adr.date,
    },
  };
}

export default async function ADRCase004Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase004(id.toUpperCase());
  if (!adr) notFound();

  const [content, rawContent, dependsOnADRs] = await Promise.all([
    getADRContent(adr.id),
    getADRRaw(adr.id),
    Promise.resolve(adr.dependsOn.map((depId) => getADRCase004(depId)).filter(Boolean)),
  ]);

  const faqItems = rawContent ? extractFaqItems(rawContent) : [];
  const dependents = adrsCase004.filter((a) => a.dependsOn.includes(adr.id));
  const currentNum = parseInt(adr.number);
  const prevADR = adrsCase004.find((a) => parseInt(a.number) === currentNum - 1);
  const nextADR = adrsCase004.find((a) => parseInt(a.number) === currentNum + 1);

  return (
    <>
      <JsonLd data={articleSchema({
        title: `${adr.id}: ${adr.title}`,
        description: adr.summary,
        url: `https://home.yymethod.com/case-004/${adr.id}`,
        datePublished: adr.date,
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "YY Method™ Home Edition", url: "https://home.yymethod.com" },
        { name: "Case 004", url: "https://home.yymethod.com/case-004" },
        { name: adr.id, url: `https://home.yymethod.com/case-004/${adr.id}` },
      ])} />
      {faqItems.length > 0 && <JsonLd data={faqSchema(faqItems)} />}
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">← Case Studies</Link>
        <span>/</span>
        <Link href="/case-004" className="hover:text-foreground">Case #004</Link>
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
          <Badge variant="outline" className="text-xs font-mono">{domainLabelCase004[adr.domain]}</Badge>
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
                  <Link key={dep.id} href={`/case-004/${dep.id.toLowerCase()}`}
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
                  <Link key={dep.id} href={`/case-004/${dep.id.toLowerCase()}`}
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
          <Link href={`/case-004/${prevADR.id.toLowerCase()}`}
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            ← {prevADR.id}
          </Link>
        ) : (
          <Link href="/case-004" className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            ← Case 004
          </Link>
        )}
        {nextADR && (
          <Link href={`/case-004/${nextADR.id.toLowerCase()}`}
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            {nextADR.id} →
          </Link>
        )}
      </div>
    </main>
    </>
  );
}
