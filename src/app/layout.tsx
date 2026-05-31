import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://maxeratalent.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Maxera Talent | Professional Recruitment Agency",
    template: "%s | Maxera Talent",
  },
  description:
    "Connecting top companies with exceptional professionals. Your trusted strategic partner for recruitment, talent management, and workforce solutions across blue-collar, industrial, IT, and executive roles.",
  keywords: [
    "recruitment agency",
    "staffing agency",
    "talent acquisition",
    "executive search",
    "contract staffing",
    "IT staffing",
    "bulk hiring",
    "industrial staffing",
    "blue-collar recruitment",
    "RPO services",
    "workforce solutions",
    "passive talent sourcing",
    "offshore talent",
    "permanent hiring",
    "Maxera Talent",
  ],
  authors: [{ name: "Maxera Talent", url: BASE_URL }],
  creator: "Maxera Talent",
  publisher: "Maxera Talent",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Maxera Talent",
    title: "Maxera Talent | Professional Recruitment Agency",
    description:
      "Connecting top companies with exceptional professionals. Speed, precision, and reliability — every hire.",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Maxera Talent | Professional Recruitment Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxera Talent | Professional Recruitment Agency",
    description:
      "Connecting top companies with exceptional professionals. Speed, precision, and reliability — every hire.",
    images: [`${BASE_URL}/opengraph-image`],
    creator: "@maxeratalent",
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "business",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maxera Talent",
  url: BASE_URL,
  logo: `${BASE_URL}/maxera-logo.png`,
  description:
    "Professional recruitment and staffing agency specializing in bulk hiring, IT staffing, contract staffing, permanent placement, RPO, and offshore talent solutions.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-612-515-7159",
    contactType: "customer service",
    email: "MEvans@maxeratalent.com",
    availableLanguage: "English",
  },
  sameAs: ["https://www.linkedin.com/company/116164276/"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maxera Talent",
  url: BASE_URL,
  description: "Professional recruitment and staffing agency.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/jobs?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
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
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans antialiased text-maxera-text`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
