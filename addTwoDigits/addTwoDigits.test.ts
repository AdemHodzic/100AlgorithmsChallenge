import { addTwoDigits } from './addTwoDigits'

test('Test for value 29', () => {
    expect(addTwoDigits(29)).toBe(11);
})

test('Test for value 10', () => {
    expect(addTwoDigits(10)).toBe(1);
})