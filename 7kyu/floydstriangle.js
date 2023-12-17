function nthFloyd(n) {
  let curLine = 1;
  for (let i = 1; i <= n; i++) {
    if (curLine === i) {
      curLine++;
    }
    if (i === n) {
      return curLine;
    }
  }
}
