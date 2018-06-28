function houseNumbersSum(inputArray: number[]): number {
  let sum = 0;
  for (let num of inputArray) {
    if (num !== 0) {
      sum += num;
    } else {
      break;
    }
  }
  return sum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));