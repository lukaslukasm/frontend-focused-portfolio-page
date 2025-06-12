import '@splidejs/react-splide/css';
import DisplayMsg from './DisplayMsg';
import Carousel from './Carousel';
import CarouselSlide from './CarouselSlide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

/**
 * Section component for displaying the features of the first showcase project.
 *
 * Renders static content with layout, styling, and animations.
 */

function ShowcaseFeatures() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: featuresRef.current,
          },
        })
        .to('.carousel-slide, .carousel-arrows-nav, .heading', {
          y: 0,
          delay: 0.5,
          duration: 0.75,
          opacity: 1,
          stagger: 0.2,
        });
    },
    { scope: featuresRef },
  );

  return (
    <section
      ref={featuresRef}
      className="flex-center col w-full items-start justify-between overflow-x-visible px-0 pb-40"
    >
      <DisplayMsg
        className="heading mt-3 mb-4 ml-[var(--responsive-gutter-width)] translate-y-8 opacity-0 sm:mb-12"
        category="Skill"
      >
        <h2>Showcase - features</h2>
      </DisplayMsg>
      <Carousel className="[&_.carousel-arrows-nav]:translate-y-8 [&_.carousel-arrows-nav]:opacity-0 [&_.carousel-slide]:translate-y-8 [&_.carousel-slide]:opacity-0">
        <CarouselSlide className="bg-blue-50">
          <DisplayMsg category="Technology" categoryClassName="opacity-50">
            <h3>Stunning Shots</h3>
          </DisplayMsg>
          <div className="flex-grow"></div>
          <img
            src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Animals-PNG/Dog_PNG_Clip_Art_Image.png?m=1629781823"
            alt=""
          />
        </CarouselSlide>
        <CarouselSlide className="bg-transparent !p-0 drop-shadow-none">
          <img
            src="https://www.apple.com/v/os/a/images/shared/liquid_glass/focus__ggpbjiev9i62_large.jpg"
            alt=""
          />
          <div className="col flex gap-4 px-4 sm:px-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              natus harum. Earum placeat nesciunt error autem iusto sed ipsum!
              Nostrum?
            </p>
            <p className="text-sm opacity-50">
              Lorem ipsum dolor sit amet consectetur elit.
            </p>
          </div>
        </CarouselSlide>
        <CarouselSlide className="bg-yellow-300">
          <DisplayMsg
            category="Entertainment"
            categoryClassName=" text-white/50"
          >
            <h3 className="text-white">Traumatised kids</h3>
          </DisplayMsg>
          <div className="flex-grow"></div>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afafe003-d161-4420-b1f0-57deb451cc3c/d735xq8-c61f2304-d3dc-460f-80fc-413be8f3fe10.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmYWZlMDAzLWQxNjEtNDQyMC1iMWYwLTU3ZGViNDUxY2MzY1wvZDczNXhxOC1jNjFmMjMwNC1kM2RjLTQ2MGYtODBmYy00MTNiZThmM2ZlMTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NZ-6qMMJ-882FkNtjicibaSDdweXwDWkb6Uwjo8URgA"
            alt=""
          />
        </CarouselSlide>
        <CarouselSlide className="isolate justify-end">
          <img
            src="https://www.petrolissimo.sk/www/files/news/23/detail_porsche-911-gt3-992-13_132506a4c.jpg"
            alt=""
            className="absolute inset-0 h-full object-cover"
          />
          <DisplayMsg
            category="Precision"
            className="relative z-10"
            categoryClassName=" text-white/50"
          >
            <h3 className="text-white">Reach Top Speeds</h3>
          </DisplayMsg>
        </CarouselSlide>
        <CarouselSlide>
          <DisplayMsg
            category="Security"
            className="relative z-10"
            categoryClassName="text-emerald-600/50"
          >
            <h3>Maximum Safety</h3>
          </DisplayMsg>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            incidunt, autem nesciunt tempore sint amet vero libero et illo
            blanditiis?
          </p>
          <div className="flex-grow"></div>
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Padlock-PNG-Clipart-Background.png"
            alt=""
            className="w-4/5"
          />
        </CarouselSlide>
      </Carousel>
    </section>
  );
}
export default ShowcaseFeatures;
