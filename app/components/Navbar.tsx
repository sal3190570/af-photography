import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfoDropDown from "../UI/InfoDropDown";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <nav className="flex w-full h-[120px] justify-between items-center p-4 relative bg-transparent z-50">
      {/* Left: Navigation for desktop / Mobile Hamburger */}
      <div className="flex items-center space-x-6">
        {/* Mobile Menu: Only show on small screens */}
        <div className="block md:hidden">
          <NavbarMenu />
        </div>

        {/* Desktop Links: Show from md and up */}
        <ul className="hidden md:flex flex-wrap gap-6 text-sm font-medium text-[#615252] items-center">
          <Link href="/portfolio" passHref>
            <li className="hover:underline cursor-pointer">Portfolio</li>
          </Link>
          <InfoDropDown />
          <Link href="/pricing" passHref>
            <li className="hover:underline cursor-pointer">Pricing</li>
          </Link>
          <Link href="/contact" passHref>
            <li className="hover:underline cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>

      {/* Center: Logo — perfectly centered always */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link href="/" passHref>
          <Image src="/Logo.png" width={150} height={100} alt="AF Logo" />
        </Link>
      </div>

      {/* Right: Social / CTA */}
      <div className="hidden sm:flex items-center gap-4 text-[#615252] text-sm">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
        <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>
    </nav>
  );
}
