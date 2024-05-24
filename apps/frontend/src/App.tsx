import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";
import useAuth from "./hooks/useAuth";
import TestingLayout from "./components/Testing/TestingLayout";
import HomeComponent from "./components/Home/HomeComponent";
import FooterLayout from "./Layouts/FooterLayout";
import LandingLayout from "./Layouts/LandingLayout";
import SignupLayout from "./Layouts/SignupLayout";
import LoginLayout from "./Layouts/LoginLayout";
import NavbarLayout from "./Layouts/NavbarLayout";
function App() {
  useAuth();
  return (
    <div className="flex h-screen w-screen flex-col">
      <Toaster richColors />
      <NavbarLayout />
      <div className="flex grow items-center justify-center overflow-x-hidden bg-black">
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/auth/signup" element={<SignupLayout />} />
          <Route path="/auth/login" element={<LoginLayout />} />
          <Route path="/home/*" element={<HomeComponent />} />
          <Route path="/testing" element={<TestingLayout />} />
        </Routes>
      </div>
      <FooterLayout />
    </div>
  );
}

export default App;
