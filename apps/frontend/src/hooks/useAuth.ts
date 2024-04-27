import { UserType } from "@repo/types/User";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userData } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { isLoggedIn } from "../actions/userActions";

const useAuth = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userData);
  useEffect(() => {
    const getUser = async () => {
      const response: { success: boolean; data?: UserType } =
        await isLoggedIn();
      if (response.success) {
        setUser(response.data!);
        toast.success(`Welcome back ${response.data!.name}`);
        navigate("/home");
      } else {
        toast.error("Please login to continue");
        navigate("/auth/login");
      }
    };
    getUser();
  }, []);
};
export default useAuth;
