import { useEffect } from "react";

// Custom Hooks
import useAcitivity from "../../hooks/useActivity";

// Components
// import ResumStatusBar from "../../components/Resume/ResumStatusBar";
// import ProejctOverview from "../../components/Memoir/ProjectOverview";

const Improvements = () => {
  const [activityBtn] = useAcitivity();

  useEffect(() => {
    console.log(activityBtn);
  }, [activityBtn]);
  return <div></div>;
};

export default Improvements;
