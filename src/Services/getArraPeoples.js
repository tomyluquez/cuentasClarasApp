const getArrPeoples = (peoples) => {
  const neAarrPeoples = [];

  for (const [key, value] of Object.entries(peoples)) {
    if (key.startsWith("Nombre")) {
      const index = key.match(/\d+/)[0];
      const gastoKey = `Gasto persona ${index}`;
      let gastoValue = peoples[gastoKey];
      if (gastoValue.includes("-")) {
        let separatedValues = gastoValue.split("-");
        gastoValue = separatedValues.reduce((acc, val) => acc + +val, 0);
      }
      const name = value.charAt(0).toUpperCase() + value.slice(1);
      neAarrPeoples.push({ nombre: name, gasto: parseInt(gastoValue) });
    }
  }
  return neAarrPeoples;
};

export default getArrPeoples;
