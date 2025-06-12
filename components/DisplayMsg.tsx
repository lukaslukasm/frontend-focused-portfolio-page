import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type DisplayMsgProps = {
  children: ReactNode;
  category?: string;
  categoryClassName?: string;
  className?: string;
};

/**
 * Big message with optional small text above. Main usage: Headings wrap.
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
  categoryClassName = '',
  className = '',
}: DisplayMsgProps) {
  return (
    <div
      className={cn(
        'text-text',
        'font-bold',
        'relative',
        'flex',
        'col',
        'text-4xl',
        'sm:text-6xl',
        className,
      )}
    >
      {!!category && (
        <span
          className={cn(
            'skill',
            'left-0',
            'text-primary',
            '-mb-1',
            'sm:text-base',
            'text-xs',
            'font-black',
            categoryClassName,
          )}
        >
          {category}
        </span>
      )}
      {children}
    </div>
  );
}
