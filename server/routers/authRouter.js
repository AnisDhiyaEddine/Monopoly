const mongoose = require('mongoose');
const Router = require("express").Router;
const User = require('../models/User').Model;
const router = new Router();

router.post('/Register', async (req,res) => {
    let data = req.body ? req.body : res.status(400).send("please provide valid informations"); // data : {name}
    try {
        let exists = await User.find({name : data.name});
        if(exists.length){res.status(400).send("User exits try another name"); return;}
        let user = new User(data);
        await user.save();
        res.send("User registered successfully");
    } catch (error) {
        res.status(400).send("This username is already in use");
    }
})

router.delete('/deleteAccount', async (req,res) => {
    let data = req.body ? req.body : res.status(400).send("invalid arguments");// data : { name }
    console.log(data)
    try {
        await User.deleteOne({name : data.name});
        res.status(200).send('user deleted');
    } catch (error) {
        console.error(error);
        res.status(500).send("Oops an internal error occured");
    }
}) 

module.exports = router;