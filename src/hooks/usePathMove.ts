// React Hooks
import { useNavigate } from "react-router-dom";

const usePathMove = () => {
  const navigate = useNavigate();

  const pathMove = (url: string) => {
    navigate(url);
  };
  return pathMove;
};

export default usePathMove;
