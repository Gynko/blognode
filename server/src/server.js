const https = require("https");
const app = require("./app");
const fs = require("fs");

const PORT = 8000;

const serverOptions = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};

const server = https.createServer(serverOptions, app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is listening on port https://localhost:${PORT}`);
  });
}
startServer();
