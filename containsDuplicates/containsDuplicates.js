"use strict";
function containsDuplicates(a) {
    let arr = [];
    for (let i of a) {
        if (arr.indexOf(i) === -1) {
            arr.push(i);
        }
        else {
            return true;
        }
    }
    return false;
}
console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
