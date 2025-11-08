import Post from "../model/postModel.js";

// Get all posts (everyone can see)
export const getPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("createdBy", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: error.message });
  }
};

// Create new post
export const createPost = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const userId = req.userId;
    console.log(title);
    console.log(desc);
    console.log(userId);
    if (!title || !desc || !userId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = await Post.create({
      title,
      desc,
      createdBy: userId,
    });

    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
  }
};

// Update post (only owner)
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, userId } = req.body;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.createdBy.toString() !== userId)
      return res
        .status(403)
        .json({ message: "You can only edit your own posts" });

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, desc },
      { new: true } // returns updated doc
    );

    res
      .status(200)
      .json({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
};

// Delete post (only owner)
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.createdBy.toString() !== userId)
      return res
        .status(403)
        .json({ message: "You can only delete your own posts" });

    await Post.findByIdAndDelete(id);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
};
