// React-icons
import leftArrow from "../../../assets/leftArrow.svg";

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
    display: flex;
    justify-content: center;
    padding: 40px 40px 0 40px;
    box-sizing: border-box;
  `,
  Header: styled.div`
    width: 100%;
    max-width: 365px;
    padding: 20px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
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
          <img src={leftArrow} style={{ cursor: "pointer" }} />
        </LeftIcon>
        <TypeHeader.centerTitle>{props.title}</TypeHeader.centerTitle>
      </TypeHeader.Header>
    </TypeHeader.Wrap>
  );
};

export default UserTypeHeader;
