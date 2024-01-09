"use client";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntProvider from "./provider";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const AntregistryProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
      <Toaster />
    </Provider>
  );
};

export default AntregistryProvider;
