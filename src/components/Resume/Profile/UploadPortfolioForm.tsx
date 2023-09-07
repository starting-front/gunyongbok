import React, { useState } from "react";

// Components
import ResumeHeader from "../../Header/ResumeHeader";
import PdfViewer from "./PdfViewer";

const UploadPortfolioForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
      <ResumeHeader
        MainTitle="포트폴리오 업로드"
        SubTitle="알찬 피드백을 받을 포트폴리오를 업로드 해볼까요"
      />
      <PdfViewer file={selectedFile} />
      <input type="file" onChange={handleFileChange} accept=".pdf" />
    </div>
  );
};

export default UploadPortfolioForm;
