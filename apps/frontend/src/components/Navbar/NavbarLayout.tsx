import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userData } from "../../store/auth";
import { toast } from "sonner";
import { logoutAction } from "../../actions/authAction";

const NavbarLayout: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userData);
  return (
    <div className="sticky flex h-[4rem] w-full items-center justify-between border-b border-gray-800 bg-black p-3 md:justify-around">
      <div
        className="cursor-pointer font-Pacifico text-3xl text-white md:text-4xl"
        onClick={() => navigate("/")}
      >
        Todoer
      </div>
      {user === null ? (
        <nav className="flex justify-between gap-3">
          <button
            className="text-md rounded-lg bg-blue px-2 py-1 text-white md:px-3 md:py-2 md:text-lg"
            onClick={() => navigate("/auth/signup")}
          >
            Signup
          </button>
          <button
            className="text-md rounded-lg bg-blue px-2 py-1 text-white md:px-3 md:py-2 md:text-lg"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </button>
        </nav>
      ) : (
        <nav>
          <button
            className="rounded-md bg-blue px-3 py-2 text-white"
            onClick={async () => {
              const response = await logoutAction();
              if (response.success) {
                toast.success("Logged out successfully");
                setUser(null);
                navigate("/");
              }
            }}
          >
            Logout
          </button>
        </nav>
      )}
    </div>
  );
};
export default NavbarLayout;
