import { marked } from "marked";
import { interviewSegments } from "@/lib/interview-data";
import { InterviewView, type ProcessedSegment } from "@/components/interview-view";
import { JsonLd, interviewSchema, breadcrumbSchema } from "@/components/json-ld";

export const metadata = {
  title: "Interview with AI — YY Method™ Home Edition",
  description: "Word-for-word audit of the Case 002 first draft. AI extrapolated; operator corrected. The permanent record of a build session on March 30, 2026.",
  authors: [{ name: "Ben Chan" }],
  openGraph: {
    title: "Interview with AI — YY Method™ Home Edition",
    description: "Word-for-word audit of the Case 002 first draft. AI extrapolated; operator corrected. The permanent record.",
    url: "https://home.yymethod.com/interview",
    siteName: "YY Method™ Home Edition",
    type: "article",
    publishedTime: "2026-03-30",
  },
};

export default async function InterviewPage() {
  const segments: ProcessedSegment[] = await Promise.all(
    interviewSegments.map(async (seg) => ({
      id: seg.id,
      type: seg.type,
      contentHtml: seg.text
        ? (await marked(seg.text, { gfm: true, breaks: false })) as string
        : "",
      rawResponseHtml: seg.rawResponse
        ? (await marked(seg.rawResponse, { gfm: true, breaks: false })) as string
        : undefined,
      reflectionHtml: seg.aiReflection
        ? (await marked(seg.aiReflection, { gfm: true, breaks: false })) as string
        : undefined,
    }))
  );

  return (
    <>
      <JsonLd data={interviewSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "YY Method™ Home Edition", url: "https://home.yymethod.com" },
        { name: "Interview with AI", url: "https://home.yymethod.com/interview" },
      ])} />
      <InterviewView segments={segments} />
    </>
  );
}
