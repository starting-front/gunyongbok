import { styled } from "styled-components";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Header
import SignUpHeader from "../../components/Header/SignUpHeader";

// SignUp
import SignUpContainer from "../../components/Wrapper/SignUp/SignUpContainer";
import SignUpInputContainer from "../../components/Wrapper/SignUp/SignUpInputContainer";
import Label from "../../commons/Label/Label";
import Input from "../../commons/Input/Input";
import InputBox from "../../components/Wrapper/InputBox";

// SignUp/Validate SignUp Input
import ValidateInputBox from "../../components/Wrapper/ValidateInputBox";
import ValidateBtn from "../../commons/Button/ValidateBtn";

// Reused Standard Btn
import StandardBtn from "../../commons/Button/StandardBtn";
import SignUpNextBtnBox from "../../components/Wrapper/SignUp/SignUpNextBtnBox";

// Personal Info Agree
import SignUpAgreeBox from "../../components/Wrapper/SignUp/SignUpAgreeBox";
import AgreeBox from "../../components/Wrapper/AgreeBox";
import RightImg from "../../assets/right.svg";
import WhiteBtn from "../../assets/radio_white.png";
import PurpleBtn from "../../assets/radio_purple.png";
import RadioBtn from "../../commons/Button/RadioBtn";

// Validate Input Value
import ErrorInput from "../../commons/Input/ErrorInput";
import validatePassword from "../../util/validatePw";
import validateRePassword from "../../util/validateRePw";
import validateEmail from "../../util/validateEmail";
import ErrorMessage from "../../commons/Text/ErrorMessage";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1280px;
  max-height: 720px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 599px) {
    height: 100vh;
    max-height: none;
    background-color: #fff;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 440px;
  height: 100%;
  max-height: 740px;
  border-radius: 8px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 599px) {
    height: 100vh;
    max-height: none;
    box-shadow: none;
  }
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

interface FormData {
  username: string;
  email: string;
  password: string;
  role: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const serverUrl = import.meta.env.VITE_REACT_APP_DEFAULT_SERVER_URL;
  const [overLap, setOverLap] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [rePassword, setRePassword] = useState<string>("");
  const [fillBtnSelected, setFillBtnSelected] = useState<boolean>(false);
  const [strokeBtnSelected, setStrokeBtnSelected] = useState<boolean>(false);

  console.log(fillBtnSelected);
  const [data, setData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleFillBtn = () => {
    setFillBtnSelected(!fillBtnSelected);
  };

  const handleStrokeBtn = () => {
    setStrokeBtnSelected(!strokeBtnSelected);
    setFillBtnSelected(!fillBtnSelected);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    setData({ ...data, [field]: event.target.value });
  };

  const handleChangeField = (
    fieldName: keyof FormData,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    handleChange(e, fieldName);
  };

  const handleChangeRePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setRePassword(event.target.value);
  };

  // 멘토 멘티 페이지 이동
  const MoveToUserTypePage = () => {
    navigate("/usertype", { state: data });
  };

  // 이메일 중복 여부 검사
  const ValidateOverLapEmail = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/users/signup/${data["email"]}`
      );
      console.log(response);
      setOverLap(false);
      setClicked(true);
    } catch (error) {
      console.log(error);
      setOverLap(true);
      setClicked(true);
    }
  };

  // 필수 사항 모두 입력했을때 누를 수 있게 만들어주는 함수
  const isFormValid = (): boolean => {
    const isUsernameValid = data.username.trim() !== "";
    const isEmailValid = data.email.trim() !== "";
    const isPasswordValid = data.password.trim() !== "";

    return (
      validatePassword(data["password"]) &&
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      fillBtnSelected &&
      strokeBtnSelected
    );
  };

  console.log(data);

  return (
    <TopContainer>
      <MainContainer>
        <SignUpHeader />
        <SignUpContainer>
          <SignUpInputContainer>
            <InputBox>
              <Label>
                이름 <RequiredText>(필수)</RequiredText>
              </Label>
              <Input
                value={data.username}
                onChange={(e) => handleChangeField("username", e)}
                placeholder="이름을 입력해주세요"
              />
            </InputBox>
            <InputBox>
              <Label>
                이메일 <RequiredText>(필수)</RequiredText>
              </Label>
              <ValidateInputBox>
                {overLap ? (
                  <ErrorInput
                    value={data.email}
                    onChange={(e) => handleChangeField("email", e)}
                    width="239px"
                    placeholder="이메일을 입력해주세요"
                  />
                ) : (
                  <Input
                    value={data.email}
                    onChange={(e) => handleChangeField("email", e)}
                    width="239px"
                    placeholder="이메일을 입력해주세요"
                  />
                )}
                <ValidateBtn onClick={ValidateOverLapEmail}>
                  중복검사
                </ValidateBtn>
              </ValidateInputBox>
              {clicked && overLap && (
                <ErrorMessage text="이미 사용중인 이메일입니다" />
              )}

              {clicked && !overLap && !validateEmail(data["email"]) && (
                <ErrorMessage text="올바르지 않은 이메일 형식입니다" />
              )}

              {clicked && !overLap && validateEmail(data["email"]) && (
                <ErrorMessage text="사용가능한 이메일입니다" color="#303646" />
              )}
            </InputBox>
            <InputBox>
              <Label>
                비밀번호 <RequiredText>(필수)</RequiredText>
              </Label>
              {validatePassword(data["password"]) ? (
                <Input
                  type="password"
                  value={data.password}
                  onChange={(e) => handleChangeField("password", e)}
                  placeholder="8자 이상 영문, 숫자, 특수문자 포함"
                />
              ) : (
                <ErrorInput
                  type="password"
                  value={data.password}
                  onChange={(e) => handleChangeField("password", e)}
                  placeholder="8자 이상 영문, 숫자, 특수문자 포함"
                />
              )}
              {validatePassword(data["password"]) || (
                <ErrorMessage text="8자 이상의 영문,숫자,특수문자가 포함 되어야 해요" />
              )}
            </InputBox>
            <InputBox>
              <Label>
                비밀번호 재입력 <RequiredText>(필수)</RequiredText>
              </Label>
              {validateRePassword(data["password"], rePassword) ? (
                <Input
                  type="password"
                  value={rePassword}
                  onChange={handleChangeRePassword}
                  placeholder="비밀번호를 다시 입력해주세요"
                />
              ) : (
                <ErrorInput
                  type="password"
                  value={rePassword}
                  onChange={handleChangeRePassword}
                  placeholder="비밀번호를 다시 입력해주세요"
                />
              )}
              {validateRePassword(data["password"], rePassword) || (
                <ErrorMessage text="비밀번호가 일치하지 않습니다" />
              )}
            </InputBox>
            <InputBox>
              <Label>
                전화번호 <RequiredText>(필수)</RequiredText>
              </Label>
              <ValidateInputBox>
                <Input width="239px" placeholder="전화번호를 입력해주세요" />
                <ValidateBtn>본인인증</ValidateBtn>
              </ValidateInputBox>
            </InputBox>
            <InputBox>
              <Label>
                인증번호 <RequiredText>(필수)</RequiredText>
              </Label>
              <ValidateInputBox>
                <Input width="239px" placeholder="인증번호를 입력해주세요" />
                <ValidateBtn>확인</ValidateBtn>
              </ValidateInputBox>
            </InputBox>
            <SignUpAgreeBox>
              <AgreeBox>
                <RadioBtn
                  onClick={handleStrokeBtn}
                  selected={strokeBtnSelected}
                >
                  {fillBtnSelected && strokeBtnSelected ? (
                    <StrokeImg src={PurpleBtn} />
                  ) : (
                    <StrokeImg src={WhiteBtn} />
                  )}
                </RadioBtn>
                약관에 모두 동의 (필수)
              </AgreeBox>
              <AgreeBox
                padding="12px 6px 4px 6px"
                fontSize="12px"
                border="none"
              >
                <RadioBtn onClick={handleFillBtn} selected={fillBtnSelected}>
                  {fillBtnSelected ? (
                    <StrokeImg src={PurpleBtn} />
                  ) : (
                    <StrokeImg src={WhiteBtn} />
                  )}
                </RadioBtn>
                개인정보 수집 및 이용동의 (필수) <Right src={RightImg} />
              </AgreeBox>
            </SignUpAgreeBox>
          </SignUpInputContainer>
        </SignUpContainer>
        <SignUpNextBtnBox>
          {isFormValid() ? (
            <StandardBtn
              disabled={false}
              onClick={MoveToUserTypePage}
              color="#FFF"
              background="#8644FF"
            >
              다음
            </StandardBtn>
          ) : (
            <StandardBtn disabled={true} color="#FFF" background="#C6A7FF">
              다음
            </StandardBtn>
          )}
        </SignUpNextBtnBox>
      </MainContainer>
    </TopContainer>
  );
};

export default SignUp;
