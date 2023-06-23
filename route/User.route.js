const express=require("express")
const {UserModel}=require("../model/User.model")
const userRouter=express.Router()
userRouter.use(express.json())

userRouter.get("/",async(req,res)=>{
    try{
        const users=await UserModel.find()
        res.send(users)
    }catch(err){
console.log({"msg":"something is fissy!",err:err});
    }
})


userRouter.post("/register",async(req,res)=>{
    const payload=req.body;
    try{
      const users=new UserModel(payload)
      await users.save() 
      res.send("user created") 
    }catch(err){
        console.log({"msg":"something is fissy!",err:err})
        res.send("error at the time of creating")
    }
})

userRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body  
    const userID=req.params.id
    const user=await UserModel.findOne({"_id":userID})
    const userID_in_user=user.userID;
    const userID_making_req=req.body.userID
    try{
        if(userID_making_req!==userID_in_user){
            res.send({"msg":"You are not authorized"})
        }else{
            await UserModel.findByIdAndUpdate({_id:userID},payload)
            res.send("Update the user")
        }
        
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
   


})


userRouter.delete("/delete/:id",async(req,res)=>{

    const userID=req.params.id
    const user=await UserModel.findOne({"_id":userID})
    const userID_in_user=user.userID;
    const userID_making_req=req.body.userID
    try{
        if(userID_making_req!==userID_in_user){
            res.send({"msg":"You are not authorized"})
        }else{
        await UserModel.findByIdAndDelete({_id:userID})
        res.send({"mag":`user with id ${userID} has been deleted`})
        }
    }catch(err){}
//    console.log(err);
   res.send({"msg":"Something went wrong"})
})


module.exports={userRouter}