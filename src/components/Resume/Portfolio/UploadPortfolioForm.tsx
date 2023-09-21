// React
import { useState, useRef, useEffect } from "react";

// Custom Hooks
import useAcitivity from "../../../hooks/useActivity";

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

const TeamDivBox = styled.div`
  width: 48%;
  position: relative;

  @media screen and (max-width: 599px) {
    width: 100%;
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

  @media screen and (max-width: 599px) {
    padding-bottom: 80px;
  }
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
  // pdf 파일 선택 / 파일명
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [portfolioPDFName, setPortfolioPDFName] = useState(DEFAULT_PDFNAME);

  // 썸네일 이미지
  const [imgSrc, setImgSrc] = useState("");

  // 미리보기 활성화
  const [preView, setPreView] = useState(false);

  // 진행중 체크
  const [nowActivity, setNowActivity] = useState(false);

  // form 업데이트
  const [form, setForm] = useState({
    portfolioName: "",
    portfolioRole: "",
    teamMember: "",
    firstDate: "",
    lastDate: "",
  });

  // 유저 전체상황 값 업데이트 확인
  const [activityBtn, updateStatusBtn] = useAcitivity();

  // ref
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
      return reader.readAsDataURL(file);
    }
  };

  // 포트폴리오, input Ref
  const handlePorfolioPDFClick = () => inputPortfolioRef.current.click();
  const handlePorfolioFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPortfolioPDFName(file.name);
    }
    return;
  };

  // Form 업데이트
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    return setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  // 미리보기 버튼
  const handlePreView = () => {
    if (selectedFile) return setPreView((prev) => !prev);
    alert("PDF 파일를 먼저 업로드 해주세요");
  };

  // 미리보기 닫기 버튼
  const PrviewClose = () => setPreView(false);

  return (
    <>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        {preView && <PdfViewer file={selectedFile} onClick={PrviewClose} />}
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
            <PortfoliodInput
              placeholder="미입력시 기본 제목으로 자동저장됩니다. (OOO의 포트폴리오)"
              name="portfolioName"
              onChange={onChange}
            />
            <PortfolioLabel>프로젝트 유형 및 담당역할</PortfolioLabel>
            <PortfoliodInput
              placeholder="나의 역할을 선택해주세요"
              name="portfolioRole"
              onChange={onChange}
            />
            <TeamDivBox>
              <PortfolioLabel>팀원</PortfolioLabel>
              <PortfoliodInput
                placeholder="팀원은 몇명이었나요?"
                name="teamMember"
                onChange={onChange}
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
            </TeamDivBox>
            <PortfolioLabel>기간</PortfolioLabel>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <PortfoliodInput
                type="date"
                data-placeholder="부터"
                required
                aria-required="true"
                className="firstDate"
                name="firstDate"
                onChange={onChange}
              />
              <span style={{ margin: "0 8px" }}> ~ </span>
              <PortfoliodInput
                type="date"
                data-placeholder="까지"
                required
                aria-required="true"
                className="lastDate"
                name="lastDate"
                onChange={onChange}
              />
            </div>
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
        title="다음 단계로"
        nextTitle="임시저장"
        next={false}
        onSave={() => console.log(2)}
        onClick={() => console.log(1)}
      />
    </>
  );
};

export default UploadPortfolioForm;
