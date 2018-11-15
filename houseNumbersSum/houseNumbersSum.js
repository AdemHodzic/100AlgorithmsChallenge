function houseNumbersSum(inputArray) {
    var sum = 0;
    for (var _i = 0; _i < inputArray.length; _i++) {
        var num = inputArray[_i];
        if (num !== 0) {
            sum += num;
        }
        else {
            break;
        }
    }
    return sum;
}
console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
