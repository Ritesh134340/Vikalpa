import {Routes,Route} from "react-router-dom";
import React from 'react'
import DownloadAdmitCard from "../pages/DownloadAdmitCard";
import RegisterForm from "../pages/RegisterForm";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<RegisterForm/>} />
        <Route path="/admitcard" element={<DownloadAdmitCard/>} />
    </Routes>
  )
}

export default AllRoutes