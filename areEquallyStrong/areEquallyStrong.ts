function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  return ([yourLeft, yourRight]).reduce( (a,b) => a+b,0) === ([friendsLeft, friendsRight]).reduce( (a,b) => a+b,0)
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
