function makeArrayConsecutive2(arr: number[]): number {

  arr.sort((a, b) => a - b);

  const min = arr[0];
  const max = arr[arr.length - 1];
  let counter = 0;
  for (let i = min; i < max;i++) {
    if (find(arr, i)) {
      counter++;
    }
  }

  return counter;
}

function find(arr: number[], num: number):boolean {
  for (let number of arr ) {
    if (number === num) {
      return false;
    }
  }

  return true;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));