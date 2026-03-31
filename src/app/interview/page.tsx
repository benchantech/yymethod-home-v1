import { marked } from "marked";
import { interviewSegments } from "@/lib/interview-data";
import { InterviewView, type ProcessedSegment } from "@/components/interview-view";

export const metadata = {
  title: "Interview with AI — YY Method™ Home Edition",
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

  return <InterviewView segments={segments} />;
}
