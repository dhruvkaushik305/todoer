import { useRecoilValue } from "recoil";
import { userData } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useHomeAuth = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userData);
  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, []);
};
export default useHomeAuth;
