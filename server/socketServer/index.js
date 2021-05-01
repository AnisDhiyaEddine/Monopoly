const socketIO = require("socket.io");
const ConnectionHandler = require('./ConnectionBasedEvents');
const RoomsEvents = require('./RoomsEvents');
const GamesEvents = require('./GamesEvents');
const UsersEvents = require('./UsersEvents');

module.exports = (expressServer) => {
    io = socketIO(expressServer,{ 
      cors: {
      origin: ["http://localhost:3001", "http://localhost:3002"], //Handle multiple domains
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
      }
    })
    io.on('connection', (socket) => {
      ConnectionHandler(socket);
    });
return io
}