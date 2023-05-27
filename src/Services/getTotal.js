const getTotal = (arrExpensesInd) => {
  const total = arrExpensesInd.reduce((acc, expense) => acc + expense, 0);
  return total;
};

export default getTotal;
