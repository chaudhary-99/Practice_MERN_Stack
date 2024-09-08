import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import Dashboard from "./pages/Dashboard"; 
import  Login from "./pages/Login"; 
import Signup from "./pages/Signup"; 
import { useState } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn]=useState(false);
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="login" element={<Login setisLoggedIn={setisLoggedIn}/>}/>
        <Route path="signup" element={<Signup setisLoggedIn={setisLoggedIn}/>}/>
      </Routes>
    </div>
  );
}

export default App;
