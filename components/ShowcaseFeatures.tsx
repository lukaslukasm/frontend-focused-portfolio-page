import '@splidejs/react-splide/css';
import DisplayMsg from './DisplayMsg';
import Carousel from './Carousel';
import CarouselSlide from './CarouselSlide';

/**
 * Section component for displaying the features of the first showcase project.
 *
 * Renders static content with layout, styling, and animations.
 */

function ShowcaseFeatures() {
  return (
    <section className="flex-center col w-full items-start justify-between overflow-x-visible px-0 pb-40">
      <DisplayMsg
        className="mt-3 mb-4 ml-[var(--responsive-gutter-width)] sm:mb-12"
        category="Skill"
      >
        <h2>Showcase - features</h2>
      </DisplayMsg>
      <Carousel>
        <CarouselSlide>...</CarouselSlide>
      </Carousel>
    </section>
  );
}
export default ShowcaseFeatures;
