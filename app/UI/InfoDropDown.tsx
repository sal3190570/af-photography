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
  };

  return (
    <li className="flex items-center  ">
      <Button
        sx={{
          fontFamily: "inherit",
          fontSize: {
            xs: "14px",
            sm: "14px",
            md: "14px",
            lg: "18px",
            xl: "24px",
          },
          fontWeight: 500,
          color: "#615252",
          textTransform: "inherit",
          background: "transparent",
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
          list: {
            "aria-labelledby": "info-button",
          },
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
