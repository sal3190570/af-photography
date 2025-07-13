import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfoDropDown from "../UI/InfoDropDown";

export default function Navbar() {
  return (
    <nav className="flex w-full h-[120px] justify-evenly bg-transparent gap-4 sm:gap-10 p-2 sm:p-4 relative">
      {/* Navigation Links */}
      <div className="flex items-center justify-center">
        <ul className="flex flex-wrap gap-4 sm:gap-10 cursor-pointer justify-center items-center text-[14px] font-medium text-[#615252]">
          <Link href="/portfolio" passHref>
            <li>Portfolio</li>
          </Link>
          <InfoDropDown />
          <Link href="/pricing" passHref>
            <li>Pricing</li>
          </Link>
          <Link href="/contact" passHref>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <Link href="/" passHref>
        <div className="w-[150px] h-[100px] flex items-center justify-center flex-shrink-0">
          <Image src="/Logo.png" width={150} height={100} alt="AF Logo" />
        </div>
      </Link>
      {/* Social and CTA */}
      <div className="flex items-center gap-2 sm:gap-5 flex-shrink-0 text-lg text-white">
        <span>Instagram</span>
        <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>
    </nav>
  );
}
