"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export interface ProcessedSegment {
  id: string;
  type: "ben" | "ai" | "note" | "sep";
  contentHtml: string;
  rawResponseHtml?: string;
  reflectionHtml?: string;
}

export function InterviewView({ segments }: { segments: ProcessedSegment[] }) {
  const responseIds = useMemo(
    () => segments.filter((s) => s.rawResponseHtml).map((s) => s.id),
    [segments]
  );
  const reflectionIds = useMemo(
    () => segments.filter((s) => s.reflectionHtml).map((s) => s.id),
    [segments]
  );

  const [responses, setResponses] = useState<Set<string>>(new Set());
  const [reflections, setReflections] = useState<Set<string>>(new Set());

  const allResponsesShown = responses.size === responseIds.length && responseIds.length > 0;
  const allReflectionsShown = reflections.size === reflectionIds.length && reflectionIds.length > 0;

  const toggleAllResponses = useCallback(() => {
    setResponses(allResponsesShown ? new Set() : new Set(responseIds));
  }, [allResponsesShown, responseIds]);

  const toggleAllReflections = useCallback(() => {
    setReflections(allReflectionsShown ? new Set() : new Set(reflectionIds));
  }, [allReflectionsShown, reflectionIds]);

  const toggleOneResponse = useCallback((id: string) => {
    setResponses((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const toggleOneReflection = useCallback((id: string) => {
    setReflections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          ← Home
        </Link>
        <span>/</span>
        <span className="text-foreground font-mono">Interview with AI</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-xs text-muted-foreground">2026-03-30</span>
          <span className="text-xs px-1.5 py-0.5 rounded border font-mono bg-amber-500/15 text-amber-400 border-amber-500/20">
            Permanent Record
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Interview with AI</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          AI is interviewer. Ben Chan is interviewee. Session: yysworld.com — Design, Fabrication, and Correction.
        </p>
      </div>

      <Separator />

      {/* Context card */}
      <Card className="border-rose-500/20 bg-rose-500/5">
        <CardContent className="pt-4 pb-4 space-y-2">
          <p className="text-xs font-mono text-rose-400 font-semibold uppercase tracking-wider">
            What This Is
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            This is the corrective record for Case 002. In the first draft session, AI extrapolated 12 ADRs
            from operator seeds — some accurate, some fabricated. The operator intentionally allowed this to
            observe what would be invented. This interview is the audit that followed: AI asked, operator
            corrected, operator-supplied reasoning was extracted. C2-013 through C2-023 were built from this
            interview alone.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Ben&apos;s exact words are preserved throughout. AI responses in the ideation phase are
            summarized by default; audit questions are verbatim. Expand either layer below to read the full
            record.
          </p>
          <div className="flex gap-3 pt-1">
            <Link
              href="/case-002"
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
            >
              → Case 002 ADR Registry
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Global toggles */}
      <div className="space-y-2 py-2 border-y border-border">
        <p className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider">
          Optional layers — hidden by default
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={toggleAllResponses}
            className="text-xs font-mono px-3 py-1.5 rounded border border-border bg-muted/20 hover:bg-muted/40 text-muted-foreground hover:text-foreground transition-colors"
          >
            {allResponsesShown ? "Hide all AI responses" : "Show all AI responses"}
            <span className="ml-1.5 text-muted-foreground/50">({responseIds.length})</span>
          </button>
          <button
            onClick={toggleAllReflections}
            className="text-xs font-mono px-3 py-1.5 rounded border border-border bg-muted/20 hover:bg-muted/40 text-muted-foreground hover:text-foreground transition-colors"
          >
            {allReflectionsShown ? "Hide all AI reflections" : "Show all AI reflections"}
            <span className="ml-1.5 text-muted-foreground/50">({reflectionIds.length})</span>
          </button>
        </div>
      </div>

      {/* Interview body */}
      <div className="space-y-0">
        {segments.map((seg) => {
          if (seg.type === "sep") {
            return <div key={seg.id} className="py-3 border-b border-border/30" />;
          }

          if (seg.type === "note") {
            return (
              <div key={seg.id} className="py-4">
                <div
                  className="text-xs text-muted-foreground/70 italic leading-relaxed pl-4 border-l border-border/40"
                  dangerouslySetInnerHTML={{ __html: seg.contentHtml }}
                />
                <ExpandToggles
                  id={seg.id}
                  responseHtml={seg.rawResponseHtml}
                  reflectionHtml={seg.reflectionHtml}
                  responseOpen={responses.has(seg.id)}
                  reflectionOpen={reflections.has(seg.id)}
                  onToggleResponse={toggleOneResponse}
                  onToggleReflection={toggleOneReflection}
                />
              </div>
            );
          }

          if (seg.type === "ben") {
            return (
              <div key={seg.id} className="py-4">
                <div className="flex gap-3">
                  <span className="font-mono text-xs text-blue-400 shrink-0 pt-0.5 w-8">Ben</span>
                  <div
                    className="text-sm text-foreground/90 leading-relaxed flex-1"
                    dangerouslySetInnerHTML={{ __html: seg.contentHtml }}
                  />
                </div>
              </div>
            );
          }

          // ai type
          return (
            <div key={seg.id} className="py-4">
              <div className="flex gap-3">
                <span className="font-mono text-xs text-muted-foreground shrink-0 pt-0.5 w-8">AI</span>
                <div
                  className="text-sm text-muted-foreground italic leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: seg.contentHtml }}
                />
              </div>
              <ExpandToggles
                id={seg.id}
                responseHtml={seg.rawResponseHtml}
                reflectionHtml={seg.reflectionHtml}
                responseOpen={responses.has(seg.id)}
                reflectionOpen={reflections.has(seg.id)}
                onToggleResponse={toggleOneResponse}
                onToggleReflection={toggleOneReflection}
              />
            </div>
          );
        })}
      </div>

      <Separator />

      {/* Footer nav */}
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          ← Home
        </Link>
        <Link
          href="/case-002"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
        >
          Case 002 →
        </Link>
      </div>
    </main>
  );
}

function ExpandToggles({
  id,
  responseHtml,
  reflectionHtml,
  responseOpen,
  reflectionOpen,
  onToggleResponse,
  onToggleReflection,
}: {
  id: string;
  responseHtml?: string;
  reflectionHtml?: string;
  responseOpen: boolean;
  reflectionOpen: boolean;
  onToggleResponse: (id: string) => void;
  onToggleReflection: (id: string) => void;
}) {
  if (!responseHtml && !reflectionHtml) return null;

  return (
    <div className="mt-2 ml-11 space-y-1">
      {/* Toggle buttons row */}
      <div className="flex flex-wrap gap-3">
        {responseHtml && (
          <button
            onClick={() => onToggleResponse(id)}
            className="text-xs font-mono text-amber-500/70 hover:text-amber-400 transition-colors"
          >
            {responseOpen ? "▾ Hide AI response" : "▸ View AI response"}
          </button>
        )}
        {reflectionHtml && (
          <button
            onClick={() => onToggleReflection(id)}
            className="text-xs font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors"
          >
            {reflectionOpen ? "▾ Hide AI reflection" : "▸ View AI reflection"}
          </button>
        )}
      </div>

      {/* Response panel */}
      {responseHtml && responseOpen && (
        <div className="mt-1 pl-3 border-l-2 border-amber-500/30">
          <p className="text-xs font-mono text-amber-500/50 uppercase tracking-wider mb-2">
            AI response
          </p>
          <div
            className="text-xs text-foreground/70 leading-relaxed
              [&_p]:mb-2 [&_p:last-child]:mb-0
              [&_strong]:text-foreground/90 [&_strong]:font-medium
              [&_em]:text-muted-foreground
              [&_table]:w-full [&_table]:text-xs [&_th]:text-left [&_th]:text-muted-foreground [&_th]:font-medium [&_th]:pb-1 [&_td]:text-muted-foreground [&_td]:pr-4 [&_td]:py-0.5
              [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-3 [&_blockquote]:text-muted-foreground [&_blockquote]:italic
              [&_code]:text-xs [&_code]:font-mono [&_code]:bg-muted/50 [&_code]:px-1 [&_code]:rounded"
            dangerouslySetInnerHTML={{ __html: responseHtml }}
          />
        </div>
      )}

      {/* Reflection panel */}
      {reflectionHtml && reflectionOpen && (
        <div className="mt-1 pl-3 border-l-2 border-muted-foreground/20">
          <p className="text-xs font-mono text-muted-foreground/40 uppercase tracking-wider mb-2">
            AI reflection
          </p>
          <div
            className="text-xs text-muted-foreground/80 leading-relaxed
              [&_p]:mb-2 [&_p:last-child]:mb-0
              [&_strong]:text-muted-foreground [&_strong]:font-medium"
            dangerouslySetInnerHTML={{ __html: reflectionHtml }}
          />
        </div>
      )}
    </div>
  );
}
