"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

export default function InfoDropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemSx = {
    fontFamily: "inherit",
    fontSize: "inherit", // inherit from parent li
    fontWeight: "inherit",
    color: "#615252",
  };

  return (
    <li className="hover:underline cursor-pointer text-sm lg:text-lg xl:text-2xl font-medium text-[#615252] flex items-center">
      <Button
        sx={{
          fontFamily: "inherit",
          fontSize: "inherit", // inherits parent's Tailwind text size
          fontWeight: "inherit",
          color: "inherit",
          textTransform: "inherit",
          background: "transparent",
          padding: 0,
          minWidth: "auto", // let it size like text, no extra spacing
        }}
        aria-controls={open ? "info-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Info
      </Button>

      <Menu
        id="info-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: { "aria-labelledby": "info-button" },
        }}
      >
        <MenuItem
          component={Link}
          href="/the-experience"
          sx={menuItemSx}
          onClick={handleClose}
        >
          The Experience
        </MenuItem>

        <MenuItem
          component={Link}
          href="/faqs"
          sx={menuItemSx}
          onClick={handleClose}
        >
          FAQs
        </MenuItem>

        <MenuItem
          component={Link}
          href="/about"
          sx={menuItemSx}
          onClick={handleClose}
        >
          Meet the Photographer
        </MenuItem>
      </Menu>
    </li>
  );
}
