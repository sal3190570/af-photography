"use client";
import { closeModal, ModalType, openModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/Store";
import { Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignUpModal() {
  const isOpen = useSelector(
    (state: RootState) => state.modals.openModal === ModalType.SignUp
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        className="flex justify-center items-center
    "
      >
        <div className="bg-white h-[400px] w-[200px]">
          This is the signUp Modal
        </div>
      </Modal>
    </>
  );
}
