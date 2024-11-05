"use client";
import { userRole } from "@/constant/constant";
import { MenuProps } from "antd";
import Link from "next/link";
import React from "react";

const SidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "Profile",
      children: [
        {
          label: <Link href={"/profile"}>View Profile</Link>,
          key: "View Profile",
        },
      ],
    },
  ];
  const studentSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "My Progress",
      key: "My Progress",
      children: [
        {
          label: <Link href={"/profile"}>View Profile</Link>,
          key: "View Profile",
        },
      ],
    },
  ];
  const SuperAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Add Question",
      key: "Add Question",
      children: [
        {
          label: <Link href={"/add-question"}>Add Question</Link>,
          key: "Add Question",
        },
      ],
    },
  ];

  if (role === userRole.student) {
    return studentSidebarItems;
  } else if (role === userRole.superAdmin) {
    return SuperAdminSidebarItems;
  }
};

export default SidebarItems;
