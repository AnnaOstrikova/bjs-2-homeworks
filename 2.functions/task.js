function getArrayParams(...arr) {

  let min = Infinity;
  let max = - Infinity;
  let sum = 0;

  min = Math.min.apply(null, arr);
  max = Math.max.apply(null, arr);

  sum = arr.reduce (function (a, b) {
    return a + b;
  })

  let avg = + (sum/arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0){
    return 0
  }else{
    sum = arr.reduce (function (a, b) {
      return +(a + b);
    })
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = - Infinity;
  if (arr.length === 0){
    return 0
  }else{
    min = Math.min.apply(null, arr);
    max = Math.max.apply(null, arr);
    let difference = max - min;
    return difference;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; // четные
  let sumOddElement = 0; // нечетные

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
    }else{
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0; // четные
  let countEvenElement = 0;
  if (arr.length === 0){
    return 0
  }else{
      for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0){
        sumEvenElement += arr[i];
        countEvenElement ++;
      }
    }
  }
  return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;
  for (let i = 0; i < arrOfArr.length; i ++){
    const result = func(...arrOfArr[i]);
    if(result > maxWorkerResult){
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

