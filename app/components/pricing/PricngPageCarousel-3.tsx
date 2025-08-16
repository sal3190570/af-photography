"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const packages = [
  {
    title: "Add-On - Location",
    image: "",
    description:
      "If you and your loved one/s thrive on fresh air, adventure, and exploring together, an outdoor location session is the perfect way to capture your story. You can choose from a curated list of Melbourne's most beautiful spots—stunning forests, riversides, and scenic parks—or we can head to a place that holds unique meaning for your family. Whether it’s a favourite walking trail, a quiet lakeside, or somewhere special to you, I’ll help craft a relaxed, fun experience where your family’s spirit really shines.",
    features: [
      "",
      "Baby-only session with a curated selection of poses",
      "30 fully edited, high-resolution images",
      "Online gallery for easy access",
      "Print release",
    ],
    time: "",
    price: "$150",
  },
];

export default function PricingPageCarousel3() {
  return (
    <Slider {...settings}>
      {packages.map((pkg) => (
        <div
          key={pkg.title}
          className="w-[50%] max-w-[450px] h-[400px] relative flex flex-col bg-white rounded-lg shadow p-4 overflow-hidden"
        >
          <h5 className="font-semibold text-lg mb-2">{pkg.title}</h5>
          <p className="mb-2">{pkg.description}</p>
          <ul className="mb-16 list-disc pl-5">
            {pkg.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-white border-t">
            <div className="flex gap-2 items-center">
              <ClockIcon className="w-5 text-gray-600" />{" "}
              <span className="text-gray-700 text-sm">{pkg.time}</span>
            </div>
            <div className="flex gap-2 items-center">
              <CurrencyDollarIcon className="w-5 text-gray-600" />{" "}
              <span className="text-gray-700 text-sm">{pkg.price}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
