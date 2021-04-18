const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
 // Run production specific code
}

module.exports = app;