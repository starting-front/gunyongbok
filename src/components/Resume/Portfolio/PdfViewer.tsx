// React
import { useEffect, useState } from "react";

// CSS
import styled from "styled-components";

// lib
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const PDFWrap = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const PDFCloseBtn = styled.div`
  padding: 20px;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  color: red;
  font-weight: bold;
`;

const PDFBtn = styled.button`
  border: none;
  padding: 16px 20px;
  border-radius: 8px;
`;

const PDFPage = styled.span`
  font-weight: bold;
  &.pdf {
    margin: 0 16px;
  }

  &.current,
  &.showpage {
    color: white;
  }

  &.line {
    font-size: 24px;
    margin: 0 8px;
    color: orange;
  }
`;

const PdfViewer = ({ file, onClick }: any) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  // pdf 파일 load
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) =>
    setNumPages(numPages);

  // 이전 페이지네이션
  const handleCurrentPage = () => {
    if (pageNumber !== 1) return setPageNumber((prev) => prev - 1);
    return alert("시작 페이지 입니다.");
  };

  // 다음 페이지네이션
  const handleNextPage = () => {
    if (numPages && pageNumber < numPages)
      return setPageNumber((prev) => prev + 1);

    return alert("최대 페이지 입니다.");
  };

  if (file) {
    const objectUrl = URL.createObjectURL(file);

    useEffect(() => {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }, []);

    return (
      <PDFWrap>
        <Document file={objectUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          <PDFBtn onClick={handleCurrentPage}>이전</PDFBtn>
          <PDFPage className="pdf">
            <PDFPage className="current">{pageNumber}</PDFPage>
            <PDFPage className="line">/</PDFPage>
            <PDFPage className="showpage">{numPages}</PDFPage>
          </PDFPage>
          <PDFBtn onClick={handleNextPage}>다음</PDFBtn>
        </p>
        <PDFCloseBtn onClick={onClick}>닫기</PDFCloseBtn>
      </PDFWrap>
    );
  }
  return null;
};

export default PdfViewer;
