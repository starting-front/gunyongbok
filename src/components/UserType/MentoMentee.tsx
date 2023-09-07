// React Hooks
import { useState } from "react";

// UserType Select
import userTypeSelect from "./userTypeList";

// React-icons
import { HiOutlineChevronRight } from "react-icons/hi";

// CSS
import styled, { keyframes } from "styled-components";

const hoverBackground = keyframes`
  from{
    opacity: 0;
    transform: scale(0);

  }
  to{
    opacity: 1
    transform: scale(1);
  }
`;

const UserType = {
  Background: styled.div`
    width: 100%;
    padding: 12px 16px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 2px solid #e2e4eb;
    margin-bottom: 16px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color: #050505;
    z-index: 10;

    &:hover {
      background-color: #fafafa;
    }

    &.userActive::before {
      content: "";
      position: absolute;
      width: 300px;
      height: 300px;
      top: 30px;
      left: 80px;
      background-color: #e2e4eb;
      border-radius: 100%;
      z-index: -1;
      animation: ${hoverBackground} 0.3s ease;
    }
  `,
  img: styled.img`
    margin-bottom: 16px;
  `,

  sectionName: styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 8px;
  `,

  sectionDesc: styled.div`
    font-size: 14px;
    line-height: 20px;
  `,
};

interface Props {
  onUserTypeClick: (id: number) => void;
}

const MentoMentee = ({ onUserTypeClick }: Props) => {
  const [clickUserTypeId, setClickUserTypeId] = useState<number>(0);

  // 클릭한 회원유형 Id Get
  const handleBackgroundClick = (id: number) => {
    setClickUserTypeId(id);
    // onUserTypeClick(id);
  };

  return (
    <>
      {userTypeSelect?.map((userTypeData, _) => {
        const isClicked = userTypeData.id === clickUserTypeId;

        return (
          <UserType.Background
            key={userTypeData.id}
            onClick={() => handleBackgroundClick(userTypeData.id)}
            className={isClicked ? "userActive" : ""}
          >
            <UserType.img src={userTypeData.iconSrc} alt="" />
            <UserType.sectionName>
              <div>{userTypeData.name}</div>
              <div>
                <HiOutlineChevronRight fontSize="18px" />
              </div>
            </UserType.sectionName>
            <UserType.sectionDesc>
              <div>{userTypeData.mainDesc}</div>
              <div>{userTypeData.subDesc}</div>
            </UserType.sectionDesc>
          </UserType.Background>
        );
      })}
    </>
  );
};

export default MentoMentee;
