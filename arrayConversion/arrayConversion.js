"use strict";
function arrayConversion(inputArray) {
    let counter = 0;
    let arr = inputArray.slice();
    while (arr.length !== 1) {
        let new_arr = [];
        if (counter % 2 == 0) {
            for (let i = 0; i < arr.length; i += 2) {
                new_arr.push(arr[i] + arr[i + 1]);
            }
            console.log('new arr is ', new_arr);
        }
        else {
            for (let i = 0; i < arr.length; i += 2) {
                new_arr.push(arr[i] * arr[i + 1]);
            }
            console.log('new arr is ', new_arr);
        }
        arr = new_arr.slice();
        counter++;
    }
    return arr[0];
}
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
