import type { Metadata } from "next";
import ContactClient from "./_contactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Maxera Talent for recruitment and staffing inquiries. Reach our team at MEvans@maxeratalent.com or call +1 (612)-515-7159.",
  keywords: [
    "contact Maxera Talent",
    "recruitment inquiry",
    "staffing contact",
    "hiring partnership",
    "workforce solutions contact",
  ],
  openGraph: {
    title: "Contact Us | Maxera Talent",
    description:
      "Direct communication channels for institutional and professional recruitment inquiries. Response within 24 hours.",
    url: "https://maxeratalent.com/contact",
  },
  alternates: {
    canonical: "https://maxeratalent.com/contact",
  },
};

export default function Contact() {
  return <ContactClient />;
}
