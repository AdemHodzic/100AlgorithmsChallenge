"use strict";
function alphabetSubsequence(s) {
    let alpha = ('abcdefghijklmnopqrstuvwxyz').split('');
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        const index = alpha.indexOf(char);
        if (index !== -1) {
            alpha.splice(index, 1);
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
