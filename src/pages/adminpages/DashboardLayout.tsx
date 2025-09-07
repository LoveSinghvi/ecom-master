import { NavLink, Outlet } from "react-router-dom";
import {
  FaUser,
  FaCog,
  FaClipboardList,
  FaBars,
  FaChevronLeft,
} from "react-icons/fa";
import { useState } from "react";
import Navbar from "../../components/NavBar";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [showName, setShowName] = useState(false);
  const username = "@yourusername.com";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main layout: sidebar + content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`${
            collapsed ? "w-20" : "w-64"
          } bg-gray-100 dark:bg-gray-900 p-4 space-y-6 border-r transition-all duration-100`}
        >
          {/* Toggle Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-600 dark:text-gray-300 mb-4"
          >
            {collapsed ? <FaBars /> : <FaChevronLeft />}
          </button>

          {/* Profile Section */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setShowName(!showName)}
          >
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            {!collapsed && showName && (
              <span className="mt-2 text-sm text-gray-300">{username}</span>
            )}
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col space-y-3 text-gray-700 dark:text-gray-200">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  isActive ? "bg-gray-300 dark:bg-gray-800 font-bold" : ""
                }`
              }
            >
              <FaClipboardList />
              {!collapsed && "Dashboard"}
            </NavLink>

            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  isActive ? "bg-gray-300 dark:bg-gray-800 font-bold" : ""
                }`
              }
            >
              <FaCog />
              {!collapsed && "Settings"}
            </NavLink>

            <NavLink
              to="/dashboard/orders"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  isActive ? "bg-gray-300 dark:bg-gray-800 font-bold" : ""
                }`
              }
            >
              <FaClipboardList />
              {!collapsed && "Orders"}
            </NavLink>

            <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  isActive ? "bg-gray-300 dark:bg-gray-800 font-bold" : ""
                }`
              }
            >
              <FaUser />
              {!collapsed && "Users"}
            </NavLink>

            <NavLink
              to="/dashboard/teams"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  isActive ? "bg-gray-300 dark:bg-gray-800 font-bold" : ""
                }`
              }
            >
              <FaUser />
              {!collapsed && "Manage Teams"}
            </NavLink>
          </nav>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-white dark:bg-gray-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
