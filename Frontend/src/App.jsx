import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/SignIn";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
};

export default App;
