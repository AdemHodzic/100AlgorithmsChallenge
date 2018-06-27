function companyBotStrategy(trainingData: number[][]): number {
  let sum = 0;
  let counter = 0;
  for (let arr of trainingData) {
    if (arr[1] === 1) {
      sum += arr[0];
      counter++;
    }
  }

  return counter === 0 ? 0 : sum/counter;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
