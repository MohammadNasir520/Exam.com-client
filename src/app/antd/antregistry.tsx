import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntProvider from "./provider";

const AntregistryProvider = ({ children }: any) => {
  return (
    <AntProvider>
      <AntdRegistry>{children}</AntdRegistry>
    </AntProvider>
  );
};

export default AntregistryProvider;
