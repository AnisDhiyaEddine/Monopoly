const mongoose = require("mongoose");
const keys = require("../config/keys");

(async () => {
try {
  await mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  console.log("connected to the database");

} catch (error) {
  console.error(error);
}
})()
