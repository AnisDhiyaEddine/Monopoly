const io = require ('socket.io-client');
const  socket = io("http://127.0.0.1:3000",{
  withCredentials: true,
  extraHeaders: {
   // "my-custom-header": "abcd"
  }
});
socket.on('connect',() => console.log("hello connected to the server yahooo"))
function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer };