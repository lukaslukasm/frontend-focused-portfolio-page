import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Squeeze as Hamburger } from 'hamburger-react';

function Header() {
  const [hideNav, setHideNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenuAnimation = gsap.timeline({ duration: 1, ease: 'power4.out' });
  openMenuAnimation.to('.mobile-nav-wrapper', { top: 0, opacity: 1 });
  openMenuAnimation.pause();

  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin);

    gsap.fromTo(
      '.gradient-border',
      { rotateZ: 0 },
      { rotateZ: 360, ease: 'linear', repeat: -1, duration: 5 },
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
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) openMenuAnimation.play();
    else openMenuAnimation.play(-1);
  }, [menuOpen]);

  return (
    <div
      className={cn(
        'fixed top-0 z-50 h-20 w-full px-4 py-4 text-xl font-black transition-transform [&_a,button]:opacity-50 [&_a,button]:transition-opacity [&_a:hover,button:hover]:opacity-100 [&_button]:cursor-pointer',
        hideNav && '-translate-y-full',
      )}
    >
      <div className="mx-auto flex max-w-[100rem] items-center justify-between">
        {/* logo */}
        <Link href="/" aria-label="Go to Homepage">
          Home
        </Link>
        {/* mobile navbar */}
        <div className="flex-center justify-between gap-4 sm:hidden">
          <Hamburger
            toggle={setMenuOpen}
            color="oklch(0.446 0.03 256.802)"
            rounded
            toggled={menuOpen}
          />
        </div>
        {/* desktop navbar */}
        <nav className="flex gap-8 max-sm:hidden">
          <Link
            aria-label="Go to portfolio page"
            href="/portfolio"
            className="flex items-center"
          >
            Portfolio
          </Link>
          <button
            type="button"
            aria-label="Scroll to about section"
            onClick={() => gsap.to(window, { duration: 1, scrollTo: '#about' })}
          >
            About
          </button>
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
        </nav>
        {/* mobile nav menu */}
        <div className="mobile-nav-wrapper fixed inset-0 z-50 -translate-y-full bg-gray-200 opacity-0"></div>
      </div>
    </div>
  );
}
export default Header;
