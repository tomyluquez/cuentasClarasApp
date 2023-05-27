const getExpensesInd = (arrPeoples) => {
  const arrExpensesInd = [];

  for (let expense of arrPeoples) {
    arrExpensesInd.push(+expense.gasto);
  }
  return arrExpensesInd;
};

export default getExpensesInd;
