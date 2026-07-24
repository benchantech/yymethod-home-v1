import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { adrsCase013, getADRCase013, domainLabelCase013 } from "@/lib/adrs-case-013";
import { statusColor } from "@/lib/adrs";

async function getADRRaw(adrId: string): Promise<string | null> {
  const adr = getADRCase013(adrId);
  if (!adr) return null;
  try {
    const filePath = path.join(process.cwd(), "content", "case-013", `${adr.id}-${adr.slug}.md`);
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
  return adrsCase013.map((adr) => ({ id: adr.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase013(id);
  if (!adr) return {};
  const title = `${adr.id}: ${adr.title} — YY Method™ Home Edition`;
  const description = `${adr.summary} Decision status: ${adr.status}. Case 013 — AI video decision reduction.`;
  return {
    title,
    description,
    authors: [{ name: "Ben Chan" }],
    openGraph: {
      title,
      description,
      url: `https://home.yymethod.com/case-013/${adr.id}`,
      siteName: "YY Method™ Home Edition",
      type: "article",
      publishedTime: adr.date,
    },
  };
}

export default async function ADRCase013Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const adr = getADRCase013(id);
  if (!adr) notFound();

  const content = await getADRContent(adr.id);
  const dependsOnADRs = adr.dependsOn.map((depId) => getADRCase013(depId)).filter(Boolean);
  const dependents = adrsCase013.filter((a) => a.dependsOn.includes(adr.id));
  const currentNum = parseInt(adr.number);
  const prevADR = adrsCase013.find((a) => parseInt(a.number) === currentNum - 1);
  const nextADR = adrsCase013.find((a) => parseInt(a.number) === currentNum + 1);

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">← Case Studies</Link>
        <span>/</span>
        <Link href="/case-013" className="hover:text-foreground">Case #013</Link>
        <span>/</span>
        <span className="text-foreground font-mono">{adr.id}</span>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">{adr.id}</span>
          <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${statusColor[adr.status]}`}>
            {adr.status}
          </span>
          <Badge variant="outline" className="text-xs font-mono">{domainLabelCase013[adr.domain]}</Badge>
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
              <span className="text-xs px-1.5 py-0.5 rounded border font-mono bg-emerald-500/15 text-emerald-400 border-emerald-500/20">
                {adr.freshness}
              </span>
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
                  <Link key={dep.id} href={`/case-013/${dep.id.toLowerCase()}`}
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
                  <Link key={dep.id} href={`/case-013/${dep.id.toLowerCase()}`}
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
          <Link href={`/case-013/${prevADR.id.toLowerCase()}`}
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            ← {prevADR.id}
          </Link>
        ) : (
          <span />
        )}
        <Link href="/case-013" className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
          Case #013 Registry
        </Link>
        {nextADR ? (
          <Link href={`/case-013/${nextADR.id.toLowerCase()}`}
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
