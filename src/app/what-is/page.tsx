import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "What Is the YY Method? — Ben Chan",
  description:
    "Human first, AI second. The YY Method is a methodology for extracting, structuring, and preserving institutional knowledge — using the Capture → Why → Why-Not → Commit → Timestamp loop.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "What Is the YY Method? — Ben Chan",
    description:
      "Human first, AI second. The YY Method extracts, structures, and preserves institutional knowledge in artifacts readable by both humans and AI systems.",
    url: "https://home.yymethod.com/what-is",
    siteName: "YY Method™",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the YY Method?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The YY Method is a personal professional methodology for extracting, structuring, and preserving institutional knowledge — specifically the reasoning behind decisions that normally exists only inside people's heads. Developed by Ben Chan, it uses a five-step loop (Capture → Why → Why-Not → Commit → Timestamp) to produce structured knowledge artifacts that are durable, queryable, and readable by both humans and AI systems.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'Human first, AI second' mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the YY Method, 'human first, AI second' is the governing principle for AI integration: humans extract and encode knowledge first; AI reads and operates against those artifacts second. AI is not used to draft knowledge artifacts — it synthesizes, cross-references, and generates questions against human-captured content. Human captures → AI reads. Not: AI drafts → human reviews.",
      },
    },
    {
      "@type": "Question",
      name: "How do you use the YY Method?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The YY Method uses a five-step loop: 1. Capture — state what is actually known, including what lives only in someone's head. 2. Why — record the reasoning behind the decision. 3. Why-Not — record what was considered and rejected, and what the decision depends on. 4. Commit — encode into a structured, queryable artifact. 5. Timestamp — mark when captured and define the specific expiration condition. The Why-Not step is non-optional.",
      },
    },
    {
      "@type": "Question",
      name: "What is the YY Method core loop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The YY Method core loop is: Capture → Why → Why-Not → Commit → Timestamp. Each artifact moves through these five stages, producing a structured reasoning chain that captures not only what was decided but the constraints, rejected alternatives, and a defined freshness boundary.",
      },
    },
    {
      "@type": "Question",
      name: "What is YY Method AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The YY Method's approach to AI is 'human first, AI second.' After human capture, AI can synthesize, cross-reference, flag inconsistencies, and query across the full artifact set. In a hierarchical knowledge system, AI's active role is question generation: when an upstream artifact changes, AI identifies affected downstream nodes and surfaces the specific questions a human must answer to re-verify each one.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the YY Method and standard documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard documentation records what is. The YY Method records what is, what was considered against it, and what the decision depends on. The Why-Not step — capturing rejected alternatives and breaking conditions — is what separates YY artifacts from ordinary documentation. Documentation fed to AI without this structure produces hallucinations; YY artifacts are designed to make AI responses trustworthy.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use the YY Method",
  description:
    "The five-step loop for creating YY Method knowledge artifacts that preserve the reasoning behind decisions for both human and AI consumption.",
  author: {
    "@type": "Person",
    "@id": "https://benchantech.com/#person",
    name: "Ben Chan",
  },
  step: [
    {
      "@type": "HowToStep",
      position: "1",
      name: "Capture",
      text: "State what is actually known about a system, decision, or constraint — including what lives only in someone's head.",
    },
    {
      "@type": "HowToStep",
      position: "2",
      name: "Why",
      text: "Record why the decision was made, why the system works the way it does, why the constraint exists.",
    },
    {
      "@type": "HowToStep",
      position: "3",
      name: "Why-Not",
      text: "Record what was considered and rejected, what the decision depends on being true, what would break it. This step is not optional.",
    },
    {
      "@type": "HowToStep",
      position: "4",
      name: "Commit",
      text: "Encode the result into a structured artifact: a reasoning chain that can be queried.",
    },
    {
      "@type": "HowToStep",
      position: "5",
      name: "Timestamp",
      text: "Mark when this was captured and define the specific expiration condition — the event that would make this artifact stale.",
    },
  ],
};

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "YY Method",
  description:
    "A personal professional methodology for extracting, structuring, and preserving institutional knowledge into structured artifacts readable by both humans and AI systems. The core loop: Capture → Why → Why-Not → Commit → Timestamp. Developed by Ben Chan.",
  url: "https://yymethod.com",
  author: {
    "@type": "Person",
    "@id": "https://benchantech.com/#person",
    name: "Ben Chan",
  },
};

const LOOP_STEPS = [
  {
    step: "1",
    name: "Capture",
    body: "State what is actually known about a system, decision, or constraint. Not what the documentation says. What is actually true — including what lives only in someone's head.",
  },
  {
    step: "2",
    name: "Why",
    body: "Record why the decision was made, why the system works the way it does, why the constraint exists. This is the first branch.",
  },
  {
    step: "3",
    name: "Why-Not",
    body: "Record what was considered and rejected, what the decision depends on being true, what would break it. This is the inversion step. It is not optional.",
    highlight: true,
  },
  {
    step: "4",
    name: "Commit",
    body: "Encode the result into a structured artifact: a reasoning chain that can be queried. A durable, timestamped act of record.",
  },
  {
    step: "5",
    name: "Timestamp",
    body: "Mark when this was captured, by whom, under what conditions. Include a defined expiration condition — the specific event that would make this artifact stale. Without this, a freshness marker is theater.",
  },
];

const NOT_LIST = [
  {
    label: "Standard documentation",
    body: "Documentation records what is. This method records what is, what was considered, and what it depends on.",
  },
  {
    label: "Knowledge management",
    body: "KM systems store content. This method structures reasoning.",
  },
  {
    label: "AI enablement",
    body: "AI tooling creates capability. This method creates the grounding that makes AI capability trustworthy.",
  },
  {
    label: "Onboarding systems",
    body: "Onboarding teaches procedures. This method encodes judgment.",
  },
  {
    label: "Software architecture",
    body: "Architecture defines what to build. This method encodes why it was built that way.",
  },
];

export default function WhatIsPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-12">
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={definedTermSchema} />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4">
        <Link href="/" className="hover:text-foreground transition-colors">
          YY Method™
        </Link>
        <span>/</span>
        <span className="text-foreground">What Is the YY Method?</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">YY Method™</span>
          <Badge variant="outline" className="font-mono text-xs">v2.3</Badge>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight leading-snug">
          What Is the YY Method?
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          The YY Method is a personal professional methodology for extracting, structuring, and preserving
          institutional knowledge — specifically the reasoning behind decisions that normally exists only
          inside people&apos;s heads. Developed by Ben Chan, it produces structured knowledge artifacts
          readable by both humans and AI systems.
        </p>
        <p className="text-sm font-mono text-muted-foreground">
          <a href="https://yymethod.com" className="underline underline-offset-2 hover:text-foreground transition-colors">
            yymethod.com
          </a>
          {" "}— canonical framework authority
        </p>
      </div>

      <Separator />

      {/* Human First, AI Second */}
      <section id="human-first-ai-second" className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Human First, AI Second
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl">
          The YY Method&apos;s governing principle for AI integration:{" "}
          <span className="font-medium text-foreground">humans capture, AI reads.</span>{" "}
          AI is powerful against well-structured knowledge and destructive against incomplete knowledge.
          The method&apos;s discipline is in the capture sequence — the human extracts and encodes the
          reasoning first; AI then synthesizes, cross-references, and flags inconsistencies against a
          grounded artifact set.
        </p>
        <Card className="border-border bg-card max-w-2xl">
          <CardContent className="pt-4 pb-4 space-y-2">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-mono text-foreground/80">Human captures → AI reads.</span>
              {" "}Not: AI drafts → human reviews. The second sequence looks like efficiency.
              It is a quality inversion. AI-generated summaries produced before artifacts exist
              have no Why-Not, no constraint marking, no freshness boundary. They are inferences
              treated as facts.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* The Core Loop */}
      <section id="the-core-loop" className="space-y-5">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          The Core Loop: How to Use the YY Method
        </h2>
        <div className="p-4 rounded-lg border border-border bg-card font-mono text-sm tracking-wide text-center">
          Capture → Why → Why-Not → Commit → Timestamp
        </div>
        <div className="space-y-3">
          {LOOP_STEPS.map((s) => (
            <div
              key={s.step}
              className={`flex items-start gap-4 p-3.5 rounded-lg border transition-colors ${
                s.highlight
                  ? "border-amber-800/40 bg-amber-950/20"
                  : "border-border hover:bg-muted/30"
              }`}
            >
              <span className="font-mono text-xs text-muted-foreground pt-0.5 shrink-0 w-4">{s.step}</span>
              <div>
                <span className="text-sm font-medium">{s.name}</span>
                {s.highlight && (
                  <Badge variant="outline" className="ml-2 font-mono text-xs border-amber-800/50 text-amber-600">
                    non-optional
                  </Badge>
                )}
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          The Why-Not step is what separates this from standard documentation. Standard documentation
          records what is. The YY Method records what is, what was considered against it, and what it
          depends on. That difference is the difference between a knowledge artifact that is useful
          and one that is hazardous when fed to an AI.
        </p>
      </section>

      <Separator />

      {/* What It Produces */}
      <section id="what-the-yy-method-produces" className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          What the YY Method Produces
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Applied to a software system or organization, the YY Method produces{" "}
          <span className="text-foreground font-medium">structured knowledge artifacts</span>:
          encoded records of a system&apos;s reasoning chain, decision history, constraints, intent,
          and tribal context. Each artifact captures:
        </p>
        <div className="grid md:grid-cols-2 gap-2 max-w-2xl">
          {[
            { label: "Decision record", body: "What was decided, when, by whom, under what constraints" },
            { label: "Intent", body: "What problem the decision was solving; what outcome was expected" },
            { label: "Constraints", body: "What shaped the decision — technical, organizational, historical" },
            { label: "Rejected alternatives", body: "What was considered and not chosen, and why" },
            { label: "Assumptions", body: "What the decision depends on being true; what breaks it if those change" },
            { label: "Freshness marker", body: "When captured; the specific event that would make this stale" },
          ].map((item) => (
            <div key={item.label} className="p-3 rounded-lg border border-border bg-card space-y-1">
              <div className="text-xs font-medium">{item.label}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* YY Method AI */}
      <section id="yy-method-ai" className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          YY Method and AI
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          After human capture, AI can synthesize, cross-reference, flag inconsistencies, and query
          across the full artifact set. In a hierarchical knowledge system, AI&apos;s active role
          is <span className="text-foreground">question generation</span>: when an upstream artifact
          changes, AI identifies affected downstream nodes and surfaces the specific questions a human
          must answer to re-verify each one. It does not answer those questions. It makes sure they
          get asked.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          The method is specifically designed to make AI systems trustworthy by grounding them in
          human-authored knowledge artifacts — not AI-generated summaries that have no Why-Not,
          no constraint marking, and no defined freshness boundary.
        </p>
      </section>

      <Separator />

      {/* What It Is Not */}
      <section id="what-the-yy-method-is-not" className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          What the YY Method Is Not
        </h2>
        <div className="space-y-2 max-w-2xl">
          {NOT_LIST.map((item) => (
            <div key={item.label} className="flex gap-3 text-sm py-1">
              <span className="text-muted-foreground/40 shrink-0 select-none">—</span>
              <div>
                <span className="font-medium">{item.label}</span>
                <span className="text-muted-foreground mx-2">·</span>
                <span className="text-muted-foreground">{item.body}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Navigation */}
      <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
        <Link href="/framework" className="hover:text-foreground transition-colors underline underline-offset-2">
          Framework layers & principles →
        </Link>
        <Link href="/" className="hover:text-foreground transition-colors underline underline-offset-2">
          Case studies →
        </Link>
        <a
          href="https://yymethod.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors underline underline-offset-2"
        >
          yymethod.com (canonical) →
        </a>
      </div>
    </main>
  );
}
