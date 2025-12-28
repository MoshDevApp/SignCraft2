const app = require("./app");
const sequelize = require("./config/database");
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

require("./services/socket.service")(io);

const PORT = process.env.BACKEND_PORT || 3001;

(async () => {
  await sequelize.authenticate();
  server.listen(PORT, () =>
    console.log(`🚀 SignCraft backend running on ${PORT}`)
  );
})();
