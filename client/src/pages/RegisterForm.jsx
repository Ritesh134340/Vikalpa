import React,{useState} from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { RegisterFromWrapper } from "../styles/registerForm.styled";

const RegisterForm = () => {

  

  return (
    <RegisterFromWrapper>
      <h1>Welcome to Admit Card Generator</h1>
      <div className="link">
        <Link to="/admitcard" style={{color:'red',fontSize:'19px'}}>Go to Download Admit Card</Link>
      </div>
      
      <Form/>
    </RegisterFromWrapper>
  );
};

export default RegisterForm;
