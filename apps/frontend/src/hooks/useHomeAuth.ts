import { useRecoilValue, useSetRecoilState } from "recoil";
import { userDataAtom } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useHomeAuth = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userDataAtom);
  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, []);
};
export default useHomeAuth;
