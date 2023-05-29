import React, { useEffect, useState } from "react";
import getArrPeoples from "../Services/getArraPeoples";
import getExpensesInd from "../Services/getExpensesInd";
import getTotal from "../Services/getTotal";
import getAccounts from "../Services/getAccounts";
import getPaymentRoute from "../Services/getPaymentRoute";
import Dashboard from "../Components/Dashboard";
import Accounts from "../Components/Accounts";
import PaymentsRoute from "../Components/PaymentsRoute";
import ButtonsShare from "../Components/ButtonsShare";

const ThridSlide = ({ peoples, setSlider, nameAccount }) => {
  const [arrPeoples, setArrPeoples] = useState(null);
  const [total, setTotal] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [paymentRoute, setPaymentRoute] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expensePerPerson, setExpensePerPerson] = useState(null);

  useEffect(() => {
    const newArrPeoples = getArrPeoples(peoples);
    const arrExpensesInd = getExpensesInd(newArrPeoples);
    const total = getTotal(arrExpensesInd);
    const arrAccounts = getAccounts(newArrPeoples, arrExpensesInd);
    const arrPayment = getPaymentRoute(arrAccounts);
    setArrPeoples(newArrPeoples);
    setTotal(total);
    setAccounts(arrAccounts);
    setPaymentRoute(arrPayment);
    setExpensePerPerson(total / newArrPeoples.length); //
    setLoading(false);
  }, [peoples]);

  if (loading) {
    return <div>...CARGANDO</div>;
  }
  return (
    <div className="flex h-full flex-col items-center justify-around">
      <Dashboard total={total} quantity={arrPeoples.length} />
      <Accounts accounts={accounts} />
      <PaymentsRoute paymentRoute={paymentRoute} />
      <ButtonsShare
        setSlider={setSlider}
        expensePerPerson={expensePerPerson}
        paymentRoute={paymentRoute}
        nameAccount={nameAccount}
        total={total}
      />
    </div>
  );
};

export default ThridSlide;
