import { UserType } from "../../../../packages/types/userTypes.js";
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
      const response: { success: boolean; data?: UserType; error?: string } =
        await isLoggedIn();
      if (response.success) {
        setUser(response.data!);
        toast.success(`Welcome back ${response.data!.name.split(" ")[0]}`);
        navigate("/home");
      } else {
        if (response.error === "Server down") {
          toast.error("Sorry, our server seems down", {
            closeButton: true,
          });
        }
        setUser(null);
      }
    };
    if (!user) {
      getUser();
    }
  }, []);
};
export default useAuth;
