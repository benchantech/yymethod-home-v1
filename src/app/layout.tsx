import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "YY Method™ — Cases & ADRs",
    template: "%s | YY Method™",
  },
  description: "Preserve judgment under constraint. A live registry of decisions made under the YY Method — case studies, ADR records, and applied reasoning across tax, systems, and life architecture.",
  authors: [{ name: "Ben Chan" }],
  metadataBase: new URL("https://home.yymethod.com"),
  openGraph: {
    siteName: "YY Method™ — Cases & ADRs",
    type: "website",
    locale: "en_US",
    url: "https://home.yymethod.com",
    title: "YY Method™ — Cases & ADRs",
    description: "A live registry of decisions made under the YY Method — case studies, ADR records, and applied reasoning.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "YY Method™ — Cases & ADRs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YY Method™ — Cases & ADRs",
    description: "A live registry of decisions made under the YY Method — case studies, ADR records, and applied reasoning.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
