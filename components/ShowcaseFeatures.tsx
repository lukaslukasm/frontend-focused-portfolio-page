import '@splidejs/react-splide/css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import DisplayMsg from './DisplayMsg';

function ShowcaseFeatures() {
  return (
    <section className="flex-center col relative w-full items-start justify-between pb-40">
      <DisplayMsg className="mt-3 mb-32" category="Skill">
        <h2>Showcase - features</h2>
      </DisplayMsg>

      <Splide
        aria-label="My Favorite Images"
        className="overflow-visible"
        hasTrack={false}
        options={{
          type: 'slide',
          gap: '2rem',
          perPage: 3,
          perMove: 1,
          width: '20rem',
          pagination: false,
          arrows: false,
        }}
      >
        <SplideTrack className="opacity-80">
          <SplideSlide className="h-[40rem] min-w-88 rounded-3xl bg-red-900"></SplideSlide>
          <SplideSlide className="h-[40rem] min-w-88 rounded-3xl bg-blue-900"></SplideSlide>
          <SplideSlide className="h-[40rem] min-w-88 rounded-3xl bg-orange-500"></SplideSlide>
          <SplideSlide className="h-[40rem] min-w-88 rounded-3xl bg-cyan-900"></SplideSlide>
          <SplideSlide className="h-[40rem] min-w-88 rounded-3xl bg-yellow-500"></SplideSlide>
          <SplideSlide className="h-[40rem] min-w-88 rounded-3xl bg-red-900"></SplideSlide>
        </SplideTrack>
        <div className="splide__arrows text-text absolute right-0 -bottom-12">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
      </Splide>
    </section>
  );
}
export default ShowcaseFeatures;
