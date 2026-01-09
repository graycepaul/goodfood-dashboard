"use client";

import { useState } from "react";
import Sidebar from "../dashboard/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main
        className={`
        flex-1 transition-all duration-300 ease-in-out
        ml-0 lg:ml-${sidebarCollapsed ? "20" : "64"}
        bg-white 
      `}
      >
        {children}
      </main>
    </div>
  );
}
