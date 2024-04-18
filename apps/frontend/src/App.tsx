import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import NavbarLayout from "./components/Navbar/NavbarLayout";
import SignupLayout from "./components/Auth/SignupLayout";
import LandingLayout from "./components/Landing/LandingLayout";
import LoginLayout from "./components/Auth/LoginLayout";
function App() {
  return (
    <div>
      <NavbarLayout />
      <div className="pt-[4rem] h-screen w-screen bg-gradient-to-b from-darkBlue via-navyBlue to-sky-600 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/auth/signup" element={<SignupLayout />} />
          <Route path="/auth/login" element={<LoginLayout />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
