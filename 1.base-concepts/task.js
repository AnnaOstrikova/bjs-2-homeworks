"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  let x1;
  let x2;

  if (d < 0){
    return arr;
  } else if (d === 0){
    x1 = -b/(2*a);
    arr.push(x1);
    return arr; 
  } else {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
    return arr; 
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent/12/100;
  let loanBody = amount - contribution;
  let payment = loanBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let totalPaymentAmount = +(payment * countMonths).toFixed(2);
  return totalPaymentAmount;
}

