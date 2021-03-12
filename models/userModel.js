const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require:[true, "Please enter your name"],
        trim: true

    },
    email: {
        type:String,
        require:[true, "Please enter your email"],
        trim: true,
        unique : true

    },
    password: {
        type:String,
        require:[true, "Please enter your password"],
        

    },
    role: {
        type:Number,
        default:0
     },
     avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    }
})
module.exports = mongoose.model("Users",userSchema)