import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer({ bg }: { bg: string }) {
  return (
    <>
      <section
        className={`w-full flex flex-col sm:justify-evenly sm:flex-row sm:items-center relative sm:h-[200px] h-[400px] ${bg}`}
      >
        <ul className="flex flex-col items-center lg:text-[16px] lg:flex-row lg:gap-10 sm:-mt-10 mt-5 underline text-sm gap-0.5 ">
          <li>
            <Link href={"/contact"}>Contact Form</Link>
          </li>
          <a href="mailto:me@salmanawal.com">
            <li>Email</li>
          </a>

          <a
            href="https://www.instagram.com/af_photo.graphy_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </ul>

        <div className="flex flex-col items-center sm:-mt-10">
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
          <div className="flex flex-col justify-center items-center w-[400px] text-sm lg:text-[16px]">
            <span>Melbourne and Surrounds, VIC, Australia</span>
            <span>© AF Photography. All rights reserved.</span>
          </div>
        </div>

        <div className=" lg:flex-row lg:gap-4 sm:-mt-10 mt-10 flex flex-col gap-1 items-center">
          <Link href="/privacy-policy">
            <span className="underline text-sm lg:text-[16px]">
              Privacy Policy
            </span>
          </Link>

          <Link href="/terms-and-conditions">
            <span className="underline text-sm lg:text-[16px]">
              Terms and Conditions
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
