"use client";
import React from "react";
import "./globals.css";

const Layout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="en">
      <body className="p-0 h-dvh max-h-dvh overflow-hidden">{children}</body>
    </html>
  );
};

export default Layout;
