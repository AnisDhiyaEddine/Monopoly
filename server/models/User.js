const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
        },
    },
    {timestamps : true}
);

// Other Collections based logic here !

const User = mongoose.model('User',userSchema);
module.exports = {schema : userSchema, Model: User};