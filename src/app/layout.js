import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "../components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.bhushangroups.com"),
  title: {
    default: "Bhushan Security & Facilities Management | PSARA Licensed Security Agency Odisha",
    template: "%s | Bhushan Security",
  },
  description: "PSARA licensed, ISO 9001:2015 certified security agency providing professional security guards, bouncers, dog squad, escort guards and facility management services across Odisha, Jharkhand, West Bengal, Bihar and Chhattisgarh.",
  keywords: [
    "security guards Odisha",
    "security agency Jharsuguda",
    "PSARA licensed security agency",
    "security guards Raipur",
    "bouncer service Odisha",
    "dog squad service India",
    "facility management Odisha",
    "industrial security guards",
    "corporate security services India",
    "escort guard service",
  ],
  authors: [{ name: "Bhushan Security & Facilities Management Services Pvt. Ltd." }],
  creator: "Bhushan Security",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.bhushangroups.com",
    siteName: "Bhushan Security & Facilities Management",
    title: "Bhushan Security & Facilities Management | PSARA Licensed Security Agency",
    description: "Professional security guards, bouncers, dog squad and facility management services across Odisha and Eastern India. PSARA licensed, ISO certified.",
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
    description: "PSARA licensed security agency — professional guards, bouncers, dog squad and facility management across Odisha and Eastern India.",
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TT4516LY8X"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TT4516LY8X');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
        <ChatWidget />
      </body>
    </html>
  );
}