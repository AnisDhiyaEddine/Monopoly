//ALL games based events   # boilerplate code after some custome logic
module.exports = (socket) => {
    socket.on('gameEnded',() => {
        console.log('game ended successfully');
    })

    socket.on("newGame",() => {
        console.log("a new user has joined the game");
    })
}