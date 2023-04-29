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

student.get("/registered/data/:phone",(req,res)=>{
   const q=`SELECT * FROM students WHERE phone=${req.params.phone}`
   db.query(q,(err,result)=>{
    if(err){
      console.log(err)
      return res.status(500).send({mesg:"Internal server error !"})
    }
    if(result.length>0){
      return res.status(200).send(result[0])
    }
    else{
      return res.status(404).send({mesg:"Record not found !"})
    }
   })
})

student.post("/data", (req, res) => {
  const q =
    "INSERT INTO students (name,studentClass,phone,school,rollno,address) VALUES(?,?,?,?,?,?)";
  const { name, studentClass, phone, school, rollno, address } = req.body;
  db.query(
    q,
    [name, studentClass, phone, school, rollno, address],
    (err, result) => {
      if (err) {
        console.log("Error from post student data route", err);
        return res.status(500).send({ mesg: "Internal server error!" });
      }
      res.status(201).send({ mesg: "Data created successfully !" });
    }
  );
});

module.exports = student;
