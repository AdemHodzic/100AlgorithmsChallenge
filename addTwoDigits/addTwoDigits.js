"use strict";
function addTwoDigits(n) {
    return n.toString()
        .split('')
        .reduce((prev, next) => prev + parseInt(next), 0);
}
console.log(addTwoDigits(29));
