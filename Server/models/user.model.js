
const mongoose = require('mongoose');



const newUser = mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30 
    },
    mobile:{
        type:Number,
        required:true,
    
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:20
    },
    CreateAt:{
        type:Date,
        default:Date.now(),
    }
})




module.exports = mongoose.model('user', newUser);