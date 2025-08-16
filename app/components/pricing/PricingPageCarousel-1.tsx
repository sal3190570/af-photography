"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
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
    title: "Newborn & Maternity - Location Add On",
    image: "/PricingPhotos/PricingC1C3.jpg",
    description:
      "Have a special place in mind or choose from a list of places to capture your moment",
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

export default function PricingPageCarousel1() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla w-screen max-w-full py-4 mx-auto">
      <div
        className="embla__viewport w-screen max-w-full overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="
                embla__slide
                flex-shrink-0
                basis-full        // Always one card per view at mobile
                sm:basis-1/2      // Two cards per view on tablet
                lg:basis-1/3      // Three cards per view on desktop
                h-[700px]
                relative
                flex flex-col
                bg-white
                rounded-lg
                shadow
                p-4
                mx-auto
              "
            >
              <h5 className="font-semibold text-lg mb-2">{pkg.title}</h5>
              {pkg.image && (
                <div className="mb-2 w-full flex justify-center">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={350}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              )}
              <p className="mb-2">{pkg.description}</p>
              <ul className="mb-16 list-disc pl-5">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
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
    </div>
  );
}
