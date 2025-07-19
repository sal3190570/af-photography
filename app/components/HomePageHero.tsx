import Image from "next/image";
import React from "react";

export default function HomePageHero() {
  return (
    <>
      <div className="relative w-full aspect-[8/5] max-h-[110vh] max-w-[2160px] mx-auto">
        <Image
          src="/Home.jpg"
          alt="Couple holding hands together in front of a big tree"
          width={2160}
          height={1350}
          className="w-full max-h-[110vh] object-cover"
          style={{ objectPosition: "50% 60%" }}
          priority
        />
        <div className="absolute top-0 left-0 w-full h-[140px] bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
}
