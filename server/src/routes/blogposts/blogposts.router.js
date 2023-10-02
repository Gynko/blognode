const express = require("express");
const { httpGetBlogPosts } = require("./blogposts.controller");
const blogpostsRouter = express.Router();

blogpostsRouter.get("/", httpGetBlogPosts);

module.exports = blogpostsRouter;
