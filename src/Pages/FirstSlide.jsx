import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const FirstSlide = ({ slider, setSlider, setQuantity }) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setQuantity(data.quantity);
    setSlider(slider + 1);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full flex flex-col items-center justify-around"
    >
      <div>
        <div className="form__group field group">
          <input
            type="input"
            className={`form__field ${
              isDarkMode ? "text-darkColor" : "text-lightColor"
            } border-b-2 border-${
              isDarkMode ? "darkLabel" : "lightLabel"
            } focus:border-b-4`}
            placeholder="Cantidad de Personas"
            {...register("quantity", {
              required: true,
              min: 2,
              pattern: /^[0-9]*$/,
            })}
          />
          <label
            htmlFor="name"
            className={`form__label ${
              isDarkMode ? "text-darkLabel" : "text-lightLabel"
            }`}
          >
            Cantidad de personas
          </label>
          {errors.quantity?.type === "required" && (
            <span className="text-red-700">Por favor completa el campo</span>
          )}
          {errors.quantity?.type === "min" && (
            <span className="text-red-700">
              Por favor ingresa un numero mayor a 1
            </span>
          )}
          {errors.quantity?.type === "pattern" && (
            <span className="text-red-700">Por favor ingresa solo numeros</span>
          )}
        </div>
      </div>
      <div className="flex">
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
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default FirstSlide;
