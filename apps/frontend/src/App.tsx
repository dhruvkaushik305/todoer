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
import FooterLayout from "./Layouts/FooterLayout";
function App() {
  useAuth();
  return (
    <div className="flex h-screen w-screen flex-col">
      <Toaster richColors />
      <NavbarLayout />
      <div className="flex grow items-center justify-center">
        <Routes>
          <Route path="/" element={<LandingComponent />} />
          <Route path="/auth/signup" element={<SignupComponent />} />
          <Route path="/auth/login" element={<LoginComponent />} />
          <Route path="/home/*" element={<HomeComponent />} />
          <Route path="/testing" element={<TestingLayout />} />
        </Routes>
      </div>
      <FooterLayout />
    </div>
  );
}

export default App;
