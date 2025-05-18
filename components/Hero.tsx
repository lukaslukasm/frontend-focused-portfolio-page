import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function Hero() {
	const heroRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			// prep
			tl.set('.name', { opacity: 0, y: -20 }).set('h1', {
				opacity: 0,
				y: -20,
				backgroundPosition: '100% 0%',
			});
			// animation
			tl.to(
				'.name',
				{ opacity: 1, y: 0, duration: 0.7, autoAlpha: 1 },
				'>+=0.2'
			)
				.to('h1', { opacity: 1, y: 0, duration: 0.7, autoAlpha: 1 })
				.to(
					'h1',
					{
						backgroundPosition: '0% 0%',
						duration: 2,
						ease: 'power4',
					},
					'<+=0.4'
				);
		},
		{ scope: heroRef }
	);

	return (
		<section
			ref={heroRef}
			className='h-screen  relative flex-center col'
		>
			<div className='text-center  flex col'>
				<div className='sm:text-xl invisible name tracking-tight mb-0 sm:mb-4 font-bold'>
					Hello, I&apos;m Lukas
				</div>
				<div>
					<h1 className='sm:text-7xl text-5xl from-text invisible bg-gradient-to-r text-transparent bg-size-[200%] from-10% to-text to-90% relative tracking-tight bg-clip-text font-bold via-cyan-400'>
						Your next React&nbsp;developer.
					</h1>
				</div>
			</div>
		</section>
	);
}
export default Hero;
