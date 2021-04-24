const app = require("./app");
const IOHandler = require('./socketServer/index');
const port = process.env.PORT || 3000;

app.get("*",(req,res) => {
  res.send("horray socket app integrated")
})


const server = app.listen(port, 'localhost', () => {
  console.log("Server is up on port " + port);
});

IOHandler(server);