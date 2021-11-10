const mongoose = require("mongoose");

const userShcema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    dataRegister:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Users",userShcema);
