import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../Styles/animationSlider.css";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThridSlide from "./ThridSlide";
import { useSelector } from "react-redux";

const Start = ({ sliderPosition, setSliderPosition }) => {
  const [quantity, setQuantity] = useState(null);
  const [peoples, setPeoples] = useState(null);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={sliderPosition}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <div
            className={`containerSlide ${
              isDarkMode ? "bg-darkBgCard" : "bg-lightBgCard"
            } w-96 h-96 text-light-color rounded-lg`}
          >
            {sliderPosition === 0 && (
              <div className="flex flex-col items-center justify-between h-full p-4 text-center">
                <p>
                  Con esta app, podras ingresar la cantidad de personas, cuanto
                  gasto cada una y quien debe recuperar o pagar dinero. Podras
                  compartir estos datos por whatsapp con esas personas
                </p>
                <button
                  className={`w-3/4 ${
                    isDarkMode ? "bg-darkButton" : "bg-lightButton"
                  } text-light-color py-2 rounded-xl`}
                  onClick={() => setSliderPosition(sliderPosition + 1)}
                >
                  Comenzar
                </button>
              </div>
            )}
            {sliderPosition === 1 && (
              <FirstSlide
                slider={sliderPosition}
                setSlider={setSliderPosition}
                setQuantity={setQuantity}
              />
            )}
            {sliderPosition === 2 && (
              <SecondSlide
                quantity={quantity}
                slider={sliderPosition}
                setSlider={setSliderPosition}
                peoples={peoples}
                setPeoples={setPeoples}
              />
            )}
            {sliderPosition === 3 && (
              <ThridSlide
                peoples={peoples}
                slider={sliderPosition}
                setSlider={setSliderPosition}
              />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Start;
