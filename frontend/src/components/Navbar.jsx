import React from "react";
import { useNavigate } from "react-router";
import logo from "../assets/hexagonal.png";
import { LogOut } from "lucide-react"; // icon library

const Navbar = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("username");

  const firstLetter = user ? user.charAt(0).toUpperCase() : "U";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-6 py-3 flex justify-between items-center">
      {/* Left Section - Logo & Name */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <img src={logo} alt="VibeLink Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          VibeLink
        </h1>
      </div>

      {/* Right Section - User Circle & Logout */}
      <div className="flex items-center gap-4">
        {/* User Initial Circle */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 text-white flex items-center justify-center font-semibold text-lg shadow-md">
          {firstLetter}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="btn btn-sm btn-outline border-indigo-400 text-indigo-600 hover:bg-indigo-100 flex items-center gap-2"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
