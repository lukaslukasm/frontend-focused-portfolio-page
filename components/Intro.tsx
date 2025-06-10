'use client';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from '../utils/registerGsap';
import DisplayMsg from './DisplayMsg';
import reactLogo from '../public/react-logo.svg';

function Intro() {
  const introRef = useRef(null);

  useGSAP(
    () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top top',
          end: '+=500',
          pin: true,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.reactLogo',
            start: 'bottom bottom',
            toggleActions: 'play none none none',
          },
        })
        .fromTo(
          '.reactLogo',
          { rotateZ: 0 },
          {
            rotateZ: 120,
            duration: 4,
            ease: 'linear',
          },
        )
        .fromTo(
          '.question-mark',
          { rotateY: 0 },
          {
            rotateY: 720,
            duration: 1.7,
          },
          '<',
        )
        // .fromTo(
        //   '.line1 .skill',
        //   { opacity: 0, top: 0 },
        //   { opacity: 1, top: '-1rem', duration: 0.5, ease: 'back.out' },
        //   '<',
        // )
        .addLabel('showDashboard', '>')
        .fromTo(
          '.line1',
          { rotateX: 0, y: 0 },
          { rotateX: 90, y: -30, duration: 0.2 },
          'showDashboard',
        )
        // .fromTo(
        //   '.line1 .skill',
        //   { rotateX: 0, y: 0 },
        //   { rotateX: 90, y: -20, duration: 0.2 },
        //   'showDashboard',
        // )
        .fromTo(
          '.line2',
          { rotateX: -90, y: 0 },
          { rotateX: 0, y: -70, duration: 0.2 },
          'showDashboard',
        )
        .to('.intro-wrapper', { scale: 0.8, duration: 0.3 }, 'showDashboard+=1')
        .to('.intro-wrapper', { y: 30, duration: 0.3 }, '<+=0.05')
        .fromTo(
          '.dashboard',
          { y: '80vh' },
          { y: 0, duration: 0.7, ease: 'power4.out' },
          '<+=0.1',
        )
        .fromTo(
          '.dashboard',
          { scale: 0.75 },
          { scale: 1, duration: 0.7, ease: 'power4.out' },
          '<+=0.2',
        )
        .fromTo(
          '.heading',
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power4.out' },
          '>',
        );
    },
    { scope: introRef },
  );

  return (
    <>
      <section
        ref={introRef}
        className="flex-center relative flex h-screen w-full overflow-y-hidden"
      >
        <DisplayMsg
          category="Skill"
          className="heading absolute top-20 left-4 opacity-0 sm:top-40"
        >
          Showcase
        </DisplayMsg>
        <div className="intro-wrapper col flex-center relative h-full flex-grow">
          <Image
            src={reactLogo}
            alt="react logo"
            className="reactLogo mb-5 size-20 opacity-70 sm:mb-10 sm:size-32"
          />
          <DisplayMsg className="line1 flex">
            <div className="col relative inline-block text-center">
              Wanna see something cool
              <span className="question-mark inline-block">?</span>
            </div>
          </DisplayMsg>
          <DisplayMsg className="line2 rotate-x-90">Watch this</DisplayMsg>
        </div>
        <div className="dashboard border-primary/10 flex-center placeholder-elm absolute aspect-video h-full max-h-[70vh] max-w-[calc(100%-2rem)] translate-y-[80vh] scale-75 overflow-hidden rounded-2xl drop-shadow-xl max-sm:mt-20 sm:max-h-[50vh] sm:drop-shadow-2xl">
          <Image
            alt="dashboard"
            className="h-full w-full object-cover"
            fill
            src="/dashboard-placeholder.png"
          />
        </div>
      </section>
      <div className="h-[40vh] max-sm:h-[90vh]"></div>
    </>
  );
}
export default Intro;
