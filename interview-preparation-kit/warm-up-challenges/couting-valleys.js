const objectLiteral = {
  D: -1,
  U: 1,
};

function countingValleys(steps, path) {
  let count = 0;
  let step = 0;
  for (let i = 0; i < steps; i++) {
    let actuallyStep = step;
    step += objectLiteral[path[i]];
    if (actuallyStep == -1 && step == 0) {
      count += 1;
    }
  }
  return count;
}
