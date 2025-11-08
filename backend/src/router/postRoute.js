import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controller/postController.js";

const postRouter = express.Router();

postRouter.get("/", getPost);
postRouter.post("/create", createPost);
postRouter.put("/update/:id", updatePost);
postRouter.delete("/delete/:id", deletePost);

export default postRouter;
