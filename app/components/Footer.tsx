import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center relative h-[600px] bg-red-200">
        <ul
          className="flex flex-col underline gap-0.5 text-[#615252]
          cursor-pointer"
        >
          <Link href={"/contact"}>
            <li>Contact Form</li>
          </Link>

          <a href="mailto:me@salmanawal.com">
            <li>Email</li>
          </a>

          <a
            href="https://www.instagram.com/af_photo.graphy_/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Instagram
          </a>
        </ul>

        <div className="flex flex-col items-center justify-center">
          <Link href="/" passHref>
            <div className="relative w-[150px] h-[150px]">
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
          <div className="flex flex-col justify-center items-center w-[400px]">
            <span>Melbourne and Surrounds, VIC, Australia</span>
            <span>© AF Photography. All rights reserved.</span>
          </div>
        </div>
      </section>
    </>
  );
}
