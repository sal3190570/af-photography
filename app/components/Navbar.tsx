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
    <nav className="w-full h-[120px] fixed z-50 bg-white/40 backdrop-blur-[2px]">
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1600] cursor-pointer w-[150px] h-[100px]"
          onClick={closeMenu}
        >
          <Link href="/" passHref>
            <div className="relative w-full h-full">
              <Image
                src="/Logo.png"
                alt="AF Logo"
                fill
                priority
                style={{ objectFit: "contain" }}
                sizes="150px"
              />
            </div>
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
