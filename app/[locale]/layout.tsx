// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n";
import IntlProvider from "../components/IntlProvider";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grivus - Smart Habit Tracker for iOS",
  description:
    "Build better habits with Grivus. Track daily habits, visualize progress, smart streaks, iCloud sync, and flexible scheduling.",
  verification: {
    google: "KiAd4-gueNYN1jYFiSJ6WTRe5HXB5t-f99zFGTctmnY",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Load messages directly for this locale
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        <IntlProvider messages={messages} locale={locale}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

