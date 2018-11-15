function integerToStringOfFixedWidth(number, width) {
    var result = number.toString();
    if (result.length > width) {
        var start = result.length - width;
        var end = result.length;
        result = result.substring(start, end);
    }
    else if (result.length < width) {
        while (result.length !== width) {
            result = '0'.concat(result);
        }
    }
    return result;
}
console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
