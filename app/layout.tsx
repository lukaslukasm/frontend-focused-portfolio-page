'use client';
import '../styles/globals.css';
import '../utils/registerGsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';

const font = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
    });
  });

  return (
    <html className="no-scrollbar max-w-screen overflow-x-hidden" lang="en">
      <body className={`col flex w-full bg-cyan-50 ${font.className}`}>
        <Header />
        <div id="smooth-content">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
