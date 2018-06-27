function chunkyMonkey(arr: any[], size: number): any[][] {
  let finalArr = [];
  let counter = 0;
  let length = arr.length
  while (counter < length) {
    finalArr.push(arr.slice(0,size));
    counter += size;
  }

  return finalArr;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));