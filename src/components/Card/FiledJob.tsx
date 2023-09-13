// React
import { useEffect, useState } from "react";

// Custom Hooks
import useAcitivity from "../../hooks/useActivity";

// lib
import { FaAngleUp } from "react-icons/fa";

// CSS
import styled from "styled-components";

// Dummy Data
import { Field, Job } from "./testdata";

const SelectWrap = styled.div`
  display: flex;
  gap: 20px;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  @media screen and (max-width: 599px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

const SelectContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 599px) {
    margin-bottom: 12px;
  }
`;

const FiledSelect = styled.div`
  height: 46px;
  padding: 12px 12px 12px 16px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #626e8e;
  color: #9ba4ba;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  &:hover,
  &:focus {
    border: 1px solid #8644ff;
    outline: none;
  }

  @media screen and (max-width: 599px) {
    width: 100%;
    margin-bottom: 10px;
  }

  .show,
  .hide {
    transition: all 0.3s ease-in-out;
    font-size: 16px;
    color: black;
  }

  .show {
    transform: rotate(180deg);
  }

  .hide {
    transform: rotate(0);
  }
`;

const FiledJobWrapper = styled.div`
  background-color: #f1f1f4;
  padding: 13px 16px;
  border-radius: 3px 3px 0 0;
  border-bottom: 1px solid #e2e4eb;
  cursor: pointer;
  &:last-child {
    border: none;
  }
`;

const FIELD_DEFAULT = "분야를 선택해주세요";
const JOB_DEFAULT = "직무를 선택해주세요";

const FiledJob = () => {
  const [fieldTitle, setFieldTitle] = useState(FIELD_DEFAULT);
  const [jobTitle, setJobTitle] = useState(JOB_DEFAULT);
  const [userField, setUserField] = useState(false);
  const [userJob, setUserJob] = useState(false);

  const [activityBtn, updateStatusBtn] = useAcitivity();

  const hasUpdateUserField = () => setUserField((prev) => !prev);
  const hasUpdateUserJob = () => {
    if (fieldTitle === FIELD_DEFAULT) {
      return alert("분야 먼저 선택해 주세요");
    }
    setUserJob((prev) => !prev);
  };

  const updateUserField = (name: string) => {
    setFieldTitle(name);
    setUserField(false);
    setUserJob(true);
  };

  const updateUserJob = (name: string) => {
    setJobTitle(name);
    setUserJob(false);
  };

  useEffect(() => {
    if (fieldTitle !== FIELD_DEFAULT && jobTitle !== JOB_DEFAULT)
      return updateStatusBtn(false);

    console.log(activityBtn);
  }, [fieldTitle, jobTitle, activityBtn]);

  return (
    <SelectWrap>
      <SelectContainer>
        <FiledSelect onClick={hasUpdateUserField}>
          {fieldTitle}
          <FaAngleUp className={userField ? "show" : "hide"} id="icon" />
        </FiledSelect>

        {userField &&
          Field?.map((data, _) => (
            <FiledJobWrapper
              key={data.id}
              onClick={() => updateUserField(data.name)}
            >
              <div>{data.name}</div>
            </FiledJobWrapper>
          ))}
      </SelectContainer>

      <SelectContainer>
        <FiledSelect onClick={hasUpdateUserJob}>
          {jobTitle}
          <FaAngleUp className={userJob ? "show" : "hide"} id="icon" />
        </FiledSelect>
        {userJob &&
          Job?.map((data, _) => (
            <FiledJobWrapper
              key={data.id}
              onClick={() => updateUserJob(data.name)}
            >
              <div>{data.name}</div>
            </FiledJobWrapper>
          ))}
      </SelectContainer>
    </SelectWrap>
  );
};

export default FiledJob;
