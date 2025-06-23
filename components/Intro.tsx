'use client';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from '../utils/registerGsap';
import DisplayMsg from './DisplayMsg';
import reactLogo from '../public/logos/react-logo.svg';

function Intro() {
  const introRef = useRef(null);

  useGSAP(
    () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.heading',
          start: 'top top',
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
            rotateZ: 360,
            duration: 10,
            repeat: -1,
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
        .addLabel('showDashboard', '>')
        .fromTo(
          '.line1',
          { rotateX: 0, y: 0 },
          { rotateX: 90, y: -30, duration: 0.2 },
          'showDashboard',
        )
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
        className="col w-[min(100rem, 100%)] relative flex h-svh overflow-x-visible overflow-y-hidden"
      >
        <DisplayMsg category="Skill" className="heading opacity-0">
          Showcase
        </DisplayMsg>
        <div className="intro-wrapper col absolute left-1/2 mx-auto flex h-full w-max max-w-full -translate-x-1/2 items-center">
          <Image
            src={reactLogo}
            alt="react logo"
            className="reactLogo mb-5 size-20 opacity-70 sm:mt-40 sm:mb-10 sm:size-32"
          />
          <DisplayMsg className="line1 flex">
            <div className="col relative inline-block text-center">
              Wanna see something cool
              <span className="question-mark inline-block">?</span>
            </div>
          </DisplayMsg>
          <DisplayMsg className="line2 rotate-x-90">Watch this</DisplayMsg>
        </div>
        <div className="dashboard flex-center placeholder-elm h-full translate-y-[80vh] scale-75 overflow-hidden rounded-2xl drop-shadow-xl sm:drop-shadow-2xl 2xl:mx-7">
          <Image
            alt="dashboard"
            className="h-full w-full object-cover"
            fill
            src="/dashboard-placeholder.png"
          />
        </div>
      </section>
    </>
  );
}
export default Intro;
