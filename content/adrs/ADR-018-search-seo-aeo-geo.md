# ADR-018: Search, Tag Cloud, and Organic Discovery — SEO/AEO/GEO Strategy
**Method:** YY Method™ Home Edition v2.3 — Capture → Why → Why-Not → Commit → Timestamp
**Status:** Pending — Future Phase
**Date:** March 30, 2026
**Depends On:** ADR-017 (case study framing), ADR-013 (identity layer)
**Freshness Boundary:** Expires if: SEO best practices shift materially, LLM search behavior changes significantly, or case study archive scope changes.

---

## Capture

As the case study archive grows, readers will arrive with intent — not just browsing. A reader who has heard of the YY Method may want to find ADRs related to a specific problem they face: "how do I handle an S corp transition?" or "what is the DAF strategy?" or "how do I set up minor child employment?"

Two forces converge here:

1. **Discovery within the system** — users who land on the archive need a way to search and orient by intent, not just browse sequentially.
2. **Discovery of the system** — the archive should become organically embedded in Google Search results, AI assistant answers (AEO), and LLM retrieval systems (GEO) so that practitioners who are searching for these topics find the YY Method case studies as a reference.

These are related but distinct objectives. Both require intentional architecture.

---

## The Decision Landscape

### Part 1 — In-System Search

**Current state:** Navigation is hierarchical — home → case → ADR list → ADR detail. There is no way to search by intent or topic across ADRs.

**Proposed:** Add an intent-based search interface with a tag cloud / suggestion surface that helps users orient before typing. The search should:

- Accept free-text intent queries ("I'm dealing with a solo 401k transition")
- Suggest tags from a curated vocabulary (hint / autocomplete surface)
- Return ADRs ranked by relevance to the query
- Surface the right ADR quickly, not just match keywords

**Tag cloud design principles:**
- Tags should reflect *problems* and *intents*, not just topics. "S corp termination timing" is more useful than "s-corp."
- Tags should cluster: by domain (tax, identity, agent), by decision type (executed, pending, correction, rejected), by audience (business owner, employee, self-employed).
- The tag cloud UI should be ambient — present on the case study index page as "browse by topic" hints, not just a utility behind a search box.

**Implementation approach (future):**
- Client-side: fast static search over structured ADR data (title, summary, tags, full content index)
- No external search API required at Phase 1 — the artifact set is small enough for client-side indexing
- Phase 2: vector search if the archive grows to hundreds of ADRs

### Part 2 — SEO / AEO / GEO

**Definitions:**
- **SEO (Search Engine Optimization):** Traditional ranking in Google/Bing for keyword queries. Requires semantic HTML, structured data (schema.org), quality content, internal linking, and freshness signals.
- **AEO (Answer Engine Optimization):** Optimizing for direct answers in Google's AI Overviews, Bing Copilot, and voice assistants. Requires FAQ structure, concise authoritative answers, E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness).
- **GEO (Generative Engine Optimization):** Optimizing for inclusion in LLM training data and RAG retrieval — Claude, ChatGPT, Perplexity, Gemini. Requires publicly accessible structured content, canonical URLs, machine-readable formats, consistent terminology, and citation-worthy depth.

**Objective:** The YY Method case study archive should become a cited reference for practitioners searching for decision frameworks applied to complex financial and operational problems. This is a long-term play — the archive earns authority over time as more case studies accumulate.

**Tactical requirements (not yet built — future phase):**

| Tactic | Target | Why |
|---|---|---|
| Schema.org structured data (Article, HowTo, FAQPage) | SEO + AEO | Enables rich snippets, featured answers |
| Semantic H1/H2/H3 hierarchy per ADR | SEO + GEO | Helps crawlers parse document intent |
| Canonical URLs per ADR | SEO + GEO | Prevents duplicate content, anchors citations |
| Open Graph + Twitter Card meta | SEO | Controls social preview when shared |
| `generateMetadata` per ADR page | SEO + AEO | Title, description, keywords per artifact |
| JSON-LD breadcrumb markup | SEO | Breadcrumb display in SERPs |
| `sitemap.xml` generation | SEO + GEO | Ensures all ADRs are indexed |
| `robots.txt` — allow all | GEO | Allow LLM crawlers (GPTBot, ClaudeBot, etc.) |
| Alt text + descriptive anchor text | SEO + AEO | Accessibility + crawlability |
| Interlinking ADRs with descriptive anchors | SEO | Distributes page authority, reinforces topic clusters |
| Public case study landing pages with full ADR index | GEO | Makes structured content discoverable at case level |
| Attribution and methodology mentions in content | GEO + AEO | "YY Method" as a named, citable framework |

**AEO-specific requirements:**
- Each ADR should have a concise "question → answer" framing in its structure. The Capture section already does this implicitly. Make it explicit: "The Question: [one sentence]. The Answer: [one sentence]."
- FAQ blocks on case study index pages: common questions answered directly in markup.
- E-E-A-T signals: dates are already preserved (establishes freshness and authorship timeline). Author identity at framework level links to yymethod.com.

**GEO-specific requirements:**
- The content must exist at a stable, publicly accessible URL with no JavaScript required to render (already satisfied by Next.js static generation).
- Terminology should be consistent and named — "YY Method," "ADR," "freshness boundary," "Why-Not step" — so LLMs learn to associate these terms with this source.
- Each ADR should be complete and self-contained. An LLM retrieving a single ADR should be able to understand it without the full context of the archive.
- The case study framing in ADR-017 is GEO-friendly: it explains what this is, why numbers are illustrative, and what should be trusted.

---

## Why

The case study archive has compounding value. Each case study added:
- Increases topical authority for the YY Method domain
- Adds more entry points for search and retrieval
- Demonstrates the method's portability across domains
- Creates a network of internally linked, semantically consistent artifacts

Without intentional SEO/AEO/GEO architecture, this value accumulates slowly or never surfaces. With it, the archive becomes a cited reference — for human practitioners and AI systems alike.

---

## Why-Not

**Why not build search now?**
The archive currently has one case study with 18 ADRs. Search is not yet needed — the hierarchy is navigable. Build search when the archive has enough content that browsing becomes inefficient (estimated: 3+ case studies, 50+ ADRs).

**Why not focus on SEO immediately?**
SEO requires content volume and age signals to work. A single case study published today will not rank well for six months minimum. The correct sequence: publish the archive publicly, ensure technical SEO foundations are correct, let the content age and accumulate. No point optimizing before the content is live.

**Why not use a third-party search service (Algolia, etc.)?**
Adds vendor dependency for a system that should be self-contained. Client-side static search (Fuse.js or similar) is sufficient for Phase 1.

---

## Assumptions This Decision Depends On

- The case study archive continues to grow — more case studies are added over time
- The site is deployed publicly at a stable domain (home.yymethod.com)
- Next.js static generation continues to produce crawlable, JavaScript-free HTML (already true)
- LLM crawler policies (GPTBot, ClaudeBot) remain generally permissive for public content

---

## Commit

**Decision:** Do not build search or implement full SEO/AEO/GEO stack now. This ADR captures the intent, design, and rationale so the future implementation is coherent with the overall methodology.

**Phase 2 trigger:** 3+ case studies published, or explicit operator decision to prioritize organic discovery.

**Immediate actions (technical foundations only — no delay cost):**
- Ensure `generateMetadata` is implemented per ADR page (already partially done)
- Ensure static generation produces full HTML (already true via Next.js SSG)
- Add `robots.txt` that explicitly allows all crawlers including LLM bots
- Add `sitemap.xml` generation

**Deferred to Phase 2:**
- Intent-based search UI with tag cloud
- Schema.org structured data (JSON-LD)
- FAQ blocks on index pages
- Open Graph per ADR
- Full AEO/GEO content audit

**Status:** Pending — Phase 2. This ADR is the preserved intent, not the executed decision.
