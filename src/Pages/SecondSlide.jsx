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
    <div className="h-full flex flex-col items-center justify-around">
      <div className="text-center flex flex-col gap-4">
        <h4>
          Completa con los nombres de las personas y cuando gasto cada una
        </h4>
        <span className="italic">
          En caso de que alguna de las personas haya realizado mas de un gasto,
          podes escribirlos todos separados por un guion, ej: persona 1 gasto
          1200-1500-1000
        </span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-96 flex flex-col items-center justify-center gap-8"
      >
        <div className="h-72 overflow-scroll">
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
    </div>
  );
};

export default SecondSlide;
