import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import LinkButton from '../components/LinkButton';
// import GithubLink from '../components/GithubLink';
import DisplayMsg from '@/components/DisplayMsg';
import Image from 'next/image';
import GithubLink from '@/components/GithubLink';

/**
 * Renders a static content about the project Wordel. Includes data, styling and pictures.
 *
 */
function PortfolioContent() {
  return (
    <div className="flex-center col grid-cols-2 gap-12 sm:grid sm:items-start">
      {/* a11y */}
      <VisuallyHidden>
        <Dialog.Title>Personal Portfolio Page</Dialog.Title>
        <Dialog.Description>
          This is my personal portfolio site. It shows my dev background and
          projects I’ve worked on. Goals fast, tasteful and simple layout
          responsive design accessibility custom animations short, concoise, and
          easily understandable content Techstack next.js tailwind typescript
          gsap radix Notes features reusable components no templates used design
          inspired by apple
        </Dialog.Description>
      </VisuallyHidden>
      <div className="flex-center col-span-2 w-full justify-between">
        <DisplayMsg
          category="Beware, highly addictive!"
          categoryClassName="text-green-600"
        >
          <div className="flex items-center gap-3">
            <h1 className="text-highlight text-left">Wordeľ</h1>
            <LinkButton className="ml-4" href="/" />
            {/* TODO update */}
            <GithubLink href="/" />
          </div>
        </DisplayMsg>
      </div>
      <div className="prose-blue prose-headings:text-highlight prose-li:text-text prose-p:text-text prose">
        <h2>Description</h2>
        <p>
          This is my personal portfolio site. It shows my dev background and
          projects I’ve worked on.
        </p>
        <h2>Goals</h2>
        <ul>
          <li>Fast, tasteful and simple layout</li>
          <li>Responsive design</li>
          <li>Accessibility</li>
          <li>Custom Animations</li>
          <li>Short, concoise, and easily understandable content</li>
        </ul>
        <h2>Techstack</h2>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>TailwindCSS</li>
          <li>Typescript</li>
          <li>GSAP</li>
        </ul>
        <h2>Notes</h2>
        <ul>
          <li>Features reusable components</li>
          <li>No templates used</li>
          <li>Design inspired by apple</li>
        </ul>
      </div>
      <div className="flex-center isolate w-full overflow-visible">
        <div className="size-max drop-shadow-2xl max-sm:w-3/5">
          <Image
            src="/images/portfolio-preview.png"
            alt="Portfolio Preview"
            width="400"
            height="1000"
            priority
          />
        </div>
      </div>
    </div>
  );
}
export default PortfolioContent;
