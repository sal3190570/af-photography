"use client";

import React from "react";
import {
  Modal,
  Fade,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Link as MuiLink,
} from "@mui/material";
import { Sling as Hamburger } from "hamburger-react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SocialsAndContacts from "./UI/SocialsAndContacts";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarMenu: React.FC<Props> = ({ open, setOpen }) => {
  const [openInfo, setOpenInfo] = React.useState(false);

  const closeMenu = () => {
    setOpen(false);
    setOpenInfo(false);
  };

  const linkStyle = {
    textDecoration: "none",
    textTransform: "none",
    color: "#615252",
  };

  return (
    <>
      {/* Hamburger Button */}
      <div
        style={{
          position: "fixed",
          top: 40,
          left: 16,
          zIndex: 1500,
        }}
      >
        <Hamburger
          toggled={open}
          toggle={setOpen}
          direction="right"
          color="#615252"
          size={24}
        />
      </div>

      {/* Modal Menu */}
      <Modal
        open={open}
        onClose={closeMenu}
        disablePortal
        closeAfterTransition
        disableAutoFocus
        slotProps={{ backdrop: { timeout: 300 } }}
      >
        <Fade in={open} timeout={400}>
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              bgcolor: "white",
              p: 5,
              pt: 10,
              position: "relative",
              overflowY: "auto",
              color: "#615252",
              zIndex: 1400,
            }}
          >
            <List sx={{ ml: "50px", mt: "40px" }}>
              <ListItemButton
                component={MuiLink}
                href="/portfolio"
                sx={linkStyle}
                onClick={closeMenu}
              >
                <ListItemText primary="Portfolio" />
              </ListItemButton>

              <ListItemButton onClick={() => setOpenInfo((prev) => !prev)}>
                <ListItemText primary="Info" />
                {openInfo ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openInfo} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={MuiLink}
                    href="/the-experience"
                    sx={{ ...linkStyle, pl: 4 }}
                    onClick={closeMenu}
                  >
                    <ListItemText primary="The Experience" />
                  </ListItemButton>
                  <ListItemButton
                    component={MuiLink}
                    href="/faqs"
                    sx={{ ...linkStyle, pl: 4 }}
                    onClick={closeMenu}
                  >
                    <ListItemText primary="FAQs" />
                  </ListItemButton>
                  <ListItemButton
                    component={MuiLink}
                    href="/about"
                    sx={{ ...linkStyle, pl: 4 }}
                    onClick={closeMenu}
                  >
                    <ListItemText primary="Meet the Photographer" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                component={MuiLink}
                href="/pricing"
                sx={linkStyle}
                onClick={closeMenu}
              >
                <ListItemText primary="Pricing" />
              </ListItemButton>

              <ListItemButton
                component={MuiLink}
                href="/contact"
                sx={linkStyle}
                onClick={closeMenu}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
              <div className="ml-4 mt-10">
                <SocialsAndContacts />
              </div>
            </List>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default NavbarMenu;
