const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
    ,
    category:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
});
const users = new  mongoose.model("users",userSchema);
module.exports = users;