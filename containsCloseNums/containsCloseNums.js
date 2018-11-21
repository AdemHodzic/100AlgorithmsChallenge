"use strict";
function containsCloseNums(nums, k) {
    for (let i = 0, j = k; j < nums.length; i++, j++) {
        if (nums[i] === nums[j]) {
            return true;
        }
    }
    return false;
}
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
