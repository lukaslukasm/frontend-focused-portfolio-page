'use client';
// @ts-expect-error the BubbleUI library does not support typescript
import BubbleUI from 'react-bubble-ui';
import 'react-bubble-ui/dist/index.css';
import StatsBubble from './StatsBubble';
import data from '../data/technologiesUsage.json';
import { TechUsageData } from '@/types/types';
import { useEffect, useState } from 'react';

/**
 * Interactive component for displaying numbers of shipped deliverables per technology in apple watch app view fashion.
 *
 * Renders static content and dynamic contnent from /data/technologiesUsage.json with layout, styling, a11y, and animations.
 */
export default function StatsBubblesView() {
  const [options, setOptions] = useState<object | null>(null);

  useEffect(() => {
    const opts = {
      size: 130,
      minSize: 40,
      gutter: window.innerWidth > 640 ? 32 : 20,
      provideProps: false,
      numCols: 3,
      fringeWidth: 80,
      yRadius: 133,
      xRadius: window.innerWidth > 640 ? 180 : 130,
      cornerRadius: 50,
      showGuides: false,
      compact: true,
      gravitation: 5,
    };
    setOptions(opts);
  }, []);

  const bubbles = data.map((item, i) => (
    <StatsBubble
      className="size-full rounded-full"
      data={item as TechUsageData}
      key={item.label + i}
    />
  ));

  return (
    <div className="relative -mt-12 w-full">
      {/* fade-in and out gradients */}
      <div className="absolute top-0 right-0 left-0 z-10 h-12 bg-gradient-to-b from-cyan-50 to-transparent sm:h-24"></div>
      <div className="absolute right-0 bottom-0 left-0 z-10 h-12 bg-gradient-to-t from-cyan-50 to-transparent sm:h-24"></div>
      {/* the view */}
      <BubbleUI
        options={options}
        className="mx-auto h-[400px] w-full overflow-hidden sm:h-[550px]"
      >
        {bubbles}
      </BubbleUI>
      <div className="text-text absolute right-0 -bottom-10 left-0 bg-transparent text-center text-xs font-normal italic lg:bottom-10">
        Scroll around to discover
      </div>
    </div>
  );
}
