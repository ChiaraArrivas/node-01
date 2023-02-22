require("dotenv").config();

const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");

app.use(cors());
app.use(helmet());

app.use(express.json({extended: true}));
app.use(express.url({extended: true}));

const {SERVER_PORT} = process.env;

app.listen(SERVER_PORT, () => {console.log(`Server listen on port ${SERVER_PORT}`)});
