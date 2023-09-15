// React
import { useState } from "react";

function useAcitivity(): [boolean, (value: boolean) => void] {
  const [activityBtn, setAcitivityBtn] = useState(false);

  const updateStatusBtn = (value: boolean) => setAcitivityBtn(value);

  return [activityBtn, updateStatusBtn];
}

export default useAcitivity;
