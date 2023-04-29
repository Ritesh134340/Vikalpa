import React,{useState} from "react";
import { DownloadWrapper } from "../styles/downAdmit.styled";
import PdfGenerator from "../components/PdfGenerator";
import axios from "axios"

const DownloadAdmitCard = () => {
    const [showDownBtn,setShowDownBtn]=useState(false)
    const [loading,setLoading]=useState(false)
    const [phone,setPhone]=useState("")
    const [data,setData]=useState({})

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(phone){
            setLoading(true)
            setShowDownBtn(false)
            axios.get(`http://localhost:8080/api/student/registered/data/${phone}`)
            .then((res)=>{
             setData(res.data)
             setLoading(false)
             setPhone("")
             setShowDownBtn(true)
            })
            .catch((err)=>{
              setLoading(false)
              setShowDownBtn(false)
              alert(err.response.data.mesg)
            })
        }
    }

  return (
   loading ? <h3 style={{margin:"auto",marginTop:"100px",textAlign:"center"}}>Loading...</h3> : <DownloadWrapper>
        <h3>Download Admit Card</h3>
      <form onSubmit={handleSubmit}>
        <label >Phone</label><br/>
        <input value={phone} type="tel" placeholder="Enter registered phone number" onChange={(e)=>setPhone(e.target.value)} required={true}/>
        <br />
        <button type="submit">Submit</button>
      </form>
    { showDownBtn &&  <PdfGenerator data={data}/>}
    </DownloadWrapper>
  );
};

export default DownloadAdmitCard;
