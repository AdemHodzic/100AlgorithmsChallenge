function almostIncreasingSequence(sequence) {
    for (var i = 0; i < sequence.length; i++) {
        var new_arr = sequence.slice();
        new_arr.splice(i, 1);
        if (sorted(new_arr)) {
            return true;
        }
    }
    return false;
}
function sorted(array) {
    var sorted = array.slice().sort(function (a, b) { return a - b; });
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== sorted[i]) {
            return false;
        }
    }
    return true;
}
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
