function bishopAndPawn(bishopStr, pawnStr) {
    var bishop = calculatePosition(bishopStr);
    var pawn = calculatePosition(pawnStr);
    if (checkFirst(bishop, pawn) || checkSecond(bishop, pawn)) {
        return true;
    }
    return false;
}
function checkFirst(bishop, pawn) {
    while (bishop[0] < 8 && bishop[1] < 8) {
        bishop[0]++;
        bishop[1]++;
        if (bishop[0] == pawn[0] && bishop[1] == pawn[1]) {
            return true;
        }
    }
    while (bishop[0] > -1 && bishop[1] > -1) {
        bishop[0]--;
        bishop[1]--;
        if (bishop[0] == pawn[0] && bishop[1] == pawn[1]) {
            return true;
        }
    }
    return true;
}
function checkSecond(bishop, pawn) {
    while (bishop[0] < 8 && bishop[1] > -1) {
        bishop[0]++;
        bishop[1]--;
        if (bishop[0] == pawn[0] && bishop[1] == pawn[1]) {
            return true;
        }
    }
    while (bishop[1] < 8 && bishop[0] > -1) {
        bishop[0]--;
        bishop[1]++;
        if (bishop[0] == pawn[0] && bishop[1] == pawn[1]) {
            return true;
        }
    }
    return false;
}
function calculatePosition(str) {
    var arr = [];
    var column = str.charAt(0);
    var row = parseInt(str.charAt(1)) - 1;
    switch (column) {
        case 'a':
            arr.push(0);
            break;
        case 'b':
            arr.push(1);
            break;
        case 'c':
            arr.push(2);
            break;
        case 'd':
            arr.push(3);
            break;
        case 'e':
            arr.push(4);
            break;
        case 'f':
            arr.push(5);
            break;
        case 'g':
            arr.push(6);
            break;
        case 'h':
            arr.push(7);
            break;
        default:
            break;
    }
    arr.push(row);
    return arr;
}
console.log(bishopAndPawn('a1', 'c3'));
