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
    fontSize: "14px",
    fontWeight: 500,
    color: "#615252",
    textTransform: "none",
  };

  return (
    <li className="flex items-center">
      <Button
        sx={{
          fontFamily: "inherit",
          fontSize: "14px",
          fontWeight: 500,
          color: "#615252",
          textTransform: "inherit",
          background: "transparent",
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Info
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem sx={menuItemSx} onClick={handleClose}>
          <Link href="/the-experience" legacyBehavior>
            <a style={{ color: "#615252", textDecoration: "none" }}>
              The Experience
            </a>
          </Link>
        </MenuItem>
        <MenuItem sx={menuItemSx} onClick={handleClose}>
          <Link href="/faqs" legacyBehavior>
            <a style={{ color: "#615252", textDecoration: "none" }}>FAQs</a>
          </Link>
        </MenuItem>
        <MenuItem sx={menuItemSx} onClick={handleClose}>
          <Link href="/about" legacyBehavior>
            <a style={{ color: "#615252", textDecoration: "none" }}>
              Meet the Photographer
            </a>
          </Link>
        </MenuItem>
      </Menu>
    </li>
  );
}
