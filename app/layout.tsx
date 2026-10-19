import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aenswer.ph'),
  title: {
    default: 'Web Design Philippines & Digital Solutions | Aenswer.ph',
    template: '%s | Aenswer.ph',
  },
  description:
    'Affordable web design, animated websites, AI automation, video ads, graphic design, and blockchain development for Philippine businesses and international clients.',
  keywords: [
    'Web Design Philippines',
    'Website Development Philippines',
    'AI Automation Agency',
    'Philippine Digital Solutions',
    'Next.js Developer Philippines',
    'Blockchain Engineering Philippines',
    'Web3 Development Manila',
    'Video Ads and Graphic Design',
    'Aenswer Digital Solutions',
  ],
  authors: [{ name: 'Aenswer Digital Solutions', url: 'https://aenswer.ph' }],
  creator: 'Aenswer Digital Solutions',
  publisher: 'Aenswer Digital Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Web Design Philippines & Digital Solutions | Aenswer.ph',
    description:
      'Your Digital Partner. Your Answer. High-performance websites, AI business automation, creative video advertising, and blockchain engineering.',
    url: 'https://aenswer.ph',
    siteName: 'Aenswer Digital Solutions',
    images: [
      {
        url: '/assets/aenswer-banner.png',
        width: 1200,
        height: 630,
        alt: 'Aenswer.ph - Digital Solutions for Every Business',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Philippines & Digital Solutions | Aenswer.ph',
    description:
      'From professional websites to intelligent automation and blockchain engineering, Aenswer helps businesses build, innovate, and grow.',
    images: ['/assets/aenswer-banner.png'],
    creator: '@aenswerph',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Aenswer Digital Solutions',
    url: 'https://aenswer.ph',
    logo: 'https://aenswer.ph/assets/aenswer-logo.jpg',
    image: 'https://aenswer.ph/assets/aenswer-banner.png',
    description:
      'Filipino-founded digital solutions agency providing website design, AI automation, creative digital media, and blockchain engineering for Philippine businesses and global clients.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PH',
    },
    priceRange: '₱₱',
    openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00',
    sameAs: [
      'https://x.com/aenswerph',
      'https://facebook.com/aenswerph',
      'https://github.com/aenswer',
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/assets/aenswer-logo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-navy-950 text-white antialiased selection:bg-gold selection:text-navy-950">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
