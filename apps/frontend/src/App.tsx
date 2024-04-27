import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarLayout from "./components/Navbar/NavbarLayout";
import SignupLayout from "./components/Auth/SignupLayout";
import LandingLayout from "./components/Landing/LandingLayout";
import LoginLayout from "./components/Auth/LoginLayout";
import { Toaster } from "sonner";
import useAuth from "./hooks/useAuth";
import HomeLayout from "./components/Home/HomeLayout";
function App() {
  useAuth();
  return (
    <div>
      <Toaster />
      <NavbarLayout />
      <div className="pt-[4rem] h-screen w-screen bg-gradient-to-b from-black via-darkBlue to-navyBlue flex justify-center items-center">
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/auth/signup" element={<SignupLayout />} />
          <Route path="/auth/login" element={<LoginLayout />} />
          <Route path="/home" element={<HomeLayout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
