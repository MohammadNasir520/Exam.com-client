"use client";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntProvider from "./provider";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const AntregistryProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  );
};

export default AntregistryProvider;
