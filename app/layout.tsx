import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Accredian Enterprise - Upskill Your Team',
  description: 'Empowering professionals with top-tier education and practical skills to thrive in the modern workplace.',
  openGraph: {
    title: 'Accredian Enterprise',
    description: 'Empower your workforce with top-tier education and practical skills.',
    url: 'https://enterprise.accredian.com',
    siteName: 'Accredian Enterprise',
    images: [
      {
        url: '/og-image.jpg', // Placeholder, you should add a real image in public folder
        width: 1200,
        height: 630,
        alt: 'Accredian Enterprise',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
