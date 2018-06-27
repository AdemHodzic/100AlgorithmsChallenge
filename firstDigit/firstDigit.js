function firstDigit(inputString) {
    for (var _i = 0, _a = inputString.split(''); _i < _a.length; _i++) {
        var char = _a[_i];
        if (char.match(/[0-9]/)) {
            return char;
        }
    }
    return '';
}
console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
