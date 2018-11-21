"use strict";
function isLucky(n) {
    const first = n.toString().substring(0, n.toString().length / 2);
    const second = n.toString().substring(n.toString().length / 2);
    let firstNumber = 0;
    let secondNumber = 0;
    first.split('').map(number => firstNumber += parseInt(number));
    second.split('').map(number => secondNumber += parseInt(number));
    return firstNumber === secondNumber;
}
console.log(isLucky(1230));
console.log(isLucky(239017));
