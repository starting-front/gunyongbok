// Promise
import axios from "axios";

// types
import { Profile } from "../types/profile";

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
