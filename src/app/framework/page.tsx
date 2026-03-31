import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YY Framework — YY Method™ Home Edition",
  description: "The YY Method core formula: eight layers, six invariants, canonical principles. Compression · Scars · Survivability · Explainability · Timestamping · Discipline.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "YY Framework — YY Method™ Home Edition",
    description: "The YY Method core formula: eight layers, six invariants, canonical principles.",
    url: "https://home.yymethod.com/framework",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  YY_LAYERS,
  YY_CORE_FORMULA,
  YY_PRINCIPLES,
  CANONICAL_TEST,
  CONTROLLED_FLOW,
} from "@/lib/framework";

export default function FrameworkPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground">Framework</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">YY METHOD</span>
          <Badge variant="outline" className="font-mono text-xs">v2.3</Badge>
          <Badge variant="outline" className="font-mono text-xs">Personal/Home Variant</Badge>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">YY Framework</h1>
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          A method for preserving judgment under constraint in personal systems. Captures not only what was decided,
          but why it was decided, what was rejected, what had to be corrected, and what must remain true for the decision to hold.
        </p>
      </div>

      <Separator />

      {/* Core formula */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Core Formula</h2>
        <div className="p-5 rounded-lg border border-border bg-card font-mono text-sm tracking-wide">
          {YY_CORE_FORMULA}
        </div>
      </div>

      {/* Eight layers */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Standard Layers</h2>
        <div className="space-y-2">
          {YY_LAYERS.map((layer) => (
            <div key={layer.id} className="flex items-start gap-4 p-3.5 rounded-lg border border-border hover:bg-muted/30 transition-colors">
              <span className="font-mono text-xs text-muted-foreground pt-0.5 shrink-0 w-8">{layer.id}</span>
              <div>
                <div className="text-sm font-medium">{layer.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{layer.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Principles */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Canonical Principles</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {YY_PRINCIPLES.map((p, i) => (
            <div key={p.name} className="p-4 rounded-lg border border-border bg-card space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium">{p.name}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Controlled flow */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Controlled Flow System</h2>
        <Card className="border-border">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-center justify-center gap-4 font-mono text-sm py-4">
              {CONTROLLED_FLOW.nodes.map((node, i) => (
                <span key={node} className="flex items-center gap-4">
                  <span className="px-3 py-1.5 rounded border border-border bg-muted/30">{node}</span>
                  {i < CONTROLLED_FLOW.nodes.length - 1 && (
                    <span className="text-muted-foreground">→</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2 font-mono">
              {CONTROLLED_FLOW.invariant}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Canonical test */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Canonical Test</h2>
        <p className="text-xs text-muted-foreground">A Personal/Home YY artifact is successful if it:</p>
        <div className="space-y-2">
          {CANONICAL_TEST.map((test, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-md bg-muted/20">
              <span className="text-emerald-400 text-xs pt-0.5">✓</span>
              <span className="text-sm">{test}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Personal/Home Use Cases</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            "Device & account architecture",
            "Personal / client / employer separation",
            "Family-facing technology boundaries",
            "AI usage protocols",
            "Capture and promotion systems",
            "Household decision artifacts",
            "Home operating systems",
            "Tax optimization decisions",
            "Prompt engineering ADRs",
          ].map((uc) => (
            <div key={uc} className="text-xs p-2.5 rounded border border-border text-muted-foreground">
              {uc}
            </div>
          ))}
        </div>
      </div>

      {/* Motto */}
      <div className="py-4 border-t border-border text-center space-y-1">
        {["Capture broadly.", "Decide deliberately.", "Promote selectively.", "Protect what must remain clean."].map((line) => (
          <p key={line} className="text-xs text-muted-foreground font-mono">{line}</p>
        ))}
      </div>
    </main>
  );
}
