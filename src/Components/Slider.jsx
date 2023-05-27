import React from "react";
import { FiLogIn } from "react-icons/fi";
import { IoCaretBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Slider = ({ open, setOpen }) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div
      className={`w-2/4 h-screen absolute top-0 ${
        open ? "left-0" : "-left-full"
      } ${isDarkMode ? "bg-darkBg" : "bg-lightBg"} ${
        isDarkMode ? "text-darkColor" : "text-lightColor"
      } duration-300 z-20`}
    >
      <div className="w-3/4 flex items-center justify-around">
        <div>
          <IoCaretBackOutline onClick={() => setOpen(false)} />
        </div>
      </div>
      <div className="w-3/4 flex flex-col items-center justify-center">
        <span>Nueva Division</span>
        <span>Mis Gastos</span>
      </div>
      <div className="w-3/4 flex gap-2">
        <FiLogIn />
        <span>Login</span>
      </div>
    </div>
  );
};

export default Slider;
