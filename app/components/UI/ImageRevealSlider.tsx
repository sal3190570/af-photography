"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type MotionValue,
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  src?: string;
  step?: number;
}

export default function ImageRevealSlider({
  src = "/Home-5.png",
  step = 50,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [boundary, setBoundary] = useState(300);

  const clipPath = useTransform(
    x,
    [-boundary, boundary],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)"]
  );

  const lineBackgroundColor = useSliderColor(x, boundary);
  const keyboardHelpers = useKeyboard(x, boundary, step);

  // 🧠 Update boundary on initial render and window resize
  useLayoutEffect(() => {
    const updateBoundary = () => {
      if (containerRef.current) {
        setBoundary(containerRef.current.clientWidth / 2);
      }
    };

    updateBoundary();
    window.addEventListener("resize", updateBoundary);
    return () => window.removeEventListener("resize", updateBoundary);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-transparent">
        <motion.img
          src={src}
          alt="Reveal image full color"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.img
          src={src}
          alt="Reveal image in black and white"
          className="absolute inset-0 w-full h-full object-cover grayscale-[95%]"
          style={{ clipPath }}
        />
      </div>

      {/* Draggable Line + Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-0.5 cursor-grab left-1/2 -translate-x-1/2 drop-shadow"
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.05}
        style={{ x, backgroundColor: lineBackgroundColor }}
        tabIndex={0}
        onFocus={keyboardHelpers.start}
        onBlur={keyboardHelpers.stop}
      >
        <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 text-black cursor-grab">
          <LeftRightIcon />
        </div>
      </motion.div>
    </div>
  );
}

/* ========== Helpers ========== */

function clamp(min: number, max: number, value: number): number {
  return Math.min(Math.max(value, min), max);
}

function useSliderColor(x: MotionValue<number>, boundary: number) {
  return useTransform(
    x,
    [-boundary + 20, -boundary + 60, boundary - 60, boundary - 20],
    [
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 1)",
      "rgba(255, 255, 255, 1)",
      "rgba(255, 255, 255, 0)",
    ]
  );
}

function useKeyboard(x: MotionValue<number>, boundary: number, step: number) {
  const handleKeyDown = (event: KeyboardEvent) => {
    let move = 0;
    if (event.key === "ArrowLeft") move = -step;
    if (event.key === "ArrowRight") move = step;
    if (move === 0) return;

    const target = clamp(-boundary, boundary, x.get() + move);
    animate(x, target, {
      type: "spring",
      stiffness: 900,
      damping: 40,
      velocity: move * 10,
    });
  };

  const start = () => {
    document.addEventListener("keydown", handleKeyDown);
  };

  const stop = () => {
    document.removeEventListener("keydown", handleKeyDown);
  };

  return { start, stop };
}

/* ========== Icon ========== */

function LeftRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" // Uses container's "text-black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 8 4 4-4 4" />
      <path d="m6 8-4 4 4 4" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </svg>
  );
}
