"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { AppDispatch } from "@/redux/Store";
import { useDispatch } from "react-redux";
import { ModalType, openModal } from "@/redux/slices/modalSlice";

export default function LoginDropDown() {
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

  const dispatch: AppDispatch = useDispatch();
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
        aria-controls={open ? "login-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Login
      </Button>

      <Menu
        id="login-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "login-button",
          },
        }}
      >
        <MenuItem
          sx={menuItemSx}
          onClick={() => {
            handleClose();
            dispatch(openModal({ type: ModalType.LogIn }));
          }}
        >
          Client Login
        </MenuItem>

        <MenuItem
          divider={true}
          sx={menuItemSx}
          onClick={() => {
            handleClose();
            dispatch(openModal({ type: ModalType.SignUp }));
          }}
        >
          Sign Up
        </MenuItem>

        <MenuItem sx={menuItemSx} onClick={handleClose}>
          Staff Login
        </MenuItem>
      </Menu>
    </li>
  );
}
