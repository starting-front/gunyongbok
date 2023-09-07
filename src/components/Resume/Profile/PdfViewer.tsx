const PdfViewer = ({ file }: any) => {
  if (file) {
    const objectUrl = URL.createObjectURL(file);
    return (
      <iframe title="PDF Preview" src={objectUrl} width="100%" height="500px" />
    );
  }
  return null;
};

export default PdfViewer;
