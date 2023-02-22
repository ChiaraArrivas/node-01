require("dotenv").config();

const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");

app.use(cors());
app.use(helmet());

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

app.post("/:user_id", (req, res) => {
   if(req.body.title !== "test1" ) {
    return res.status(500).json({message: "Error body title"})
   }
    return res.status(201).json({status: "online", body: {...req.body} ,query: {...req.query}, params: {...req.params}, headers: {...req.headers}})
})

const {SERVER_PORT} = process.env;

app.listen(SERVER_PORT, () => {console.log(`Server listen on port ${SERVER_PORT}`)});
