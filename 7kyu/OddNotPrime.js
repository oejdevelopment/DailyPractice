function oddNotPrime(n) {
  let count = 0;

  for (let i = 1; i <= n; i = i + 2) {
    if (n === 1 || (i % 2 !== 0 && !helper(i))) {
      count++;
    }
  }

  function helper(n) {
    if (n < 2) {
      return false;
    }

    let q = Math.ceil(Math.sqrt(n));

    for (let j = 2; j <= q; j++) {
      if (n % j === 0) {
        return false;
      }
    }

    return true;
  }

  return count;
}
