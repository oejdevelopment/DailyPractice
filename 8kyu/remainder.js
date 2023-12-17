function remainder(n, m) {
  let larger = n > m ? n : m;
  let smaller = n > m ? m : n;
  return larger % smaller;
}
