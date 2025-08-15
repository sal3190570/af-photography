import Image from "next/image";
import React from "react";
import PricingPageCarousel1 from "./PricingPageCarousel-1";

export default function PricingPageInfo() {
  return (
    <>
      <section className="relative w-full py-30 px-10 overflow-hidden ">
        <h2>Every stage deserves a story-let us help you tell yours...</h2>
        <h1 className="text-[16px] sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
          Pricing
        </h1>
        <div></div>
        <div className=""></div>

        <div className="mt-10">
          <h4>Newborn & Maternity Packages</h4>
          <Image
            src="/Pricing-1.jpg"
            alt="couple holding newborn at home"
            width={2122}
            height={1313}
            className="mb-10"
          />
          <PricingPageCarousel1 />
        </div>
      </section>
    </>
  );
}
