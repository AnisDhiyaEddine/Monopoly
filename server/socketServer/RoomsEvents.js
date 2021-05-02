
module.exports = (socket) => {
    socket.on('joinRoom', (roomName, userName)=>{
        socket.join(roomName);
        socket.to(roomName).broadcast.emit('userJoined', {userName})
    })

    socket.on('quitRoom', (roomName, userName) => {
        socket.to(roomName).broadcast.emit('userQuit',{userName});
    })
}