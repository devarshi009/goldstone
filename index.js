const express=require("express")
const{connection}= require("./db")
const{userRouter}=require("./route/User.route")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/users",userRouter)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });

app.listen(5200,async()=>{
    try{
        await connection
        console.log("Connected to db");
    }catch(err){
        console.log({"msg":err});
    }
    console.log("running in port 5200");
})