// CSS
import styled from 'styled-components';

// Components
import UserTypeHeader from '../../components/UserType/UserTypeHeader/UserTypeHeader';
import MentoMentee from '../../components/UserType/MentoMentee';

// Hook
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';

const UserSelect = {
  Wrapper: styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Container: styled.div`
    width: 100%;
    height: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
  `,

  Header: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #e2e4eb;
  `,

  Main: styled.div`
    width: 100%;
    max-width: 450px;
    padding: 40px 56px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Button: styled.div`
    width: 100%;
    height: 48px;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 14px 0;
    box-sizing: border-box;
    background-color: #8644ff;
    border-radius: 6px;
    box-shadow: 0px 8px 11px 0px rgba(134, 68, 255, 0.2);
    font-size: 14px;
    color: white;
    cursor: pointer;
  `,
};

const UserTypeSelect = () => {
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({});
  const serverUrl = import.meta.env.VITE_REACT_APP_DEFAULT_SERVER_URL;

  const handleUserTypeClick = (role: string) => {
    state['role'] = role;
    setUserInfo(state);
  };

  // 로컬 회원가입
  const SubmitSignUpInfo = async () => {
    try {
      const response = await axios.post(`${serverUrl}/users/signup`, userInfo);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserSelect.Wrapper>
      <UserSelect.Container>
        <UserSelect.Header>
          <UserTypeHeader title="회원유형 선택" />
        </UserSelect.Header>
        <UserSelect.Main>
          <MentoMentee onUserTypeClick={handleUserTypeClick} />
          <UserSelect.Button onClick={SubmitSignUpInfo}>다음</UserSelect.Button>
        </UserSelect.Main>
      </UserSelect.Container>
    </UserSelect.Wrapper>
  );
};

export default UserTypeSelect;
