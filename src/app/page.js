import { Inter } from "next/font/google";
import "./globals.css";

// Importing your safe components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import StatsStrip from "@/components/StatsStrip";
import Compliance from "@/components/Compliance";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.bhushangroups.com"),
  title: {
    default: "Bhushan Security & Facilities Management | PSARA Licensed Security Agency India",
    template: "%s | Bhushan Security",
  },
  description: "PSARA licensed, ISO 9001:2015 certified security agency providing professional security guards, facility management and protection services across India. Trusted by 200+ clients.",
  keywords: [
    "security guards India",
    "PSARA licensed security agency",
    "security agency Jamshedpur",
    "security agency Jharkhand",
    "facility management India",
    "industrial security guards",
    "corporate security services",
  ],
  authors: [{ name: "Bhushan Security & Facilities Management Services Pvt. Ltd." }],
  creator: "Bhushan Security",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.bhushangroups.com",
    siteName: "Bhushan Security & Facilities Management",
    title: "Bhushan Security & Facilities Management | PSARA Licensed Security Agency",
    description: "Professional security guards and facility management services across India. PSARA licensed, ISO certified, trusted by 200+ clients.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhushan Security & Facilities Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhushan Security & Facilities Management",
    description: "PSARA licensed security agency — professional guards and facility management across India.",
    images: ["/og-image.jpg"],
  },
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
};

export default function Home() {
  return (
    <main style={{ background: "#fff" }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <StatsStrip />
      <Compliance />
      <CTA />
      <Footer />
    </main>
  );
}