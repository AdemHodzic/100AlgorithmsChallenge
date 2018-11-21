"use strict";
function makeArrayConsecutive2(arr) {
    arr.sort((a, b) => a - b);
    const min = arr[0];
    const max = arr[arr.length - 1];
    let counter = 0;
    for (let i = min; i < max; i++) {
        if (!arr.find(i)) {
            counter++;
        }
    }
    return counter;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
