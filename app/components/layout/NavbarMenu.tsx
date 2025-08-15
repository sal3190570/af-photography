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
  Portal,
} from "@mui/material";
import { Sling as Hamburger } from "hamburger-react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/Store";
import { closeModal, ModalType, openModal } from "@/redux/slices/modalSlice";
import SocialsAndContacts from "../UI/SocialsAndContacts";

const NavbarMenu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // Single source of truth from Redux
  const isOpen = useSelector(
    (state: RootState) => state.modals.openModal === ModalType.NavbarMenu
  );

  const [openInfo, setOpenInfo] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const linkStyle = {
    textDecoration: "none",
    textTransform: "none",
    color: "#615252",
    fontSize: {
      xs: "14px",
      sm: "16px",
      lg: "20px",
      xl: "24px",
    },
    fontWeight: 500,
  };

  const handleCloseMenu = () => {
    setOpenInfo(false);
    setOpenLogin(false);
    dispatch(closeModal());
  };

  return (
    <>
      {/* Mobile hamburger button, only below md */}
      <Portal>
        <div
          className="block md:hidden"
          style={{
            position: "fixed",
            top: 40,
            left: 16,
            zIndex: 99999,
          }}
        >
          <Hamburger
            toggled={isOpen}
            toggle={(t) => {
              if (t) {
                dispatch(openModal({ type: ModalType.NavbarMenu }));
              } else {
                dispatch(closeModal());
              }
            }}
            direction="right"
            color="#615252"
            size={32}
          />
        </div>
      </Portal>

      {/* Mobile menu modal */}
      <Modal
        open={isOpen}
        onClose={handleCloseMenu}
        closeAfterTransition
        disableAutoFocus
        slotProps={{ backdrop: { timeout: 300 } }}
      >
        <Fade in={isOpen} timeout={400}>
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              bgcolor: "white",
              p: 5,
              pt: 10,
              position: "fixed",
              top: 0,
              left: 0,
              overflowY: "auto",
              color: "#615252",
              zIndex: 2100,
            }}
          >
            <List sx={{ ml: "50px", mt: "40px" }}>
              {/* Login collapsible */}
              <ListItemButton onClick={() => setOpenLogin((prev) => !prev)}>
                <ListItemText
                  primary="Login"
                  sx={{ fontSize: linkStyle.fontSize, fontWeight: 500 }}
                />
                {openLogin ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openLogin} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ ...linkStyle, pl: 4 }}
                    onClick={() => {
                      handleCloseMenu();
                      dispatch(openModal({ type: ModalType.LogIn }));
                    }}
                  >
                    <ListItemText primary="Client Login" />
                  </ListItemButton>
                  <ListItemButton
                    divider
                    sx={{ ...linkStyle, pl: 4 }}
                    onClick={() => {
                      handleCloseMenu();
                      dispatch(openModal({ type: ModalType.SignUp }));
                    }}
                  >
                    <ListItemText primary="Sign Up" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ ...linkStyle, pl: 4 }}
                    onClick={() => {
                      handleCloseMenu();
                      dispatch(openModal({ type: ModalType.StaffLogin }));
                    }}
                  >
                    <ListItemText primary="Staff Login" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Portfolio link */}
              <ListItemButton
                component={MuiLink}
                href="/portfolio"
                sx={linkStyle}
                onClick={handleCloseMenu}
              >
                <ListItemText primary="Portfolio" />
              </ListItemButton>

              {/* Info collapsible */}
              <ListItemButton onClick={() => setOpenInfo((prev) => !prev)}>
                <ListItemText
                  primary="Info"
                  sx={{ fontSize: linkStyle.fontSize, fontWeight: 500 }}
                />
                {openInfo ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openInfo} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={MuiLink}
                    href="/the-experience"
                    sx={{ ...linkStyle, pl: 4 }}
                    onClick={handleCloseMenu}
                  >
                    <ListItemText primary="The Experience" />
                  </ListItemButton>
                  <ListItemButton
                    component={MuiLink}
                    href="/faqs"
                    sx={{ ...linkStyle, pl: 4 }}
                    onClick={handleCloseMenu}
                  >
                    <ListItemText primary="FAQs" />
                  </ListItemButton>
                  <ListItemButton
                    component={MuiLink}
                    href="/about"
                    sx={{ ...linkStyle, pl: 4 }}
                    onClick={handleCloseMenu}
                  >
                    <ListItemText primary="Meet the Photographer" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Pricing */}
              <ListItemButton
                component={MuiLink}
                href="/pricing"
                sx={linkStyle}
                onClick={handleCloseMenu}
              >
                <ListItemText primary="Pricing" />
              </ListItemButton>

              {/* Contact */}
              <ListItemButton
                component={MuiLink}
                href="/contact"
                sx={linkStyle}
                onClick={handleCloseMenu}
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
