"use client";

import React from "react";
import {
  Modal,
  Fade,
  List,
  ListItemText,
  Collapse,
  Box,
  ListItemButton,
  Link as MuiLink,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Sling as Hamburger } from "hamburger-react";

const NavbarMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);
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
      {/* Always render single hamburger (animated) */}
      <div
        style={{
          position: "fixed",
          top: 16,
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

      {/* Modal */}
      <Modal
        open={open}
        onClose={closeMenu}
        disablePortal // ✅ keeps it inside current DOM hierarchy
        closeAfterTransition
        slotProps={{
          backdrop: { timeout: 300 },
        }}
        disableAutoFocus
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
              zIndex: 1400, // Lower than hamburger
            }}
          >
            <List sx={{ ml: "50px" }}>
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
            </List>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default NavbarMenu;
