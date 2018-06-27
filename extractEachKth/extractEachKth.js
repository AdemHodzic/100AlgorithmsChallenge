function extractEachKth(inputArray, k) {
    return inputArray.filter(function (e, i) { return (i + 1) % k !== 0; });
}
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
