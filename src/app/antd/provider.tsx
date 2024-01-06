"use client";

import { StyleProvider } from "@ant-design/cssinjs";

const AntProvider = ({ children }: any) => (
  <StyleProvider hashPriority="high">{children}</StyleProvider>
);

export default AntProvider;
