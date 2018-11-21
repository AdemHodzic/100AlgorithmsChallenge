"use strict";
function avoidObstacles(arr) {
    let jumps = [];
    arr = arr.sort((a, b) => a - b);
    for (let i = arr[0] + 1; i < arr[1]; i++) {
        jumps.push(i);
    }
    for (let jump of jumps) {
        let correct = true;
        let temp_jump = jump;
        while (temp_jump < Math.max(...arr)) {
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
