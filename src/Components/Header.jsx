import React from "react";
import { BsFillMoonFill, FiSun, RiMenu2Line } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../Redux/DarkModeSlice";

const Header = ({ setOpen }) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  const handleDarkmode = () => {
    dispatch(changeTheme());
  };

  return (
    <div
      className={`container flex items-center justify-between text-${
        isDarkMode ? "dark" : "light"
      }-color p-4 text-2xl`}
    >
      <RiMenu2Line onClick={() => setOpen(true)} />
      <h1>Cuentas Claras</h1>
      {!isDarkMode ? (
        <BsFillMoonFill onClick={handleDarkmode} />
      ) : (
        <FiSun onClick={handleDarkmode} />
      )}
    </div>
  );
};

export default Header;
