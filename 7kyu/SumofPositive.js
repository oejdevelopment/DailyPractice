function positiveSum(arr) {
  return 0 + arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);
}
