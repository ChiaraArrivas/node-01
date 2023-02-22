require("dotenv").config();

const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const {checkBodyTitle, checkQueryData} = require('./middlewares')

app.use(cors());
app.use(helmet());

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

//routes
app.use("/api", require("./routes/index"))

app.post("/test/:user_id", checkBodyTitle, checkQueryData, (req, res) => {
    console.log('fn 3');
    return res.status(201).json({
        status: "online", 
        body: {...req.body},
        query: {...req.query}, 
        params: {...req.params}, 
        headers: {...req.headers}
    })
})

const {SERVER_PORT} = process.env;

app.listen(SERVER_PORT, () => {console.log(`Server listen on port ${SERVER_PORT}`)});
