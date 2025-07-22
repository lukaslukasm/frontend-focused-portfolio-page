import DisplayMsg from '@/components/DisplayMsg';
import LinkButton from '@/components/LinkButton';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';

/**
 * Renders a static content about the project Jewerly Wizard. Includes data, styling and pictures.
 *
 */
function JewelryWizardContent() {
  return (
    <div className="flex-center col grid-cols-2 gap-12 sm:grid sm:items-start">
      <VisuallyHidden>
        <Dialog.Title>Jewelry Wizard</Dialog.Title>
        <Dialog.Description>
          A multi-step, input-driven branching wizard with navigation and
          granular gestures handling.Features:sliding is simple and clever:
          slides are in flex-row on phone, flex-col on desktop and there’s
          scroll snapping in place. default scroll gestures disabled when
          needed, scrolls programatically. Top-tier responsivity. Navigation bar
          reacting to the content on the slides. TechStack: react, typescript,
          tailwindCSS, gsap.
        </Dialog.Description>
      </VisuallyHidden>
      <div className="flex-center col-span-2 w-full justify-between">
        <DisplayMsg
          category="Advanced gestures"
          categoryClassName="text-green-600"
        >
          <div className="flex items-center gap-3">
            <h1 className="text-highlight text-left">Jewelry Wizard</h1>
            <LinkButton className="ml-4" href="https://radca.amawell.sk/" />
            {/* <GithubLink href="https://wordelgame.vercel.app/" /> */}
          </div>
        </DisplayMsg>
      </div>
      <div className="prose-blue prose-headings:text-highlight prose-li:text-text prose-p:text-text prose">
        <h2>Description</h2>
        <p>
          An online tool to help you choose the right jewels for the occasion.
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            <b className="text-highlight">Simple and clever routing.</b>{' '}
            Flex-based (row/col) slides positioning paired with a scroll
            snapping. Allows for horizontal routing on phone and vertical on
            desktop.
          </li>
          <li>Some of the slides differ based on previous answers</li>
          <li>Different animations for mobile and desktop</li>
          <li>
            <b className="text-highlight">Advanced gestures support.</b> Swipe
            back for a previous slide. You can not swipe to the next slide
            unless you have completed the current slide. Small screen? No
            problem. You can scroll within the options container to find a
            suitable answer.
          </li>
          <li>Granular responsivity</li>
          <li>Reactive navigation element</li>
        </ul>
        <h2>Techstack</h2>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>GSAP</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
      <div className="isolate">
        <Image
          src="/images/jewelry-wizard-preview.png"
          alt="Wordel Preview"
          width="400"
          height="1000"
          className="mx-auto drop-shadow-2xl max-sm:w-1/2"
        />
      </div>
    </div>
  );
}
export default JewelryWizardContent;
