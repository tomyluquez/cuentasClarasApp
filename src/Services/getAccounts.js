const getAccounts = (arrPeoples, expensesInd) => {
  let accounts = arrPeoples.map((person) => ({ ...person }));
  console.log(accounts);
  const expensePerPerson = Math.round(
    expensesInd.reduce((a, b) => a + b) / accounts.length
  );
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].gasto < expensePerPerson) {
      accounts[i]["debe"] = expensePerPerson - accounts[i].gasto;
    } else if (accounts[i].gasto > expensePerPerson) {
      accounts[i]["recupera"] = accounts[i].gasto - expensePerPerson;
    } else accounts[i]["saldo"] = 0;
  }

  return accounts;
};

export default getAccounts;
