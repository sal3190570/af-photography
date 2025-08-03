import React from "react";
import ModalSharedLayout from "./UI/ModalSharedLayout";
import TickerTitle from "./UI/TickerTitle";

export default function HomePageFollow() {
  return (
    <>
      <section className="relative w-full py-16 overflow-hidden flex flex-col items-center">
        <TickerTitle />
        <ModalSharedLayout />
        <h4 className="text-sm font-medium">
          Tap any image to see a close-up!
        </h4>
      </section>
    </>
  );
}
