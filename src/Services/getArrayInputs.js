const getArrayInputs = (quantity) => {
  let arrInputs = [];

  for (let i = 1; i <= quantity; i++) {
    arrInputs.push(i);
  }

  return arrInputs;
};

export default getArrayInputs;
