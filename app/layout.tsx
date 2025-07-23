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
    if (!window.matchMedia('(pointer: coarse)').matches)
      ScrollSmoother.create({
        smooth: 1,
        // ignoreMobileResize: true,
        // normalizeScroll: true,
      });
  });

  return (
    <html className="no-scrollbar max-w-screen overflow-x-hidden" lang="en">
      <body className={`col flex w-full bg-cyan-50 ${font.className}`}>
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
