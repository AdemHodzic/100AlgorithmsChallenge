function extractMatrixColumn(matrix, column) {
    var arr = [];
    matrix.forEach(function (e) { return arr.push(e[column]); });
    return arr;
}
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
