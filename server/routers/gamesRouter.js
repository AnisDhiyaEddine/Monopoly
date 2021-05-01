const Router = require("express").Router;
const Game = require('../models/Game').Model;
//All middlwares should be configured at this point ;)
const router = new Router();

// Create Game
router.post('/games/new',async (req,res)=>{
    try{
        const data = req.body; // data : {roomName, gameName, userName} ;;by default gameName is the roomName
        let exists = await Game.find({owner: data.userName, name : data.gameName || data.roomName, room : data.roomName});
        if(exists.length){res.status(400).send("Game state exists try another name"); return;};
        const game = new Game({owner: data.userName, name : data.gameName || data.roomName, room : data.roomName, usersState : []});
        await game.save();
        res.status(201).send(game);

    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});


router.patch('/games/update', async (req,res) => {
    try {
        const data = req.body; //data : {usersState, gameName, userName};
        await Game.findOneAndUpdate({gameName : data.gameName},{$addToSet : {usersState : data.usersState}});
        res.status(200).send("Game updated");
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})

router.delete('/games/delete', async (req,res) => {
    try {
        // Any user subscribed on the game can delete it ;) no one can just give up !!
        const data = req.body; //data : {gameName, userName}
        let game = await Game.find({gameName : data.gameName});
        let exists =  await game.room.find({users : {userName : data.userName}});
        if(exists.length){
            await Game.deleteOne({gameName : data.gameName});
            res.status(200).send("Game deleted");
            return;
        }
        res.status(401).send("Unauthorized");
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})

router.get('/games/All',async (req,res) => {
    try {
        const data = req.body; // data : { user } 
        let games = await Game.find({owner : data.user});
        if ( games.length ){res.status(200).send(games); return;};
        res.status.send('Oops no game found')
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})

router.get('/games/game',async (req,res) => {
    try {
        const data = req.body; //data : { gameName }
        let game = await Game.findOne({ name : data.gameName });
        if ( game ) res.status(200).send(game);
        res.status(204).send("Oops no game found");
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})

module.exports = router;