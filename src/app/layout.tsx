import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "YY Method™ Home Edition",
    template: "%s",
  },
  description: "Preserve judgment under constraint. The independently owned Home Edition of the YY Method — case studies, ADR registry, and framework documentation.",
  authors: [{ name: "Ben Chan" }],
  metadataBase: new URL("https://home.yymethod.com"),
  openGraph: {
    siteName: "YY Method™ Home Edition",
    type: "website",
    locale: "en_US",
    url: "https://home.yymethod.com",
    title: "YY Method™ Home Edition",
    description: "Preserve judgment under constraint. The independently owned Home Edition of the YY Method.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "YY Method™ Home Edition" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YY Method™ Home Edition",
    description: "Preserve judgment under constraint. The independently owned Home Edition of the YY Method.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
