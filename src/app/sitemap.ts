import type { MetadataRoute } from "next";
import { adrs } from "@/lib/adrs";
import { adrsCase002 } from "@/lib/adrs-case-002";
import { adrsCase003 } from "@/lib/adrs-case-003";
import { adrsCase004 } from "@/lib/adrs-case-004";
import { adrsCase005 } from "@/lib/adrs-case-005";
import { adrsCase006 } from "@/lib/adrs-case-006";
import { adrsCase007 } from "@/lib/adrs-case-007";
import { adrsCase008 } from "@/lib/adrs-case-008";

const BASE_URL = "https://home.yymethod.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: "2026-03-30", changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/what-is`, lastModified: "2026-04-11", changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/framework`, lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/agent`, lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/interview`, lastModified: "2026-03-30", changeFrequency: "never", priority: 0.9 },
    { url: `${BASE_URL}/case-001`, lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/case-002`, lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/case-003`, lastModified: "2026-03-31", changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/case-004`, lastModified: "2026-04-05", changeFrequency: "never", priority: 0.8 },
    { url: `${BASE_URL}/case-005`, lastModified: "2026-04-05", changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/case-006`, lastModified: "2026-04-05", changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/case-007`, lastModified: "2026-04-11", changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/case-008`, lastModified: "2026-04-25", changeFrequency: "monthly", priority: 0.8 },
  ];

  const case001Routes: MetadataRoute.Sitemap = adrs.map((adr) => ({
    url: `${BASE_URL}/case-001/${adr.id}`,
    lastModified: adr.date,
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  const case002Routes: MetadataRoute.Sitemap = adrsCase002.map((adr) => ({
    url: `${BASE_URL}/case-002/${adr.id}`,
    lastModified: adr.date,
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  const case003Routes: MetadataRoute.Sitemap = adrsCase003.map((adr) => ({
    url: `${BASE_URL}/case-003/${adr.id}`,
    lastModified: adr.date,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const case004Routes: MetadataRoute.Sitemap = adrsCase004.map((adr) => ({
    url: `${BASE_URL}/case-004/${adr.id}`,
    lastModified: adr.date,
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  const case005Routes: MetadataRoute.Sitemap = adrsCase005.map((adr) => ({
    url: `${BASE_URL}/case-005/${adr.id}`,
    lastModified: adr.date,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const case006Routes: MetadataRoute.Sitemap = adrsCase006.map((adr) => ({
    url: `${BASE_URL}/case-006/${adr.id}`,
    lastModified: adr.date,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const case007Routes: MetadataRoute.Sitemap = adrsCase007.map((adr) => ({
    url: `${BASE_URL}/case-007/${adr.id}`,
    lastModified: adr.date,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const case008Routes: MetadataRoute.Sitemap = adrsCase008.map((adr) => ({
    url: `${BASE_URL}/case-008/${adr.id}`,
    lastModified: adr.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ADR-026 is automatically included via case001Routes (adrs array)
  return [...staticRoutes, ...case001Routes, ...case002Routes, ...case003Routes, ...case004Routes, ...case005Routes, ...case006Routes, ...case007Routes, ...case008Routes];
}
