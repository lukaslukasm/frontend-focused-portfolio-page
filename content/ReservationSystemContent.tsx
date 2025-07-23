import DisplayMsg from '@/components/DisplayMsg';
import LinkButton from '@/components/LinkButton';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';

/**
 * Renders a static content about the project Reservation System. Includes data, styling and pictures.
 *
 */
function ReservationSystemContent() {
  return (
    <div className="flex-center col grid-cols-2 gap-12 sm:grid sm:items-start">
      <VisuallyHidden>
        <Dialog.Title>Reservation System</Dialog.Title>
        <Dialog.Description>
          Features component lib by another team, supports skeletom loading,
          memoisation-leveraging calendar, it is an npm package, thus the design
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

            {/* <LinkButton className="ml-4" href="" /> */}
            {/* <GithubLink href="https://wordelgame.vercel.app/" /> */}
          </div>
        </DisplayMsg>
      </div>
      <div className="prose-cyan prose-headings:text-highlight prose-li:text-text prose-p:text-text prose">
        <div className="prune rounded-md border-l-4 border-yellow-500 bg-yellow-100 p-4 text-sm text-yellow-800">
          ⚠️ <strong>Note:</strong> This demo contains the user-facing interface
          only. Since the data is faked, it does not behave properly upon
          change.
        </div>
        <div className="mt-4">
          <LinkButton
            href="/reservation-system-demo"
            className="mx-auto w-max rounded-full border p-2 px-4 text-sm no-underline"
          >
            Demo
          </LinkButton>
        </div>
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
          <li>Business information autofill</li>
          <li>Well-picked techstack, frictionless development</li>
          <li>Scheduled meetings management</li>
          <li>
            Per-field validation with verbose and localised error messages
          </li>
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
      <div className="flex-center isolate w-full overflow-visible">
        <div className="size-max drop-shadow-2xl max-sm:w-3/5">
          <Image
            src="/images/reservation-system-preview.png"
            alt="Reservation System Preview"
            width="400"
            height="1000"
            priority
          />
        </div>
      </div>
    </div>
  );
}
export default ReservationSystemContent;
