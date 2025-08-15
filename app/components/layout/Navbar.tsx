"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import InfoDropDown from "../UI/InfoDropDown";
import LoginDropDown from "../UI/LoginDropDown";
import SocialsAndContacts from "../UI/SocialsAndContacts";

export default function Navbar() {
  return (
    <nav className="w-full h-[120px] fixed z-50 bg-white/40 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 mt-2">
        {/* Left side */}
        <div className="flex items-center space-x-6">
          {/* Burger (mobile only) */}
          <NavbarMenu />

          {/* Desktop links */}
          <ul className="hidden md:flex flex-wrap gap-6 items-center">
            <Link href="/portfolio" passHref>
              <li className="hover:underline cursor-pointer text-sm lg:text-lg xl:text-2xl font-medium text-[#615252]">
                Portfolio
              </li>
            </Link>
            <InfoDropDown />
            <Link href="/pricing" passHref>
              <li className="hover:underline cursor-pointer text-sm lg:text-lg xl:text-2xl font-medium text-[#615252]">
                Pricing
              </li>
            </Link>
            <Link href="/contact" passHref>
              <li className="hover:underline cursor-pointer text-sm lg:text-lg xl:text-2xl font-medium text-[#615252]">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* Center logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1600] cursor-pointer w-[150px] h-[100px]">
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

        {/* Right side */}
        <div className="hidden md:flex ml-auto mr-15">
          <LoginDropDown />
        </div>
        <div className="hidden md:flex">
          <SocialsAndContacts />
        </div>
      </div>
    </nav>
  );
}
