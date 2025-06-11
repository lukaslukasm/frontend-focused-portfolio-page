import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type DisplayMsgProps = {
  children: ReactNode;
  category?: string;
  categoryColorCN?: string;
  className?: string;
};

/**
 * Big message with optional category label above. Main usage: Headings wrap.
 *
 * @param children - Required, content to be displayed inside.
 * @param category - Optional label above the heading.
 * @param categoryColorCN - Optional Tailwind classes for the category label. Defaults to "text-primary".
 * @param className - Optional additional classes for the heading. Defaults to "".
 *
 * @returns styled <div> element.
 */

export default function DisplayMsg({
  children,
  category,
  categoryColorCN = 'text-primary',
  className = '',
}: DisplayMsgProps) {
  return (
    <div
      className={cn(
        'text-text',
        'font-bold',
        'relative',
        'text-4xl',
        'sm:text-6xl',
        className,
      )}
    >
      {!!category && (
        <span
          className={cn(
            'absolute',
            'skill',
            '-top-3',
            'sm:-top-4',
            'left-0',
            'sm:text-base',
            'text-xs',
            'font-black',
            categoryColorCN,
          )}
        >
          {category}
        </span>
      )}
      {children}
    </div>
  );
}
