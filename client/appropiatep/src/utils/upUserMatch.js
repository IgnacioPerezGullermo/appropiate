import fetchUF from "../hooks/fetchUF";

export const upUserMatchFilter = ({    
    basicIncome,
    currentSavings,
    bankCredit,
    age,
    rate, 
    propiertyValue,
    floor
    }) => {
    
    let UF = fetchUF
    let UFValue = UF.Valor;
    let creditYears = 75 - age;
    let totalDues = loanDuration * 12;
    let salaryDiv = basicIncome / 4;
    let creditDiv = bankCredit / creditYears;
    let averageDiv = (salaryDiv + creditDiv) / 2
    let averageDivRateless = averageDiv - averageDiv * rate;
    let floorlessPrice = averageDivRateless * totalDues;
    let floorlessSavingPrice = floorlessPrice - currentSavings;
    let floorlessSavingPriceUF = floorlessSavingPrice / UFValue;
    let totalPriceUF = (floorlessSavingPriceUF * 100) / (100 - floor);
    //console.log(propiertyValue <= totalPriceUF);
    if (propiertyValue <= totalPriceUF) {
      return true;
    } else {
      return false;
    }
  };