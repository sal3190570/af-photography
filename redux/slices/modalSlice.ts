import { createSlice } from "@reduxjs/toolkit";

export enum ModalType {
  Navbar = "navbar",
  ModalSharedLayout = "modalsharedlayout",
  SignUp = "signUp",
  LogIn = "logIn",
}

const initialState: { openModal: ModalType | null } = {
  openModal: null,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.openModal = action.payload;
    },
    closeModal: (state) => {
      state.openModal = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
