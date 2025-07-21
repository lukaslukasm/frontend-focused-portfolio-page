import DisplayMsg from '@/components/DisplayMsg';
import LinkButton from '@/components/LinkButton';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';

function ReservationSystemContent() {
  return (
    <div className="flex-center col grid-cols-2 gap-12 sm:grid sm:items-start">
      <VisuallyHidden>
        <Dialog.Title>Reservation System</Dialog.Title>
        <Dialog.Description>
          Features component lib by another team, supports skeletom loading,
          memoisation-leveraging calendar, it is aa npm package, thus the design
          contains some rough edges. The highlight is that the techstack is
          mine, it was designed based on the needs at the start of the project
          with a single target: a frictionless development. I am prod to say
          that the target was met. Techstack: i18n, tailwindcss, react,
          typescript, vite, tanstack form, tanstack query, shadcnUI.
        </Dialog.Description>
      </VisuallyHidden>
      <div className="flex-center col-span-2 w-full justify-between">
        <DisplayMsg
          category="Engineered for zero friction"
          categoryClassName="text-green-600"
        >
          <div className="flex items-center gap-3">
            <h1 className="text-highlight text-left">Reservation System</h1>
            <LinkButton className="ml-4" href="https://radca.amawell.sk/" />
            {/* <GithubLink href="https://wordelgame.vercel.app/" /> */}
          </div>
        </DisplayMsg>
      </div>
      <div className="prose-cyan prose-headings:text-highlight prose-li:text-text prose-p:text-text prose">
        <h2>Description</h2>
        <p>
          A specific reservation system which allows to pick a meeting date
          based on the number of certificates you need to resolve. Supports also
          scheduled meetings management.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Skeleton loading</li>
          <li>Leverages Memoization</li>
          <li>User&apos; Bussiness&apos; information autofill</li>
          <li>Well-picked techstack provided frictionless development</li>
          <li>Scheduled meetings management</li>
          <li>
            Complies with{' '}
            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.w3.org/WAI/WCAG2AA-Conformance&ved=2ahUKEwjMtIqj486OAxUgRvEDHcyjFXEQFnoECAoQAQ&usg=AOvVaw02ovFfwuRaYkCa-OXIqsaN">
              WCAG 2.1 AA
            </a>{' '}
            accessibility standards
          </li>
          <li>Slovak and english language mutations</li>
          <li>Shipped in the form of an NPM package</li>
        </ul>
        <h2>Techstack</h2>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>TailwindCSS</li>
          <li>I18next</li>
          <li>Vite</li>
          <li>TanStack Query</li>
          <li>TanStack Form</li>
          <li>Shadcn/ui</li>
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
export default ReservationSystemContent;
