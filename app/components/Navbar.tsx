import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-evenly w-full h-[100px] bg-gray-400 gap-20 relative">
        <div className="flex items-center justify-center">
          <Image src="/Logo.jpeg" width={100} height={100} alt="AF Logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex gap-10 cursor-pointer">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/info"}>
              <li>Info</li>
            </Link>
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

        <div className="flex items-center gap-5">
          <span>Instagram</span>
          <button>Book Now</button>
        </div>
      </nav>
    </>
  );
}
