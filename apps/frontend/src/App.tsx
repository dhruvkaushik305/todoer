import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarLayout from "./components/Navbar/NavbarLayout";
import LandingLayout from "./components/Landing/LandingLayout";
import { Toaster } from "sonner";
import HomeLayout from "./components/Home/HomeLayout";
import useAuth from "./hooks/useAuth";
import TestingLayout from "./components/Testing/TestingLayout";
import SignupComponent from "./components/Auth/SignupComponent";
import LoginComponent from "./components/Auth/LoginComponent";
function App() {
  useAuth();
  return (
    <div>
      <Toaster />
      <NavbarLayout />
      <div className="pt-[4rem] h-screen w-screen bg-black flex justify-center items-center">
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/auth/signup" element={<SignupComponent />} />
          <Route path="/auth/login" element={<LoginComponent />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/testing" element={<TestingLayout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
