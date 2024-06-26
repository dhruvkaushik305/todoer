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
    <div className="relative h-screen w-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-flockingStars bg-cover bg-center"></div>
      <div className="overflow-hidden bg-gradient-to-tl from-black/75 via-blue-950/75 to-indigo-950/75 text-white backdrop-blur-md">
        <Toaster richColors />
        <NavbarLayout />
        <div className="flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route path="/" element={<LandingLayout />} />
            <Route path="/auth/signup" element={<SignupLayout />} />
            <Route path="/auth/login" element={<LoginLayout />} />
            <Route path="/home/*" element={<HomeLayout />} />
          </Routes>
        </div>
        <FooterLayout />
      </div>
    </div>
  );
}

export default App;
