function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i += 1) {
    z.push(x * i);
  }
  return z;
}
