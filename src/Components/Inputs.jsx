import React from "react";
import { useSelector } from "react-redux";

const Inputs = ({ value, peoples, register, errors }) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div
      key={value}
      className="flex items-center justify-between container px-2 gap-2"
    >
      <div className="form__group field w-3/4">
        <input
          type="input"
          className={`form__field ${
            isDarkMode ? "text-darkColor" : "text-lightColor"
          } border-b-2 border-${
            isDarkMode ? "darkLabel" : "lightLabel"
          } focus:border-b-4`}
          defaultValue={peoples ? peoples[`Nombre persona ${value}`] : ""}
          placeholder={`Nombre persona {value}`}
          {...register(`Nombre persona ${value}`, {
            required: true,
            pattern: /^[A-Za-z]*$/,
          })}
        />
        <label
          htmlFor={`Nombre persona ${value}`}
          className="form__label text-sm text-light-color"
        >
          Nombre persona {value}
        </label>
        {errors[`Nombre persona ${value}`]?.type === "required" && (
          <span className="text-red-700">Por favor completa el campo</span>
        )}
        {errors[`Nombre persona ${value}`]?.type === "pattern" && (
          <span className="text-red-700">Por favor ingresa solo numeros</span>
        )}
      </div>
      <div className="form__group field w-2/4">
        <input
          type="input"
          className={`form__field ${
            isDarkMode ? "text-darkColor" : "text-lightColor"
          } border-b-2 border-${
            isDarkMode ? "darkLabel" : "lightLabel"
          } focus:border-b-4`}
          defaultValue={peoples ? peoples[`Gasto persona ${value}`] : ""}
          placeholder={`Gasto persona ${value}`}
          {...register(`Gasto persona ${value}`, {
            required: true,
            pattern: /^[0-9]*$/,
          })}
        />
        <label htmlFor={`Gasto persona ${value}`} className="form__label">
          $ Gasto persona {value}
        </label>
        {errors[`Gasto persona ${value}`]?.type === "required" && (
          <span className="text-red-700">Por favor completa el campo</span>
        )}
        {errors[`Gasto persona ${value}`]?.type === "pattern" && (
          <span className="text-red-700">
            Por favor ingresa un numero valido
          </span>
        )}
      </div>
    </div>
  );
};

export default Inputs;
