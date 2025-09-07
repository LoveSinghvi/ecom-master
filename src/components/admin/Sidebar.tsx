import { useState } from "react";
import { Link } from "react-router-dom";
import { Settings, LayoutDashboard, Package } from "lucide-react";

const Sidebar = () => {
  const [showUsername, setShowUsername] = useState(false);
  const username = "Sumit Gupta"; // Replace this with actual username from context or props

  return (
    <aside className="w-64 bg-[#111827] text-white flex flex-col items-center py-6 space-y-6">
      {/* Profile Picture */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setShowUsername((prev) => !prev)}
      >
        <img
          src="\public\images\tt.png" // <- Replace this with your image path (or use your uploaded one)
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-white"
        />
        {showUsername && (
          <p className="mt-2 text-sm text-gray-300">{username}</p>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col w-full px-6 space-y-3 mt-6">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition"
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link
          to="/dashboard/settings"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
        <Link
          to="/dashboard/orders"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition"
        >
          <Package className="w-5 h-5" />
          Orders
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
