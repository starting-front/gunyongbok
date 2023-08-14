import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 880px;
  max-height: 270px;
  padding-left: 40px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  background-color: yellow;
  position: absolute;
  bottom: 0;
`;

const ProfileContainer = () => {
  return <Container></Container>;
};

export default ProfileContainer;
