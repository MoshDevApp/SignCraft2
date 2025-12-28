require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

/**
 * Enable CORS for frontend
 */
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(express.json());
app.use("/uploads", express.static("public/uploads"));

app.use("/api/health", require("./routes/health.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/screens", require("./routes/screen.routes"));
app.use("/api/media", require("./routes/media.routes"));
app.use("/api/playlists", require("./routes/playlist.routes"));
app.use("/api/schedules", require("./routes/schedule.routes"));
app.use("/api/ai", require("./routes/ai.routes"));
app.use("/api/ai/playlists", require("./routes/ai.playlist.routes"));

module.exports = app;
