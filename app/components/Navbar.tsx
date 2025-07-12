import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfoDropDown from "../UI/InfoDropDown";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-wrap justify-evenly w-full h-[100px] bg-gray-400 gap-4 sm:gap-10 p-2 sm:p-4 relative">
        <div className="flex items-center justify-center flex-shrink-0">
          <Image src="/Logo.jpeg" width={80} height={80} alt="AF Logo" />
        </div>
        <div className="flex items-center flex-grow justify-center">
          <ul className="flex flex-wrap gap-4 sm:gap-10 cursor-pointer justify-center items-center text-lg text-white">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <InfoDropDown />
            <Link href={"/portlio"}>
              <li>Portfolio</li>
            </Link>
            <Link href={"/pricing"}>
              <li>Pricing</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-2 sm:gap-5 flex-shrink-0 text-lg text-white">
          <span>Instagram</span>
          <button>Book Now</button>
        </div>
      </nav>
    </>
  );
}
