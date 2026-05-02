type JsonLdData = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function personSchema() {
  return {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["CreativeWork", "DefinedTerm"],
      "@id": "https://home.yymethod.com/#yy-method-home",
      "name": "YY Method Home Edition",
      "url": "https://home.yymethod.com/",
      "description": "YY Method Home Edition is the applied home and case-registry track of the YY Method.",
      "creator": { "@id": "https://benchantech.com/#person" },
      "publisher": { "@id": "https://benchantech.com/#organization" },
      "isPartOf": { "@id": "https://yymethod.com/#yy-method" },
      "about": { "@id": "https://yymethod.com/#yy-method" },
      "mainEntityOfPage": { "@id": "https://home.yymethod.com/#webpage" }
    },
    {
      "@type": "WebSite",
      "@id": "https://home.yymethod.com/#website",
      "name": "YY Method Home",
      "url": "https://home.yymethod.com/",
      "creator": { "@id": "https://benchantech.com/#person" },
      "about": { "@id": "https://home.yymethod.com/#yy-method-home" }
    },
    {
      "@type": "WebPage",
      "@id": "https://home.yymethod.com/#webpage",
      "url": "https://home.yymethod.com/",
      "name": "YY Method Home Edition",
      "isPartOf": { "@id": "https://home.yymethod.com/#website" },
      "mainEntity": { "@id": "https://home.yymethod.com/#yy-method-home" }
    }
  ]
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  authorName = "Ben Chan",
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: {
      "@type": "Person",
      "@id": "https://benchantech.com/#person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "YY Method™ Home Edition",
      url: "https://home.yymethod.com",
    },
  };
}

export function interviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Interview with AI — YY's World Design, Fabrication, and Correction",
    description:
      "Word-for-word audit of the Case 002 first draft. AI extrapolated 12 ADRs from operator seeds; operator corrected. The permanent record of what was built, what was invented, and what the operator actually said.",
    url: "https://home.yymethod.com/interview",
    datePublished: "2026-03-30",
    author: {
      "@type": "Person",
      "@id": "https://benchantech.com/#person",
      name: "Ben Chan",
    },
    about: {
      "@type": "Thing",
      name: "YY Method™ — Cognitive Theft Prevention",
    },
    publisher: {
      "@type": "Organization",
      name: "YY Method™ Home Edition",
      url: "https://home.yymethod.com",
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
