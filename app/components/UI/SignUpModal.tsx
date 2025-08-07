"use client";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUpModal, openSignUpModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/Store";
export default function SignUpModal() {
  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen
  );
  const dispatch: AppDispatch = useDispatch();
  console.log(isOpen);
  return (
    <>
      <button
        className="w-full md:w-[88px] md:h-[40px] text-md md:text-sm font-bold bg-white rounded-full
        mb-10 "
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[200px] h-[400px] bg-white">
          Hello this is the signUp modal
        </div>
      </Modal>
    </>
  );
}
