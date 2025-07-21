import { cn } from '@/utils/cn';

type LinkButtonProps = {
  className?: string;
  label?: string;
  href: string;
};

/**
 * Renders a link button with styling and a11y. The vector uses `currentColor`
 *
 * @param href - the link you want this button to point to.
 * @param className - optional, allows change the styling of the button.
 *
 */
function LinkButton({ className = '', label = 'Link', href }: LinkButtonProps) {
  return (
    <a
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
      {label}
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
    </a>
  );
}
export default LinkButton;
