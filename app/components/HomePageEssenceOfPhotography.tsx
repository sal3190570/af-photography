import React from "react";
import ImageRevealSlider from "./UI/ImageRevealSlider";

export default function HomePageEssenceOfPhotography() {
  return (
    <>
      <section className="relative w-full py-16 overflow-hidden">
        <div className="flex flex-col items-center justify-center relative max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[#615252] text-2xl md:text-3xl lg:text-4xl text-center">
            “The best thing about a picture is that it never changes, even when
            the people in it do.”
          </h3>
          <span className="text-[#615252] text-xl md:text-2xl lg:text-3xl mt-4">
            Andy Warhol
          </span>
        </div>
        <div
          className="flex items-center justify-center relative max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8
        mt-20 gap-10"
        >
          <p className="text-[#615252] text-md sm:text-lg md:text-2xl lg:text-2xl max-w-[600px] w-[75%] text-center">
            Capturing those moments of joy and connection—freezing them in time
            to spark memories and nostalgia—is what truly drives me.
          </p>
          <ImageRevealSlider />
        </div>

        <div></div>
      </section>
    </>
  );
}
