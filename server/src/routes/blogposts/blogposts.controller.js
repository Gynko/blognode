const blogPostsJson = require("../../data/blogposts.json");

function httpGetBlogPosts(req, res) {
  return res.status(200).json(blogPostsJson);
}

module.exports = { httpGetBlogPosts };
