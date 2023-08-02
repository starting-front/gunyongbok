import { styled } from 'styled-components';
import HeaderTitle from '../../commons/Title/SignUp/HeaderTitle';
import SignUpContainer from '../../components/Wrapper/SignUp/SignUpContainer';
import SignUpInputContainer from '../../components/Wrapper/SignUp/SignUpInputContainer';
import Label from '../../commons/Label/Label';
import Input from '../../commons/Input/Input';
import InputBox from '../../components/Wrapper/InputBox';
import ValidateInputBox from '../../components/Wrapper/ValidateInputBox';
import ValidateBtn from '../../commons/Button/ValidateBtn';
import BackArrow from '../../assets/leftArrow.svg';
import PageBackBtn from '../../commons/Button/PageBackBtn';
import StandardBtn from '../../commons/Button/StandardBtn';
import SignUpNextBtnBox from '../../components/Wrapper/SignUp/SignUpNextBtnBox';
import SignUpAgreeBox from '../../components/Wrapper/SignUp/SignUpAgreeBox';
import AgreeBox from '../../components/Wrapper/AgreeBox';
import RightImg from '../../assets/right.svg';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import StrokeBtn from '../../assets/radioBtnStroke.svg';
import FillBtn from '../../assets/radioBtnFill.svg';
import RadioBtn from '../../commons/Button/RadioBtn';
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
    height: 699px;
    margin-top: 105px;
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

const ErrorMessageBox = styled.div`
    width: 328px;
    height: 28px;
    padding: 8px;
    box-sizing: border-box;
    color: #ff4500;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
`;

interface FormData {
    username: string;
    email: string;
    password: string;
    role: string;
}

const SignUp = () => {
    const serverUrl = import.meta.env.VITE_REACT_APP_DEFAULT_SERVER_URL;

    const [data, setData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        role: 'MENTEE',
    });

    const [rePassword, setRePassword] = useState<string>('');
    const [fillBtnSelected, setFillBtnSelected] = useState<boolean>(false);
    const [strokeBtnSelected, setStrokeBtnSelected] = useState<boolean>(false);

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

    console.log(data);

    const submitSignUpInfo = () => {
        axios
            .post(`${serverUrl}/users/signup`, data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
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
                                <Input value={data.email} onChange={(e) => handleChangeField('email', e)} width="239px" placeholder="이메일을 입력해주세요" />
                                <ValidateBtn>중복검사</ValidateBtn>
                            </ValidateInputBox>
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
                            {validatePassword(data['password']) || <ErrorMessageBox>8자 이상의 영문,숫자,특수문자가 포함 되어야 해요</ErrorMessageBox>}
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
                            {validateRePassword(data['password'], rePassword) || <ErrorMessageBox>비밀번호가 일치하지 않습니다</ErrorMessageBox>}
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
                    <StandardBtn onClick={submitSignUpInfo} color="#FFF" background="#8644FF">
                        다음
                    </StandardBtn>
                </SignUpNextBtnBox>
            </MainContent>
        </TopContainer>
    );
};

export default SignUp;
