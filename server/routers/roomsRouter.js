const Router = require("express").Router;
const Room = require('../models/Room').Model;
const User = require('../models/User').Model;
//All middlwares should be configured at this point ;)
const router = new Router();



router.post('/rooms/create',async (req, res)=>{
    try {
        const data = req.body;  // data : {roomName, userName}
        const exists = await Room.find({roomName : data.roomName});
        if(exists.length){res.status(400).send("Room name should be unique"); return;};
        const room = new Room({...data, users : [{userName : data.userName }] }); // by default the first user owns the room
        await room.save();
        const user = await User.findOneAndUpdate({name : data.userName}, {$addToSet : {rooms : room}});
        res.status(201).send(room); 
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }

});

router.patch('/rooms/joinRoom', async ( req, res ) => {
    try {
        const data = req.body; // data : {userName, roomName} ;;
        const room = await Room.findOneAndUpdate({roomName : data.roomName} , {$addToSet : {users : data.userName}});
        res.status(200).send(room);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})

router.get('/rooms/all',async (req, res) => {
    try {
        const data = req.body; // data : {userName}
        let rooms = await Room.find({"users.userName" : data.userName });
        rooms = rooms.map(room => room.roomName)
        if(rooms.length) {res.status(200).send(rooms)}
        else{
            res.status(204).send('Oops no room found');
        };
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})

router.delete('/rooms/delete',async (req,res) => {
    try {
        const data = req.body ; // data : { roomName, userName }
        const room = await Room.deleteOne({roomName : data.roomName, "users.userName" : data.userName});
        res.status(200).send("room deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})


module.exports = router;