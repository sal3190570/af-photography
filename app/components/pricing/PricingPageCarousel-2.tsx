"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const packages = [
  {
    title: "Couples - Love Unscripted",
    image: "/PricingPhotos/PricingC1C1.jpg",
    description:
      "A session designed for couples who want to celebrate their bond in an authentic and relaxed way. It’s a chance to press pause and let your unique story unfold, capturing candid moments and genuine emotion—perfect for those seeking beautiful images without formality or fuss.",
    features: [
      "Up to 90 minutes of relaxed shoot time at a location special to you",
      "Effortless posing guidance for natural shots",
      "30 professionally edited, high-resolution images",
      "Online gallery for easy access",
      "Print release",
    ],
    time: "90 min",
    price: "$350",
  },
  {
    title: "Couples - Signature Connection",
    image: "/PricingPhotos/PricingC1C2.jpg",
    description:
      "Your love, your adventure. This package blends classic portraits with playful photojournalism to tell your story in a vibrant, unique way. Ideal for couples who want diverse images—from romantic moments to spontaneous laughter—delivered with artistry and heartfelt detail.",
    features: [
      "Up to 2 hours of shooting across two locations (park + urban, or your choice)",
      "Guidance and creative direction for a variety of looks",
      "40 fully edited, high-resolution images",
      "Online gallery for download and sharing",
      "Print release",
    ],
    time: "2 hours",
    price: "$600",
  },
  {
    title: "Couples - Forever Collection",
    image: "/PricingPhotos/PricingC1C3.jpg",
    description:
      "A luxurious, all-inclusive photo experience built for couples ready to cherish every nuance of their relationship. From golden hour light to intimate settings, every detail is designed to evoke emotion and create a timeless visual story.",
    features: [
      "Up to 3 hours of creative photoshoot with custom themes and props",
      "Fully personalized session plan",
      "60 exquisite, artistically retouched images",
      "Fast-track editing with sneak previews",
      "Deluxe online gallery curated for sharing and printing",
      "Complimentary $50 print credit",
      "Print release",
    ],
    time: "3 hours",
    price: "$900",
  },
];

export default function PricingPageCarousel2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (i: number) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi]
  );
  const slideCount = packages.length;

  return (
    <div className="embla relative  mx-auto py-4">
      {/* Arrows absolutely placed at sides */}
      <button
        onClick={scrollPrev}
        className="absolute -left-1 sm:-left-8 xl:hidden top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={scrollNext}
        className="absolute -right-1 sm:-right-10 xl:hidden top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition"
        aria-label="Next slide"
      >
        →
      </button>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="
              embla__slide flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 max-w-[425px] mx-auto h-[650px] sm:h-[675px] md:h-[700px] lg:h-[770px] relative flex flex-col bg-white rounded-lg shadow p-4 "
            >
              <h5 className="font-semibold text-[14px] sm:text-[16px] md:text-[17px] lg:text-[19px] mb-2.5">
                {pkg.title}
              </h5>
              {pkg.image && (
                <div className="mb-2 w-full flex justify-center">
                  <div className="w-[325px] sm:w-[325px] md:w-[325px] lg:w-[425px] overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      width={425}
                      height={300}
                      className="object-cover w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              )}

              <div className="flex-1">
                <p className="mb-2 text-xs">{pkg.description}</p>
                <ul className="list-disc pl-5 text-[10px] lg:text-xs">
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              {/* Bottom bar always pinned */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-white border-t">
                <div className="flex gap-2 items-center">
                  <ClockIcon className="w-5 text-gray-600" />
                  <span className="text-gray-700 text-sm">{pkg.time}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CurrencyDollarIcon className="w-5 text-gray-600" />
                  <span className="text-gray-700 text-sm">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots outside/under carousel */}
      <div className="flex justify-center items-center mt-6 gap-2 xl:hidden">
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full border-2 ${
              selectedIndex === i
                ? "bg-gray-700 border-gray-700"
                : "bg-gray-200 border-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
