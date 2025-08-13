"use client";

import { closeModal, ModalType, openModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/Store";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function StaffLoginModal() {
  const isOpen = useSelector(
    (state: RootState) => state.modals.openModal === ModalType.StaffLogin
  );
  const dispatch: AppDispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
        <h2 className="mt-20 sm:mt-6 text-4xl font-bold mb-8">Staff Login</h2>

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
          {/* Password field */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-left">Password</label>
            <div className="relative w-[85%] sm:max-w-[250px] mx-auto">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="your password"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none w-full pr-10"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={0}
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <button
            className="text-right text-[#ea992f] font-semibold cursor-pointer"
            onClick={() =>
              dispatch(openModal({ type: ModalType.ForgotPassword }))
            }
          >
            Forgot your Password?
          </button>
        </div>
        <button className="mt-2 w-[90%] text-xl font-semibold h-[50px] bg-[#f5dec0] cursor-pointer rounded-full">
          Log In
        </button>
      </div>
    </Modal>
  );
}
