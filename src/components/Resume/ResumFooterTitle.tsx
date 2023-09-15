// CSS
import styled from "styled-components";

const ResumFooter = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #8644ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 110px;

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const ResumFooterTitle = styled.div`
  width: 226px;
  height: 44px;
  cursor: pointer;
  background-color: white;
  border-radius: 56px;
  color: #8644ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  title: string;
  onClick: () => void;
}

const ResumeFooterTitle = ({ title, onClick }: Props) => {
  return (
    <ResumFooter>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <ResumFooterTitle onClick={onClick}>{title}</ResumFooterTitle>
      </div>
    </ResumFooter>
  );
};

export default ResumeFooterTitle;
