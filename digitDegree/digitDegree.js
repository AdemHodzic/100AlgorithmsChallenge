function digitDegree(n) {
    var counter = 0;
    var reduced = n.toString().split('')
        .map(function (x) { return parseInt(x); })
        .reduce(function (a, b) { return a + b; }, 0);
    if (reduced < 10) {
        return 0;
    }
    counter++;
    while (reduced > 9) {
        counter++;
        reduced = reduced.toString().split('')
            .map(function (x) { return parseInt(x); })
            .reduce(function (a, b) { return a + b; }, 0);
    }
    return counter;
}
console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
console.log(digitDegree(888888));
