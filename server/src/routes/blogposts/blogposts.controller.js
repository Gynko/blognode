const blogPostsJson = require("../../data/blogposts.json");
const fs = require("fs");
const path = require("path");

function httpGetBlogPosts(req, res) {
  return res.status(200).json(blogPostsJson);
}

let blogPostsCounter = 2;
function httpPostNewBlogPost(req, res) {
  const newBlogPost = req.body[0];
  blogPostsCounter++;
  newBlogPost.id = blogPostsCounter;
  newBlogPost.date = new Date().toISOString();
  blogPostsJson.push(newBlogPost);
  fs.writeFile(
    path.join(__dirname, "..", "..", "data", "blogposts.json"),
    JSON.stringify(blogPostsJson, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      return res
        .status(200)
        .json({ message: "New blog post added!", newBlogPost });
    }
  );
}

module.exports = { httpGetBlogPosts, httpPostNewBlogPost };
