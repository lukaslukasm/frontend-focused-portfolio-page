'use client';

import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
// import Intro from '@/components/Intro';
// import ShowcaseFeatures from '@/components/ShowcaseFeatures';

function Page() {
	return (
		<main className='max-w-[min(90rem,100%)] mx-auto px-4 w-full flex-center col'>
			<Hero />
			<Intro />
			{/* <ShowcaseFeatures /> */}
		</main>
	);
}
export default Page;
