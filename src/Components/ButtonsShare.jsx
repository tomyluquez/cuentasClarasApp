import React from "react";
import { useSelector } from "react-redux";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

const ButtonsShare = ({
  setSlider,
  expensePerPerson,
  paymentRoute,
  nameAccount,
  total,
}) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className="flex gap-2">
      <button
        className={`w-32 ${
          isDarkMode ? "bg-darkButton" : "bg-lightButton"
        } text-light-color py-2 rounded-xl`}
        onClick={() => setSlider(1)}
      >
        Nueva Cuenta
      </button>
      <WhatsappShareButton
        url={`Hicimos la division de gastos para ${nameAccount}.\n\nEl total gastado es *$${total}*.\n\nEl total por persona es *$${expensePerPerson}*. \n\n ${paymentRoute}`}
      >
        <div className="w-32 flex items-center justify-around bg-whatsButton rounded-xl">
          <span>Compartir</span>

          <WhatsappIcon size={40} round={true} />
        </div>
      </WhatsappShareButton>
    </div>
  );
};

export default ButtonsShare;
