'use client';
import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ReactNode, useRef } from 'react';

type LogosWheelProps = {
  radiusWidthMobile?: number;
  radiusWidthDesktop?: number;
  className?: string;
  spinDirection?: 'left' | 'right';
  children: ReactNode;
};

/**
 *  Creates a circle of children elements which slowly spins
 *
 * @example
 * ```tsx
 * <LogosWheel
 *  radiusWidthMobile={110}
 *  radiusWidthDesktop={200}
 *  className='opacity-50'
 *  >
 *  <div className="card">
 *    <Image src={reactLogo} alt="React logo" />
 *  </div>
 *  ...
 *  </LogosWheel>
 * ```
 *
 *
 */
function LogosWheel({
  radiusWidthMobile = 150,
  radiusWidthDesktop = 200,
  className = '',
  spinDirection = 'right',
  children,
}: LogosWheelProps) {
  const mainWrapRef = useRef(null);

  useGSAP(
    () => {
      // animation
      const cardList = gsap.utils.toArray('.card');
      const count = cardList.length;

      const radius =
        window.innerWidth > 640 ? radiusWidthDesktop : radiusWidthMobile; // Distance from the image center to the screen center.
      const sliceAngle = (2 * Math.PI) / count;

      gsap.set(cardList, {
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
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: mainWrapRef.current,
            start: 'top center',
          },
          delay: 2,
        })
        .set(cardList, {
          opacity: 0,
          scale: 0,
          x: 0,
          y: 0,
          duration: 2,
        })
        .to(cardList, {
          stagger: 0.15,
          opacity: 0.5,
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
        // .fromTo(
        //   '.headings',
        //   {
        //     opacity: 0,
        //     filter: 'blur(60px)',
        //     duration: 0.1,
        //   },
        //   {
        //     opacity: 1,
        //     filter: 'blur(0px)',
        //   },
        //   0.7,
        // )
        .to(
          '.container',
          {
            rotation: spinDirection === 'left' ? '-=360' : '+=360',
            duration: 20,
            ease: 'none',
            repeat: -1,
          },
          0,
        );
    },
    { scope: mainWrapRef },
  );
  return (
    <div
      ref={mainWrapRef}
      className={cn(
        'content',
        'flex-center',
        'relative',
        'h-[80vh]',
        className,
      )}
    >
      <div className="flex-center container mx-auto">
        <div className="group">{children}</div>
        {/* <div className="size-2 rounded-full border border-red-500"></div> */}
      </div>
    </div>
  );
}
export default LogosWheel;
