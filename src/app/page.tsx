import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, type CaseStudy } from "@/lib/cases";
import { JsonLd, personSchema } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "YY Method™ Cases & ADRs — Ben Chan",
  description: "Preserve judgment under constraint. A live registry of decisions made under the YY Method — case studies, ADR records, and applied reasoning across tax, systems, and life architecture.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "YY Method™ Cases & ADRs — Ben Chan",
    description: "A live registry of decisions made under the YY Method — case studies, ADR records, and applied reasoning.",
    url: "https://home.yymethod.com",
    siteName: "YY Method™ Cases & ADRs — Ben Chan",
    type: "website",
  },
};

const statusInk: Record<CaseStudy["status"], string> = {
  "Complete": "text-[#5f7a4a]",
  "In Progress": "text-[#a3672c]",
  "Rejected": "text-[#a04c2e]",
  "Superseded": "text-[#64503a]",
  "Coming Soon": "text-[#64503a]",
};

const isScar = (status: CaseStudy["status"]) => status === "Rejected" || status === "Superseded";

const artifacts = [
  {
    href: "/framework",
    label: "YY FRAMEWORK",
    badge: "v2.3",
    description: "Core formula. Eight layers. Canonical principles. The method itself.",
  },
  {
    href: "/agent",
    label: "AGENT SYSTEM",
    badge: "v2",
    description: "Builder / Test / Review / Docs. Ambiguity queue. Executor contract.",
  },
  {
    href: "/interview",
    label: "INTERVIEW WITH AI",
    badge: "2026-03-30",
    description: "Word-for-word audit of the Case 002 first draft. AI extrapolated; operator corrected. The scar record.",
  },
];

export default function Home() {
  const inProgress = caseStudies.filter((c) => c.status === "In Progress").length;

  return (
    <main className="flex-1">
      <JsonLd data={personSchema()} />

      {/* Hero */}
      <div className="px-6 md:px-12 pt-[72px] pb-[54px] bg-gradient-to-b from-[#f3e9dc] to-[#eeddc4] border-b border-border">
        <div className="max-w-[860px] mx-auto">
          <div className="font-mono text-[12px] tracking-[.16em] text-[#96683f]">FOR A LIFE · v2.3 · INDEPENDENTLY OWNED</div>
          <h1 className="mt-[18px] text-[40px] md:text-[56px] font-semibold leading-[1.06] tracking-[-.01em] text-[#3f2b16]">
            Preserve judgment under&nbsp;constraint.
          </h1>
          <p className="mt-6 max-w-[700px] text-[18px] leading-[1.65] text-[#43321f]">
            The YY Method is a personal epistemological framework for making decisions durable — structured so they
            survive time, correction, and handoff to AI. It applies everywhere judgment is required under constraint:
            tax strategy, system design, creative work, life architecture.
          </p>
          <div className="flex gap-[22px] mt-[30px] items-center flex-wrap">
            <a href="#cases" className="font-mono text-[13px] px-6 py-3 bg-[#7a4a24] text-[#f6ecdd] font-medium">
              Browse the cases
            </a>
            <a
              href="https://yymethod.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#96683f] border-b border-[#96683f] pb-0.5"
            >
              Canonical framework overview → yymethod.com
            </a>
          </div>
        </div>
      </div>

      {/* Provenance */}
      <div className="border-b border-border">
        <div className="max-w-[860px] mx-auto grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 sm:gap-8 px-6 md:px-12 py-[38px]">
          <div className="font-mono text-[12px] tracking-[.16em] text-[#96683f] leading-loose">
            PROVENANCE<br />
            <span className="text-[#8a7358]">RECORD OF<br />OWNERSHIP</span>
          </div>
          <p className="text-[15.5px] leading-[1.7] text-[#43321f]">
            This is YY Method™ Home Edition — independently owned and controlled. v2.3 is the last version personally
            owned by the method&apos;s author. The method has since been applied within a professional employment context.
            The method itself — its principles, decision structures, and reasoning patterns — remains the author&apos;s
            personal property; it predated the employment and outlasts it. What belongs to the employer is the
            work-product: the specific implementations, operational refinements, and decisions produced within that
            context. This site publishes reasoning chains, not deployments. The boundary is governed by{" "}
            <Link href="/case-004/c4-015" className="text-[#7a4a24] underline underline-offset-2">C4-015</Link> and{" "}
            <Link href="/case-004/c4-016" className="text-[#7a4a24] underline underline-offset-2">C4-016</Link>.
          </p>
        </div>
      </div>

      {/* About */}
      <div className="border-b border-border">
        <div className="max-w-[860px] mx-auto grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 sm:gap-8 px-6 md:px-12 py-[38px]">
          <div className="font-mono text-[12px] tracking-[.16em] text-[#96683f] leading-loose">ABOUT THIS<br />SYSTEM</div>
          <div>
            <p className="text-[15.5px] leading-[1.7] text-[#43321f]">
              This is the YY Method™ Home Edition case study archive. Each case study applies the method to a
              real-world complex problem, producing a structured set of ADRs (Architecture Decision Records) that
              capture the full reasoning chain — decisions made, alternatives rejected, corrections applied, and
              freshness boundaries defined.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#43321f]">
              Case studies are illustrative and anonymized. Numbers are approximate. The method is the message. More
              case studies will be added over time — some from the method&apos;s author, some from other practitioners. As
              the archive grows, the method itself becomes the through-line.
            </p>
          </div>
        </div>
      </div>

      {/* Case ledger */}
      <div id="cases" className="max-w-[860px] mx-auto px-6 md:px-12 pt-[46px] pb-5">
        <div className="flex justify-between items-baseline flex-wrap gap-3">
          <div className="font-mono text-[12px] tracking-[.16em] text-[#96683f]">THE HOUSEHOLD LEDGER — CASE STUDIES</div>
          <div className="font-mono text-xs text-[#64503a]">
            {caseStudies.length} published · {inProgress} in progress
          </div>
        </div>

        <div className="flex flex-col gap-[18px] mt-[22px]">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              href={cs.href}
              className={`block shadow-[0_2px_5px_rgba(90,60,25,.09)] hover:shadow-[0_4px_12px_rgba(90,60,25,.18)] hover:-translate-y-px transition px-[30px] py-6 border ${
                isScar(cs.status) ? "bg-[#f5ead6] border-[#cdae87]" : "bg-[#faf4e8] border-border"
              }`}
            >
              <div className="flex justify-between items-baseline font-mono text-[12px] flex-wrap gap-2">
                <span className="text-[#96683f]">
                  CASE #{cs.number} · <span className={`font-semibold ${statusInk[cs.status]}`}>{cs.status.toUpperCase()}</span>
                </span>
                <span className="text-[#64503a]">{cs.date} · {cs.adrCount} ADRs</span>
              </div>
              <div className="text-[22px] font-semibold leading-[1.3] mt-2.5 text-[#3f2b16]">{cs.title}</div>
              <div className="text-[14px] italic text-[#96683f] mt-1.5">{cs.subtitle}</div>
              <p className="mt-3 text-[15px] leading-[1.62] text-[#43321f]">{cs.description}</p>
            </Link>
          ))}
        </div>

        <p className="mt-[26px] text-[15px] italic text-[#64503a] max-w-[640px]">
          Rejected cases are never superseded — the scar record is preserved intact. The registry audits itself.
        </p>
      </div>

      {/* Disclosure */}
      <div className="max-w-[860px] mx-auto px-6 md:px-12 pt-[30px] pb-[46px]">
        <p className="font-mono text-[12px] leading-[1.8] text-[#64503a]">
          Disclosure: Case studies published here are illustrative demonstrations of the YY Method™ Home Edition
          applied to real-world problems. Numbers are approximate and generalized. Math is illustrative only. Nothing
          here constitutes financial, tax, legal, or professional advice of any kind. Consult qualified professionals
          before making any decisions. See individual ADRs for case-specific framing notices.
        </p>
      </div>

      {/* System artifacts */}
      <div className="border-t border-border bg-[#eeddc4]">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 pt-10 pb-[46px]">
          <div className="font-mono text-[12px] tracking-[.16em] text-[#96683f] mb-5">SYSTEM ARTIFACTS</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {artifacts.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-[#faf4e8] border border-border px-6 py-[22px] hover:shadow-[0_4px_12px_rgba(90,60,25,.18)] transition-shadow"
              >
                <div className="flex justify-between font-mono text-[11.5px] text-[#96683f]">
                  <span>{a.label}</span>
                  <span>{a.badge}</span>
                </div>
                <p className="mt-2.5 text-[15px] leading-[1.55] text-[#43321f]">{a.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
