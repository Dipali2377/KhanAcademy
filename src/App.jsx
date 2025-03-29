import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
