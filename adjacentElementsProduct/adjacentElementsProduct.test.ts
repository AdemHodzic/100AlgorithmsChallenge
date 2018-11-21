import { adjacentElementsProduct } from './adjacentElementsProduct';

test("Adjecent Elements product Test", () => {
    const arr = [3, 6, -2, -5, 7, 3];
    expect(adjacentElementsProduct(arr)).toBe(21);
});
