import React,{useState} from 'react'
import { FormWrapper } from '../styles/form.styled'
import axios from "axios";
import {useNavigate} from "react-router-dom"



const Form = () => {
 const [name,setName]=useState("");
 const [phone,setPhone]=useState("");
 const [roll,setRoll]=useState("")
 const [address,setAddress]=useState("");
 const [studentClass,setStudentClass]=useState("")
 const [school,setSchool]=useState("")

 
 const handleFormSubmit=(e)=>{
  e.preventDefault()

  if(name,phone,roll,address,studentClass,school){
    axios.post("http://localhost:8080/api/student/data",{name:name,phone:phone,rollno:roll,address:address,studentClass:studentClass,school:school})
    .then((res)=>{
     alert(res.data.mesg)
    })
    .catch((err)=>{
      console.log(err)
      alert(err.response.data.mesg)
    })
  }
  else{
    alert("All fields  !")
  }
 }
  return (
   
      
        <FormWrapper>
          <h3>Register Student</h3>
          <form onSubmit={handleFormSubmit}>
         
         <label htmlFor='name'>Name</label><br/>
         <input value={name} type="text" placeholder='Your name'  onChange={(e)=>setName(e.target.value)} required /><br/>


         <label>Phone</label><br/>
         <input maxLength={10} value={phone} type="tel" placeholder='Mobile number'  onChange={(e)=>setPhone(e.target.value)} required /><br/>


         <label>School</label><br/>
         <input value={school} type="text" placeholder='Your school name'  onChange={(e)=>setSchool(e.target.value)} required /><br/>


         <label>Class</label><br/>
         <input value={studentClass} type="text" placeholder='Your class'  onChange={(e)=>setStudentClass(e.target.value)} required /><br/>


         <label>Roll</label><br/>
         <input value={roll} type="text" placeholder='Roll number'  onChange={(e)=>setRoll(e.target.value)} required /><br/>


         <label>Address</label><br/>
         <textarea value={address} placeholder='Your address...' maxLength={199}  onChange={(e)=>setAddress(e.target.value)}  /><br/>

         <button type="submit">Submit</button>
          </form>
       
        </FormWrapper>
      
 
  
  )
}

export default Form