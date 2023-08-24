// Assets
import mento from "../../assets/mento.svg";
import mentee from "../../assets/mentee.svg";

const userTypeSelect = [
  {
    id: 1,
    iconSrc: mento,
    name: "멘토 회원",
    role: "MENTOR",
    mainDesc: "피드백 해주고 내 실력도 up!",
    subDesc: "꿈나무들을 위해 이력서 피드백 해주고 싶어요",
  },
  {
    id: 2,
    iconSrc: mentee,
    name: "멘티 회원",
    role: "MENNTEE",
    mainDesc: "이력서 작성하고",
    subDesc: "현직자의 피드백으로 쑥쑥 성장하고 싶어요",
  },
];

export default userTypeSelect;
