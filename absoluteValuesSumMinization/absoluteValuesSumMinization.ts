export function absoluteValuesSumMinimization(a: number[]): number {

  let solution = Number.MAX_VALUE;

  for (const number of a) {
    let temp_solution = 0;
    for (const element of a) {
      temp_solution += Math.abs(element - number)
    }

    if (temp_solution < solution) {
      solution = temp_solution
    }
  }

  return solution;
}


