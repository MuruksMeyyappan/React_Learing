const router = require("express").Router();
const Post = require("../models/post");
const authMiddleware = require("../authMiddleware");
const { postValidation } = require("../validation");

router.get("/posts", authMiddleware, async (req, res) => {
  try {
    // find all posts
    const posts = await Post.find();

    // send response
    return res.status(200).send({ posts });
  } catch (err) {
    if (err) {
      // send error
      return res
        .status(400)
        .send({ error: true, message: JSON.stringify(err) });
    }
  }
});

router.get("/posts/user/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.params["id"];
    const posts = await Post.find({ userId });

    // check for posts by the user
    if (!posts)
      return res
        .send(404)
        .send({ error: true, message: "No posts by the user" });

    // send response
    return res.status(200).send({ posts });
  } catch (err) {
    if (err) {
      // send error
      return res
        .status(400)
        .send({ error: true, message: JSON.stringify(err) });
    }
  }
});

router.get("/posts/:id", authMiddleware, async (req, res) => {
  try {
    const postId = req.params["id"];
    const post = await Post.findById(postId);

    // check for post
    if (!post)
      return res.send(404).send({ error: true, message: "Post not found" });

    // send response
    return res.status(200).send({ post });
  } catch (err) {
    if (err) {
      // send error
      return res
        .status(400)
        .send({ error: true, message: JSON.stringify(err) });
    }
  }
});

router.post("/post", authMiddleware, async (req, res) => {
  try {
    const postObj = {
      userId: req.user._id,
      post: req.body.post
    };

    // validate
    const { error } = postValidation(postObj);
    if (error)
      return res
        .status(400)
        .send({ error: true, message: error.details[0].message });

    // create post
    const post = new Post(postObj);

    // save post
    const { _id } = await post.save();

    // send response
    return res.status(200).send({ post: _id });
  } catch (err) {
    if (err) {
      return res
        .status(400)
        .send({ error: true, message: JSON.stringify(err) });
    }
  }
});

module.exports = router;
