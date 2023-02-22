const express = require("express");
const app = express.Router();

/**
 * @path /api/ping/test
 */
app.all("/:name", (req, res) => {
    console.log(req.params.name);
    return res.status(200).json({
        message: "Server online 1",
    })
})

module.exports = app;