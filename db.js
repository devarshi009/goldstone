const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://goldstone:goldstone@cluster0.xcqiqny.mongodb.net/goldstone?retryWrites=true&w=majority")
module.exports={connection}
