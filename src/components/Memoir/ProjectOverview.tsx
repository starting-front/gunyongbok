// React
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

// CSS
import styled from "styled-components";

// Components
import ResumeHeader from "../Header/ResumeHeader";
import ResumeFooterTitle from "../Resume/ResumFooterTitle";

const OverViewWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const OverviewTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 12px 12px 12px 16px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #626e8e;
  resize: none;

  &:hover,
  &:focus {
    border: 1px solid #8644ff;
    outline: none;
  }

  @media screen and (max-width: 599px) {
    height: 144px;
  }
`;

const OverviewLabel = styled.label`
  display: block;
  margin: 20px 0px 8px 0px;
  color: #303646;
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;

  &.portfolioLabel {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    padding: 12px 12px 12px 16px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #626e8e;
    color: #757575;
    font-size: 13.5px;
    &:hover,
    &:focus {
      border: 1px solid #8644ff;
      outline: none;
    }
  }
`;

const OverContainer = styled.div`
  position: relative;
`;

const TextLength = styled.span`
  position: absolute;
  bottom: 20px;
  right: 16px;
  font-size: 12px;
  line-height: 12px;
  color: #303646;

  &.lengthOver {
    color: red;
  }
`;

const DEFAULT_TEXTAREA = {
  background: "",
  objective: "",
  role: "",
};

interface Props {
  updateStatusBtn: (value: boolean) => void;
}

const ProejctOverview = ({ updateStatusBtn }: Props) => {
  const [form, setForm] = useState(DEFAULT_TEXTAREA);
  const [backgroundLength, setBackgroundLength] = useState(false);
  const [objectiveLength, setObjectiveLength] = useState(false);
  const [rolLength, setRolLength] = useState(false);

  const path = useNavigate();

  const onChnage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    return setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { background, objective, role } = form;

    background.length > 100
      ? setBackgroundLength(true)
      : setBackgroundLength(false);

    objective.length > 100
      ? setObjectiveLength(true)
      : setObjectiveLength(false);

    role.length > 100 ? setRolLength(true) : setRolLength(false);
  }, [form]);

  useEffect(() => {
    const { background, objective, role } = form;
    if (
      background.length > 5 &&
      objective.length > 5 &&
      role.length > 5 &&
      !backgroundLength &&
      !objectiveLength &&
      !rolLength
    ) {
      updateStatusBtn(true);
    } else {
      updateStatusBtn(false);
    }
  }, [form]);

  const handleNextPage = () => {
    const { background, objective, role } = form;

    if (background.length < 5)
      return alert("프로젝트 준비 배경에 대해 5글자 이상 기입해 주세요!");
    if (backgroundLength)
      return alert("프로젝트 준비 배경은 100글자 이내로 기입해 주세요!");

    if (objective.length < 5)
      return alert("프로젝트 목표에 대해 5글자 이상 기입해 주세요!");
    if (objectiveLength)
      return alert("프로젝트 목표는 100글자 이내로 기입해 주세요!");

    if (role.length < 5)
      return alert("프로젝트 담당 역할에 대해 5글자 이상 기입해 주세요!");
    if (rolLength)
      return alert("프로젝트 담당 역할은 100글자 이내로 기입해 주세요!");

    path("/profile/improvements");
  };

  return (
    <>
      <OverViewWrap>
        <ResumeHeader
          MainTitle="프로젝트 회고록 작성하기"
          SubTitle="알찬 피드백을 받을 포트폴리오를 업로드 해볼까요?"
        />

        <OverContainer>
          <OverviewLabel htmlFor="background">
            이 프로젝트를 준비하게 된 배경
          </OverviewLabel>
          <OverviewTextarea
            placeholder="이 프로젝트를 준비하게 된 배경은 무엇인가요?"
            name="background"
            id="background"
            onChange={onChnage}
          />
          <TextLength
            className={backgroundLength ? "lengthOver" : ""}
          >{`(${form.background.length}/100)`}</TextLength>
        </OverContainer>

        <OverContainer>
          <OverviewLabel htmlFor="objective">프로젝트 목표</OverviewLabel>
          <OverviewTextarea
            placeholder="프로젝트의 목표를 알려주세요!"
            name="objective"
            id="objective"
            onChange={onChnage}
          />
          <TextLength
            className={objectiveLength ? "lengthOver" : ""}
          >{`(${form.objective.length}/100)`}</TextLength>
        </OverContainer>

        <OverContainer>
          <OverviewLabel htmlFor="role">프로젝트에서의 담당 역할</OverviewLabel>
          <OverviewTextarea
            placeholder="프로젝트에서 나는 어떤 역할을 맡았을까요?"
            name="role"
            id="role"
            onChange={onChnage}
          />
          <TextLength
            className={rolLength ? "lengthOver" : ""}
          >{`(${form.role.length}/100)`}</TextLength>
        </OverContainer>
      </OverViewWrap>

      <ResumeFooterTitle
        next={false}
        nextTitle="건너뛰기"
        onSave={() => console.log("건너뛰기")}
        title="다음 단계로"
        onClick={handleNextPage}
      />
    </>
  );
};

export default ProejctOverview;
