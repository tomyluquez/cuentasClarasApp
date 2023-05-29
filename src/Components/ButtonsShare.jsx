import React from "react";
import { useSelector } from "react-redux";

const ButtonsShare = ({ setSlider }) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div>
      <button
        className={`w-32 ${
          isDarkMode ? "bg-darkButton" : "bg-lightButton"
        } text-light-color py-2 rounded-xl`}
        onClick={() => setSlider(1)}
      >
        Nueva Cuenta
      </button>
      <button
        className={`w-32 ${
          isDarkMode ? "bg-darkButton" : "bg-lightButton"
        } text-light-color py-2 rounded-xl`}
      >
        Compartir
      </button>
    </div>
  );
};

export default ButtonsShare;
