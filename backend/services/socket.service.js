/**
 * Socket.io screen heartbeat service
 */
const { Screen } = require("../models");

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("screen-online", async (id) => {
      await Screen.update({ status: "online" }, { where: { id } });
      io.emit("screen-status", { id, status: "online" });
    });

    socket.on("disconnect", async () => {
      // optional: mark offline by mapping socket → screen
    });
  });
};
