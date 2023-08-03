import { styled } from 'styled-components';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';

// Header
import HeaderTitle from '../../commons/Title/SignUp/HeaderTitle';
import PageBackBtn from '../../commons/Button/PageBackBtn';
import BackArrow from '../../assets/leftArrow.svg';

// SignUp
import SignUpContainer from '../../components/Wrapper/SignUp/SignUpContainer';
import SignUpInputContainer from '../../components/Wrapper/SignUp/SignUpInputContainer';
import Label from '../../commons/Label/Label';
import Input from '../../commons/Input/Input';
import InputBox from '../../components/Wrapper/InputBox';

// SignUp/Validate SignUp Input
import ValidateInputBox from '../../components/Wrapper/ValidateInputBox';
import ValidateBtn from '../../commons/Button/ValidateBtn';

// Reused Standard Btn
import StandardBtn from '../../commons/Button/StandardBtn';
import SignUpNextBtnBox from '../../components/Wrapper/SignUp/SignUpNextBtnBox';

// Personal Info Agree
import SignUpAgreeBox from '../../components/Wrapper/SignUp/SignUpAgreeBox';
import AgreeBox from '../../components/Wrapper/AgreeBox';
import RightImg from '../../assets/right.svg';
import StrokeBtn from '../../assets/radioBtnStroke.svg';
import FillBtn from '../../assets/radioBtnFill.svg';
import RadioBtn from '../../commons/Button/RadioBtn';

// Validate Input Value
import ErrorInput from '../../commons/Input/ErrorInput';
import validatePassword from '../../function/ValidatePw';
import validateRePassword from '../../function/ValidateRePw';

const TopContainer = styled.div`
    width: 1280px;
    height: 804px;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 420px;
    box-sizing: border-box;
`;

const HeaderContainer = styled.header`
    width: 440px;
    height: 105px;
    display: flex;
    justify-content: center;
    padding: 40px 40px 0px 40px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    border-bottom: 1px solid #e2e4eb;
    z-index: 1;
    background: rgba(255, 255, 255, 0.8);
`;

const MainContent = styled.div`
    width: 440px;
    height: 730px;
    margin-top: 125px;
    overflow: auto;
`;

const RequiredText = styled.div`
    width: 27px;
    height: 12px;
    color: #ff4500;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    margin-left: 4px;
`;

const Right = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 8px;
`;

const StrokeImg = styled.img`
    width: 20px;
    height: 20px;
`;

const FillImg = styled.img`
    width: 12px;
    height: 12px;
    position: absolute;
    top: 10px;
`;

const MessageBox = styled.div<MessageBoxProps>`
    width: 328px;
    height: 28px;
    padding: 8px;
    box-sizing: border-box;
    color: ${(props) => props.color || '#FF4500'};
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
`;

interface MessageBoxProps {
    color?: string;
}

interface FormData {
    username: string;
    email: string;
    password: string;
    role: string;
}

const SignUp = () => {
    const serverUrl = import.meta.env.VITE_REACT_APP_DEFAULT_SERVER_URL;
    const [overLap, setOverLap] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);
    const [rePassword, setRePassword] = useState<string>('');
    const [fillBtnSelected, setFillBtnSelected] = useState<boolean>(false);
    const [strokeBtnSelected, setStrokeBtnSelected] = useState<boolean>(false);

    const [data, setData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        role: 'MENTEE',
    });

    const handleFillBtn = () => {
        setFillBtnSelected(!fillBtnSelected);
    };

    const handleStrokeBtn = () => {
        setStrokeBtnSelected(!strokeBtnSelected);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
        setData({ ...data, [field]: event.target.value });
    };

    const handleChangeField = (fieldName: keyof FormData, e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e, fieldName);
    };

    const handleChangeRePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setRePassword(event.target.value);
    };

    // 회원가입 (임시)
    const SubmitSignUpInfo = () => {
        axios
            .post(`${serverUrl}/users/signup`, data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // 이메일 중복 여부 검사
    const ValidateOverLapEmail = () => {
        axios
            .get(`${serverUrl}/users/signup/${data['email']}`)
            .then((response) => {
                console.log(response);
                setOverLap(false);
                setClicked(true);
            })
            .catch((error) => {
                console.log(error);
                setOverLap(true);
                setClicked(true);
            });
    };

    // 필수 사항 모두 입력했을때 누를 수 있게 만들어주는 함수
    const isFormValid = (): boolean => {
        const isUsernameValid = data.username.trim() !== '';
        const isEmailValid = data.email.trim() !== '';
        const isPasswordValid = data.password.trim() !== '';

        return isUsernameValid && isEmailValid && isPasswordValid && fillBtnSelected && strokeBtnSelected;
    };

    console.log(data, overLap);

    return (
        <TopContainer>
            <HeaderContainer>
                <HeaderTitle>
                    <PageBackBtn src={BackArrow} alt="pageback" />
                    회원가입
                </HeaderTitle>
            </HeaderContainer>
            <MainContent>
                <SignUpContainer>
                    <SignUpInputContainer>
                        <InputBox>
                            <Label>
                                이름 <RequiredText>(필수)</RequiredText>
                            </Label>
                            <Input value={data.username} onChange={(e) => handleChangeField('username', e)} placeholder="이름을 입력해주세요" />
                        </InputBox>
                        <InputBox>
                            <Label>
                                이메일 <RequiredText>(필수)</RequiredText>
                            </Label>
                            <ValidateInputBox>
                                {overLap ? (
                                    <ErrorInput value={data.email} onChange={(e) => handleChangeField('email', e)} width="239px" placeholder="이메일을 입력해주세요" />
                                ) : (
                                    <Input value={data.email} onChange={(e) => handleChangeField('email', e)} width="239px" placeholder="이메일을 입력해주세요" />
                                )}
                                <ValidateBtn onClick={ValidateOverLapEmail}>중복검사</ValidateBtn>
                            </ValidateInputBox>
                            {clicked && (overLap ? <MessageBox color="#FF4500">이미 사용중인 이메일입니다.</MessageBox> : <MessageBox color="#303646">사용가능한 이메일입니다</MessageBox>)}
                        </InputBox>
                        <InputBox>
                            <Label>
                                비밀번호 <RequiredText>(필수)</RequiredText>
                            </Label>
                            {validatePassword(data['password']) ? (
                                <Input type="password" value={data.password} onChange={(e) => handleChangeField('password', e)} placeholder="8자 이상 영문, 숫자, 특수문자 포함" />
                            ) : (
                                <ErrorInput type="password" value={data.password} onChange={(e) => handleChangeField('password', e)} placeholder="8자 이상 영문, 숫자, 특수문자 포함" />
                            )}
                            {validatePassword(data['password']) || <MessageBox>8자 이상의 영문,숫자,특수문자가 포함 되어야 해요</MessageBox>}
                        </InputBox>
                        <InputBox>
                            <Label>
                                비밀번호 재입력 <RequiredText>(필수)</RequiredText>
                            </Label>
                            {validateRePassword(data['password'], rePassword) ? (
                                <Input type="password" value={rePassword} onChange={handleChangeRePassword} placeholder="비밀번호를 다시 입력해주세요" />
                            ) : (
                                <ErrorInput type="password" value={rePassword} onChange={handleChangeRePassword} placeholder="비밀번호를 다시 입력해주세요" />
                            )}
                            {validateRePassword(data['password'], rePassword) || <MessageBox>비밀번호가 일치하지 않습니다</MessageBox>}
                        </InputBox>
                        <InputBox>
                            <Label>
                                전화번호 <RequiredText>(필수)</RequiredText>
                            </Label>
                            <ValidateInputBox>
                                {/* onchange 설정안함 */}
                                <Input value="" width="239px" placeholder="전화번호를 입력해주세요" />
                                <ValidateBtn>본인인증</ValidateBtn>
                            </ValidateInputBox>
                        </InputBox>
                        <InputBox>
                            <Label>
                                인증번호 <RequiredText>(필수)</RequiredText>
                            </Label>
                            <ValidateInputBox>
                                {/* onchange 설정안함 */}
                                <Input value="" width="239px" placeholder="인증번호를 입력해주세요" />
                                <ValidateBtn>확인</ValidateBtn>
                            </ValidateInputBox>
                        </InputBox>
                    </SignUpInputContainer>
                    <SignUpAgreeBox>
                        <AgreeBox>
                            <RadioBtn onClick={handleStrokeBtn} selected={strokeBtnSelected}>
                                <StrokeImg src={StrokeBtn} />
                                <FillImg src={FillBtn} />
                            </RadioBtn>
                            약관에 모두 동의 (필수)
                        </AgreeBox>
                        <AgreeBox padding="12px 6px 4px 6px" fontSize="12px" border="none">
                            <RadioBtn onClick={handleFillBtn} selected={fillBtnSelected}>
                                <StrokeImg src={StrokeBtn} />
                                <FillImg src={FillBtn} />
                            </RadioBtn>
                            개인정보 수집 및 이용동의 (필수) <Right src={RightImg} />
                        </AgreeBox>
                    </SignUpAgreeBox>
                </SignUpContainer>
                <SignUpNextBtnBox>
                    {isFormValid() ? (
                        <StandardBtn disabled={false} onClick={SubmitSignUpInfo} color="#FFF" background="#8644FF">
                            다음
                        </StandardBtn>
                    ) : (
                        <StandardBtn disabled={true} onClick={SubmitSignUpInfo} color="#FFF" background="#C6A7FF">
                            다음
                        </StandardBtn>
                    )}
                </SignUpNextBtnBox>
            </MainContent>
        </TopContainer>
    );
};

export default SignUp;
