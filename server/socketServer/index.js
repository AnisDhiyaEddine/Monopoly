const socketIO = require("socket.io");

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
      console.log("new socket with " + socket.id + " online");
      socket.broadcast.emit("new Connection","hello new client connected");
      socket.on('subscribeToTimer', (interval) => {
        setInterval(() => {
          socket.emit('timer', new Date());
        }, interval);
      });
    });
    
return io
}