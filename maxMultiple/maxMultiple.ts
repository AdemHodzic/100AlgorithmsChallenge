function maxMultiple(divisor: number, bound: number): number  {

  for (let i = bound; i > divisor; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }

  return -1
}

console.log(maxMultiple(3,10));