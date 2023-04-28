const mysql=require("mysql2")

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ritesh2705@',
    database:'vikalpa'

})

db.connect((err)=>{
    if(err){
        console.log("Couldn't connect to database",err)
    }
    else{
        console.log("Database connection successful!")
    }
})

module.exports=db