import React from "react";

const Dashboard = ({ total, quantity }) => {
  return (
    <div>
      <div>
        <span>Total Gastado</span>
        <span>${total}</span>
      </div>
      <div>
        <span>Total por Persona</span>
        <span>${Math.floor(total / quantity)}</span>
      </div>
    </div>
  );
};

export default Dashboard;
