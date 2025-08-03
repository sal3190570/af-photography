"use client";

import {
  AnimatePresence,
  motion,
  MotionConfig,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";

// ===== Types =====

type ImageItem = {
  url: string;
  aspectRatio: "4 / 3" | "3 / 4";
};

interface GalleryProps {
  items: ImageItem[];
  setIndex: (idx: number) => void;
}

interface GalleryItemProps {
  image: ImageItem;
  open: () => void;
  i: number;
  hiddenOnMobile?: boolean;
}

interface SingleImageProps {
  image: ImageItem;
  onClick: () => void;
}

// ===== Data =====

const baseZIndex = 2000;
const zStack = ["overlay", "thumbnail", "image"];

const images: ImageItem[] = [
  { url: "/SharedModalPhotos/1.jpg", aspectRatio: "4 / 3" },
  { url: "/SharedModalPhotos/2.jpg", aspectRatio: "3 / 4" },
  { url: "/SharedModalPhotos/3.jpg", aspectRatio: "3 / 4" },
  { url: "/SharedModalPhotos/4.jpg", aspectRatio: "3 / 4" },
  { url: "/SharedModalPhotos/5.jpg", aspectRatio: "4 / 3" },
  { url: "/SharedModalPhotos/6.jpg", aspectRatio: "3 / 4" },
];

// ===== Main Component =====

export default function ModalSharedLayout() {
  const [index, setIndex] = useState<number | false>(false);
  useEscToClose(index !== false, () => setIndex(false));

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}>
      <Gallery items={images} setIndex={setIndex} />
      <AnimatePresence>
        {index !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="overlay"
            className="fixed inset-0 z-[2000] bg-black/60"
            onClick={() => setIndex(false)}
          />
        )}
        {index !== false && (
          <SingleImage
            key="image"
            image={images[index]}
            onClick={() => setIndex(false)}
          />
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

// ===== Gallery =====

function Gallery({ items, setIndex }: GalleryProps) {
  return (
    <ul
      className="
        bg-[#f5dec0]
        border border-[#f5dec0]
        rounded-[25px]
        w-[500px]
        h-[400px]
        mx-auto
        mt-10
        p-5
        grid
        grid-cols-3
        grid-rows-2
        gap-5
        list-none
        box-border
        max-sm:w-[calc(100%-40px)]
        max-sm:h-[300px]
        max-sm:grid-cols-2
        max-sm:grid-rows-2
      "
    >
      {items.map((image, i) => (
        <GalleryItem
          key={image.url}
          image={image}
          i={i}
          open={() => setIndex(i)}
          hiddenOnMobile={i > 3}
        />
      ))}
    </ul>
  );
}

// ===== GalleryItem =====

function GalleryItem({ image, open, i, hiddenOnMobile }: GalleryItemProps) {
  const zIndex = useMotionValue(0);
  const activeZIndex = baseZIndex + zStack.indexOf("thumbnail");

  const aspectClass =
    image.aspectRatio === "4 / 3"
      ? "aspect-[4/3]"
      : image.aspectRatio === "3 / 4"
      ? "aspect-[3/4]"
      : "";

  return (
    <motion.li
      className={`
        cursor-pointer
        w-full h-full
        overflow-hidden
        relative
        bg-[#f5dec0]
        flex items-center justify-center
        transition-shadow
        focus-visible:outline-2 focus-visible:outline-pink-500 focus-visible:outline-offset-2
        ${aspectClass}
        ${hiddenOnMobile ? "max-sm:hidden" : ""}
      `}
      key={image.url}
      onClick={() => {
        open();
        zIndex.set(activeZIndex);
      }}
      layoutId={image.url}
      style={{ borderRadius: 10, zIndex: zIndex.get() }}
      onLayoutAnimationStart={() => zIndex.set(activeZIndex)}
      onLayoutAnimationComplete={() => zIndex.set(0)}
      tabIndex={0}
      role="button"
      aria-label={`View Photo ${i + 1}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") open();
      }}
    >
      <motion.img
        layoutId={image.url + "image"}
        src={image.url}
        alt={`Gallery item ${i + 1}`}
        className="w-full h-full object-cover select-none"
        draggable={false}
      />
    </motion.li>
  );
}

// ===== SingleImage =====

function SingleImage({ image, onClick }: SingleImageProps) {
  const aspectClass =
    image.aspectRatio === "4 / 3"
      ? "aspect-[4/3]"
      : image.aspectRatio === "3 / 4"
      ? "aspect-[3/4]"
      : "";

  return (
    <div
      className={`
        fixed inset-0 flex justify-center items-center
        z-[2002]
      `}
      onClick={onClick}
    >
      <motion.div
        layoutId={image.url}
        className={`
          overflow-hidden
          max-w-[90vw]
          max-h-[90vh]
          bg-transparent
          rounded-2xl
          shadow-xl
          p-0
          ${aspectClass}
        `}
        style={{ borderRadius: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          layoutId={image.url + "image"}
          src={image.url}
          alt="Modal photo"
          className="w-full h-full object-contain"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

// ===== Escape Hook =====

function useEscToClose(isOpen: boolean, close: () => void) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);
}
