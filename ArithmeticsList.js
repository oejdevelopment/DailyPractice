var seqlist = function (first, c, l) {
  let a = [];
  for (let i = 0; i < l; i++) {
    a[i] = first + c * i;
  }
  return a;
};
