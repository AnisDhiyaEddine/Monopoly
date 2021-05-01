const authRouter = require('./authRouter');
const gamesRouter = require('./gamesRouter')
const roomsRouter = require('./roomsRouter');
module.exports = (app) => {
    app.use(authRouter);
    app.use(gamesRouter);
    app.use(roomsRouter);
}