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
  Link,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Sling as Hamburger } from "hamburger-react";

const NavbarMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);

  const linkStyle = {
    textDecoration: "none",
    textTransform: "none",
    color: "#615252",
  };

  return (
    <Box>
      {/* Hamburger Icon */}
      <Box sx={{ position: "fixed", top: 16, left: 16, zIndex: 1301 }}>
        <Hamburger
          toggled={open}
          toggle={setOpen}
          direction="right"
          color="black"
        />
      </Box>

      {/* Navigation Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slotProps={{
          backdrop: { timeout: 300 },
        }}
      >
        <Fade in={open} timeout={400}>
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              bgcolor: "white",
              p: 5,
              pt: 10, // padding top to avoid overlapping hamburger
              outline: 0,
              position: "relative",
              overflowY: "auto",
              color: "#615252",
            }}
          >
            <List sx={{ ml: "50px" }}>
              <ListItemButton
                component={Link}
                href="/portfolio"
                sx={{ ...linkStyle }}
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
                    component={Link}
                    href="/the-experience"
                    sx={{ ...linkStyle, pl: 4 }}
                  >
                    <ListItemText primary="The Experience" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    href="/faqs"
                    sx={{ ...linkStyle, pl: 4 }}
                  >
                    <ListItemText primary="FAQs" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    href="/about"
                    sx={{ ...linkStyle, pl: 4 }}
                  >
                    <ListItemText primary="Meet the Photographer" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                component={Link}
                href="/pricing"
                sx={{ ...linkStyle }}
              >
                <ListItemText primary="Pricing" />
              </ListItemButton>

              <ListItemButton
                component={Link}
                href="/contact"
                sx={{ ...linkStyle }}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </List>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default NavbarMenu;
