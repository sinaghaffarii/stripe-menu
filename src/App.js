import React from "react";
import "./App.css";
// Components
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Hero from "./Components/Hero/Hero";
import Submenu from "./Components/Submenu/Submenu";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
};

export default App;
