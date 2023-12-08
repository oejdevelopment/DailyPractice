function repeats(arr) {
  let nuCalc = arr.filter((x) => arr.indexOf(x) === arr.lastIndexOf(x));
  return nuCalc.reduce((a, b) => a + b, 0);
}
