export const matchFilter = (
  salary,
  loanDuration,
  UFValue,
  rate,
  propiertyValue
) => {
  let maxDiv = salary / 4;
  let totalDues = loanDuration * 12;
  let divRateless = maxDiv - maxDiv * rate;
  let divConverted = divRateless / UFValue;
  let floorlessPriceUF = divConverted * totalDues;
  //console.log(propiertyValue <= totalPriceUF);
  if (propiertyValue <= floorlessPriceUF) {
    return true;
  } else {
    return false;
  }
};
