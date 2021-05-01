const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
    {
        roomName : {
            type : String,
            required : true,
        },
        users : [
            { userName : String }
        ],
    },
    {timestamps : true}
);

// Other Collections based logic here !

const Room = mongoose.model('Room',roomSchema);
module.exports = {schema: roomSchema, Model : Room};