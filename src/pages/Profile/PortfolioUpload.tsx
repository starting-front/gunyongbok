// Custom Hook
import useAcitivity from "../../hooks/useActivity";

// CSS
import styled from "styled-components";

// Components
import ResumStatusBar from "../../components/Resume/ResumStatusBar";
import UploadPortfolioForm from "../../components/Resume/Portfolio/UploadPortfolioForm";

const PortfolioUploadMain = styled.div`
  width: 100%;
`;

const PortfolioUpload = () => {
  const [activityBtn] = useAcitivity();

  return (
    <PortfolioUploadMain>
      <ResumStatusBar
        background="2"
        MobileLineWidth="100%"
        activityBtn={activityBtn}
      />
      <UploadPortfolioForm />
    </PortfolioUploadMain>
  );
};

export default PortfolioUpload;
