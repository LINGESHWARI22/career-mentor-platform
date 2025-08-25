import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Post from "../models/Post.js";

const router = express.Router();

// Create a post
router.post("/", protect, async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      user: req.user.id,
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error creating post", error: err.message });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "name email");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err.message });
  }
});

export default router;
