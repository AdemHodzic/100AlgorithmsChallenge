function firstNotRepeatingCharacter(s: string): string {
  let arr = [];
  for (let char of s) {
    const index = arr.indexOf(char);
    if (index === -1) {
      arr.push(char);
    } else {
      arr.splice(index, 1);
    }
  }

  return arr.length > 0 ? arr[0] : '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
