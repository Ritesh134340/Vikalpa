import styled from "styled-components";

export const DownloadWrapper=styled.div`
 h3{
    text-align:center;
    margin-top:30px;
    margin-bottom:50px;
 }
 form{
    margin:auto;
    border:1px solid gray;
    width:33%;
    padding:20px;
    border-radius:10px;
 }
 label{
    font-size:15px;
 }
 input{
    height:38px;
    border:1px solid gray;
    outline:none;
    padding-left:10px;
    font-size:17px;
    box-sizing:border-box;
    width:100%;
    border-radius:5px;
    margin:8px 0px 10px 0px;

 }
 button{
    padding:8px 15px;
    display:block;
    margin-top:20px;
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