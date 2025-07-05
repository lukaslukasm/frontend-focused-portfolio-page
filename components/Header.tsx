import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Squeeze as Hamburger } from 'hamburger-react';

/**
 * Header component that renders desktop and mobile navigation.
 * Manages toggle state for the mobile menu and triggers associated animations.
 * Ensures accessibility via keyboard focus management and appropriate aria attributes.
 *
 * Component does not accept any props.
 */

function Header() {
  const [hideNav, setHideNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenuAnimation = useRef<gsap.core.Timeline | null>(null);
  const mobileNavFirstLink = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin);

    gsap.fromTo(
      '.gradient-border',
      { rotateZ: 0 },
      { rotateZ: 360, ease: 'linear', repeat: -1, duration: 5 },
    );

    openMenuAnimation.current = gsap
      .timeline({ paused: true, ease: 'power4.out' })
      .fromTo(
        '.mobile-nav-wrapper',
        { y: '-100%', opacity: 0.5 },
        { y: 0, opacity: 1 },
      )
      .fromTo(
        '.mobile-nav-wrapper ul li',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.1 },
        '<+=0.4',
      );
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;

      if (delta > 20) {
        setHideNav(true); // scroll down
      } else if (delta < -50) {
        setHideNav(false); // scroll up
      }

      lastScrollY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      openMenuAnimation.current?.play();
      // document.body.classList.add('!h-screen', 'overflow-y-hidden');
      mobileNavFirstLink.current?.focus();
    } else {
      openMenuAnimation.current?.reverse();
      // document.body.classList.remove('!h-screen', 'overflow-y-hidden');
    }
  }, [menuOpen]);

  return (
    <nav
      className={cn(
        'fixed inset-0 top-0 z-50 h-12 text-xl font-black transition-transform max-sm:m-2 sm:h-20 sm:px-4 sm:py-4 [&_a,button]:opacity-50 [&_a,button]:transition-opacity [&_a:hover,button:hover]:opacity-100 [&_button]:cursor-pointer',
        hideNav && !menuOpen && '-translate-y-20',
      )}
    >
      <div className="mx-auto flex items-center justify-end transition-transform sm:justify-between">
        {/* desktop navbar */}
        <ul className="flex w-full gap-8 max-sm:hidden [&_li]:flex [&_li]:items-center">
          {/* logo */}
          <li>
            <Link href="/" aria-label="Go to Homepage" className="">
              Home
            </Link>
          </li>
          <div className="flex-grow" aria-hidden></div>
          <li>
            <Link
              aria-label="Go to portfolio page"
              href="/portfolio"
              className="flex items-center"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <button
              type="button"
              aria-label="Scroll to about section"
              onClick={() =>
                gsap.to(window, { duration: 1, scrollTo: '#about' })
              }
            >
              About
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Scroll to contact section"
              onClick={() =>
                gsap.to(window, { duration: 1, scrollTo: '#contact' })
              }
              className="bg-text relative isolate overflow-hidden rounded-full !opacity-100 hover:[&_.blue-bg]:opacity-100"
            >
              <div className="blue-bg bg-primary absolute inset-0 opacity-0 transition-opacity"></div>
              <div className="gradient-border from-primary to-primary absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 bg-conic-180 via-transparent blur-md"></div>
              <div className="relative z-10 rounded-full px-5 py-3 leading-none font-bold text-white">
                Contact
              </div>
            </button>
          </li>
        </ul>
        {/* mobile nav menu */}
        <div
          role="dialog"
          aria-modal="true"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className={cn(
            'mobile-nav-wrapper',
            'fixed',
            'inset-0',
            'z-40',
            'h-dvh',
            '-translate-y-full',
            'bg-gray-100',
            'opacity-50',
          )}
        >
          <ul className="col mt-20 ml-8 flex gap-4">
            <li>
              <Link
                ref={mobileNavFirstLink}
                href="/"
                onClick={() => {
                  setMenuOpen(false);
                }}
                aria-label="Go to Homepage"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                aria-label="Go to portfolio page"
                href="/portfolio"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="flex w-max items-center"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <button
                type="button"
                aria-label="Scroll to about section"
                onClick={() => {
                  setMenuOpen(false);
                  gsap.to(window, { duration: 1, scrollTo: '#about' });
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-label="Scroll to contact section"
                onClick={() => {
                  setMenuOpen(false);
                  gsap.to(window, { duration: 1, scrollTo: '#contact' });
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-center gap-2">
          <div
            aria-hidden={menuOpen}
            inert={menuOpen}
            className={cn(
              'z-50',
              'rounded-full',
              'border',
              'border-white/30',
              'bg-gray-300/30',
              'text-base',
              'px-3',
              'scale-90',
              'py-1',
              'transition-opacity',
              'backdrop-blur-md',
              'sm:hidden',
              menuOpen && 'opacity-0',
            )}
          >
            <button
              type="button"
              aria-label="Scroll to contact section"
              className="text-text mb-1.5 text-sm leading-none font-bold !opacity-90"
              onClick={() =>
                gsap.to(window, { duration: 1, scrollTo: '#contact' })
              }
            >
              Contact
            </button>
          </div>
          {/* mobile navbar toggle */}
          <div
            className={cn(
              'z-50',
              'rounded-full',
              'border',
              'border-white/30',
              'bg-gray-300/30',
              'backdrop-blur-md',
              'sm:hidden',
              menuOpen && 'border-transparent bg-transparent',
            )}
          >
            <Hamburger
              toggle={setMenuOpen}
              color="oklch(44.6% 0.03 256.802)"
              rounded
              tab-index={0}
              size={20}
              toggled={menuOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
