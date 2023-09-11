// CSS
import styled from "styled-components";

// Components
import ResumStatusBar from "../../components/Resume/ResumStatusBar";
import UploadPortfolioForm from "../../components/Resume/Profile/UploadPortfolioForm";

const PortfolioUploadMain = styled.div`
  width: 100%;
`;

const PortfolioUpload = () => {
  return (
    <PortfolioUploadMain>
      <ResumStatusBar background="2" MobileLineWidth="100%" />
      <UploadPortfolioForm />
    </PortfolioUploadMain>
  );
};

export default PortfolioUpload;
