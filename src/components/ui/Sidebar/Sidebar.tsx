"use client";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import SidebarItems from "./SidebarItems/SidebarItems";
import { getUserInfo } from "@/services/authServices";

const { role } = getUserInfo() as any;

const Sidebar = () => {
  const items: MenuProps["items"] = [
    {
      label: "Profile",
      key: "Profile",
      children: [
        {
          label: <Link href={"/"}>View Profile</Link>,
          key: "View Profile",
        },
      ],
    },
  ];

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      style={{
        minHeight: "100vh",
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="text-center text-2xl font-bold text-black">
        <Link className="text-black" href={"/"}>
          <h1 className="text-black">Exam.com</h1>
        </Link>
      </div>
      <Menu
        // theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
