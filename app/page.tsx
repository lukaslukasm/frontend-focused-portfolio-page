'use client';

import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
// import Intro from '@/components/Intro';
// import ShowcaseFeatures from '@/components/ShowcaseFeatures';

function Page() {
  return (
    <main className="flex-center col mx-auto w-full max-w-[min(90rem,100%)]">
      <Hero />
      <Intro />
      {/* <ShowcaseFeatures /> */}
    </main>
  );
}
export default Page;
