function electionsWinners(votes: number[], k: number): number {
  let winners = votes.length;
  let maximum = Math.max(...votes);
  votes.forEach(e => {
    if (e + k <= maximum) {
      winners--;
    }
  })

  return winners;
}

console.log(electionsWinners([2, 3, 5, 2], 3));