"use strict";
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return ([yourLeft, yourRight]).reduce((a, b) => a + b, 0) === ([friendsLeft, friendsRight]).reduce((a, b) => a + b, 0);
}
console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
