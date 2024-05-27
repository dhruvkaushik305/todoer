import { useRecoilValue, useSetRecoilState } from "recoil";
import { userDataAtom } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import selectedUserAtom from "../store/user";

const useHomeAuth = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userDataAtom);
  const setSelectedUser = useSetRecoilState(selectedUserAtom);
  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    } else {
      setSelectedUser(user);
    }
  }, []);
};
export default useHomeAuth;
