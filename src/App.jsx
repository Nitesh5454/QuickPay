
import { Routes, Route } from "react-router-dom";
import { NavbarDemo } from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Signup from "./pages/SignUp";

const App = () => {
  return (
    <div className="from-slate-900 via-slate-950 to-black min-h-screen">
      <NavbarDemo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
