import React from "react";

const PaymentsRoute = ({ paymentRoute }) => {
  return (
    <div>
      {paymentRoute.map((route, index) => (
        <div key={index}>{route}</div>
      ))}
    </div>
  );
};

export default PaymentsRoute;
