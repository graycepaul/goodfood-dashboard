"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Utensils,
  MessageSquare,
  Settings,
  CreditCard,
  User,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  {
    section: "MENU",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        active: true,
      },
      {
        id: "food-order",
        label: "Food Order",
        icon: ShoppingCart,
        active: false,
      },
      {
        id: "manage-menu",
        label: "Manage Menu",
        icon: Utensils,
        active: false,
      },
      {
        id: "customer-review",
        label: "Customer Review",
        icon: MessageSquare,
        active: false,
      },
    ],
  },
  {
    section: "OTHERS",
    items: [
      { id: "settings", label: "Settings", icon: Settings, active: true },
      { id: "payment", label: "Payment", icon: CreditCard, active: false },
      { id: "accounts", label: "Accounts", icon: User, active: false },
      { id: "help", label: "Help", icon: HelpCircle, active: false },
    ],
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static top-0 left-0 z-40
        bg-[#f1f2f7] text-gray-600
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-20" : "w-72"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div
            className={`
            flex items-center p-6 border-b border-gray-200
            ${isCollapsed ? "justify-center" : "justify-between"}
          `}
          >
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="bg-[#5a67ba] p-2 px-4 rounded-full text-white font-bold text-xl">
                  G
                </div>
                <h1 className="text-xl font-bold text-[5a67ba]">GOODFOOD</h1>
              </div>
            )}
            {isCollapsed && (
              <div className="w-8 h-8 bg-[#5a67ba] rounded-lg flex items-center justify-center">
                <div className="bg-[#5a67ba] p-2 px-4 rounded-full text-white font-bold text-3xl">
                  G
                </div>
              </div>
            )}
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-8 overflow-y-auto">
            {menuItems.map((section) => (
              <div key={section.section}>
                {!isCollapsed && (
                  <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">
                    {section.section}
                  </h2>
                )}
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        className={`
                          w-full flex items-center rounded-lg px-4 py-3 text-sm font-medium
                          transition-all duration-200
                          ${
                            item.active
                              ? "bg-[#e4e7f4] text-blue-800 shadow-md"
                              : "text-gray-500 hover:bg-[#e4e7f4] hover:text-white"
                          }
                          ${isCollapsed ? "justify-center" : "justify-start"}
                        `}
                      >
                        <item.icon size={20} className="flex-shrink-0" />
                        {!isCollapsed && (
                          <span className="ml-3">{item.label}</span>
                        )}
                        {item.active && !isCollapsed && (
                          <div className="ml-auto w-2 h-2 bg-[#5a67ba] rounded-full" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
