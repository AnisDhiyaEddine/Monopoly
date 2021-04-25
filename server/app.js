const express = require("express");
const routersHandler = require('./routers');
const { json } = require("body-parser");
require("./db/connect");

const app = express();

app.use(json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routersHandler(app);

//Listen for socket connections 
  
if (process.env.NODE_ENV === "production") {
 // Run production specific code
}

module.exports = app;