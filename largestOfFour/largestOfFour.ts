function largestOfFour(nums: number[][]): number[] {
  const result = [];
  for (let arr of nums) {
    result.push(biggest(arr));
  }
  return result;
}

function biggest(arr: number[]): number {
  let result = 0;
  for (let number of arr ) {
    if (number > result) {
      result = number;
    }
  }
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));