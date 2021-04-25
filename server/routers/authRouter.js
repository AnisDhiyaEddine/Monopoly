const mongoose = require('mongoose');
const Router = require("express").Router;

//All middlwares should be configured at this point ;)
const router = new Router();

/**
 * get name of the user, check it on the database,
 * if it exists res.send(400) bad request change userName
 * register user on the database res with userID && allow socketServer to detect it
 */
router.post('/login',(req,res) => {
    console.log(req.body)
    res.send("welcome home")
})


/**
 * database model 
 * Name, 
 * room : {
 * roomID,
 * Array of other users IDs
 * }
 */


module.exports = router;