function sockMerchant(n, ar) {
  const alreadyView = [];
  const output = ar.reduce((acc, number) => {
    const alreadyV = alreadyView.find((n) => n == number);
    if (alreadyV) return acc;
    const ocurrencies = ar.filter((n) => n == number);
    alreadyView.push(number);
    return (acc += Math.floor(ocurrencies.length / 2));
  }, 0);
  return output;
}
