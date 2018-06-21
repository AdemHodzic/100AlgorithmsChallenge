function almostIncreasingSequence(sequence: number[]): boolean {
  
  for (let i = 0; i < sequence.length; i++) {
    const new_arr = sequence.slice();
    new_arr.splice(i,1);
    if (sorted(new_arr)) {
      return true;
    } 
  }

  return false;
}

function sorted(array: number[]): boolean {
  
  const sorted = array.slice().sort((a,b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sorted[i]) {
      return false
    } 
  }

  return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 