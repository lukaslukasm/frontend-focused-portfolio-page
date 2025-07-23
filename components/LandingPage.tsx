'use client';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import '../utils/registerGsap';
import ShowcaseFeatures from '@/components/ShowcaseFeatures';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/all';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function LandingPage() {
  useGSAP(() => {
    if (!window.matchMedia('(pointer: coarse)').matches)
      ScrollSmoother.create({
        smooth: 1,
        // ignoreMobileResize: true,
        // normalizeScroll: true,
      });
  });
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="flex-center col w-full">
            <Hero />
            <Intro />
            <ShowcaseFeatures />
            <Experience />
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default LandingPage;
