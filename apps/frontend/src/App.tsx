import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarLayout from "./components/Navbar/NavbarLayout";
import SignupLayout from "./components/Auth/SignupLayout";
import LandingLayout from "./components/Landing/LandingLayout";
import LoginLayout from "./components/Auth/LoginLayout";
import { Toaster } from "sonner";
import useAuth from "./hooks/useAuth";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
function App() {
  //check if user is logged in
  // const user = useAuth();
  // console.log(user);
  return (
    <div>
      <Toaster/>
      <NavbarLayout />
      <div className="pt-[4rem] h-screen w-screen bg-gradient-to-b from-darkBlue via-navyBlue to-sky-600 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/auth/signup" element={<SignupLayout />} />
          <Route path="/auth/login" element={<LoginLayout />} />
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
