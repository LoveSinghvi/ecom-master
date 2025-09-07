import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaUser, FaIdCard, FaMapMarkerAlt } from "react-icons/fa";

export default function Settings() {
  const location = useLocation();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

      {/* Sub-navigation */}
      <div className="flex space-x-4 mb-6 border-b pb-2 text-sm font-medium">
        <NavLink
          to="/dashboard/settings"
          end
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-t-md ${
              isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-600"
            }`
          }
        >
          <FaUser /> Profile
        </NavLink>

        <NavLink
          to="/dashboard/settings/pan"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-t-md ${
              isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-600"
            }`
          }
        >
          <FaIdCard /> PAN Card
        </NavLink>

        <NavLink
          to="/dashboard/settings/addresses"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-t-md ${
              isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-600"
            }`
          }
        >
          <FaMapMarkerAlt /> Addresses
        </NavLink>
      </div>

      {/* Nested child routes will render here */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <Outlet />
      </div>
    </div>
  );
}
