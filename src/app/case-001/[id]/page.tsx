import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrs, getADR, statusColor, domainLabel } from "@/lib/adrs";

// Map ADR id to filename
const ADR_FILE_MAP: Record<string, string> = {
  "ADR-001": "ADR-001-entity-termination-timing.md",
  "ADR-002": "ADR-002-final-payroll-strategy.md",
  "ADR-003": "ADR-003-employee-vs-employer-contribution-priority.md",
  "ADR-004": "ADR-004-distribution-reclassification-rejected.md",
  "ADR-005": "ADR-005-retirement-vehicle-transition.md",
  "ADR-006": "ADR-006-cash-banking-execution.md",
  "ADR-007": "ADR-007-tax-bracket-combined-rate.md",
  "ADR-008": "ADR-008-employer-contribution-basis-correction.md",
  "ADR-009": "ADR-009-daf-charitable-strategy.md",
  "ADR-010": "ADR-010-fsa-election-strategy.md",
  "ADR-011": "ADR-011-paychex-deferral-dca-strategy.md",
  "ADR-012": "ADR-012-minor-child-employment.md",
  "ADR-013": "ADR-013-operator-identity-mastery-profile.md",
  "ADR-014": "ADR-014-employer-profit-sharing-contribution.md",
  "ADR-015": "ADR-015-hsa-deployment-backdoor-roth.md",
  "ADR-016": "ADR-016-ai-capability-assessment-march-2026.md",
  "ADR-017": "ADR-017-case-study-methodology-notice.md",
  "ADR-018": "ADR-018-search-seo-aeo-geo.md",
  "ADR-019": "ADR-019-pro-rata-rule-system-invariant.md",
  "ADR-020": "ADR-020-ira-rollover-employer-401k-phase1.md",
  "ADR-021": "ADR-021-backdoor-roth-annual-cycle-phase2.md",
  "ADR-022": "ADR-022-employer-vs-solo-401k-priority.md",
  "ADR-023": "ADR-023-solo-401k-eligibility-correction.md",
};

async function getADRContent(adrId: string): Promise<string | null> {
  const filename = ADR_FILE_MAP[adrId];
  if (!filename) return null;
  try {
    const filePath = path.join(process.cwd(), "content", "adrs", filename);
    let raw = await fs.readFile(filePath, "utf-8");
    // Strip the header metadata block (title + key-value pairs) before the first --- divider.
    // These fields are already rendered from structured data in the page header.
    const dividerIndex = raw.indexOf('\n---\n');
    if (dividerIndex !== -1) {
      raw = raw.slice(dividerIndex + 5);
    }
    return await marked(raw, { gfm: true, breaks: false }) as string;
  } catch {
    return null;
  }
}

export function generateStaticParams() {
  return adrs.map((adr) => ({ id: adr.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADR(id.toUpperCase());
  if (!adr) return {};
  return { title: `${adr.id}: ${adr.title} — YY Method™ Home Edition` };
}

export default async function ADRPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADR(id.toUpperCase());
  if (!adr) notFound();

  const [content, dependsOnADRs] = await Promise.all([
    getADRContent(adr.id),
    Promise.resolve(adr.dependsOn.map((depId) => getADR(depId)).filter(Boolean)),
  ]);

  const dependents = adrs.filter((a) => a.dependsOn.includes(adr.id));
  const currentNum = parseInt(adr.number);
  const prevADR = adrs.find((a) => parseInt(a.number) === currentNum - 1);
  const nextADR = adrs.find((a) => parseInt(a.number) === currentNum + 1);

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">← Case Studies</Link>
        <span>/</span>
        <Link href="/case-001" className="hover:text-foreground">Case #001</Link>
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
          <Badge variant="outline" className="text-xs font-mono">{domainLabel[adr.domain]}</Badge>
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
                      href={`/case-001/${dep.id.toLowerCase()}`}
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
                      href={`/case-001/${dep.id.toLowerCase()}`}
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

      {/* Legal disclaimer */}
      <Card className="border-muted-foreground/20 bg-muted/10">
        <CardContent className="pt-3 pb-3">
          <p className="text-xs text-muted-foreground leading-relaxed font-mono">
            <span className="text-foreground/60 font-semibold">Case Study Notice:</span>{" "}
            This ADR is part of an illustrative case study demonstrating the YY Method™ Home Edition v2.3.
            Numbers are approximate and generalized. Math is illustrative only.
            Not financial, tax, or legal advice — consult qualified professionals before making any financial decisions.
            See ADR-017 for full framing notice.
          </p>
        </CardContent>
      </Card>

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
          <Link href="/case-001" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            ← All ADRs
          </Link>
          {prevADR && (
            <Link
              href={`/case-001/${prevADR.id.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              ← {prevADR.id}
            </Link>
          )}
        </div>
        {nextADR && (
          <Link
            href={`/case-001/${nextADR.id.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            {nextADR.id} →
          </Link>
        )}
      </div>
    </main>
  );
}
