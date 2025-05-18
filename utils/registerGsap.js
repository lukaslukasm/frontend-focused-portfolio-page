// gsapSetup.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default gsap;
