'use client';

import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import ShowcaseFeatures from '@/components/ShowcaseFeatures';

function Page() {
  return (
    <main className="flex-center col w-full">
      <Hero />
      <Intro />
      <ShowcaseFeatures />
    </main>
  );
}
export default Page;
