const express=require("express");
require("dotenv").config()
const cors=require("cors")
const studentRouter=require("./routes/student.route")
const app=express();
const PORT=process.env.PORT || 8000
app.use(cors())
app.use(express.json())


app.use("/api/student",studentRouter)

app.get("/api",(req,res)=>{
    res.status(200).send({mesg:"Welcome to AdmitCard Generator Server !"})
})




app.listen(8080,()=>{
    console.log("Server is running on PORT :",PORT)
})