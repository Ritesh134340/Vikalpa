import React from 'react'
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import {useState} from "react"
pdfMake.vfs=pdfFonts.pdfMake.vfs;


const PdfGenerator = ({data}) => {
    const [url,setUrl]=useState(null)
    const docDef = {
        pageMargins: [15, 15, 15, 15],
        pageSize: 'A4',
        pageOrientation: 'portrait',
      
        content: [
            
            {
                text: 'Admit Card\n\n',
                style: 'header',

            },
            {
                text:`${data.school}`,
                style:'school',
                decoration:'underline'
               
            }
           
        ],
        
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment:"center",
              
            },
            school:{
                alignment:'center',
                bold:true,
                fontSize:22,
             
            }
          
        }
        
    }

    const createPdf=()=>{
        const pdfGenerator=pdfMake.createPdf(docDef)
        // const fileName = `${name}_admitcard.pdf`;
        // pdfGenerator.download(fileName)
        pdfGenerator.getBlob((blob)=>{
           const  url=URL.createObjectURL(blob)
            setUrl(url)
        })
    }


  return (
   <div>
    {
        url && <div>{url}</div>
    }
 <button onClick={createPdf} style={{margin:"auto",marginTop:"30px",backgroundColor:"red"}}>Download Pdf</button>
   </div>
   
  )
}

export default PdfGenerator