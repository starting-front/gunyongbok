import styled from "styled-components";

import ResumStatusBar from "../../components/Resume/ResumStatusBar";
import ResumeSetProfileForm from "../../components/Resume/Profile/ResumeSetProfileForm";

const Profile = styled.div`
  width: 100%;
`;

const ProfileEdit = () => {
  return (
    <Profile>
      <ResumStatusBar background="1" MobileLineWidth="50%" />
      <ResumeSetProfileForm />
    </Profile>
  );
};

export default ProfileEdit;
