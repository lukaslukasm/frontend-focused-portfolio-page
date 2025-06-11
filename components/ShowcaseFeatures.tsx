import '@splidejs/react-splide/css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DisplayMsg from './DisplayMsg';
import { useEffect, useRef, useState } from 'react';

function ShowcaseFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [disabledArrow, setDisabledArrow] = useState<'prev' | 'next' | null>(
    'prev',
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.classList.add('cursor-grabbing');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown || !el) return;
      e.preventDefault();

      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      el.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };

    const handleScroll = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft <= 0) {
        setDisabledArrow('prev');
      } else if (el.scrollLeft >= maxScrollLeft - 1) {
        setDisabledArrow('next');
      } else {
        setDisabledArrow(null);
      }
    };

    el.addEventListener('scroll', handleScroll);

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mouseleave', onMouseUp);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mouseleave', onMouseUp);
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollByCard = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.querySelector('li'); // assumes all li have same width
    if (!child) return;

    const scrollAmount = (child as HTMLElement).offsetWidth; // 32 = gap-8
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="flex-center col w-full items-start justify-between !overflow-x-visible pb-40">
      <DisplayMsg className="mt-3 mb-12" category="Skill">
        <h2>Showcase - features</h2>
      </DisplayMsg>
      <div className="h-[43rem]">
        <div
          ref={scrollRef}
          className="no-scrollbar absolute right-0 left-0 flex snap-x snap-mandatory scroll-px-4 overflow-x-scroll scroll-smooth py-5 sm:left-0 sm:scroll-px-[var(--responsive-gutter-width)]"
        >
          <ul className="flex w-max gap-8 px-4 sm:px-[var(--responsive-gutter-width)]">
            <li className="h-[40rem] min-w-88 snap-start rounded-3xl bg-white drop-shadow-lg"></li>
            <li className="h-[40rem] min-w-88 snap-start rounded-3xl bg-white drop-shadow-lg"></li>
            <li className="h-[40rem] min-w-88 snap-start rounded-3xl bg-white drop-shadow-lg"></li>
            <li className="h-[40rem] min-w-88 snap-start rounded-3xl bg-white drop-shadow-lg"></li>
            <li className="h-[40rem] min-w-88 snap-start rounded-3xl bg-white drop-shadow-lg"></li>
            <li className="h-[40rem] min-w-88 snap-start rounded-3xl bg-white drop-shadow-lg"></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4 self-end">
        <button
          onClick={() => scrollByCard('left')}
          disabled={disabledArrow === 'prev'}
          className="rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300 disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="fill-text size-7 scale-110"
          >
            <path d="m471-480 137 137q20 19 20 46.98 0 27.98-20 48.02-19 19-46.98 19-27.98 0-48.02-19L330-432q-9.91-9.71-15.45-22.21Q309-466.71 309-480q0-13.57 5.55-26.32Q320.09-519.07 330-529l183-184q20.04-19 48.02-19Q589-732 608-713q20 20.04 20 48.02Q628-637 608-618L471-480Z" />
          </svg>
        </button>
        <button
          onClick={() => scrollByCard('right')}
          disabled={disabledArrow === 'next'}
          className="rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300 disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="fill-text size-7 scale-110 rotate-z-180"
          >
            <path d="m471-480 137 137q20 19 20 46.98 0 27.98-20 48.02-19 19-46.98 19-27.98 0-48.02-19L330-432q-9.91-9.71-15.45-22.21Q309-466.71 309-480q0-13.57 5.55-26.32Q320.09-519.07 330-529l183-184q20.04-19 48.02-19Q589-732 608-713q20 20.04 20 48.02Q628-637 608-618L471-480Z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
export default ShowcaseFeatures;
