import React, { useState } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Shadow from "./Components/Shadow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Pages/Start";
import { useSelector } from "react-redux";

function App() {
  const [open, setOpen] = useState(false);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div
      className={`container h-screen ${
        isDarkMode ? "bg-darkBg" : "bg-lightBg"
      } flex items-center flex-col text-${
        isDarkMode ? "darkColor" : "lightColor"
      } duration-500`}
    >
      <Router>
        <Header setOpen={setOpen} />
        <Slider open={open} setOpen={setOpen} />
        {open && <Shadow setOpen={setOpen} />}
        <Routes>
          <Route exact path="/" element={<Start />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
