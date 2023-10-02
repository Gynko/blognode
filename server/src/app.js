const express = require("express");
const app = express();
const path = require("path");
const blogpostsRouter = require("./routes/blogposts/blogposts.router");

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/blogcontent", blogpostsRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
