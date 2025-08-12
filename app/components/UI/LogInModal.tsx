"use client";
import { closeModal, ModalType, openModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/Store";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Modal } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LogInModal() {
  const isOpen = useSelector(
    (state: RootState) => state.modals.openModal === ModalType.LogIn
  );
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        className="flex justify-center items-center"
      >
        {/* Modal content */}
        <div className="relative flex flex-col items-center w-full h-full bg-white sm:h-[600px] sm:w-[380px] sm:rounded-xl outline-none p-6">
          {/* Close button */}
          <button
            onClick={() => dispatch(closeModal())}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
            aria-label="Close"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          {/* Title */}
          <h2 className="mt-6 text-4xl font-bold mb-8">Log In</h2>

          <div className="flex flex-col items-center space-y-4 w-full">
            <button className="flex flex-row items-center w-[250px] h-10 rounded-2xl text-[16px] font-medium cursor-pointer ">
              <div className="flex justify-center items-center w-10">
                <Image
                  src="/google.svg"
                  height={18}
                  width={18}
                  alt="Google Logo"
                />
              </div>

              <span className="flex-1 text-left pl-2">Log In With Google</span>
            </button>

            <button className="flex flex-row items-center w-[250px] h-10 rounded-2xl text-[16px] font-medium cursor-pointer ">
              <div className="flex justify-center items-center w-10">
                <Image
                  src="/apple.svg"
                  height={18}
                  width={18}
                  alt="Apple Logo"
                />
              </div>
              <span className="flex-1 text-left pl-2">Log In With Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center w-full my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-gray-500">Or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Manual Account Creation */}
          <div className="flex flex-col gap-4 w-full">
            {/* Email field */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-left">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mx-auto border border-gray-300 rounded-lg px-4 py-2 focus:outline-none w-[250px]"
              />
            </div>
            {/* Password field */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-left">Password</label>
              <div className="relative w-[250px] mx-auto">
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
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
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
          </div>

          <button className="mt-6 w-[90%] text-xl font-semibold h-[50px] bg-[#f5dec0] cursor-pointer rounded-full">
            Log In
          </button>
          <div className="text-sm mt-4 flex gap-2">
            Don't have an account yet?
            <span
              className="text-[#ea992f] font-bold underline cursor-pointer"
              onClick={() => dispatch(openModal({ type: ModalType.SignUp }))}
            >
              Sign Up
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}
