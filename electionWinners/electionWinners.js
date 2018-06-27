function electionsWinners(votes, k) {
    var winners = votes.length;
    var maximum = Math.max.apply(Math, votes);
    votes.forEach(function (e) {
        if (e + k <= maximum) {
            winners--;
        }
    });
    return winners;
}
console.log(electionsWinners([2, 3, 5, 2], 3));
