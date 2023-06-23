const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    status:String
   
    
})

const UserModel=mongoose.model("users",userSchema)

module.exports={UserModel}