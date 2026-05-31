import type { Metadata } from "next";
import CandidatesClient from "./_candidatesClient";

export const metadata: Metadata = {
  title: "For Candidates",
  description:
    "Submit your profile and connect with exclusive placement opportunities at Maxera Talent. We specialize in career moves for high-performing professionals across IT, industrial, and executive roles.",
  keywords: [
    "job opportunities",
    "career placement",
    "submit resume",
    "find jobs",
    "candidate registration",
    "executive job search",
    "IT jobs",
    "industrial jobs",
  ],
  openGraph: {
    title: "For Candidates | Maxera Talent",
    description:
      "Catalyzing strategic career moves for high-performing professionals. Submit your profile for exclusive placement opportunities.",
    url: "https://maxeratalent.com/candidates",
  },
  alternates: {
    canonical: "https://maxeratalent.com/candidates",
  },
};

export default function Candidates() {
  return <CandidatesClient />;
}
