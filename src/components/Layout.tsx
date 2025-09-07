import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to check the current route
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Hide the NavBar on login and signup pages
  const hideNavBar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="flex  min-h-screen flex-col">
      {!hideNavBar && <NavBar />} {/* Conditionally render NavBar */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
