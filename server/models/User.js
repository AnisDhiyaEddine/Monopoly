const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
        },
    },
    {timestamps : true}
);

userSchema.pre('remove', async function(next){
})

// Other Collections based logic here !

const User = mongoose.model('User',userSchema);
module.exports = {schema : userSchema, Model: User};