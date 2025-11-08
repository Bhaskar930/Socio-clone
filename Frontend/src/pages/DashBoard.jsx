import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { baseURL } from "../lib/axios";
import { PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please log in to view posts.");
        return;
      }

      const res = await axios.get(`${baseURL}post/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const postsData = Array.isArray(res.data) ? res.data : res.data.posts;
      setPosts(postsData || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast.error(error.response?.data?.message || "Failed to load posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Header & Create Post */}
      <div className="max-w-5xl mx-auto mt-8 px-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Your Feed</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          onClick={() => navigate("/create-post")}
        >
          <PlusCircle size={20} />
          Create Post
        </button>
      </div>

      {/* Posts Section */}
      <div className="max-w-6xl mx-auto mt-8 px-4">
        {loading ? (
          <div className="flex justify-center items-center mt-20 text-gray-500">
            Loading posts...
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No posts available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.desc}</p>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>
                      {post.createdBy?.username
                        ? post.createdBy.username
                        : "Unknown Author"}
                    </span>
                    <span>
                      {new Date(post.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
