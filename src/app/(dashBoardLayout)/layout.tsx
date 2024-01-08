"use client";
import React, { useState } from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import DashboardContent from "@/components/ui/Content/Content";

const { Header } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ backgroundColor: "white" }} />
        <DashboardContent>{children}</DashboardContent>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
