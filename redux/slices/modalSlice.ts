import { createSlice } from "@reduxjs/toolkit";

export enum ModalType {
  NavbarMenu = "navbarMenu",
  ModalSharedLayout = "modalsharedlayout",
  SignUp = "signUp",
  LogIn = "logIn",
  ForgotPassword = "forgotPassword",
  StaffLogin = "staffLogin",
}

const initialState = {
  openModal: null, // ModalType or null
  sharedModalIndex: null, // Selected image index or null
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      // If opening the SharedLayout modal, set both openModal and sharedModalIndex
      if (action.payload.type === ModalType.ModalSharedLayout) {
        state.openModal = action.payload.type;
        state.sharedModalIndex = action.payload.index;
      } else {
        state.openModal = action.payload.type;
        state.sharedModalIndex = null;
      }
    },
    closeModal: (state) => {
      state.openModal = null;
      state.sharedModalIndex = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
