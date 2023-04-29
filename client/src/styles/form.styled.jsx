import styled from "styled-components"

export const FormWrapper=styled.div`
width:37%;
border-radius:10px;
margin:auto;
padding:20px;
padding-top:10px;
margin-top:40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin-bottom:50px;
h3{
    text-align:center;
    padding-bottom:10px;
    color:gray;

}
form{
 width:90%;
 margin:auto;
}
input{
    width:100%;
    height:35px;
    margin-top:8px;
    margin-bottom:12px;
    border-radius:4px;
    padding-left:10px;
    border:1px solid gray;
    font-size:17px;
    &:focus{
        border:2px solid blue;
        outline:none;
    }
}
textarea{
    width:100%;
    height:55px;
    margin-top:8px;
    margin-bottom:12px;
    border-radius:4px;
    padding-left:10px;
    font-size:17px;
    &:focus{
        outline:none;
    }
}
label{
    font-size:15px;
}
button{
    padding:8px 15px;
    display:block;
    margin-top:30px;
    font-size:16px;
    border-radius:5px;
    cursor:pointer;
    background-color:#654E92;
    color:white;
    font-weight:bold;
    border:none;
    outline:none;
    &:hover{
        background-color:#B71375
    }
}
`