import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { baseURL } from "../lib/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
      const response = await axios.post(`${baseURL}user/login`, {
        email,
        password,
      });
      console.log(response);
      const token = response.data.token;
      const username = response.data.username;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);

      toast.success("Login successful ");

      navigate("/dashboard");
    } catch (error) {
      console.error("Error while logging in:", error);
      toast.error(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="card w-96 bg-base-100 shadow-2xl p-8 backdrop-blur-md bg-opacity-90">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4">
          VibeLink
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Welcome back 👋 <br /> Let’s catch up on the vibes!
        </p>

        <form onSubmit={handleSubmit} className="form-control space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full focus:input-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full focus:input-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-full mt-2 hover:scale-105 transition-transform"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-5">
          Don’t have an account?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
