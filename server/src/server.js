const http = require("http");
const app = require("./app");
const { start } = require("repl");

const PORT = 8000;
const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });
}
startServer();
