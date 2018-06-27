function commonCharacterCount(s1, s2) {
    var counter = 0;
    var arr1 = s1.split('');
    var arr2 = s2.split('');
    for (var i = 0; i < arr1.length; i++) {
        var current = arr1[i];
        if (arr2.indexOf(current) !== -1) {
            counter++;
            arr1.splice(i, 1);
        }
    }
    return counter;
}
console.log(commonCharacterCount('aabcc', 'adcaa'));
