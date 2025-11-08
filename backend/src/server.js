import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./router/userRouter.js";
import postRouter from "./router/postRoute.js";
import { authMiddleware } from "./middeleware/authMiddleware.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect Database
connectDB();

// ✅ Middleware
app.use(express.json());

// ✅ CORS setup (Allow local + production frontend)
const allowedOrigins = [
  "http://localhost:5173", // local Vite frontend
  "https://socio-clone.vercel.app", // your Vercel frontend URL
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// ✅ API Routes
app.use("/api/user", userRouter); // public
app.use("/api/post", authMiddleware, postRouter); // protected

// ✅ Default route for sanity check
app.get("/", (req, res) => {
  res.send("✅ Socio Clone Backend is Running Successfully!");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
