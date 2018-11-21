export function addTwoDigits(n: number): number {
  return n.toString()
    .split('')
    .reduce( (prev: number, next: string) => prev + parseInt(next), 0);

}
