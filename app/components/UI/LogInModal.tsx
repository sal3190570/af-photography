"use client";
import { closeModal, openModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/Store";
import { Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LogInModal() {
  const isOpen = useSelector(
    (state: RootState) => state.modals.openModal === "logIn"
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <button
        className="text-sm lg:text-lg xl:text-2xl font-medium cursor-pointer hover:underline"
        onClick={() => dispatch(openModal("logIn"))}
      >
        Log In
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        className="flex justify-center items-center"
      >
        <div className="bg-white h-[400px] w-[200px]">
          {" "}
          This is the logIn modal
        </div>
      </Modal>
    </>
  );
}
