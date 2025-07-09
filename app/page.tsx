'use client';

import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import OtherProjects from '@/components/OtherProjects';
import ShowcaseFeatures from '@/components/ShowcaseFeatures';

function Page() {
  return (
    <main className="flex-center col w-full">
      <Hero />
      <Intro />
      <ShowcaseFeatures />
      <Experience />
      <OtherProjects />
    </main>
  );
}
export default Page;
