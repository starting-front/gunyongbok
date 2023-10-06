// React
import { useState, useEffect } from "react";

// CSS
import styled from "styled-components";

// Components
import ResumeFooterTitle from "../Resume/ResumFooterTitle";
import ResumeHeader from "../Header/ResumeHeader";

const ImprovementwWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const ImprovementContainer = styled.div`
  position: relative;
`;

const ImprovementLabel = styled.label`
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

const ImprovementTextarea = styled.textarea`
  width: 100%;
  height: 130px;
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

const DEFAULT_TEXTAREA = {
  result: "",
  improvements: "",
};

interface Props {
  updateStatusBtn: (value: boolean) => void;
}

const ProjectImprovements = ({ updateStatusBtn }: Props) => {
  const [form, setForm] = useState(DEFAULT_TEXTAREA);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    const { result, improvements } = form;
    if (result.length < 5)
      return alert("프로젝트 성과는 5글자 이상 적어주세요");
    if (improvements.length < 5)
      return alert("프로젝트 개선 및 아쉬운점은 5글자 이상으로 적어주세요");
  };

  useEffect(() => {
    const { result, improvements } = form;
    if (result.length > 5 && improvements.length > 5) {
      updateStatusBtn(true);
    } else {
      updateStatusBtn(false);
    }
  }, [form]);

  return (
    <>
      <ImprovementwWrap>
        <ResumeHeader
          MainTitle="프로젝트 회고록 작성하기"
          SubTitle="알찬 피드백을 받을 포트폴리오를 업로드 해볼까요?"
        />
        <ImprovementContainer>
          <ImprovementLabel>프로젝트에서의 성과</ImprovementLabel>
          <ImprovementTextarea
            placeholder="이 프로젝트로 얻게된 성과를 알려주세요"
            id="result"
            name="result"
            onChange={onChange}
            value={form.result}
          />
        </ImprovementContainer>
        <ImprovementContainer>
          <ImprovementLabel>개선 및 아쉬운 점</ImprovementLabel>
          <ImprovementTextarea
            placeholder="프로젝트에서 이것만은 개선할 수 있었다는 아쉬운점을 알려주세요"
            id="improvements"
            name="improvements"
            onChange={onChange}
            value={form.improvements}
          />
        </ImprovementContainer>
      </ImprovementwWrap>
      <ResumeFooterTitle
        title="다음 단계로"
        nextTitle="건너뛰기"
        next={false}
        onClick={handleFormSubmit}
      />
    </>
  );
};

export default ProjectImprovements;
