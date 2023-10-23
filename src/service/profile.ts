// api
import { Profile, Overview } from "../types/profile";

// lib
import * as yup from "yup";

export const bodySchema = yup.object().shape({
  name: yup.string().required("이름을 입력해 주세요 !"),
  email: yup.string().email().required("이메일을 입력해 주세요 !"),
  tel: yup.string().required("휴대폰 번호를 입력해 주세요 !"),
  // field: yup.string().required("분야를 선택해 주세요 !"),
  // job: yup.string().required("직무를 선택해 주세요 !"),
  introduce: yup.string().required("자기소개를 입력해 주세요 !"),
  keywords: yup.array(),
});

export const overViewSchema = yup.object().shape({
  background: yup.string().required("프로젝트 준비배경을 입력해 주세요!"),
  objective: yup.string().required("프로젝트 목표를 입력해 주세요!"),
  role: yup.string().required("프로젝트 담당 역할을 입력해 주세요!"),
});

interface ProfileReturn {
  result: "true" | "false" | null;
}

// profile/edit
export const validateProfileEditInfoValue = (args: Profile): ProfileReturn => {
  if (bodySchema.isValidSync(args)) {
    console.log("ok");
  }

  return { result: "false" };
};

// profile/overview
export const validateProfileOverview = (args: Overview) => {
  if (overViewSchema.isValidSync(args)) {
    console.log("ok");
  }
  return null;
};
