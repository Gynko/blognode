const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const blogpostsRouter = require("./routes/blogposts/blogposts.router");
const loginRouter = require("./routes/login/login.router");
const cors = require("cors");

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://localhost:8000"],
    credentials: true, // Enable cookies
  })
);

app.use("/api/blogcontent", blogpostsRouter);
app.use("/api", loginRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
