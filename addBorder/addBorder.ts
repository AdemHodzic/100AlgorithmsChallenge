function addBorder(picture: string[]): string[] {
  const len = picture[0].length;
  console.log(len)
  const new_picture = picture.slice();

  let aster_lines = '';
  for (let i = 0; i <len; i++) {
    aster_lines += '*';
  }
  
  for (let i = 0;i < picture.length; i++) {
    new_picture[i] = '*' + picture[i] + '*'
  }

  new_picture.unshift(aster_lines)
  new_picture.push(aster_lines)

  return new_picture
}

console.log(addBorder(["abc", "ded"]));