"use strict";
function confirmEnding(str, target) {
    return str.substr(str.length - target.length, target.length) === target;
}
console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
