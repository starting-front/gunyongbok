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
import SignUpNextBtnBox from '../../components/Wrapper/SignUp/SIgnUpNextBtnBox';
import SignUpAgreeBox from '../../components/Wrapper/SignUp/SignUpAgreeBox';
import AgreeBox from '../../components/Wrapper/AgreeBox';
import RightImg from '../../assets/right.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

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
    background-color: #fff;
    position: fixed;
    top: 0;
    border-bottom: 1px solid #e2e4eb;
    z-index: 1;
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

const RadioBtn = styled.button`
    width: 32px;
    height: 32px;
    padding: 6px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
`;

const Right = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 8px;
`;

interface FormData {
    name: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
    });

    const [rePassword, setRePassword] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    const handleChangeField = (fieldName: keyof FormData, e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e, fieldName);
    };

    const handleChangeRePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setRePassword(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
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
                    <SignUpInputContainer onSubmit={handleSubmit}>
                        <InputBox>
                            <Label>
                                이름 <RequiredText>(필수)</RequiredText>
                            </Label>
                            <Input value={formData.name} onChange={(e) => handleChangeField('name', e)} placeholder="이름을 입력해주세요" />
                        </InputBox>
                        <InputBox>
                            <Label>
                                이메일 <RequiredText>(필수)</RequiredText>
                            </Label>
                            <ValidateInputBox>
                                <Input value={formData.email} onChange={(e) => handleChangeField('email', e)} width="239px" placeholder="이메일을 입력해주세요" />
                                <ValidateBtn>중복검사</ValidateBtn>
                            </ValidateInputBox>
                        </InputBox>
                        <InputBox>
                            <Label>
                                비밀번호 <RequiredText>(필수)</RequiredText>
                            </Label>
                            <Input value={formData.password} onChange={(e) => handleChangeField('password', e)} placeholder="8자 이상 영문, 숫자, 특수문자 포함" />
                        </InputBox>
                        <InputBox>
                            <Label>
                                비밀번호 재입력 <RequiredText>(필수)</RequiredText>
                            </Label>
                            <Input value={rePassword} onChange={handleChangeRePassword} placeholder="비밀번호를 다시 입력해주세요" />
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
                            <RadioBtn></RadioBtn>
                            약관에 모두 동의 (필수)
                        </AgreeBox>
                        <AgreeBox padding="12px 6px 4px 6px" fontSize="12px" border="none">
                            <RadioBtn></RadioBtn>
                            개인정보 수집 및 이용동의 (필수) <Right src={RightImg} />
                        </AgreeBox>
                    </SignUpAgreeBox>
                    <SignUpNextBtnBox>
                        <StandardBtn color="#FFF" background="#8644FF">
                            다음
                        </StandardBtn>
                    </SignUpNextBtnBox>
                </SignUpContainer>
            </MainContent>
        </TopContainer>
    );
};

export default SignUp;
