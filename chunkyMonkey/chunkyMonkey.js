function chunkyMonkey(arr, size) {
    var finalArr = [];
    var counter = 0;
    var length = arr.length;
    while (counter < length) {
        finalArr.push(arr.slice(0, size));
        counter += size;
    }
    return finalArr;
}
console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
