import React from "react";
import { FiLogIn } from "react-icons/fi";
import { IoCaretBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Slider = ({ open, setOpen, setSliderPosition }) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const handleNewAccount = () => {
    setSliderPosition(1);
    setOpen(false);
  };

  return (
    <div
      className={`w-2/4 h-screen absolute top-0 ${
        open ? "left-0" : "-left-full"
      } ${isDarkMode ? "bg-darkBg" : "bg-lightBg"} ${
        isDarkMode ? "text-darkColor" : "text-lightColor"
      } duration-500 z-20 flex flex-col items-center justify-between py-10 border-r-2 border-solid border-white`}
    >
      <div className="container flex justify-end px-4">
        <IoCaretBackOutline
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>

      <div className="w-3/4 h-72 flex flex-col items-start justify-start">
        <span className="cursor-pointer" onClick={handleNewAccount}>
          Nueva Cuenta
        </span>
        <span className="cursor-pointer">Mis Cuentas</span>
      </div>
      <div className="w-3/4 h-60 flex items-end gap-2">
        <FiLogIn className="cursor-pointer" />
        <span className="cursor-pointer">Login</span>
      </div>
    </div>
  );
};

export default Slider;
