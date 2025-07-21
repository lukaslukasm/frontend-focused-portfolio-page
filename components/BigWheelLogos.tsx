import Image from 'next/image';
import next from '../public/logos/nextjs.png';
import shopify from '../public/logos/shopify.png';
import filament from '../public/logos/filament.png';
import bootstrap from '../public/logos/bootstrap.png';
import alpine from '../public/logos/alpine.png';
import builderio from '../public/logos/builderio.svg';
import drupal from '../public/logos/drupal.png';
import email from '../public/logos/email.png';
import framer from '../public/logos/framer.png';
import gsapLogo from '../public/logos/gsap.svg';
import hubspot from '../public/logos/hubspot.webp';
import jquery from '../public/logos/jquery.svg';
import phpslim from '../public/logos/php-slim.jpg';
import woo from '../public/logos/woo.png';
import wordpress from '../public/logos/wordpress.png';
import docker from '../public/logos/docker.webp';
import LogosWheel from './LogosWheel';

/**
 * Renders a bigger circle of technologies' logos using `LogosWheel` component.
 * Inclues animation, styling, a11y, responsiveness.
 *
 */
function BigWheelLogos() {
  return (
    <div className="absolute inset-0">
      <LogosWheel
        radiusWidthMobile={160}
        radiusWidthDesktop={290}
        spinDirection="left"
      >
        <div className="card fav size-12 md:size-20">
          <Image src={next} alt="Next.js logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={bootstrap} alt="Bootstrap logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={builderio} alt="Builder.io logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={docker} alt="Docker logo" />
        </div>
        <div className="card fav size-12 md:size-20">
          <Image src={filament} alt="Filament logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={wordpress} alt="Wordpress logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={alpine} alt="Alpine logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={phpslim} alt="PHP SLim logo" />
        </div>
        <div className="card fav size-12 md:size-20">
          <Image src={shopify} alt="Shopify logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={jquery} alt="JQuery logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={framer} alt="Bootstrap logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={hubspot} alt="Hubspot logo" />
        </div>
        <div className="card fav size-12 md:size-20">
          <Image src={gsapLogo} alt="GSAP logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={drupal} alt="Drupal logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image src={woo} alt="Woocommerce logo" />
        </div>
        <div className="card size-12 md:size-20">
          <Image
            src={email}
            alt="Icon illustrating Coding Custom email templates"
          />
        </div>
      </LogosWheel>
    </div>
  );
}
export default BigWheelLogos;
