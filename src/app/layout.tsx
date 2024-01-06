import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { StyleProvider } from "@ant-design/cssinjs";
import AntProvider from "./antd/provider";
import AntregistryProvider from "./antd/antregistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exam.com",
  description: "Take job preparation exam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntregistryProvider>{children}</AntregistryProvider>
      </body>
    </html>
  );
}
