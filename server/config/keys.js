if (process.env.NODE_ENV === "production") {
    module.exports = require("./prod");
  } else {
    // by default now no CI env available
    module.exports = require("./dev");
  }