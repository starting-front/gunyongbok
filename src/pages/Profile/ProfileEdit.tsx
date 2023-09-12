// Custom Hooks
import useAcitivity from "../../hooks/useActivity";

// CSS
import styled from "styled-components";

// Components
import ResumStatusBar from "../../components/Resume/ResumStatusBar";
import ResumeSetProfileForm from "../../components/Resume/Profile/ResumeSetProfileForm";

const Profile = styled.div`
  width: 100%;
`;

const ProfileEdit = () => {
  const [activityBtn, updateStatusBtn] = useAcitivity();
  return (
    <Profile>
      <ResumStatusBar background="1" MobileLineWidth="50%" />
      <ResumeSetProfileForm />
    </Profile>
  );
};

export default ProfileEdit;
