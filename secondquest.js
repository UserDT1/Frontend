function currentSum(numbersArray) {
  let currentPay = 0;
  numbersArray.forEach(number => {
    currentPay += number;
  });
  return currentPay;
}

let purchases = [10000, 20000, 30000];
console.log(currentSum(purchases));