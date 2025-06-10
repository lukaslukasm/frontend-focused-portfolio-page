import '@splidejs/react-splide/css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DisplayMsg from './DisplayMsg';
import { useEffect, useRef } from 'react';

function ShowcaseFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);
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
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      el.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mouseleave', onMouseUp);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mouseleave', onMouseUp);
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
      <div className="h-[50rem]">
        <div
          ref={scrollRef}
          className="no-scrollbar absolute right-0 left-0 flex snap-x snap-mandatory scroll-px-4 overflow-x-scroll scroll-smooth py-20 sm:left-0 sm:scroll-px-[var(--responsive-gutter-width)]"
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
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => scrollByCard('left')}
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path d="m20 25c-.3838 0-.7676-.1465-1.0605-.4395l-5.5-5.5c-.5859-.5854-.5859-1.5356 0-2.1211l5.5-5.5c.5859-.5859 1.5352-.5859 2.1211 0 .5859.5854.5859 1.5356 0 2.1211l-4.4395 4.4395 4.4395 4.4395c.5859.5854.5859 1.5356 0 2.1211-.293.293-.6768.4395-1.0605.4395z"></path>
          </svg>
        </button>
        <button
          onClick={() => scrollByCard('right')}
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
export default ShowcaseFeatures;
