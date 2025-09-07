import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ProfileDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('adminToken');
  const isUser = localStorage.getItem('userToken');

  const handleLogout = () => {
    if (isAdmin) {
      localStorage.removeItem('adminToken');
      toast.success('Admin logged out successfully');
    } else if (isUser) {
      localStorage.removeItem('userToken');
      toast.success('User logged out successfully');
    }
    navigate('/');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <User className="h-5 w-5 sm:h-[1.2rem] sm:w-[1.2rem]" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50  dark:bg-[#111622]">
          {!isAdmin && !isUser ? (
            <>
              <button
                onClick={() => navigate('/login')}
                className="block px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                 👤 User Login
              </button>
              <button
                onClick={() => navigate('/admin-login')}
                className="block px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                🛠️ Admin Login
              </button>
            </>
          ) : isAdmin ? (
            <>
              <button
                onClick={() => navigate('/admin-dashboard')}
                className="block px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Admin Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="block px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Logout
              </button>
            </>
          ) :  (
            <>
              <button
                onClick={() => navigate('/profile')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  dark:bg-[#111622]"
              >
                My Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  dark:bg-[#111622]"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;