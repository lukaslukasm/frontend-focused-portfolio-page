import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import ShowcaseFeatures from '@/components/ShowcaseFeatures';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Lukas M ',
};
function Page() {
  return (
    <main className="flex-center col w-full">
      <Hero />
      <Intro />
      <ShowcaseFeatures />
      <Experience />
      <Projects />
    </main>
  );
}
export default Page;
