"use client";

import { closeModal, ModalType } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/Store";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ForgotPasswordModal() {
  const isOpen = useSelector(
    (state: RootState) => state.modals.openModal === ModalType.ForgotPassword
  );
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");

  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(closeModal())}
      className="flex justify-center items-center"
    >
      {/* Modal content */}
      <div className="relative flex flex-col items-center w-full h-full bg-white sm:h-[400px] sm:w-[380px] sm:rounded-xl outline-none p-6">
        {/* Close button */}
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
          aria-label="Close"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        {/* Title */}
        <h2 className="mt-20 sm:mt-6 text-2xl font-bold mb-8">
          Forgot Your Password?
        </h2>

        {/* Manual Account Creation */}
        <div className="flex flex-col gap-4 w-full">
          {/* Email field */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-left">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="your@email.com"
              className="mx-auto border border-gray-300 rounded-lg px-4 py-2 focus:outline-none w-[85%] sm:max-w-[250px]"
            />
          </div>
        </div>
        <button className="mt-8 w-[90%] text-xl font-semibold h-[50px] bg-[#f5dec0] cursor-pointer rounded-full">
          Reset Password
        </button>
      </div>
    </Modal>
  );
}
