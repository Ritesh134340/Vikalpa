const { Router } = require("express");
const db = require("../config/db");

const student = Router();

student.get("/data", (req, res) => {
  const q = "SELECT * FROM students";
  db.query(q, (err, data) => {
    if (err) {
      console.log("Error from get student data :", err);
      return res.status(500).send({ mesg: "Internal server error !" });
    }
    res.status(200).send({ mesg: "ok", studentData: data });
  });
});

student.post("/data",(req,res)=>{


   const {name,std,phone,school,rollno,address}=req.body;
    const q="INSERT INTO students (`name`,`phone`,`school`,`class`,`rollno`,`address`) VALUE (?)"

    db.query(q,[name,phone,school,std,rollno,address],(err,result)=>{
        if(err){
           console.log("Error from post student data route",err)
           return  res.status(500).send({mesg:"Internal server error!"})
        }
        res.status(201).send({mesg:"Data created successfully !"})
    })
})




module.exports = student;
