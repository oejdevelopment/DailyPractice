function mainDiagonalProduct(mat) {
  return mat.map((x, i) => x[i]).reduce((a, b) => a * b, 1);
}
