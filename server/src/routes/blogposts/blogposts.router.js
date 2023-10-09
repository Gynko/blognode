const express = require("express");
const {
  httpGetBlogPosts,
  httpPostNewBlogPost,
} = require("./blogposts.controller");
const blogpostsRouter = express.Router();

blogpostsRouter.get("/", httpGetBlogPosts);
blogpostsRouter.post("/", httpPostNewBlogPost);

module.exports = blogpostsRouter;
