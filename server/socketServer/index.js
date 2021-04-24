const socketIO = require("socket.io");

module.exports = (expressServer) => {
    io = socketIO(expressServer,{ 
      cors: {
      origin: "http://localhost:3001",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
      }
    })
    io.on('connection', (client) => {
      console.log('horaayyyyy')
      client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
          client.emit('timer', new Date());
        }, interval);
      });
    });
    
return io
}