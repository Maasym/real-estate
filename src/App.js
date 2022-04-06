import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Best from "./components/best/Best";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Best />
    <Featured />
    </div>
  );
}

export default App;
