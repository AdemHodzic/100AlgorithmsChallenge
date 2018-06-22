function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {

  let sum = 0;
  for (let i = 0; i < (inputArray.length - k); i++) {
    let new_sum = 0;

    for (let j = 0; j < k; j++) {
      new_sum += inputArray[i+j]
    }

    if (new_sum > sum) {
      sum = new_sum;
    }
  }

  return sum;

}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));