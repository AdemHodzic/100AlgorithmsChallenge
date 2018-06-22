function avoidObstacles(arr) {
    var jumps = [];
    arr = arr.sort(function (a, b) { return a - b; });
    for (var i = arr[0] + 1; i < arr[1]; i++) {
        jumps.push(i);
    }
    for (var _i = 0; _i < jumps.length; _i++) {
        var jump = jumps[_i];
        var correct = true;
        var temp_jump = jump;
        while (temp_jump < Math.max.apply(Math, arr)) {
            if (arr.indexOf(temp_jump) !== -1) {
                correct = false;
                break;
            }
            temp_jump += jump;
        }
        if (correct) {
            return jump;
        }
    }
    return 0;
}
console.log(avoidObstacles([5, 3, 6, 7, 9]));
