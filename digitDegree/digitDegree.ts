function digitDegree(n: number): number {
  let counter = 0;
  let reduced = n.toString().split('')
    .map( (x) => parseInt(x))
    .reduce( (a,b) => a+b, 0);
  if (reduced < 10) {
    return 0;
  }

  counter++;
  while (reduced > 9) {
    counter++;
    reduced = reduced.toString().split('')
    .map( (x) => parseInt(x))
    .reduce( (a,b) => a+b, 0);
  }

  return counter;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
console.log(digitDegree(888888));