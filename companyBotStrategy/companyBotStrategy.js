function companyBotStrategy(trainingData) {
    var sum = 0;
    var counter = 0;
    for (var _i = 0; _i < trainingData.length; _i++) {
        var arr = trainingData[_i];
        if (arr[1] === 1) {
            sum += arr[0];
            counter++;
        }
    }
    return counter === 0 ? 0 : sum / counter;
}
console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
