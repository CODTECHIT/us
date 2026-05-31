import type { Metadata } from "next";
import MarketMappingClient from "./_marketmappingClient";

export const metadata: Metadata = {
  title: "Market Mapping",
  description:
    "Comprehensive market mapping and talent intelligence from Maxera Talent. Understand your competitive landscape, salary benchmarks, and available talent pools before you hire.",
  keywords: [
    "market mapping",
    "talent intelligence",
    "salary benchmarking",
    "competitive landscape",
    "workforce analytics",
    "talent pool analysis",
  ],
  openGraph: {
    title: "Market Mapping | Maxera Talent",
    description:
      "Talent intelligence and market mapping to benchmark salaries and understand your competitive hiring landscape.",
    url: "https://maxeratalent.com/services/market-mapping",
  },
  alternates: { canonical: "https://maxeratalent.com/services/market-mapping" },
};

export default function MarketMapping() {
  return <MarketMappingClient />;
}
