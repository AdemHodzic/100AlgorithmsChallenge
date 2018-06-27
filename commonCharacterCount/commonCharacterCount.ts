function commonCharacterCount(s1: string, s2: string): number {
  return (s1.split('').filter(value =>  s2.split('').indexOf(value) !== -1 )).length;
}


console.log(commonCharacterCount('aabcc', 'adcaa'));