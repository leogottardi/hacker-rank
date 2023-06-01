function createHourglasses(arr) {
  const newArray = [];
  for (let i = 0; i <= MAX_LINE; i++) {
    for (let j = 0; j <= MAX_COLUMN; j++) {
      newArray.push([
        arr[i][j],
        arr[i][j + 1],
        arr[i][j + 2],
        arr[i + 1][j + 1],
        arr[i + 2][j],
        arr[i + 2][j + 1],
        arr[i + 2][j + 2],
      ]);
    }
  }
  return newArray;
}

function hourglassSum(arr) {
  const hourglasses = createHourglasses(arr);
  const sumHourglasses = hourglasses.map((hg) => {
    let sum = 0;
    for (let i = 0; i < hg.length; i++) {
      sum += hg[i];
    }
    return sum;
  });
  return sumHourglasses.sort((a, b) => b - a)[0];
}
