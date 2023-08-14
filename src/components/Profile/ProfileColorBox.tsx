import { styled } from 'styled-components';

const ColorBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 880px;
  max-height: 90px;
  border-radius: 12px 12px 0px 0px;
  background: linear-gradient(147deg, #c89eff 0%, #ff89c2 100%);
  position: absolute;
  top: 0;
  z-index: 1;
`;

const ProfileColorBox = () => {
  return <ColorBox />;
};

export default ProfileColorBox;
