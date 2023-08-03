// React-icons
import { FaArrowLeft } from "react-icons/fa";
import { HiMiniArrowLeft } from "react-icons/hi2";

// CSS
import styled from "styled-components";

interface Props {
  title: string;
}

const LeftIcon = styled.div`
  width: 33%;
`;

const TypeHeader = {
  Wrap: styled.div`
    width: 100%;
    max-width: 440px;
    display: flex;
    justify-content: center;
    padding: 40px 40px 0 40px;
    box-sizing: border-box;
  `,
  Header: styled.div`
    width: 100%;
    max-width: 360px;
    padding: 20px 16px;
    box-sizing: border-box;
    display: flex;
  `,
  centerTitle: styled(LeftIcon)`
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
  `,
};

const UserTypeHeader = (props: Props) => {
  return (
    <TypeHeader.Wrap>
      <TypeHeader.Header>
        <LeftIcon>
          <FaArrowLeft cursor="pointer" fontSize="22px" />
        </LeftIcon>
        <TypeHeader.centerTitle>{props.title}</TypeHeader.centerTitle>
      </TypeHeader.Header>
    </TypeHeader.Wrap>
  );
};

export default UserTypeHeader;
