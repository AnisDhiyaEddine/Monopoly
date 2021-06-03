const app = require("./app");
const IOHandler = require('./socketServer/index');
const port = process.env.PORT || 3000;

app.get("*",(req,res) => {
  res.send("")
})


const server = app.listen(port, 'localhost', () => {
  console.log("Server is up on port " + port);
});

// Add realTime functionnality to the Rest-API
IOHandler(server);