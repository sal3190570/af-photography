"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
interface StoreProviderProps {
  children: React.ReactNode;
}
export default function StoreProvider({ children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
