function addBorder(picture) {
    var len = picture[0].length;
    console.log(len);
    var new_picture = picture.slice();
    var aster_lines = '';
    for (var i = 0; i < len; i++) {
        aster_lines += '*';
    }
    for (var i = 0; i < picture.length; i++) {
        new_picture[i] = '*' + picture[i] + '*';
    }
    new_picture.unshift(aster_lines);
    new_picture.push(aster_lines);
    return new_picture;
}
console.log(addBorder(["abc", "ded"]));
