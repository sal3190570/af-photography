"use client";

import React from "react";
import { Ticker } from "motion-plus/react";

// Accepts a URL prop for flexibility, but you can hardcode it too.
function Box({ primary, href }: { primary: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-5 inline-block "
    >
      <strong className="text-[20px] font-semibold tracking-tight ">
        {primary}
      </strong>
    </a>
  );
}

export default function TickerTitle() {
  return (
    <>
      <Ticker
        hoverFactor={0}
        items={[
          <Box
            primary="Follow AF Photography"
            href="https://www.instagram.com/af_photo.graphy_/"
            key="1"
          />,
        ]}
        style={{
          maskImage:
            "linear-gradient(to right, transparent 5%, black 10%, black 90%, transparent 95%)",
        }}
      />
    </>
  );
}
