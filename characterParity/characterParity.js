"use strict";
function characterParity(symbol) {
    if (isNaN(parseInt(symbol))) {
        return 'not a digit';
    }
    else {
        return parseInt(symbol) % 2 == 0 ? 'even' : 'odd';
    }
}
console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
