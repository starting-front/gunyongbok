// Promise
import axios from "axios";

export interface Profile {
  name: string;
  email: string;
  tel: string;
  // field: string;
  // job: string;
  introduce: string;
  myKeywords: string[] | [];
}

export const editProfileInfo = (args: Profile) => {
  const RESUME_ID = "test";
  if (args) {
    const res = axios.post(
      `${import.meta.env.VITE_REACT_API_BASE_URL}/api/resumes${RESUME_ID}`
    );
    return res;
  }
  return null;
};
