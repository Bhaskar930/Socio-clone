import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    try {
      await axios.post(`${baseURL}user/signup`, {
        username,
        email,
        password,
      });
      toast.success("SignUp scuccessfully");
      navigate("/login");
    } catch (error) {
      console.log("Error while signin Up", error);
      toast.error("Something went Wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="card w-96 bg-base-100 shadow-2xl p-8 backdrop-blur-md bg-opacity-90">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4">
          VibeLink
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Connect. Share. Feel the vibe. 🌐
        </p>
        <form onSubmit={handleSubmit} className="form-control space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full focus:input-primary"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
            className="btn btn-primary w-full mt-2 hover:scale-105 transition-transform"
            type="submit"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-5">
          Already a member?{" "}
          <a href="/login" className="text-primary hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
