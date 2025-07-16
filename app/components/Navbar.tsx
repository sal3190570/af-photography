"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InfoDropDown from "../UI/InfoDropDown";
import NavbarMenu from "./NavbarMenu";
import SocialsAndContacts from "./UI/SocialsAndContacts";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full h-[120px] bg-transparent z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 mt-2">
        {/* Left side */}
        <div className="flex items-center space-x-6">
          {/* Mobile burger menu */}
          <div className="block md:hidden">
            <NavbarMenu open={menuOpen} setOpen={setMenuOpen} />
          </div>

          {/* Desktop links */}
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

        {/* Center – Logo */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1600] cursor-pointer"
          onClick={closeMenu}
        >
          <Link href="/" passHref>
            <Image src="/Logo.png" width={150} height={100} alt="AF Logo" />
          </Link>
        </div>

        {/* Right side – Desktop socials */}
        <div className="hidden md:flex">
          <SocialsAndContacts />
        </div>
      </div>
    </nav>
  );
}
