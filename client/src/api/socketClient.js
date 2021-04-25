const io = require ('socket.io-client');
const  socket = io("http://127.0.0.1:3000",{
  withCredentials: true,
  extraHeaders: {
   // "my-custom-header": "abcd"
  }
});

socket.on('connect',() => console.log("socket connection established"));
socket.on("newClient",(message) => {
  console.log(message + " Yahoooo  !!");
})
function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
  //Keep it to keep an eye on the server status
}

export { subscribeToTimer };