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

export default function PricingPageCarousel1() {
  return (
    <Slider {...settings}>
      {/* Card 1 */}
      <div className="w-[50%] max-w-[450px] h-[400px] relative flex flex-col bg-white rounded-lg shadow p-4 overflow-hidden">
        <h5 className="font-semibold text-lg mb-2">
          Newborn - Essential Moments
        </h5>
        <p className="mb-2">
          Great for parents who want beautiful keepsakes with a smaller time or
          budget commitment. A simple and sweet package for those who want to
          capture the essentials — no less special, just more compact.
        </p>
        <ul className="mb-16 list-disc pl-5">
          <li>Up to 90 minutes of shooting time</li>
          <li>Baby-only session with a curated selection of poses</li>
          <li>30 fully edited, high-resolution images</li>
          <li>Online gallery for easy access</li>
          <li>Print release</li>
        </ul>
        <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-white border-t">
          <div className="flex gap-2 items-center">
            <ClockIcon className="w-5 " />{" "}
            <span className="text-gray-700 text-sm">90 min</span>
          </div>
          <div className="flex gap-2 items-center">
            <CurrencyDollarIcon className="w-5 " />{" "}
            <span className="text-gray-700 text-sm">$350</span>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="w-[50%] max-w-[450px] h-[400px] relative flex flex-col bg-white rounded-lg shadow p-4 overflow-hidden">
        <h5 className="font-semibold text-lg mb-2">
          Newborn - Classic Collection
        </h5>
        <p className="mb-2">
          Perfect for those who want variety and value in one beautiful package.
          A balanced package that captures the essence of your baby's first
          days, with variety and value.
        </p>
        <ul className="mb-16 list-disc pl-5">
          <li>Up to 2 hours of shooting time</li>
          <li>Baby-focused session + parent/sibling shots</li>
          <li>40 fully edited, high-resolution images</li>
          <li>Online gallery for download and sharing</li>
          <li>Print release</li>
        </ul>
        <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-white border-t">
          <div className="flex gap-2 items-center">
            <ClockIcon className="w-5 " />{" "}
            <span className="text-gray-700 text-sm">2 hours</span>
          </div>
          <div className="flex gap-2 items-center">
            <CurrencyDollarIcon className="w-5" />{" "}
            <span className="text-gray-700 text-sm">$450</span>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="w-[50%] max-w-[450px] h-[400px] relative flex flex-col bg-white rounded-lg shadow p-4 overflow-hidden">
        <h5 className="font-semibold text-lg mb-2">
          Newborn - Deluxe Keepsake
        </h5>
        <p className="mb-2">
          Best for families who want a full storytelling experience with every
          magical moment preserved — every tiny detail, every tender moment.
        </p>
        <ul className="mb-16 list-disc pl-5">
          <li>Up to 3 hours of shooting time</li>
          <li>
            Full session with multiple setups (baby, parents, siblings,
            lifestyle)
          </li>
          <li>60 fully edited, high-resolution images</li>
          <li>Priority editing turnaround</li>
          <li>Personalized online gallery</li>
          <li>$50 print credit included</li>
          <li>Print release</li>
        </ul>
        <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-white border-t">
          <div className="flex gap-2 items-center">
            <ClockIcon className="w-5 " />{" "}
            <span className="text-gray-700 text-sm">3 hours</span>
          </div>
          <div className="flex gap-2 items-center">
            <CurrencyDollarIcon className="w-5 " />{" "}
            <span className="text-gray-700 text-sm">$650</span>
          </div>
        </div>
      </div>
    </Slider>
  );
}
