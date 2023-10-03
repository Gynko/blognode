const credentials = require("../../data/secretCredentials.json");

function httpLoginSubmit(req, res) {
  const { username, password } = req.body[0];

  const isValidUser = credentials.some((cred) => {
    return cred.username === username && cred.password === password;
  });

  if (isValidUser) {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
}

module.exports = { httpLoginSubmit };
