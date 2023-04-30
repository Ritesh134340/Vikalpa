import React from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useState } from "react";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfGenerator = ({ data }) => {
  const [url, setUrl] = useState(null);
  const docDef = {
    pageMargins: [45, 15, 45, 15],
    pageSize: "A4",
    pageOrientation: "portrait",

    content: [
      {
        text: `${data.school}`,
        style: "school",
      },
      {
        text: [
          { text: "           ", decoration: "underline" },
          { text: "Admit Card", decoration: "underline" },
          { text: "           \n\n", decoration: "underline" },
        ],
        lineHeight: 1.8,
        alignment: "center",
        fontSize: 18,
      },
      {
        text: [
          `Name of Student`,
          { text: "   " },
          {
            text: "                 ",
            decoration: "underline",
            decorationStyle: "dashed",
          },

          {
            text: `${data.name}`,
            decoration: "underline",
            decorationStyle: "dashed",
          },

          {
            text: "                 \n",
            decoration: "underline",
            decorationStyle: "dashed",
          },

          { text: "Class" },
          { text: "   " },
          {
            text: "                 ",
            decoration: "underline",
            decorationStyle: "dashed",
          },

          {
            text: `${data.studentClass}`,
            decoration: "underline",
            decorationStyle: "dashed",
            fontSize: 15,
            letterSpacing: 20,
          },
          {
            text: "                 ",
            decoration: "underline",
            decorationStyle: "dashed",
          },

          { text: "        " },

          { text: "Roll no." },

          { text: "   " },
          {
            text: "                 ",
            decoration: "underline",
            decorationStyle: "dashed",
          },
          {
            text: `${data.rollno}`,
            decoration: "underline",
            decorationStyle: "dashed",
            fontSize: 15,
            letterSpacing: 20,
          },
          {
            text: "                 \n",
            decoration: "underline",
            decorationStyle: "dashed",
          },

          `Address`,
          { text: "   " },
          {
            text: "           ",
            decoration: "underline",
            decorationStyle: "dashed",
          },

          {
            text: `${data.address}`,
            decoration: "underline",
            decorationStyle: "dashed",
          },

          {
            text: "           \n",
            decoration: "underline",
            decorationStyle: "dashed",
          },

          { text: "Mobile Number" },
          { text: "   " },
          {
            text: "            ",
            decoration: "underline",
            decorationStyle: "dashed",
          },

          {
            text: `${data.phone}`,
            decoration: "underline",
            decorationStyle: "dashed",
            fontSize: 15,
            letterSpacing: 20,
          },
          {
            text: "            \n\n",
            decoration: "underline",
            decorationStyle: "dashed",
          },
        ],
        lineHeight: 3,
      },

      {
        text: [
          { text: "   ", decoration: "underline", decorationStyle: "dashed" },
          "Instrunctions",
          { text: "   ", decoration: "underline", decorationStyle: "dashed" },
        ],
        style: "instruction",
      },

      { text: "\n\n" },
      {
        ul: [
          "Read the admit card carefully: Once you receive your admit card, make sure to read it carefully and verify that all the information printed on it is correct. Check your name, exam date and time, exam center, and any other details provided.\n",

          "  Keep the admit card safe: Make sure to keep the admit card safe as it is a crucial document that you will need to carry with you on the day of the exam. Store it in a safe place where you will not forget it.",

          "Carry a valid photo ID: You will need to carry a valid photo ID along with the admit card on the day of the exam. Check the exam instructions to see which forms of ID are acceptable.",

          "Reach the exam center on time: Make sure to reach the exam center well before the exam start time. This will give you enough time to complete any formalities and find your exam room.",

          "Follow the exam rules: Make sure to follow all the exam rules and regulations mentioned on the admit card. This includes items that you can or cannot bring with you, dress code, and other exam guidelines.",
        ],
        style: "list",
      },
    ],

    styles: {
      instruction: {
        decoration: "underline",
        alignment: "center",
        lineHeight: 2,
        decorationStyle: "dashed",
      },
      header: {
        fontSize: 15,
        bold: true,
        alignment: "center",
        decoration: "underline",
      },
      school: {
        alignment: "center",
        bold: true,
        fontSize: 20,
        lineHeight: 2,
      },

      list: {
        lineHeight: 1.3,
        color: "gray",
      },
    },
  };

  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDef);
    const fileName = `${data?.name}_admitcard.pdf`;
    pdfGenerator.download(fileName)
    // pdfGenerator.getBlob((blob) => {
    //   const url = URL.createObjectURL(blob);
    //   setUrl(url);
    // });
  };

  return (
    <div>
      <button
        onClick={createPdf}
        style={{ margin: "auto", marginTop: "30px", backgroundColor: "red" }}
      >
        Download Pdf
      </button>
    </div>
  );
};

export default PdfGenerator;
