const authRouter = require('./authRouter');

module.exports = (app) => {
    app.use(authRouter);
}