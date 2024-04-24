import { UserType } from "@repo/types/User";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userData } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useAuth = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userData);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND}/auth/isLogged`,
          {
            credentials: "include",
          }
        );
        const response: { success: boolean; data: UserType } = await res.json();
        if (response.success) {
          setUser(response.data);
          toast.success(`Welcome back ${response.data.name}`);
          navigate("/dashboard");
        } else {
          setUser(null);
          toast.error("Please login to continue");
          navigate("/auth/login");
        }
      } catch (err) {
        console.error(err);
        setUser(null);
      }
    };
    getUser();
  }, []);
};
export default useAuth;
