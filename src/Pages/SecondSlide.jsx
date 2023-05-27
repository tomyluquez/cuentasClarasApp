import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Inputs from "../Components/Inputs";
import getArrayInputs from "../Services/getArrayInputs";
import { useSelector } from "react-redux";

const SecondSlide = ({ quantity, slider, setSlider, peoples, setPeoples }) => {
  const [arrInputs, setArrayInputs] = useState(null);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setPeoples(data);
    setSlider(slider + 1);
  };

  useEffect(() => {
    const arrInputs = getArrayInputs(quantity);
    setArrayInputs(arrInputs);
  }, [quantity]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full flex flex-col items-center justify-around"
    >
      <div>
        {arrInputs &&
          arrInputs.map((value) => (
            <Inputs
              key={value}
              value={value}
              peoples={peoples}
              register={register}
              errors={errors}
            />
          ))}
      </div>
      <div>
        <button
          className={`w-32 ${
            isDarkMode ? "bg-darkButton" : "bg-lightButton"
          } text-light-color py-2 rounded-xl`}
          type="button"
          onClick={() => setSlider(slider - 1)}
        >
          Atras
        </button>
        <button
          className={`w-32 ${
            isDarkMode ? "bg-darkButton" : "bg-lightButton"
          } text-light-color py-2 rounded-xl`}
          type="submit"
        >
          Calcular
        </button>
      </div>
    </form>
  );
};

export default SecondSlide;
