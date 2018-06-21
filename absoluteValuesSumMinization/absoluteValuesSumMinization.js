function absoluteValuesSumMinimization(a) {
    var solution = Number.MAX_VALUE;
    for (var _i = 0; _i < a.length; _i++) {
        var number = a[_i];
        var temp_solution = 0;
        for (var _a = 0; _a < a.length; _a++) {
            var element = a[_a];
            temp_solution += Math.floor(Math.abs(element - number));
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
