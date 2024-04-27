import { UserType } from "@repo/types/User";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userData } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { isLoggedIn } from "../actions/userActions";

const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userData);
  useEffect(() => {
    const getUser = async () => {
      const response: { success: boolean; data?: UserType } =
        await isLoggedIn();
      if (response.success) {
        setUser(response.data!);
        toast.success(`Welcome back ${response.data!.name}`);
        navigate("/home");
      } else {
        setUser(null);
      }
    };
    if (!user) {
      getUser();
    }
  }, []);
};
export default useAuth;
