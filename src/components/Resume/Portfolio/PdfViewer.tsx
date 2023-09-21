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

const PdfViewer = ({ file, onClick }: any) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }
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
          <button onClick={() => setPageNumber((prev) => prev - 1)}>
            이전
          </button>
          Page {pageNumber} of {numPages}
          <button onClick={() => setPageNumber((prev) => prev + 1)}>
            다음
          </button>
        </p>
        <PDFCloseBtn onClick={onClick}>닫기</PDFCloseBtn>
      </PDFWrap>
    );
  }
  return null;
};

export default PdfViewer;
