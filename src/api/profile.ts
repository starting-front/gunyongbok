// Promise
import axios from "axios";

// types
import { Profile } from "../types/profile";

export const editProfileInfo = (args: Profile, resumeid: string) => {
  if (args) {
    const res = axios.post(
      `${import.meta.env.VITE_REACT_API_BASE_URL}/api/resumes${resumeid}`
    );
    return res;
  }
  return null;
};
