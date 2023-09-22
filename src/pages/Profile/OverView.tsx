// React
import { useEffect } from "react";

// Custom Hooks
import useAcitivity from "../../hooks/useActivity";

// Components
import ResumStatusBar from "../../components/Resume/ResumStatusBar";
import ProejctOverview from "../../components/Memoir/ProjectOverview";

const Overview = () => {
  const [activityBtn, updateStatusBtn] = useAcitivity();

  useEffect(() => {
    console.log(activityBtn);
  }, [activityBtn]);

  return (
    <div>
      <ResumStatusBar
        background="2"
        MobileLineWidth="100%"
        profileTitle="포트폴리오 업로드"
        activityBtn={activityBtn}
      />
      <ProejctOverview updateStatusBtn={updateStatusBtn} />
    </div>
  );
};

export default Overview;
