"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link as MuiLink } from "@mui/material";

const SocialsAndContacts = () => (
  <div className="flex items-center gap-4 text-[#615252] text-sm">
    <a
      href="https://www.instagram.com/af_photo.graphy_/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline flex items-center gap-2"
    >
      <FaInstagram size={20} color="#615252" />
    </a>
    <MuiLink href="/contact" underline="none">
      <button className="bg-white text-[#615252] text-sm font-medium px-4 py-2 rounded cursor-pointer hover:bg-gray-200 transition w-fit">
        Book Now
      </button>
    </MuiLink>
  </div>
);

export default SocialsAndContacts;
