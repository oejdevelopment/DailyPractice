function findShort(s) {
  let arr = s.split(" ");
  return Math.min(...arr.map((x) => x.length));
}
