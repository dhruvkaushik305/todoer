import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userData } from "../../store/auth";
import { toast } from "sonner";

const NavbarLayout: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userData);
  return (
    <div className="fixed w-full flex bg-black justify-between md:justify-around p-3 items-center border-b-2 border-gray-700">
      <div className="md:text-4xl text-3xl text-white font-Pacifico cursor-pointer" onClick={() => navigate("/")}>
        Todoer
      </div>
      {user === null ? (<div className="flex justify-between gap-3">
        <button
          className="md:text-lg text-md bg-blue text-white md:py-2 md:px-3 py-1 px-2 rounded-lg"
          onClick={() => navigate("/auth/signup")}
        >
          Signup
        </button>
        <button className="md:text-lg text-md bg-blue text-white md:py-2 md:px-3 py-1 px-2 rounded-lg" onClick={() => navigate("/auth/login")}>
          Login
        </button>
      </div>) : (<div>
        <button className="bg-blue rounded-md text-white px-3 py-2" onClick={async () => {
          // TODO: Move this to actions
          const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/logout`, {
            method: "DELETE",
            credentials: "include"
          });
          const response: { success: boolean, message: string } = await res.json();
          if (response.success) {
            toast.success("Logged out successfully");
            setUser(null);
            navigate("/");
          }
        }}>Logout</button>
      </div>)}

    </div>
  );
};
export default NavbarLayout;
