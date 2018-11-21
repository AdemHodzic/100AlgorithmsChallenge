"use strict";
function extractMatrixColumn(matrix, column) {
    const arr = [];
    matrix.forEach(e => arr.push(e[column]));
    return arr;
}
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
