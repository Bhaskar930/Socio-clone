import React from "react";
import { Link } from "react-router";
import logo from "../assets/hexagonal.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-center text-white px-6">
      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={logo}
          alt="VibeLink Logo"
          className="w-24 h-24 mb-3 animate-bounce drop-shadow-lg"
        />
        <h1 className="text-6xl font-extrabold drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-pink-200">
            VibeLink
          </span>
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-lg text-indigo-100 mb-8 max-w-md leading-relaxed">
        Connect. Share. Feel the Vibe. <br /> Your digital world, reimagined.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          to="/signup"
          className="btn btn-primary bg-white text-indigo-600 border-none hover:bg-indigo-100 hover:scale-105 transition-all"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="btn btn-outline text-white border-white hover:bg-white hover:text-indigo-600 hover:scale-105 transition-all"
        >
          Sign In
        </Link>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-indigo-200">
        © {new Date().getFullYear()} VibeLink. All Rights Reserved.
      </p>
    </div>
  );
};

export default Home;
