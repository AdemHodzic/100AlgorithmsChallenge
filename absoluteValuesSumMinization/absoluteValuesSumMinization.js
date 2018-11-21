"use strict";
function absoluteValuesSumMinimization(a) {
    let solution = Number.MAX_VALUE;
    for (const number of a) {
        let temp_solution = 0;
        for (const element of a) {
            temp_solution += Math.abs(element - number);
        }
        if (temp_solution < solution) {
            solution = temp_solution;
        }
    }
    return solution;
}
console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
