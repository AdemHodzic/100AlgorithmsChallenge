function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  let sum = 0;
  let counter = 0;
  let progress = (upSpeed - downSpeed);
  while (sum < desiredHeight) {
    sum += progress;
    counter++;
  }

  return --counter;
}

console.log(growingPlant(100, 10, 910))