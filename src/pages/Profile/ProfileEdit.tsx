import styled from "styled-components";

import ResumStatusBar from "../../components/Resume/ResumStatusBar";
import ResumeSetProfileForm from "../../components/Resume/Profile/ResumeSetProfileForm";

const HeaderContainer = styled.div`
  width: 100%;
`;

const ProfileEdit = () => {
  return (
    <HeaderContainer>
      <ResumStatusBar background="#B3BACB" />
      <ResumeSetProfileForm />
    </HeaderContainer>
  );
};

export default ProfileEdit;
