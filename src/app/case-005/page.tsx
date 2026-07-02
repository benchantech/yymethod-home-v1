import type { Metadata } from "next";
import Link from "next/link";
import { adrsCase005, type ADRCase005Domain } from "@/lib/adrs-case-005";
import type { ADRStatus } from "@/lib/adrs";

export const metadata: Metadata = {
  title: "Case 005: Family Move Architecture — YY Method™ Home Edition",
  description: "20 ADRs capturing and closing a family housing decision. A lifestyle upgrade collides with a 7-figure opportunity cost, a split household, a rejected split-time model, and a funding trilemma. Closing ADRs establish the decision architecture: default stay as the permanent baseline, a six-condition unicorn gate, three event-driven reopen triggers, a hard ban on time-based review, and non-forced financing as a structural disqualifier. The question is closed.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Case 005: Family Move Architecture — YY Method™ Home Edition",
    description: "20 ADRs: housing upgrade vs. compounding, family alignment, spouse protection, intentional stay, unicorn move gate, reopen triggers, no time-based review, and non-forced financing as structural disqualifier.",
    url: "https://home.yymethod.com/case-005",
    siteName: "YY Method™ Home Edition",
    type: "article",
  },
};

const posture = [
  { tag: "BASELINE", title: "Default stay — permanent baseline", body: "The current home wins by default. Staying is not a postponed decision; it is the decision." },
  { tag: "GATE", title: "Six-condition unicorn gate", body: "Every condition must be met in full before any move is permitted. Partial matches do not accumulate." },
  { tag: "TRIGGERS", title: "Three event-driven reopen triggers", body: "The question reopens only when reality changes — never on a schedule." },
  { tag: "BAN", title: "Hard ban on time-based review", body: "No annual revisits. Calendar time is not evidence." },
  { tag: "DISQUALIFIER", title: "Non-forced financing", body: "Any funding path that forces the family's hand is a structural disqualifier, regardless of upside." },
  { tag: "REFRAME", title: "Open houses as blueprint extraction", body: "Looking continues — as research for the aging-in-place phase, not as shopping." },
];

const ledgerGroups: { domain: ADRCase005Domain; name: string }[] = [
  { domain: "framing", name: "FRAMING" },
  { domain: "family", name: "FAMILY" },
  { domain: "paths", name: "PATHS" },
  { domain: "resolution", name: "RESOLUTION" },
];

const ledgerStatus: Partial<Record<ADRStatus, { label: string; color: string }>> = {
  "Decided": { label: "ACCEPTED", color: "text-[#5f7a4a]" },
  "Decided — Rejected": { label: "REJECTED", color: "text-[#a04c2e]" },
  "Decided — Superseded": { label: "SUPERSEDED", color: "text-[#7a4a24]" },
  "Decided — Partially Corrected": { label: "CORRECTED", color: "text-[#7a4a24]" },
};

function ledgerStatusFor(status: ADRStatus): { label: string; color: string } {
  return ledgerStatus[status] ?? { label: status.toUpperCase(), color: "text-[#8a7358]" };
}

export default function Case005Page() {
  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="font-mono max-w-[860px] mx-auto px-6 md:px-12 pt-[22px] text-[11.5px]">
        <Link href="/" className="text-[#96683f] hover:text-foreground">← Cases &amp; ADRs</Link>
        <span className="text-[#b39b7a]"> / Case #005</span>
      </div>

      {/* Case header */}
      <div className="border-b border-border">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 pt-[30px] pb-[42px]">
          <div className="font-mono flex gap-4 items-baseline flex-wrap text-[11.5px]">
            <span className="text-[#96683f]">CASE #005</span>
            <span className="px-2.5 py-[3px] bg-[#5f7a4a] text-[#f6ecdd] font-semibold text-[10.5px] tracking-[.08em]">COMPLETE</span>
            <span className="text-[#8a7358]">2026-04-05 · {adrsCase005.length} ADRs · housing · sovereignty</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-[44px] font-semibold leading-[1.1] tracking-[-.01em] text-[#3f2b16]">
            Family Move Architecture
          </h1>
          <div className="mt-2.5 text-[14.5px] italic text-[#96683f]">
            Housing upgrade · opportunity cost · family alignment · spouse protection · sovereignty
          </div>
          <p className="mt-5 max-w-[700px] text-[15.5px] leading-[1.68] text-[#5c4a35]">
            20 ADRs capturing and closing a family housing decision. A lifestyle upgrade collides with a 7-figure
            opportunity cost, a split household, a rejected split-time model, and a funding trilemma. Closing ADRs
            establish the decision architecture: default stay as the permanent baseline, a six-condition unicorn gate
            that must be met in full before any move is permitted, three event-driven reopen triggers, a hard ban on
            time-based review, and non-forced financing as a structural disqualifier.
          </p>
          <p className="mt-4 text-[17px] italic text-[#3f2b16]">The question is closed. It reopens only when reality changes.</p>
        </div>
      </div>

      {/* Decision architecture */}
      <div className="border-b border-border bg-[#eeddc4]">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 pt-9 pb-[42px]">
          <div className="font-mono text-[11px] tracking-[.16em] text-[#96683f] mb-[18px]">
            RESOLVED POSTURE — THE DECISION ARCHITECTURE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {posture.map((p) => (
              <div key={p.tag} className="bg-[#faf4e8] border border-border px-[22px] py-[18px]">
                <div className="font-mono text-[10.5px] text-[#96683f]">{p.tag}</div>
                <div className="text-[15px] font-semibold mt-1.5 text-[#3f2b16]">{p.title}</div>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-[#5c4a35]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ADR ledger */}
      <div className="max-w-[860px] mx-auto px-6 md:px-12 pt-[42px] pb-5">
        <div className="flex justify-between items-baseline flex-wrap gap-3">
          <div className="font-mono text-[11px] tracking-[.16em] text-[#96683f]">
            THE REASONING CHAIN — {adrsCase005.length} ADRs
          </div>
          <div className="font-mono text-[11.5px] text-[#8a7358]">decisions made · alternatives rejected · corrections applied</div>
        </div>

        {ledgerGroups.map(({ domain, name }) => {
          const group = adrsCase005.filter((a) => a.domain === domain);
          if (group.length === 0) return null;
          const range = `${group[0].id} – ${group[group.length - 1].id}`;
          return (
            <div key={domain} className="mt-[30px]">
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs font-semibold tracking-[.12em] text-[#3f2b16]">{name}</span>
                <span className="flex-1 h-px bg-border" />
                <span className="font-mono text-[10.5px] text-[#b39b7a]">{range}</span>
              </div>
              <div className="flex flex-col mt-3 bg-[#faf4e8] border border-border">
                {group.map((adr) => {
                  const status = ledgerStatusFor(adr.status);
                  return (
                    <Link
                      key={adr.id}
                      href={`/case-005/${adr.id.toLowerCase()}`}
                      className="grid grid-cols-[64px_1fr] sm:grid-cols-[86px_1fr_110px] gap-x-4 gap-y-1 items-baseline px-5 md:px-[22px] py-[13px] border-b border-[#ecdfc6] last:border-b-0 hover:bg-[#f5ead6] transition-colors"
                    >
                      <span className="font-mono text-[11.5px] text-[#96683f]">{adr.id}</span>
                      <span className="text-[14.5px] leading-[1.45] text-[#3f2b16]">{adr.title}</span>
                      <span className={`font-mono col-start-2 sm:col-start-3 text-[10px] tracking-[.08em] sm:text-right font-semibold ${status.color}`}>
                        {status.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}

        <p className="mt-[26px] text-[13.5px] italic text-[#8a7358] max-w-[640px]">
          Rejected alternatives are recorded with the same weight as accepted decisions. The rejection is the record.
        </p>
      </div>

      {/* Framing notice */}
      <div className="max-w-[860px] mx-auto px-6 md:px-12 pt-[30px] pb-11">
        <p className="font-mono text-[11px] leading-[1.8] text-[#a08a68]">
          Framing notice: This case study is an illustrative demonstration of the YY Method™ Home Edition applied to a
          real-world problem. Numbers are approximate and generalized. Math is illustrative only. Nothing here
          constitutes financial, tax, legal, or professional advice of any kind. Consult qualified professionals before
          making any decisions.
        </p>
        <p className="font-mono mt-3 text-[11px] leading-[1.8] text-[#a08a68]">
          Disclosure posture (C5-011): The reasoning structure and constraint hierarchy are preserved at full fidelity.
          Identifying details — family composition, specific financial figures, and personal network references — are
          abstracted. The method is the subject. The family is not.
        </p>
      </div>

      {/* Prev / next */}
      <div className="border-t border-border bg-[#eeddc4]">
        <div className="max-w-[860px] mx-auto grid grid-cols-1 sm:grid-cols-2 px-6 md:px-12">
          <Link href="/case-004" className="py-6 sm:pr-6 border-b sm:border-b-0 sm:border-r border-border">
            <div className="font-mono text-[10.5px] text-[#96683f]">← CASE #004</div>
            <div className="text-[15px] font-semibold mt-1.5 text-[#3f2b16]">
              Local-First Remote Work Orchestration for Sensitive Compute
            </div>
          </Link>
          <Link href="/case-006" className="py-6 sm:pl-6 sm:text-right">
            <div className="font-mono text-[10.5px] text-[#96683f]">CASE #006 →</div>
            <div className="text-[15px] font-semibold mt-1.5 text-[#3f2b16]">
              Personal Identity Consolidation — Multi-Property Hub Architecture
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
