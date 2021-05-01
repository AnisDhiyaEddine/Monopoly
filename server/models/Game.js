const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
    {
        owner : String,
        name : String,
        usersState : [
            {
                user : {
                    type : String,
                    default : "",
                },
                score : Number,
                pion : String,
                Cards : [
                    {
                        color : String,
                        price : Number,
                        hyp : Number,
                        housesOnCard : {
                            nbr : Number,
                            housePrice: Number,
                            houseSellPrice: Number
                        },
                        hotelsOnCard : {
                            nbr : Number,
                            hotelPrice: Number,
                            hotelSellPrice: Number
                        },
                        
                    }
                ]
            }
        ],
        room : String
    },
    {timestamps : true}
);

const Game = mongoose.model('Game', gameSchema);
module.exports = {schema : gameSchema, Model : Game};