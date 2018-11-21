"use strict";
function isTandemRepeat(inputString) {
    if (inputString.length % 2 === 1) {
        return false;
    }
    const half = inputString.slice(0, inputString.length / 2);
    return inputString.replace(half, '') === half;
}
console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2w2ww'));
console.log(isTandemRepeat('ademadem'));
