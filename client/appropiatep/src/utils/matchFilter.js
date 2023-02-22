export const matchFilter = (
  salary,
  loanDuration,
  UFValue,
  rate,
  propiertyValue,
  floor
) => {
  let maxDiv = salary / 4;
  let totalDues = loanDuration * 12;
  let divRateless = maxDiv - maxDiv * rate;
  let divConverted = divRateless / UFValue;
  let floorlessPriceUF = divConverted * totalDues;
  let totalPriceUF = (floorlessPriceUF * 100) / (100 - floor);
  //console.log(propiertyValue <= totalPriceUF);
  if (propiertyValue <= totalPriceUF) {
    return true;
  } else {
    return false;
  }
};
