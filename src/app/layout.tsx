import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/shared/header/header';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Dive into a world of thought-provoking articles and insights on technology, lifestyle, and creativity. Stay updated with the latest trends and ideas at Insightful Minds Blog.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
