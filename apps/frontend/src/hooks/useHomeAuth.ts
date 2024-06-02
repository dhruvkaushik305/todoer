import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useHomeAuth = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login");
    }
  }, []);
};
export default useHomeAuth;
