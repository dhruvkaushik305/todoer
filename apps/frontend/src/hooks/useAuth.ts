import { useRecoilValue } from "recoil";
import { loggedIn } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useAuth = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(loggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, []);
};
export default useAuth;
