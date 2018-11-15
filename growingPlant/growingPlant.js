function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var sum = 0;
    var counter = 0;
    while (sum < desiredHeight) {
        sum += upSpeed;
        sum -= downSpeed;
        counter++;
    }
    return counter;
}
console.log(growingPlant(100, 10, 910));
