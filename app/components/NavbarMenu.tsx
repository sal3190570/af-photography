"use client";

import React from "react";
import {
  Drawer,
  List,
  ListItemText,
  Collapse,
  Box,
  ListItemButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// ✅ Import Hamburger from hamburger-react
import { Sling as Hamburger } from "hamburger-react";

const NavbarMenu: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);

  return (
    <Box>
      {/* Animated Hamburger icon */}
      <Box sx={{ position: "fixed", top: 16, left: 16, zIndex: 1301 }}>
        <Hamburger
          toggled={openDrawer}
          toggle={setOpenDrawer}
          direction="left"
          color="black"
        />
      </Box>

      {/* Full-width Drawer */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              width: "100vw",
              maxWidth: "100vw",
              backgroundColor: "white", // optional
              pt: 4, // padding top so it doesn’t clash with hamburger
            },
          },
        }}
      >
        <Box sx={{ width: "100%" }} role="presentation">
          <List>
            <ListItemButton onClick={() => setOpenInfo((prev) => !prev)}>
              <ListItemText primary="Info" />
              {openInfo ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openInfo} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="About" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="FAQ" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemText primary="Pricing" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavbarMenu;
