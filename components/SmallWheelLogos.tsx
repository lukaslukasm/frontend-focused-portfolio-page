import LogosWheel from './LogosWheel';
import Image from 'next/image';
import reactLogo from '../public/logos/react-logo.svg';
import tw from '../public/logos/tw.png';
import laravel from '../public/logos/laravel.png';
import shoptet from '../public/logos/shoptet.png';
import silverstripe from '../public/logos/silverstripe.png';
import sas360 from '../public/logos/sas360.png';
import strapi from '../public/logos/strapi.png';
import node from '../public/logos/node.png';
import 'react-tooltip/dist/react-tooltip.css';

/**
 * Renders a smaller circle of technologies' logos using `LogosWheel` component.
 * Inclues animation, styling, a11y, responsiveness.
 *
 */
function SmallWheelLogos() {
  return (
    <div className="">
      <LogosWheel radiusWidthMobile={70} className="" radiusWidthDesktop={120}>
        <div className="card fav size-8 sm:size-14">
          <Image src={reactLogo} alt="React logo" />
        </div>
        <div className="card size-8 sm:size-14">
          <Image src={silverstripe} alt="Silverstripe logo" />
        </div>
        <div className="card fav size-8 sm:size-14">
          <Image src={strapi} alt="Strapi logo" />
        </div>
        <div className="card size-8 sm:size-14">
          <Image src={shoptet} alt="Shoptet logo" />
        </div>
        <div className="card fav size-8 sm:size-14">
          <Image src={tw} alt="Tailwind logo" />
        </div>
        <div className="card size-8 sm:size-14">
          <Image src={laravel} alt="Laravel logo" />
        </div>
        <div className="card fav size-8 sm:size-14">
          <Image src={node} alt="Node.js logo" />
        </div>
        <div className="card size-8 sm:size-14">
          <Image src={sas360} alt="SAS360 logo" />
        </div>
      </LogosWheel>
    </div>
  );
}
export default SmallWheelLogos;
