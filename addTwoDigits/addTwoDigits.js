function addTwoDigits(n) {
    return n.toString()
        .split('')
        .reduce(function (prev, next) { return prev + parseInt(next); }, 0);
}
console.log(addTwoDigits(29));
