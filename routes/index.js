const express = require("express");
const app = express.Router();

/**
 * @path /api/ping
 */
app.use("/ping", require("./api/index"))

module.exports = app;