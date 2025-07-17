import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

/**
 * Section component for displaying the website's Hero section.
 *
 * Renders static content with layout, styling, and animations.
 */
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
        '>+=0.2',
      )
        .to('h1', { opacity: 1, y: 0, duration: 0.7, autoAlpha: 1 })
        .to(
          'h1',
          {
            backgroundPosition: '0% 0%',
            duration: 2,
            ease: 'power4',
          },
          '<+=0.4',
        );
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} className="flex-center col relative h-dvh">
      <div className="col flex text-center">
        <div className="name invisible mb-0 font-bold tracking-tight sm:mb-4 sm:text-xl">
          Hello, I&apos;m Lukas.
        </div>
        <div>
          <h1 className="from-highlight to-highlight xs:text-5xl invisible relative bg-gradient-to-r from-10% via-cyan-400 to-90% bg-size-[200%] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-7xl">
            Your next Frontend&nbsp;developer.
          </h1>
        </div>
      </div>
    </section>
  );
}
export default Hero;
