import Image from "next/image";
import PricingPageCarousel1 from "./PricingPageCarousel-1";

export default function PricingPageNewbornMaternity() {
  return (
    <section className="relative w-full px-10 overflow-hidden">
      <h4>Newborn & Maternity Packages</h4>
      <Image
        src="/Pricing-1.jpg"
        alt="couple holding newborn at home"
        width={2122}
        height={1313}
        className="mb-10"
      />
      <PricingPageCarousel1 />
    </section>
  );
}
