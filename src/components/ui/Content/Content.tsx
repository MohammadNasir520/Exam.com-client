"use client";

import { Layout } from "antd";
import React from "react";
const { Content } = Layout;
const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  return <Content>{children}</Content>;
};

export default DashboardContent;
