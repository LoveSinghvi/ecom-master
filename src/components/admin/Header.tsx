// components/Header.tsx
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 bg-white dark:bg-gray-900 flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <div className="flex items-center gap-4">
        {/* Add theme toggle or notifications here */}
        <FaUserCircle className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
