// CSS
import styled from "styled-components";

// Components
import UserTypeHeader from "../../components/UserType/UserTypeHeader/UserTypeHeader";
import MentoMentee from "../../components/UserType/MentoMentee";

const UserSelect = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  Header: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #e2e4eb;
  `,

  Main: styled.div`
    width: 100%;
    max-width: 440px;
    padding: 40px 56px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Button: styled.div`
    width: 100%;
    max-width: 330px;
    padding: 14px 0;
    box-sizing: border-box;
    text-align: center;
    color: white;
    background-color: #8644ff;
    box-shadow: 0px 8px 11px 0px rgba(134, 68, 255, 0.2);
    border-radius: 6px;
    cursor: pointer;
  `,
};

const UserTypeSelect = () => {
  return (
    <UserSelect.Wrapper>
      <UserSelect.Header>
        <UserTypeHeader title="회원유형 선택" />
      </UserSelect.Header>
      <UserSelect.Main>
        <MentoMentee />
        <UserSelect.Button>다음</UserSelect.Button>
      </UserSelect.Main>
    </UserSelect.Wrapper>
  );
};

export default UserTypeSelect;
