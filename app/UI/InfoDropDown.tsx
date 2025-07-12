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

  return (
    <li className="flex items-center">
      <Button
        id="basic-button"
        sx={{
          fontSize: "1.125rem",
          fontWeight: 500,
          color: "white",
          textTransform: "none",
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
        <MenuItem onClick={handleClose}>
          <Link href={"/the-experience"}>The Experience</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={"/faqs"}>FAQs</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={"/about"}>Meet the Photographer</Link>
        </MenuItem>
      </Menu>
    </li>
  );
}
