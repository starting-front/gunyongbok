// React
import { useState, useRef } from "react";

// SVG
import previewImage from "../../../assets/preview.svg";

// lib
import { HiOutlineChevronRight } from "react-icons/hi";

// CSS
import styled from "styled-components";

// Components
import ResumeHeader from "../../Header/ResumeHeader";
import ResumeFooterTitle from "../ResumFooterTitle";
import PdfViewer from "./PdfViewer";

const ImageTitle = styled.div`
  color: #303646;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  margin-bottom: 8px;
`;

const PortfolioLabel = styled.label`
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

const PortfoliodInput = styled.input`
  width: 100%;
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

  &.portfolio {
    display: none;
  }

  &.firstDate,
  &.lastDate {
    width: 48%;
  }

  &.firstDate[type="date"]::before,
  &.lastDate[type="date"]::before {
    content: attr(data-placeholder);
    width: 100%;
    color: #9ba4ba;
  }

  &.firstDate[type="date"]:focus::before,
  &.firstDate[type="date"]:valid::before,
  &.lastDate[type="date"]:focus::before,
  &.lastDate[type="date"]:valid::before {
    display: none;
  }
`;

const RightArrowBox = styled.div`
  position: absolute;
  font-size: 18px;
  top: 43px;
  right: 15px;
`;

const SpanText = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #303646;
  font-weight: 600;
  line-height: 20px;
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

const SpanCircle = styled.span<{ $nowActivity: boolean }>`
  display: inline-block;
  width: 23px;
  height: 23px;
  border-radius: 100%;
  border: 3px solid ${(props) => (props.$nowActivity ? "#8644ff" : "#ccd0dc")};
  margin-left: 12px;
  position: relative;

  &.activity::before {
    content: "";
    width: 17px;
    height: 17px;
    border-radius: 100%;
    position: absolute;
    top: 3px;
    left: 3.2px;
    right: 0;
    background-color: #8644ff;
  }
`;

const DEFAULT_PDFNAME = "포트폴리오 파일을 첨부해 주세요";

const UploadPortfolioForm = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [imgSrc, setImgSrc] = useState("");
  const [portfolioPDFName, setPortfolioPDFName] = useState(DEFAULT_PDFNAME);
  const [preView, setPreView] = useState(false);
  const [nowActivity, setNowActivity] = useState(false);

  const inputThumbnailRef = useRef<any>(null);
  const inputPortfolioRef = useRef<any>(null);

  // 썸네일, input Ref
  const handleThumbnailImageClick = () => inputThumbnailRef.current.click();
  const handleThumnailFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e: any) {
        setImgSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreView = () => {
    if (selectedFile) return setPreView((prev) => !prev);
    alert("PDF 파일를 먼저 업로드 해주세요");
  };

  // 포트폴리오, input Ref
  const handlePorfolioPDFClick = () => inputPortfolioRef.current.click();
  const handlePorfolioFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      console.log(file, typeof file);
      setSelectedFile(file);
      setPortfolioPDFName(file.name);
    }
  };

  const PrviewClose = () => setPreView(false);

  return (
    <>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        {preView && <PdfViewer file={selectedFile} onClick={PrviewClose} />}
        {/* <PdfViewer file={selectedFile} /> */}
        <ResumeHeader
          MainTitle="포트폴리오 업로드"
          SubTitle="알찬 피드백을 받을 포트폴리오를 업로드 해볼까요"
          paddingBottom="0"
        />
        <div style={{ padding: "0 20px", boxSizing: "border-box" }}>
          <ImageTitle>포트폴리오 커버 페이지 등록하기</ImageTitle>
          <img
            src={!imgSrc ? previewImage : imgSrc}
            alt="view"
            width={250}
            height={127}
            style={{
              borderRadius: "10px",
              border: imgSrc && "1px solid #e2e4eb",
            }}
            onClick={handleThumbnailImageClick}
          />
          <input
            type="file"
            onChange={handleThumnailFileChange}
            ref={inputThumbnailRef}
            accept=".png"
            style={{ display: "none" }}
          />
          <div onClick={handlePreView}>미리보기</div>
          <form style={{ position: "relative" }}>
            <PortfolioLabel>파일 첨부</PortfolioLabel>
            <PortfolioLabel
              className="portfolioLabel"
              onClick={handlePorfolioPDFClick}
            >
              {portfolioPDFName}
            </PortfolioLabel>
            <PortfoliodInput
              className="portfolio"
              type="file"
              ref={inputPortfolioRef}
              accept=".pdf"
              onChange={handlePorfolioFileChange}
            />
            <RightArrowBox>
              <HiOutlineChevronRight />
            </RightArrowBox>
            <PortfolioLabel>포트폴리오 제목</PortfolioLabel>
            <PortfoliodInput placeholder="미입력시 기본 제목으로 자동저장됩니다. (OOO의 포트폴리오)" />
            <PortfolioLabel>프로젝트 유형 및 담당역할</PortfolioLabel>
            <PortfoliodInput placeholder="나의 역할을 선택해주세요" />
            <div style={{ width: "50%", position: "relative" }}>
              <PortfolioLabel>팀원</PortfolioLabel>
              <PortfoliodInput
                placeholder="팀원은 몇명이었나요?"
                className="TeamMember"
              />
              <span
                style={{
                  position: "absolute",
                  top: "33px",
                  right: "12px",
                  fontSize: "14px",
                }}
              >
                명
              </span>
            </div>
            <PortfolioLabel>기간</PortfolioLabel>
            <PortfoliodInput
              type="date"
              data-placeholder="부터"
              required
              aria-required="true"
              className="firstDate"
            />
            <span> ~ </span>
            <PortfoliodInput
              type="date"
              data-placeholder="까지"
              required
              aria-required="true"
              className="lastDate"
            />
          </form>
          <SpanText>
            아직 진행중이에요
            <SpanCircle
              onClick={() => setNowActivity((prev) => !prev)}
              className={nowActivity ? "activity" : "nonActivity"}
              $nowActivity={nowActivity}
            ></SpanCircle>
          </SpanText>
        </div>
      </div>
      <ResumeFooterTitle
        title="회고록 입력하러 가기"
        onClick={() => console.log(1)}
      />
    </>
  );
};

export default UploadPortfolioForm;
