import React from "react";

const Accounts = ({ accounts }) => {
  return (
    <div>
      {accounts &&
        accounts.map((account, index) => (
          <p key={index}>
            {account.nombre} gasto ${account.gasto} y debe
            {account.debe
              ? ` $${account.debe}`
              : ` recuperar $${account.recupera}`}
          </p>
        ))}
    </div>
  );
};

export default Accounts;
