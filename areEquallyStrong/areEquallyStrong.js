function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return ([yourLeft, yourRight]).reduce(function (a, b) { return a + b; }, 0) === ([friendsLeft, friendsRight]).reduce(function (a, b) { return a + b; }, 0);
}
console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
