import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'IndiaFlash News – Breaking News India 24/7',
    template: '%s | IndiaFlash News',
  },
  description:
    'Stay updated with the latest breaking news from India. Live updates on politics, business, technology, sports, entertainment, and more — IndiaFlash News.',
  keywords: [
    'India news', 'breaking news India', 'latest news India', 'Hindi news',
    'Indian politics', 'Indian business news', 'Bollywood news', 'cricket news India',
    'NDTV', 'Times of India', 'The Hindu', 'live news',
  ],
  openGraph: {
    title: 'IndiaFlash News – Breaking News India 24/7',
    description: 'Your #1 source for India breaking news, politics, business, sports & entertainment.',
    siteName: 'IndiaFlash News',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndiaFlash News – Breaking News India 24/7',
    description: 'Your #1 source for India breaking news, politics, business, sports & entertainment.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-XXXXXXXXXXXXXXXX';

  return (
    <html lang="en">
      <head>
        {/* Google AdSense — replace ca-pub-XXXXXXXX with your publisher ID */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
