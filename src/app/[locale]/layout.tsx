import { Geist, Geist_Mono } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages, getTranslations} from 'next-intl/server';
import { ThemeProvider } from "@/lib/providers/themeProvider";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  const locale = await getLocale();
  const baseUrl = 'https://guibus.dev';
 
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`
    },
    description: t('description'),
    keywords: ["Full-stack Developer", "Software Engineer", "Next.js", "React", "TypeScript", "UI/UX Design", "Guilherme Bustamante", "Portfolio"],
    authors: [{ name: "Guilherme Bustamante", url: baseUrl }],
    creator: "Guilherme Bustamante",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en-US': `${baseUrl}/en`,
        'pt-BR': `${baseUrl}/pt`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      url: `${baseUrl}/${locale}`,
      title: t('title'),
      description: t('description'),
      siteName: "Guibus Portfolio",
      images: [
        {
          url: "/logos/logo/white_logo.png",
          width: 1200,
          height: 630,
          alt: "Guibus | Creative Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      images: ["/logos/logo/white_logo.png"],
      creator: "@guibus",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations('Metadata');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Guilherme Bustamante",
    "url": "https://guibus.dev",
    "jobTitle": "Full-stack Developer & Designer",
    "sameAs": [
      "https://github.com/guibus",
      "https://linkedin.com/in/guibus",
      "https://instagram.com/guibus.dev"
    ],
    "description": t('description')
  };

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-primary selection:text-primary-foreground w-full max-w-440 mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
