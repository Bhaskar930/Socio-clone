import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../lib/axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // ✅ Always read fresh token
    console.log(token);

    if (!token) {
      toast.error("You must be logged in to create a post.");
      navigate("/login"); // optional redirect
      return;
    }

    if (!title || !desc) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      setLoading(true);
      console.log(title);
      console.log(desc);

      await axios.post(
        `${baseURL}post/create`,
        { title, desc },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Post created successfully 🎉");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(error.response?.data?.message || "Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          ✍️ Create a New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Title
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="What's your post about?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full min-h-[120px]"
              placeholder="Share your thoughts..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full hover:scale-[1.02] transition-transform"
            disabled={loading}
          >
            {loading ? "Posting..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
