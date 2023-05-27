const getArrPeoples = (peoples) => {
  const neAarrPeoples = [];

  for (const [key, value] of Object.entries(peoples)) {
    if (key.startsWith("Nombre")) {
      const index = key.match(/\d+/)[0];
      const gastoKey = `Gasto persona ${index}`;
      const gastoValue = peoples[gastoKey];
      neAarrPeoples.push({ nombre: value, gasto: parseInt(gastoValue) });
    }
  }
  return neAarrPeoples;
};

export default getArrPeoples;
