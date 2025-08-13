"use client";

import {
  AnimatePresence,
  motion,
  MotionConfig,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal, ModalType } from "@/redux/slices/modalSlice";
import type { RootState } from "@/redux/Store"; // adjust import if needed

// ===== Types =====
type ImageItem = {
  url: string;
  aspectRatio: "4 / 3" | "3 / 4";
};

interface GalleryProps {
  items: ImageItem[];
  openAtIndex: (idx: number) => void;
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
  { url: "/SharedModalPhotos/1.jpg", aspectRatio: "3 / 4" },
  { url: "/SharedModalPhotos/2.jpg", aspectRatio: "3 / 4" },
  { url: "/SharedModalPhotos/3.jpg", aspectRatio: "3 / 4" },
  { url: "/SharedModalPhotos/4.jpg", aspectRatio: "3 / 4" },
  { url: "/SharedModalPhotos/5.jpg", aspectRatio: "3 / 4" },
  { url: "/SharedModalPhotos/6.jpg", aspectRatio: "3 / 4" },
];

export default function ModalSharedLayout() {
  const dispatch = useDispatch();
  const { openModal: modalType, sharedModalIndex } = useSelector(
    (state: RootState) => state.modals
  );

  const isOpen =
    modalType === ModalType.ModalSharedLayout &&
    sharedModalIndex !== null &&
    sharedModalIndex >= 0;

  useEscToClose(isOpen, () => dispatch(closeModal()));

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}>
      <Gallery
        items={images}
        openAtIndex={(idx) =>
          dispatch(openModal({ type: ModalType.ModalSharedLayout, index: idx }))
        }
      />
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && sharedModalIndex !== null && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="overlay"
                  className="fixed inset-0 z-[2000] bg-black/60"
                  onClick={() => dispatch(closeModal())}
                />
                <SingleImage
                  key="image"
                  image={images[sharedModalIndex]}
                  onClick={() => dispatch(closeModal())}
                />
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </MotionConfig>
  );
}

// ===== Gallery =====
function Gallery({ items, openAtIndex }: GalleryProps) {
  return (
    <ul className="bg-[#f5dec0] border border-[#f5dec0] rounded-[25px] w-[500px] h-[400px] mx-auto mt-10 p-5 grid grid-cols-3 grid-rows-2 gap-5 list-none box-border max-sm:w-[calc(100%-40px)] max-sm:h-[350px] max-sm:grid-cols-3 max-sm:grid-rows-2">
      {items.map((image, i) => (
        <GalleryItem
          key={image.url}
          image={image}
          i={i}
          open={() => openAtIndex(i)}
          hiddenOnMobile={i > 6}
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
      className={`cursor-pointer w-full h-full overflow-hidden relative bg-[#f5dec0] flex items-center justify-center transition-shadow focus-visible:outline-2 focus-visible:outline-pink-500 focus-visible:outline-offset-2 ${aspectClass} ${
        hiddenOnMobile ? "max-sm:hidden" : ""
      }`}
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
      className="fixed inset-0 flex justify-center items-center z-[2002]"
      onClick={onClick}
    >
      <motion.div
        layoutId={image.url}
        className={`overflow-hidden max-w-[90vw] max-h-[90vh] bg-transparent rounded-2xl shadow-xl p-0 ${aspectClass}`}
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
