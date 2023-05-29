const getPaymentRoute = (accounts) => {
  let payment = accounts.map((person) => ({ ...person })).reverse();

  const arrPayment = [];

  for (let i = 0; i < payment.length; i++) {
    if (payment[i].saldo === 0) {
      arrPayment.push(`${payment[i].nombre} no tiene que pagarle a nadie`);
    } else {
      for (let j = i + 1; j < payment.length; j++) {
        if (payment[i].debe > 0 && payment[j].recupera > 0) {
          if (payment[i].debe > payment[j].recupera) {
            arrPayment.push(
              `- ${payment[i].nombre} tiene que pagarle a ${payment[j].nombre} $${payment[j].recupera}`
            );
            payment[i].debe -= payment[j].recupera;
            payment[j].recupera = 0;
          } else {
            arrPayment.push(
              `- ${payment[i].nombre} tiene que pagarle a ${payment[j].nombre} $${payment[i].debe}`
            );
            payment[j].recupera -= payment[i].debe;
            payment[i].debe = 0;
            break; // Salir del bucle interno si se hizo un pago completo
          }
        }
      }
    }
  }

  return arrPayment;
};

export default getPaymentRoute;
