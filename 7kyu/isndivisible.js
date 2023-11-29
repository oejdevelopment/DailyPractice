function isDivisible(...n) {
  return n.slice(1).every((element) => n[0] % element === 0);
}
