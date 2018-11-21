"use strict";
function launchSequenceChecker(systemNames, stepNumbers) {
    let sequences = {};
    for (let i = 0; i < systemNames.length; i++) {
        const key = systemNames[i];
        const value = stepNumbers[i];
        if (!sequences.hasOwnProperty(key)) {
            sequences[key] = [value];
        }
        else {
            sequences[key].push(value);
        }
    }
    for (let key of Object.keys(sequences)) {
        if (!correctSequence(sequences[key])) {
            return false;
        }
    }
    return true;
}
function correctSequence(nums) {
    if (nums.length === 1) {
        return true;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));
