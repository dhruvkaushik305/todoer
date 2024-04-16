import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import NavbarLayout from "./components/Navbar/NavbarLayout";
import SignupLayout from "./components/auth/SignupLayout";

function App() {
  return (
    <div>
      <NavbarLayout />
      <div className="pt-[4rem] h-screen w-screen bg-delftBlue flex justify-center items-center">
        <Routes>
          <Route path="/auth/signup" element={<SignupLayout />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
