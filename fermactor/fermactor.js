function fermactor(n) {
    var arr = [];
    var d = 1;
    while (true) {
        var c = n + Math.pow(d, 2);
        if (isNatural(c)) {
            arr.push(c);
            arr.push(d);
            break;
        }
    }
    return arr;
}
function isNatural(number) {
    return Math.sqrt(number) % 1 === 0;
}
console.log(fermactor(15));
