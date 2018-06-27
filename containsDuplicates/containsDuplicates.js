function containsDuplicates(a) {
    var arr = [];
    for (var _i = 0; _i < a.length; _i++) {
        var i = a[_i];
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
