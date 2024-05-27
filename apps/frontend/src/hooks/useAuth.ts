import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useAuth = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, []);
};
export default useAuth;
