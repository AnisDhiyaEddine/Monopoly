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
 
// flow         server --> client
//              server <-- client
// In this file you will have the functions for the part  client <-- server // The client listens for server events

const userJoinedRoom =  async (callback) => {
  //Socket is a global object here.
  socket.on('userJoined', (data) => {
    await callback(data);
  })
}

const userQuitRoom = async (callback) => {
  socket.on('userQuitRoom', (data) => {
    await callback(data);
  })
}

const userEndsGame = async (callback) => {
  socket.on('userEndsGame', (data) => {
      await callback(data);
  })
}

