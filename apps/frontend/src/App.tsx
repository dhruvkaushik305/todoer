import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";
import useAuth from "./hooks/useAuth";
import FooterLayout from "./Layouts/FooterLayout";
import LandingLayout from "./Layouts/LandingLayout";
import SignupLayout from "./Layouts/SignupLayout";
import LoginLayout from "./Layouts/LoginLayout";
import NavbarLayout from "./Layouts/NavbarLayout";
import HomeLayout from "./Layouts/HomeLayout";
function App() {
  useAuth();
  return (
    <div className="flex h-screen w-screen flex-col text-white">
      <Toaster richColors />
      <NavbarLayout />
      <div className="flex grow items-center justify-center overflow-x-hidden bg-black">
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/auth/signup" element={<SignupLayout />} />
          <Route path="/auth/login" element={<LoginLayout />} />
          <Route path="/home/*" element={<HomeLayout />} />
        </Routes>
      </div>
      <FooterLayout />
    </div>
  );
}

export default App;
