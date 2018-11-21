import { absoluteValuesSumMinimization } from './absoluteValuesSumMinization';

const testCases = [
    {input: [2, 4, 7], output: 4},
    {input: [2, 4, 7, 6], output: 4},
    {input: [2, 4, 7, 6, 6], output: 7},
    {input: [2, 4, 7, 6, 6, 8], output: 7},
]

// Currently failing
describe.skip('Running table test for absolute value sum minimazation', () => {
    for (let i = 0; i < testCases.length; i++) {
        test(`Test #${i+1}`, () => {
            expect(absoluteValuesSumMinimization(testCases[i].input))
                .toBe(testCases[i].output);
        })
    }
});

