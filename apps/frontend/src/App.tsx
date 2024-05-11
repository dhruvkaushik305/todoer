import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarLayout from "./components/Navbar/NavbarLayout";
import { Toaster } from "sonner";
import useAuth from "./hooks/useAuth";
import TestingLayout from "./components/Testing/TestingLayout";
import SignupComponent from "./components/Auth/SignupComponent";
import LoginComponent from "./components/Auth/LoginComponent";
import HomeComponent from "./components/Home/HomeComponent";
import LandingComponent from "./components/Landing/LandingComponent";
function App() {
  useAuth();
  return (
    <div>
      <Toaster />
      <NavbarLayout />
      <div className="pt-[4rem] h-screen w-screen bg-black flex justify-center items-center">
        <Routes>
          <Route path="/" element={<LandingComponent />} />
          <Route path="/auth/signup" element={<SignupComponent />} />
          <Route path="/auth/login" element={<LoginComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/testing" element={<TestingLayout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
