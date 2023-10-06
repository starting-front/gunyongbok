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
  const [activityBtn, updateStatusBtn] = useAcitivity();

  return (
    <PortfolioUploadMain>
      <div style={{ padding: "0 20px", boxShadow: "border-box" }}>
        <ResumStatusBar
          background="2"
          MobileLineWidth="100%"
          profileTitle="포트폴리오 업로드"
          activityBtn={activityBtn}
        />
      </div>
      <UploadPortfolioForm updateStatusBtn={updateStatusBtn} />
    </PortfolioUploadMain>
  );
};

export default PortfolioUpload;
