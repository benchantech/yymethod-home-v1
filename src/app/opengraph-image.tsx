import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "YY Method™ Home Edition";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "#71717a",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            YY Method™
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#a1a1aa",
              border: "1px solid #3f3f46",
              borderRadius: "4px",
              padding: "2px 8px",
              fontFamily: "monospace",
            }}
          >
            Home Edition
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#a1a1aa",
              border: "1px solid #3f3f46",
              borderRadius: "4px",
              padding: "2px 8px",
              fontFamily: "monospace",
            }}
          >
            v2.3
          </span>
        </div>

        {/* Main heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "600",
              color: "#fafafa",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            Preserve judgment
            <br />
            under constraint.
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#71717a",
              maxWidth: "680px",
              lineHeight: "1.6",
            }}
          >
            Case studies, ADR registry, and framework documentation.
            Independently owned. Human captures. AI reads.
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            fontSize: "14px",
            color: "#52525b",
            fontFamily: "monospace",
          }}
        >
          home.yymethod.com
        </div>
      </div>
    ),
    { ...size }
  );
}
