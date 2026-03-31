/**
 * Extracts FAQ items from ADR markdown Why-Not sections.
 * Parses "## Why Not" / "### Why Not <label>" headings and the body text
 * that follows each, returning question/answer pairs for FAQPage JSON-LD.
 */
export function extractFaqItems(
  rawMarkdown: string
): { question: string; answer: string }[] {
  const items: { question: string; answer: string }[] = [];

  // Match sections starting with ## Why Not or ### Why Not (case-insensitive)
  const sectionRegex = /^#{1,4}\s+(Why[- ]?Not[^\n]*)/gim;
  const headingRegex = /^#{1,4}\s+/;

  const matches = [...rawMarkdown.matchAll(sectionRegex)];

  for (const match of matches) {
    const heading = match[1].trim();
    const startIdx = (match.index ?? 0) + match[0].length;

    // Find the end of this section (next heading of same or higher level)
    const nextHeadingMatch = /^#{1,4}\s+/m.exec(rawMarkdown.slice(startIdx));
    const endIdx = nextHeadingMatch
      ? startIdx + (nextHeadingMatch.index ?? rawMarkdown.length)
      : rawMarkdown.length;

    const body = rawMarkdown
      .slice(startIdx, endIdx)
      .trim()
      // Remove markdown formatting for plain-text answer
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/\*(.+?)\*/g, "$1")
      .replace(/`(.+?)`/g, "$1")
      .replace(/^[-*+]\s+/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    if (body.length > 20) {
      const question = heading.replace(headingRegex, "").trim();
      items.push({
        question: question.startsWith("Why Not")
          ? question
          : `Why Not: ${question}`,
        answer: body.slice(0, 500),
      });
    }
  }

  return items;
}
