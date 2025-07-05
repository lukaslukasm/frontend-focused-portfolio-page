import { TechUsageData } from '@/types/types';
import { cn } from '@/utils/cn';
import Image from 'next/image';

type StatsBubbleProps = { className?: string; data: TechUsageData };

/**
 * A single circle component for `StatsBubblesView`
 *
 * Renders dynamic contnent from a prop `data`
 */
function StatsBubble({ className = '', data }: StatsBubbleProps) {
  return (
    <div
      className={cn(
        'flex-center col',
        'relative',
        'isolate',
        'text-text',
        'text-lg',
        'p-2',
        'overflow-hidden',
        'shadow-xl',
        className,
        data.className,
      )}
    >
      <div className="flex-center col pointer-events-none absolute inset-0 z-0 rounded-full bg-gradient-to-t from-white to-transparent to-75% leading-none opacity-60"></div>
      {!!data.logo && (
        <div className="relative mb-1 size-12">
          <Image
            src={data.logo}
            fill
            unoptimized
            className="rounded-lg object-contain"
            alt={data.label + ' logo'}
          />
        </div>
      )}
      <div className="flex-center col relative z-10">
        <span className="text-center text-base leading-tight font-black opacity-40">
          {data.label}
        </span>
        {!!data.value && (
          <div
            className={cn(
              'relative flex items-start text-2xl leading-tight opacity-90',
            )}
          >
            {data.value}
            <span className="absolute -right-2.5 bottom-0.5 text-sm font-black opacity-40">
              x
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
export default StatsBubble;
