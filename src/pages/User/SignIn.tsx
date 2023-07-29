import styled from 'styled-components';
import SignInHeader from '../../components/Header/SignInHeader';
import MainTitle from '../../commons/Title/SignIn/MainTitle';
import SubTitle from '../../commons/Title/SignIn/SubTitle';
import SignInInputContainer from '../../components/Wrapper/SignInInputContainer';
import SignInInputBox from '../../components/Wrapper/SignInInputBox';
import SignInLabel from '../../commons/Label/SignInLabel';
import SignInInput from '../../commons/Input/SignIn/SignInInput';

const TopContainer = styled.div`
    width: 1280px;
    height: 720px;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 67px 436px;
    box-sizing: border-box;
`;

const MainContainer = styled.div`
    width: 408px;
    height: 586px;
    padding: 40px;
    border-radius: 8px;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
`;

const SignIn = () => {
    return (
        <>
            <TopContainer>
                <MainContainer>
                    <SignInHeader marginbottom="24px">
                        <MainTitle>세상에 없던 이력서</MainTitle>
                        <SubTitle>나를 잘 표현한 이력서 멘토와 함께 작성해보세요</SubTitle>
                    </SignInHeader>
                    <SignInInputContainer>
                        <SignInInputBox>
                            <SignInLabel>이메일</SignInLabel>
                            <SignInInput placeholder="이메일을 입력해주세요" />
                        </SignInInputBox>
                        <SignInInputBox>
                            <SignInLabel>비밀번호</SignInLabel>
                            <SignInInput placeholder="비밀번호를 입력해주세요" />
                        </SignInInputBox>
                    </SignInInputContainer>
                </MainContainer>
            </TopContainer>
        </>
    );
};

export default SignIn;
