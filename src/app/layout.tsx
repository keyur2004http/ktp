import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import KtpGifLoader from "@/components/KTPloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "KTP | We Build Digital Empires",
    template: "%s | KTP",
  },
  description:
    "KTP is a professional digital marketing agency specializing in creative strategy, SEO, social media, video editing, and Meta Ads. We help brands grow online with data-driven solutions.",
  keywords: [
    "KTP",
    "Digital Marketing Agency",
    "SEO Services",
    "Social Media Marketing",
    "Video Editing",
    "Google Ads",
    "Meta Ads",
    "Branding Agency",
    "Web Design",
    "Creative Marketing",
  ],
  authors: [{ name: "KTP Digital Agency" }],
  creator: "KTP Agency",
  publisher: "KTP Digital Marketing",
  metadataBase: new URL("https://ktpagency.in"),
  openGraph: {
    title: "KTP | We Build Digital Empires",
    description:
      "KTP is a professional digital marketing agency helping brands grow with performance-driven digital strategies.",
    url: "https://ktpagency.in",
    siteName: "KTP Digital Agency",
    images: [
      {
        url: "/Assets/Logo/logo_ktp.png",
        width: 800,
        height: 600,
        alt: "KTP Digital Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KTP | We Build Digital Empires",
    description:
      "KTP — Digital Marketing Agency that helps your brand grow through creativity, SEO, and smart marketing strategies.",
    creator: "@ktp",
    images: ["/Assets/Logo/logo_ktp.png"],
  },
  icons: {
    icon: "/Assets/Logo/logo_ktp.png",
    shortcut: "/Assets/Logo/logo_ktp.png",
    apple: "/Assets/Logo/logo_ktp.png",
  },
  alternates: {
    canonical: "https://ktpagency.in",
  },
  category: "Digital Marketing",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <KtpGifLoader></KtpGifLoader>
        {children}
      </body>
    </html>
  );
}
