// Custom Hooks
import useAcitivity from "../../hooks/useActivity";

// Components
import ResumStatusBar from "../../components/Resume/ResumStatusBar";
import ProjectImprovements from "../../components/Memoir/ProjectImprovements";

const Improvements = () => {
  const [activityBtn, setAcitivityBtn] = useAcitivity();
  return (
    <div>
      <ResumStatusBar
        background="2"
        MobileLineWidth="100%"
        profileTitle="포트폴리오 업로드"
        activityBtn={activityBtn}
      />
      <ProjectImprovements setAcitivityBtn={setAcitivityBtn} />
    </div>
  );
};

export default Improvements;
