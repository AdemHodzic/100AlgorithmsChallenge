function firstDigit(inputString: string): string {
  
  for(let char of inputString.split('')) {
    if (char.match(/[0-9]/)) {
      return char;
    }
  }

  return '';
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
