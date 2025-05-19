'use client';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from '../utils/registerGsap';

function Intro() {
	const introRef = useRef(null);

	useGSAP(
		() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: introRef.current,
					start: 'top top',
					end: '+=1000',
					pin: true,
				},
			});

			gsap
				.timeline({
					scrollTrigger: {
						trigger: '.asterisk',
						start: 'bottom bottom',
						toggleActions: 'play none none none',
					},
				})
				.fromTo(
					'.asterisk',
					{ rotateZ: 0 },
					{
						rotateZ: 2000,
						duration: 1.7,
					}
				)
				.fromTo(
					'.question-mark',
					{ rotateY: 0 },
					{
						rotateY: 720,
						duration: 1.7,
					},
					'<'
				)
				.fromTo(
					'.skill',
					{ opacity: 0, top: 0 },
					{ opacity: 1, top: '-1rem', duration: 0.5, ease: 'back.out' },
					'<'
				)
				.addLabel('showDashboard')
				.fromTo(
					'.line1',
					{ rotateX: 0, y: 0 },
					{ rotateX: 90, y: -20, duration: 0.2 },
					'showDashboard'
				)
				.fromTo(
					'.line2',
					{ rotateX: -90, y: 0 },
					{ rotateX: 0, y: -70, duration: 0.2 },
					'showDashboard'
				)
				.fromTo(
					'.skill',
					{ left: 0 },
					{ left: '16rem', duration: 0.2, ease: 'back.out' },
					'showDashboard'
				)
				.fromTo(
					'.dashboard',
					{ y: '80vh' },
					{ y: '60vh', duration: 1.5, ease: 'power4.inOut' },
					'showDashboard'
				)
				.to('.line2', { scale: 0.8, duration: 0.2 }, 'showDashboard+=1')
				.fromTo(
					'.skill',
					{ scale: 1, left: '16rem', top: '-1rem' },
					{ scale: 0.8, left: '17.6rem', top: '-0.8rem', duration: 0.2 },
					'<'
				)
				.fromTo(
					'.dashboard',
					{ y: '60vh', scale: 0.75 },
					{ y: 0, scale: 1, duration: 0.5, ease: 'power4.out' },
					'>'
				)
				.fromTo(
					'.heading',
					{ opacity: 0, y: -20 },
					{ opacity: 1, y: 0, duration: 0.5, ease: 'power4.out' },
					'>'
				);
		},
		{ scope: introRef }
	);

	return (
		<>
			<section
				ref={introRef}
				className='h-screen relative w-full overflow-y-hidden flex-center col'
			>
				<h2 className='text-6xl heading opacity-0 top-40 left-0 text-text font-bold absolute'>
					<span className='text-cyan-500 topic-badge block -mb-2 '>
						Skill
						<br />
					</span>
					Showcase
				</h2>
				<div className='text-center flex col relative'>
					<div className='skill topic-badge origin-bottom-right opacity-0 mb-4 absolute left-0 top-0 text-cyan-500'>
						Skill
					</div>
					<div className='text-7xl line1 text-text relative tracking-tighter font-bold'>
						Wanna see some cool sh
						<div className='transform-center asterisk inline-block'>
							<Image
								alt='*'
								className=' m-1'
								width={42}
								height={42}
								src='/asterisk.svg'
							/>
						</div>
						t<span className='inline-block question-mark'>?</span>
					</div>
					<div className='text-7xl line2 text-text  rotate-x-90 -translate-y-full relative tracking-tighter font-bold'>
						Watch this
					</div>
				</div>
				<div className='aspect-video overflow-hidden absolute scale-75 translate-y-[80vh] dashboard w-full border-3 border-cyan-300 flex-center rounded-2xl placeholder-elm'>
					<Image
						alt='dashboard'
						className='w-full h-full object-cover'
						width={1920}
						height={1080}
						src='/dashboard-placeholder.png'
					/>
				</div>
			</section>
			<div className='h-[60vh]'></div>
		</>
	);
}
export default Intro;
