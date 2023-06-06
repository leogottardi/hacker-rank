function rotLeft(array, rotations) {
  for (rotations; rotations != 0; rotations--) {
    const number = array.shift();
    array.push(number);
  }
  return array;
}
