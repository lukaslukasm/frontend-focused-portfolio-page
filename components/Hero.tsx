import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function Hero() {
	const heroRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.fromTo(
				'.name',
				{ opacity: 0, y: -20 },
				{ opacity: 1, y: 0, duration: 0.7 }
			)
				.fromTo(
					'h1',
					{ opacity: 0, y: -20 },
					{ opacity: 1, y: 0, duration: 0.7 },
					'>'
				)
				.fromTo(
					'h1',
					{ backgroundPosition: '100% 0%' },
					{ backgroundPosition: '0% 0%', duration: 2, ease: 'power4' },
					'<+=0.4'
				);
		},
		{ scope: heroRef }
	);

	return (
		<div
			ref={heroRef}
			className='h-screen  relative flex-center col'
		>
			<div className='text-center flex col '>
				<div className='text-xl name tracking-tight mb-4 font-bold'>
					Hello, I&apos;m Lukas
				</div>
				<div>
					<h1 className='text-7xl from-text bg-gradient-to-r text-transparent bg-size-[200%] from-10% to-text to-90% relative tracking-tight bg-clip-text font-bold via-cyan-400'>
						Your next React developer.
					</h1>
				</div>
			</div>
		</div>
	);
}
export default Hero;
