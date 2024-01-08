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

// type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

const role = "student";

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
      //   collapsible
      //   collapsed={collapsed}
      //   onCollapse={(value) => setCollapsed(value)}
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
