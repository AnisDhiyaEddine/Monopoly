// All connection logic
// A user connects  -> notify all the connected users -> update the state 
// A user disconnect
// What else ?!! 


module.exports = (socket) => {
    console.log("new socket with " + socket.id + " online");
    socket.broadcast.emit("new Connection","hello new client connected");
    
    socket.on('disconnect', ()=>{
        // a player has been disconnected close room and save state
        io.emit('closeRoom');
        io.emit('endGame');
    })
    
}
