// CSS
import styled from "styled-components";

const SelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FiledSelect = styled.select`
  width: 49%;
  height: 46px;
  padding: 12px 12px 12px 16px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #626e8e;
  &:hover,
  &:focus {
    border: 1px solid #8644ff;
    outline: none;
  }
`;

const FiledOption = styled.option`
  background-color: #e2e4eb;
  border-bottom: 1px solid grey;
`;

const FiledJob = () => {
  return (
    <SelectWrap>
      <FiledSelect>
        <option>분야를 선택해주세요</option>
        <option>개발</option>
      </FiledSelect>
      <FiledSelect>
        <option>직무를 선택해주세요</option>
        <option>대통령 암살</option>
      </FiledSelect>
    </SelectWrap>
  );
};

export default FiledJob;
