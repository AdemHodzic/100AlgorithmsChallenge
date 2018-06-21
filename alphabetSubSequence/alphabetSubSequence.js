function alphabetSubsequence(s) {
    var alpha = ('abcdefghijklmnopqrstuvwxyz').split('');
    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);
        var index = alpha.indexOf(char);
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
