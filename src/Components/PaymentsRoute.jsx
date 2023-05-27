import React from "react";

const PaymentsRoute = ({ paymentRoute }) => {
  return (
    <div>
      {paymentRoute.map((route, index) => (
        <span key={index}>{route}</span>
      ))}
    </div>
  );
};

export default PaymentsRoute;
