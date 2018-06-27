function crossingSum(matrix, a, b) {
    var sum1 = matrix[a].reduce(function (a, b) { return a + b; }, 0);
    var sum2 = 0;
    matrix.forEach(function (arr) {
        sum2 += arr[b];
    });
    return sum1 + sum2;
}
console.log(crossingSum([[1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]], 1, 3));
