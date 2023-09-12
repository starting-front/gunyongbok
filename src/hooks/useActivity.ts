// React
import { useState } from "react";

const useAcitivity = () => {
  const [activityBtn, setAcitivityBtn] = useState(false);

  const updateStatusBtn = (status: boolean) => setAcitivityBtn(status);

  return { activityBtn, updateStatusBtn };
};

export default useAcitivity;
