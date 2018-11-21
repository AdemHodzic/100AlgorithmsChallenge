"use strict";
function commonCharacterCount(s1, s2) {
    return (s1.split('').filter(value => s2.split('').indexOf(value) !== -1)).length;
}
console.log(commonCharacterCount('aabcc', 'adcaa'));
