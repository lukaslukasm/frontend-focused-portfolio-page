import { useRef } from 'react';
import DisplayMsg from './DisplayMsg';
import Image from 'next/image';
import reactLogo from '../public/logos/react-logo.svg';
import tw from '../public/logos/tw.png';
import laravel from '../public/logos/laravel.png';
import next from '../public/logos/nextjs.png';
import shopify from '../public/logos/shopify.png';
import shoptet from '../public/logos/shoptet.png';
import filament from '../public/logos/filament.png';
import silverstripe from '../public/logos/silverstripe.png';
import bootstrap from '../public/logos/bootstrap.png';
import alpine from '../public/logos/alpine.png';
import builderio from '../public/logos/builderio.svg';
import drupal from '../public/logos/drupal.png';
import email from '../public/logos/email.png';
import framer from '../public/logos/framer.png';
import gsap from 'gsap';
import gsapLogo from '../public/logos/gsap.svg';
import hubspot from '../public/logos/hubspot.webp';
import jquery from '../public/logos/jquery.svg';
import phpslim from '../public/logos/php-slim.jpg';
import sas360 from '../public/logos/sas360.png';
import woo from '../public/logos/woo.png';
import wordpress from '../public/logos/wordpress.png';
import strapi from '../public/logos/strapi.png';
import node from '../public/logos/node.png';

import LogosWheel from './LogosWheel';
import { useGSAP } from '@gsap/react';

/**
 * Section component for displaying experience with technologies.
 *
 * Renders static content with layout, styling, and animations.
 */

function Experience() {
  const experienceRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(max-width:640px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: experienceRef.current,
              start: 'center bottom',
            },
          })
          .to('.heading', {
            y: 0,
            duration: 0.75,
            opacity: 1,
            stagger: 0.2,
          })
          .to('.line1', {
            opacity: 1,
            y: 0,
            rotateX: 0,
            delay: 3,
            ease: 'power4.out',
          })
          .to(
            '.line1',
            { opacity: 0, y: -36, ease: 'power4.out', rotateX: -80 },
            '>+=3',
          )
          .to(
            '.line2',
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              ease: 'power4.out',
            },
            '<',
          )
          .to('.line2', {
            top: '30svh',
            ease: 'power4.out',
          })
          .to('.wheels', { top: '50vh', y: 0 }, '<')
          .to('.card', {
            opacity: 0.05,
            filter: 'grayscale(100)',
          })
          .to(
            '.fav',
            {
              opacity: 1,
              filter: 'grayscale(0)',
            },
            '<',
          );
      });

      mm.add('(min-width:641px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: experienceRef.current,
              start: 'center bottom',
            },
          })
          .to('.heading', {
            y: 0,
            duration: 0.75,
            opacity: 1,
            stagger: 0.2,
          })
          .to('.line1', {
            opacity: 1,
            y: 0,
            rotateX: 0,
            delay: 3,
            ease: 'power4.out',
          })
          .to(
            '.line1',
            { opacity: 0, y: -36, ease: 'power4.out', rotateX: -80 },
            '>+=3',
          )
          .to(
            '.line2',
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              ease: 'power4.out',
            },
            '<',
          )
          .to('.wheels', { right: 0, x: 0 }, '<')
          .fromTo(
            '.card',
            { opacity: 0.5 },
            {
              opacity: 0.05,
              filter: 'grayscale(100)',
            },
          )
          .to(
            '.fav',
            {
              opacity: 1,
              filter: 'grayscale(0)',
            },
            '<',
          );
      });
    },
    { scope: experienceRef },
  );

  return (
    <section
      ref={experienceRef}
      className="experience relative h-[120vh] flex-row gap-0 overflow-hidden sm:h-screen"
    >
      <DisplayMsg
        className="heading translate-y-8 opacity-0"
        categoryClassName="text-orange-300"
        category="Experience"
      >
        <h2>Technologies</h2>
      </DisplayMsg>
      <div className="col absolute-center z-10 flex w-11/12 sm:mt-24">
        <DisplayMsg className="line1 translate-y-10 -rotate-x-45 opacity-0">
          <h2 className="my-32 bg-radial from-white from-50% to-transparent to-70% text-center text-5xl max-sm:text-3xl">
            Over the past few years, I&apos;ve worked <br /> with a wide range
            of technologies
          </h2>
        </DisplayMsg>
        <DisplayMsg className="line2 absolute translate-y-8 opacity-0 xl:top-1/4 xl:max-w-96">
          <h2 className="bg-radial from-white from-50% to-transparent to-70% text-5xl max-xl:my-32 max-xl:text-center max-sm:text-3xl xl:text-4xl">
            Some of them truly stuck with me - and those are the ones I&apos;m
            taking along.
          </h2>
        </DisplayMsg>
      </div>
      <div className="wheels absolute-center col-span-2 row-span-2 w-[min(100%,60rem)] overflow-hidden sm:mt-24">
        {/* small wheel */}
        <div className="">
          <LogosWheel
            radiusWidthMobile={70}
            className=""
            radiusWidthDesktop={180}
          >
            <div className="card fav size-8 sm:size-18">
              <Image src={reactLogo} alt="React logo" />
            </div>
            <div className="card size-8 sm:size-18">
              <Image src={silverstripe} alt="Silverstripe logo" />
            </div>
            <div className="card size-8 sm:size-18">
              <Image src={alpine} alt="Alpine logo" />
            </div>
            <div className="card fav size-8 sm:size-18">
              <Image src={strapi} alt="Strapi logo" />
            </div>
            <div className="card size-8 sm:size-18">
              <Image src={shoptet} alt="Shoptet logo" />
            </div>
            <div className="card fav size-8 sm:size-18">
              <Image src={tw} alt="Tailwind logo" />
            </div>
            <div className="card size-8 sm:size-18">
              <Image src={woo} alt="Woocommerce logo" />
            </div>
            <div className="card size-8 sm:size-18">
              <Image src={laravel} alt="Laravel logo" />
            </div>
            <div className="card fav size-8 sm:size-18">
              <Image src={node} alt="Node.js logo" />
            </div>
            <div className="card size-8 sm:size-18">
              <Image src={sas360} alt="SAS360 logo" />
            </div>
          </LogosWheel>
        </div>
        {/* big wheel */}
        <div className="absolute inset-0">
          <LogosWheel
            radiusWidthMobile={160}
            radiusWidthDesktop={340}
            spinDirection="left"
          >
            <div className="card fav size-12 sm:size-24">
              <Image src={next} alt="Next.js logo" />
            </div>
            <div className="card size-12 sm:size-24">
              <Image src={bootstrap} alt="Bootstrap logo" />
            </div>
            <div className="card size-12 sm:size-24">
              <Image src={builderio} alt="Builder.io logo" />
            </div>
            <div className="card fav size-12 sm:size-24">
              <Image src={filament} alt="Filament logo" />
            </div>
            <div className="card size-12 sm:size-24">
              <Image src={wordpress} alt="Wordpress logo" />
            </div>
            <div className="card size-12 sm:size-24">
              <Image src={phpslim} alt="PHP SLim logo" />
            </div>
            <div className="card fav size-12 sm:size-24">
              <Image src={shopify} alt="Shopify logo" />
            </div>
            <div className="card size-12 sm:size-24">
              <Image src={jquery} alt="JQuery logo" />
            </div>
            <div className="card size-12 sm:size-24">
              <Image src={framer} alt="Bootstrap logo" />
            </div>
            <div className="card size-12 sm:size-24">
              <Image src={hubspot} alt="Hubspot logo" />
            </div>
            <div className="card fav size-12 sm:size-24">
              <Image src={gsapLogo} alt="GSAP logo" />
            </div>
            <div className="card size-12 sm:size-24">
              <Image src={drupal} alt="Drupal logo" />
            </div>
            <div className="card size-12 sm:size-24">
              <Image
                src={email}
                alt="Icon illustrating Coding Custom email templates"
              />
            </div>
          </LogosWheel>
        </div>
      </div>
    </section>
  );
}
export default Experience;
