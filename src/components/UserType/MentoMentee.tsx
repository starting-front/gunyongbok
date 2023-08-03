// UserType Select
import userTypeSelect from "./userTypeList";

// React-icons
import { HiOutlineChevronRight } from "react-icons/hi";

// CSS
import styled from "styled-components";

const UserType = {
  Background: styled.div`
    width: 100%;
    max-width: 330px;
    padding: 12px 16px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 2px solid #e2e4eb;
    margin-bottom: 16px;
    cursor: pointer;
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

const MentoMentee = () => {
  return (
    <>
      {userTypeSelect?.map((userTypeData, _) => {
        return (
          <UserType.Background key={userTypeData.id}>
            <UserType.img src={userTypeData.iconSrc} alt="" />
            <UserType.sectionName>
              <div>{userTypeData.name}</div>
              <div>
                <HiOutlineChevronRight fontSize="22px" />
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
