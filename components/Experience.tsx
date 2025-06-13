import { useRef } from 'react';
import DisplayMsg from './DisplayMsg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import reactLogo from '../public/logos/react-logo.svg';
import tw from '../public/logos/tw.png';
import laravel from '../public/logos/laravel.png';
import next from '../public/logos/nextjs.png';
import shopify from '../public/logos/shopify.png';
import shoptet from '../public/logos/shoptet.png';
import filament from '../public/logos/filament.png';
import silverstripe from '../public/logos/silverstripe.png';

function Experience() {
  useGSAP(() => {
    // animation
    const cardList = gsap.utils.toArray('.card');
    const count = cardList.length;

    const radius = window.innerWidth > 640 ? 200 : 150; // Distance from the image center to the screen center.
    const sliceAngle = (2 * Math.PI) / count;

    gsap.set(cardList, {
      x: (index) => {
        return Math.round(radius * Math.cos(sliceAngle * index - Math.PI / 4));
      },
      y: (index) => {
        return Math.round(radius * Math.sin(sliceAngle * index - Math.PI / 4));
      },
      rotation: (index) => {
        return (index + 1) * (360 / count);
      },
    });

    gsap
      .timeline()
      .set(cardList, {
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0,
        duration: 2,
      })
      .to(cardList, {
        stagger: 0.15,
        opacity: 1,
        scale: 1,
        duration: 1,
        x: (index) => {
          return Math.round(
            radius * Math.cos(sliceAngle * index - Math.PI / 4),
          );
        },
        y: (index) => {
          return Math.round(
            radius * Math.sin(sliceAngle * index - Math.PI / 4),
          );
        },
        rotation: (index) => {
          return (index + 1) * (360 / count);
        },
      })
      .to(
        '.group',
        {
          rotation: -360 - 90,
          duration: 3,
          ease: 'power4.out',
        },
        0,
      )
      .fromTo(
        '.headings',
        {
          opacity: 0,
          filter: 'blur(60px)',
          duration: 0.1,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
        },
        0.7,
      )
      .to(
        '.container',
        {
          rotation: '-=360',
          duration: 20,
          ease: 'none',
          repeat: -1,
        },
        0,
      );
  });

  const experienceRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={experienceRef} className="overflow-hidden">
      <DisplayMsg category="Experience">
        <h2>Technologies</h2>
      </DisplayMsg>
      <div className="flex-center group h-[80vh] w-full [&_img]:size-20 [&_img]:object-contain">
        <div className="content">
          <div className="scene">
            <div className="container">
              <div className="group">
                <div className="card">
                  <Image src={reactLogo} alt="React logo" />
                </div>
                <div className="card">
                  <Image src={tw} alt="Tailwind logo" />
                </div>
                <div className="card">
                  <Image src={next} alt="Next.js logo" />
                </div>
                <div className="card">
                  <Image src={laravel} alt="Laravel logo" />
                </div>
                <div className="card">
                  <Image src={silverstripe} alt="Silverstripe logo" />
                </div>
                <div className="card">
                  <Image src={shopify} alt="Shopify logo" />
                </div>
                <div className="card">
                  <Image src={shoptet} alt="Shoptet logo" />
                </div>
                <div className="card">
                  <Image src={filament} alt="Filament logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
