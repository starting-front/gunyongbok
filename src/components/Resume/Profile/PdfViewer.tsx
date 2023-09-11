import styled from "styled-components";

const PDFWrap = styled.div`
  width: 100%;
  height: 100vh;
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
  if (file) {
    const objectUrl = URL.createObjectURL(file);

    return (
      <PDFWrap>
        <iframe
          title="PDF Preview"
          src={`${objectUrl}#toolbar=0&navpanes=0&scrollbar=0'`}
          width="100%"
          height="600px"
          style={{ maxWidth: "1024px" }}
        />
        <PDFCloseBtn onClick={onClick}>닫기</PDFCloseBtn>
      </PDFWrap>
    );
  }
  return null;
};

export default PdfViewer;
