function crossingSum(matrix: number[][], a: number, b: number): number {
    const sum1 = matrix[a].reduce( (a,b) => a+b, 0);
    let sum2 = 0;
    matrix.forEach(arr => {
        sum2 += arr[b];
    })
    return sum1 + sum2; 
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));