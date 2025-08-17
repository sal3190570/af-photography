import Image from "next/image";
import PricingPageCarousel2 from "./PricingPageCarousel-2";

export default function PricingPageCouplesEngagement() {
  return (
    <section className="relative w-full mb-5 px-10 overflow-hidden">
      <h4 className="font-semibold mb-4 text-[15px] sm:text-lg md:text-xl lg:text-2xl">
        Couples
      </h4>
      <Image
        src="/PricingPhotos/Pricing-1.jpg"
        alt="couple holding newborn at home"
        width={2122}
        height={1313}
        className="mb-10"
      />
      <PricingPageCarousel2 />
    </section>
  );
}
