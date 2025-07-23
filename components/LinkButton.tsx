import { cn } from '@/utils/cn';
import Link from 'next/link';
import { ReactNode } from 'react';

type LinkButtonProps = {
  className?: string;
  children?: ReactNode;
  href: string;
  useNextLink?: boolean;
};

/**
 * Renders a link button with styling and a11y. The vector uses `currentColor`
 *
 * @param href - the link you want this button to point to.
 * @param children - optional, changes the label only.
 * @param className - optional, allows change the styling of the button.
 *
 */
function LinkButton({
  className = '',
  children = 'Link',
  href,
}: LinkButtonProps) {
  return (
    <Link
      scroll={false}
      href={href}
      target="_blank"
      className={cn(
        'flex-center',
        'hover:bg-primary',
        'hover:text-white',
        'font-bold',
        'border-primary',
        'text-primary',
        'focus-visible:custom-focus-visible',
        'gap-2',
        'rounded-full',
        'border-2',
        'px-3',
        'bg-transparent',
        'py-1',
        'text-base',
        'transition-colors',
        className,
      )}
      rel="noreferrer"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={4}
        stroke="currentColor"
        className="size-4 transition-colors"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </Link>
  );
}
export default LinkButton;
