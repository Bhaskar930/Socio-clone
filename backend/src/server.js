import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./router/userRouter.js";
import postRouter from "./router/postRoute.js";
import { authMiddleware } from "./middeleware/authMiddleware.js";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to DB
connectDB();

// ✅ Middleware
app.use(express.json());

// ✅ CORS setup (Allow frontend)
app.use(cors());

// ✅ Routes
app.use("/api/user", userRouter); // public routes
app.use("/api/post", authMiddleware, postRouter); // protected routes

// ✅ Serve frontend (production build)
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // ✅ Compatible with Express v5
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// ✅ Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
