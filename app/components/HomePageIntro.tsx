import Image from "next/image";
import React from "react";

export default function HomePageIntro() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className=" text-[#615252] font-medium text-xl sm:text-2xl lg:text-4xl mb-16
          ml-[4vw] sm:ml-[6vw] md:ml-[9vw] lg:ml-[11vw] xl:ml-[12vw] w-fit"
        >
          Memories in Every Frame
        </h2>

        {/* Image */}
        <div
          className="relative w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[45vw] max-w-[800px] aspect-[4/3] mb-16 
  ml-[6vw] sm:ml-[10vw] md:ml-[14vw] lg:ml-[20vw] xl:ml-[22vw] transition-all duration-500"
        >
          <Image
            src="/Home-2.jpg"
            alt="Loving couple holding newborn"
            fill
            className="object-contain rounded-md shadow-lg"
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, (max-width: 1280px) 50vw, 45vw"
          />
        </div>

        {/* Subheading */}
        <h1
          className="text-[#615252] font-medium text-xl sm:text-2xl lg:text-4xl whitespace-nowrap
  ml-[33vw] sm:ml-[35vw] md:ml-[40vw] lg:ml-[42vw] xl:ml-[44vw] w-fit"
        >
          <span className="italic">Melbourne</span> Family Photographer
        </h1>
      </div>
    </section>
  );
}
