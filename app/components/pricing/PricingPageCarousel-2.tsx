"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const packages = [
  {
    title: "Newborn & Maternity - Essential Moments",
    image: "/PricingPhotos/PricingC1C1.jpg",
    description:
      "Great for parents who want beautiful keepsakes with a smaller time or budget commitment. A simple and sweet package for those who want to capture the essentials — no less special, just more compact.",
    features: [
      "Up to 90 minutes of shooting time",
      "Baby-only session with a curated selection of poses",
      "30 fully edited, high-resolution images",
      "Online gallery for easy access",
      "Print release",
    ],
    time: "90 min",
    price: "$350",
  },
  {
    title: "Newborn & Maternity - Classic Collection",
    image: "/PricingPhotos/PricingC1C2.jpg",
    description:
      "Perfect for those who want variety and value in one beautiful package. A balanced package that captures the essence of your baby's first days, with variety and value.",
    features: [
      "Up to 2 hours of shooting time",
      "Baby-focused session + parent/sibling shots",
      "40 fully edited, high-resolution images",
      "Online gallery for download and sharing",
      "Print release",
    ],
    time: "2 hours",
    price: "$450",
  },
  {
    title: "Newborn & Maternity - Deluxe Keepsake",
    image: "/PricingPhotos/PricingC1C3.jpg",
    description:
      "Best for families who want a full storytelling experience with every magical moment preserved. For families who want the ultimate gallery of their newborn's first days — every tiny detail, every tender moment.",
    features: [
      "Up to 3 hours of shooting time",
      "Full session with multiple setups (baby, parents, siblings, lifestyle)",
      "60 fully edited, high-resolution images",
      "Priority editing turnaround",
      "Personalized online gallery",
      "$50 print credit included",
      "Print release",
    ],
    time: "3 hours",
    price: "$650",
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
