import { useState } from "react";

// React Icons
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

  &:hover,
  &:focus {
    border: 1px solid #8644ff;
    outline: none;
  }

  @media screen and (max-width: 599px) {
    width: 100%;
    margin-bottom: 12px;
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

const FiledJob = () => {
  const [userField, setUserField] = useState(false);
  const [userJob, setUserJob] = useState(false);

  const hasUpdateUserField = () => setUserField((prev) => !prev);
  const hasUpdateUserJob = () => setUserJob((prev) => !prev);

  return (
    <SelectWrap>
      <SelectContainer>
        <FiledSelect onClick={hasUpdateUserField}>
          분야를 선택해주세요
          <FaAngleUp className={userField ? "show" : "hide"} id="icon" />
        </FiledSelect>

        {userField &&
          Field?.map((data, _) => (
            <div key={data.id}>
              <div>{data.name}</div>
            </div>
          ))}
      </SelectContainer>
      <SelectContainer>
        <FiledSelect onClick={hasUpdateUserJob}>
          직무를 선택해주세요
          <FaAngleUp className={userJob ? "show" : "hide"} id="icon" />
        </FiledSelect>
        {userJob &&
          Job?.map((data, _) => (
            <div key={data.id}>
              <div>{data.name}</div>
            </div>
          ))}
      </SelectContainer>
    </SelectWrap>
  );
};

export default FiledJob;
