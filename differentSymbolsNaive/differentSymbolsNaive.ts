function differentSymbolsNaive(s: string): number {
  const arr = new Set(s.split(''))
  return arr.size;
}

console.log(differentSymbolsNaive('cabca'));
