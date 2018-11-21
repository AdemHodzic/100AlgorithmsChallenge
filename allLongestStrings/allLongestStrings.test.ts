import { allLongestStrings } from './allLongestStrings';

test('Testing all logest string' , () => {

    const inputArray = ["aba", "aa", "ad", "vcd", "aba"]
    const result = ["aba", "vcd", "aba"]

    expect(allLongestStrings(inputArray)).toEqual(result);
});


/**
 * For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

 */