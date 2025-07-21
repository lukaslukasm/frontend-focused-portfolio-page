import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import LinkButton from '../components/LinkButton';
import GithubLink from '../components/GithubLink';
import DisplayMsg from '@/components/DisplayMsg';
import Image from 'next/image';

/**
 * Renders a static content about the project Wordel. Includes data, styling and pictures.
 *
 */
function WordelContent() {
  return (
    <div className="flex-center col grid-cols-2 gap-12 sm:grid">
      {/* a11y */}
      <VisuallyHidden>
        <Dialog.Title>Wordel game</Dialog.Title>
        <Dialog.Description>
          Features: cool animations, slovak language support, coded before AI,
          DIY login and user management (it was a long time ago, I wanted to
          learn how it works.), logged in users can see their stats,uses JWT for
          login, started as a 1:1 copy of{' '}
          <a href="https://www.nytimes.com/games/wordle/index.html">
            The worlde game
          </a>
          Techstack: nextjs, typescript, react, framer-motion, styled components
        </Dialog.Description>
      </VisuallyHidden>
      <div className="flex-center col-span-2 w-full justify-between">
        <DisplayMsg
          category="Beware, highly addictive!"
          categoryClassName="text-green-600"
        >
          <div className="flex items-center gap-3">
            <h1 className="text-highlight text-left">Wordeľ</h1>
            <LinkButton
              className="ml-4"
              href="https://wordelgame.vercel.app/"
            />
            <GithubLink href="https://wordelgame.vercel.app/" />
          </div>
        </DisplayMsg>
      </div>
      <div className="prose-blue prose-headings:text-highlight prose-li:text-text prose-p:text-text prose">
        <h2>Description</h2>
        <p>
          A small word-based puzzle game. You have 6 tries to guess 5 letter
          word. Includes limited support for Slovak language.{' '}
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            Truest me when I say that obtaining a collection of all 5 letter
            words in slovak language was no fun
          </li>
          <li>Top-notch responsivity</li>
          <li>Cool animations</li>
          <li>
            DIY auth using JWT{' '}
            <small>
              {' '}
              <i>(I wanted to learn the ways at the time)</i>
            </small>
          </li>
          <li>Stats for logged users</li>
        </ul>
        <h2>Techstack</h2>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Prisma</li>
          <li>Typescript</li>
          <li>Framer Motion</li>
          <li>Styled Components</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
      <div className="isolate">
        <Image
          src="/images/wordel-preview.png"
          alt="Wordel Preview"
          width="400"
          height="1000"
          className="mx-auto drop-shadow-2xl max-sm:w-1/2"
        />
      </div>
    </div>
  );
}
export default WordelContent;
