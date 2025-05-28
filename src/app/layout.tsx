import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import WebVitals from "@/components/analytics/WebVitals";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import { SkipToContent } from "@/lib/accessibility";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ematrics - AI-Powered Sales Wingman",
  description:
    "Transform your sales team with AI-driven training simulations, real-time call coaching, and advanced analytics. Close more deals with Ematrics.",
  keywords: [
    "sales training",
    "AI coaching",
    "sales analytics",
    "call coaching",
    "revenue growth",
  ],
  authors: [{ name: "Ematrics" }],
  creator: "Ematrics",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ematrics.com",
    title: "Ematrics - AI-Powered Sales Wingman",
    description:
      "Transform your sales team with AI-driven training simulations, real-time call coaching, and advanced analytics.",
    siteName: "Ematrics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ematrics - AI-Powered Sales Wingman",
    description:
      "Transform your sales team with AI-driven training simulations, real-time call coaching, and advanced analytics.",
    creator: "@ematrics",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Viewport meta tag for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#009688" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon-180x180.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ematrics" />

        {/* Standard favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/icons/favicon-256x256.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/icon-96x96.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ematrics",
              description:
                "AI-powered sales coaching platform that transforms sales team performance through real-time guidance and analytics.",
              url: "https://ematrics.com",
              logo: "https://ematrics.com/logo.png",
              foundingDate: "2023",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Innovation Drive",
                addressLocality: "Tech Hub",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "Customer Service",
                email: "hello@ematrics.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager - Replace GTM-XXXXXXX with your actual GTM ID */}
        <GoogleTagManager gtmId="GTM-XXXXXXX" />

        {/* Web Vitals Performance Monitoring */}
        <WebVitals />

        {/* Service Worker Registration */}
        <ServiceWorkerRegistration />

        {/* Skip to content for accessibility */}
        <SkipToContent />

        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
