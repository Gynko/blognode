const credentials = require("../../model/secretCredentials.json");

function httpLoginSubmit(req, res) {
  const { username, password } = req.body[0];

  const isValidUser = credentials.some((cred) => {
    return cred.username === username && cred.password === password;
  });

  if (isValidUser) {
    res.cookie("user", username, {
      maxAge: 1000 * 60 * 60 * 24 * 31, // 1 month cookie
      httpOnly: false,
    });
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
}

function httpLogout(req, res) {
  res.clearCookie("user");
  res.status(200).json({ message: "Logged out successfully" });
}

module.exports = { httpLoginSubmit, httpLogout };
