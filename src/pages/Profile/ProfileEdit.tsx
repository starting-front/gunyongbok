import styled from "styled-components";

import ResumStatusBar from "../../components/Resume/ResumStatusBar";
import ResumeSetProfileForm from "../../components/Resume/Profile/ResumeSetProfileForm";

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const ProfileEdit = () => {
  return (
    <HeaderContainer>
      <ResumStatusBar />
      <ResumeSetProfileForm />
    </HeaderContainer>
  );
};

export default ProfileEdit;
